
import { AuthOptions } from "next-auth";
import NextAuth, { Session } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { DgraphAdapter } from "@next-auth/dgraph-adapter";
import { GraphQLClient } from "graphql-request";
import * as jwt from "jsonwebtoken";
import { JWT, JWTDecodeParams } from "next-auth/jwt";
import bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';

const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
    headers: {
        'Content-Type': 'application/json',
        'Dg-Auth': `${process.env.DGRAPH_GRAPHQL_KEY2!}`
    },
});

const generateRefreshToken = () => {
    return randomBytes(64).toString('hex');
};

interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    hashedPassword?: string | null;
    emailVerified?: string;
    image?: string | null;
}

interface UserResponse {
    queryUser: User[];
}

interface NewUserResponse {
    addUser: {
        user: User[];
    };
}

export interface ExtendedJWT extends JWT {
    session?: ExtendedSession;
    refreshToken?: string;
    user?: User;
    accessToken?: string;
    accessTokenExpires?: number;
    provider?: string;
    sessionStartedAt?: number;
    maxAge?: number;
    error?: string;
}

interface ExtendedSession extends Session {
    accessToken?: string;
    refreshToken?: string;
    user?: User;
    error?: string;
}

export async function refreshAccessToken(token: ExtendedJWT) {
    try {
        const url = 'https://oauth2.googleapis.com/token';
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id: process.env.GOOGLE_CLIENT_ID!,
                client_secret: process.env.GOOGLE_CLIENT_SECRET!,
                refresh_token: token.refreshToken!,
                grant_type: 'refresh_token',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Failed to refresh access token:', errorData);
            return {
                ...token,
                error: "RefreshAccessTokenError",
            };
        }

        const refreshedTokens = await response.json();
        console.log('Refreshed tokens:', refreshedTokens);

        return {
            ...token,
            accessToken: refreshedTokens.access_token,
            accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
        };
    } catch (error) {
        console.error('Error refreshing access token:', error);
        return {
            ...token,
            error: "RefreshAccessTokenError",
        };
    }
}

// Function to exchange short-lived Facebook token for long-lived token
export async function exchangeFacebookToken(shortLivedToken: string): Promise<{ access_token: string; token_type: string }> {
    const appId = process.env.FACEBOOK_CLIENT_ID!;
    const appSecret = process.env.FACEBOOK_CLIENT_SECRET!;
    const url = `https://graph.facebook.com/oauth/access_token?` +
        `grant_type=fb_exchange_token&` +
        `client_id=${appId}&` +
        `client_secret=${appSecret}&` +
        `fb_exchange_token=${shortLivedToken}`;

    const response = await fetch(url, {
        method: 'GET',
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to exchange Facebook token:', errorData);
        throw new Error('Failed to exchange Facebook token');
    }

    return await response.json(); // Contains access_token and token_type
}

export async function getFacebookTokenExpiration(accessToken: string): Promise<number> {
    const appAccessToken = `${process.env.FACEBOOK_CLIENT_ID}|${process.env.FACEBOOK_CLIENT_SECRET}`;
    const url = `https://graph.facebook.com/debug_token?` +
        `input_token=${accessToken}&` +
        `access_token=${appAccessToken}`;

    const response = await fetch(url, {
        method: 'GET',
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to get token expiration:', errorData);
        throw new Error('Failed to get token expiration');
    }
    const data = await response.json();
    //console.log(data);
    return data.data.data_access_expires_at; // Unix timestamp in seconds
}

export const authOptions: AuthOptions = ({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            },
        }),
        CredentialsProvider({
            name: 'Email',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials: any) => {
                const { email, password } = credentials;

                console.log("Credentials:", email, password);

                const getUserQuery = `
                    query GetUser($email: String) {
                        queryUser(filter: { email: { eq: $email } }) {
                            id
                            email
                            hashedPassword
                        }
                    }
                `;
                const getUserVariables = { email };
                const data: UserResponse = await client.request<UserResponse>(getUserQuery, getUserVariables);

                console.log("User Data:", data);

                let user: User | undefined;
                if (data.queryUser.length === 0) {
                    console.log("User not found. Registering the user.");

                    const hashedPassword = bcrypt.hashSync(password, 10);
                    const addUserMutation = `
                        mutation AddUser($email: String, $hashedPassword: String) {
                            addUser(input: [{ email: $email, hashedPassword: $hashedPassword }]) {
                                user {
                                    id
                                    email
                                    hashedPassword
                                }
                            }
                        }
                    `;
                    const addUserVariables = { email, hashedPassword };
                    const newUser: NewUserResponse = await client.request<NewUserResponse>(addUserMutation, addUserVariables);

                    console.log("Registered User:", newUser);

                    user = newUser.addUser.user[0];
                } else {
                    user = data.queryUser[0];
                    if (user.hashedPassword && !bcrypt.compareSync(password, user.hashedPassword)) {
                        return null;
                    }
                }
                // Return user data
                return {
                    ...user,
                };
            },
        }),
        FacebookProvider({
            id: "facebook_business",
            name: "Facebook for Business",
            clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? "",
            // debug: true, // Uncomment for debugging purposes
            authorization: {
                url: "https://www.facebook.com/dialog/oauth",
                params: {
                    scope:
                        "ads_management ads_read business_management email leads_retrieval pages_manage_cta page_events pages_manage_ads pages_show_list pages_manage_engagement pages_read_user_content pages_manage_instant_articles pages_manage_metadata pages_manage_posts pages_read_engagement pages_messaging publish_video read_insights read_page_mailboxes public_profile read_insights",
                },
            },
            token: {
                url: "https://graph.facebook.com/oauth/access_token",
            },
            userinfo: {
                url: "https://graph.facebook.com/me",
                params: { fields: "id,name,email,picture,accounts" },
                async request({ tokens, client, provider }: { tokens: any, client: any, provider: any }) {
                    return await client.userinfo(tokens.access_token!, {
                        params: provider.userinfo?.params,
                    });
                },
            },
            profile(profile: any) {
                //console.log("Profile object received in profile function:", JSON.stringify(profile, null, 2));
                const facebookAccounts = profile.accounts?.data.map((acc: any) => ({
                    facebookId: acc.id,
                    accessToken: acc.access_token,
                    category: acc.category,
                    name: acc.name,
                    tasks: acc.tasks,
                    categoryList: acc.category_list?.map((cat: any) => ({
                        facebookId: cat.id,
                        name: cat.name,
                    })) || [],
                })) || [];
                return {
                    id: profile.id,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture && profile.picture.data ? profile.picture.data.url : null,
                    facebookAccounts: facebookAccounts,
                };
            },
        }),
    ],
    secret: process.env.SECRET,
    adapter: DgraphAdapter({
        endpoint: process.env.DGRAPH_GRAPHQL_ENDPOINT!,
        authToken: process.env.DGRAPH_GRAPHQL_KEY2!,
        authHeader: process.env.AUTH_HEADER,
        jwtSecret: process.env.SECRET,
    }),
    session: {
        strategy: "jwt",
        maxAge: 60 * 60, // 1 hour
        updateAge: 24 * 60 * 60, // 24 hours
    },
    jwt: {
        maxAge: 60 * 60, // 1 hour
        encode: async ({ secret, token }) => {
            if (!token || !token.sub) {
                throw new Error('token or token id is undefined');
            }

            // console.log('token:', token);

            // Use token-specific maxAge or default to 1 hour
            const maxAge = typeof token.maxAge === 'number' ? token.maxAge : 60 * 60;
            const exp = Math.floor(Date.now() / 1000) + maxAge;
            const jwtValue = jwt.sign({ ...token, userId: token.sub, exp }, secret, {
                algorithm: "HS256",
            });

            // console.log(jwtValue);
            return jwtValue;
        },
        decode: async ({ secret, token }: JWTDecodeParams): Promise<JWT | null> => {
            if (!secret || !token) {
                throw new Error('secret or token is missing');
            }

            // Decode the token
            try {
                const jwtVerifyValue = jwt.verify(token, secret, { algorithms: ["HS256"] }) as ExtendedJWT;
                // console.log(jwtVerifyValue);
                return jwtVerifyValue;
            } catch (e) {
                console.error('JWT Decode Error:', e);
                return null;
            }
        },
    },
    callbacks: {
        async jwt({ token, user, account }): Promise<ExtendedJWT> {
            let extendedToken = token as ExtendedJWT;

            // console.log('JWT Callback Invoked');
            // console.log('Account:', account);
            // console.log('User:', user);

            if ((account && user) || user) {
                if (user) {
                    extendedToken.user = user as User; // Ensure user is of type User

                    // Save provider in the token
                    if (account?.provider) {
                        extendedToken.provider = account.provider;
                    }

                    // Set sessionStartedAt on initial sign-in
                    extendedToken.sessionStartedAt = Date.now() / 1000;

                    console.log(account?.provider);

                    // Only generate refresh token for CredentialsProvider
                    if (account?.provider === 'credentials') {
                        extendedToken.refreshToken = generateRefreshToken();
                        const sessionToken = jwt.sign({ ...user, refreshToken: extendedToken.refreshToken }, process.env.SECRET!, {
                            algorithm: "HS256",
                            expiresIn: 60 * 60 // 1 hour
                        });

                        // Store the session token and refresh token in the session
                        const addSessionMutation = `
                           mutation AddSession($sessionToken: String!, $expires: DateTime!, $userId: ID!, $refreshToken: String) {
                              addSession(input: [{ sessionToken: $sessionToken, expires: $expires, user: { id: $userId }, refreshToken: $refreshToken }]) {
                                  session {
                                      id
                                      sessionToken
                                      expires
                                      refreshToken
                                  }
                              }
                           }
                        `;

                        const expires = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour from now
                        const addSessionVariables = {
                            sessionToken,
                            expires,
                            userId: (user as User).id,
                            refreshToken: extendedToken.refreshToken,
                        };

                        const sessionData = await client.request<{ addSession: { session: ExtendedSession } }>(
                            addSessionMutation,
                            addSessionVariables
                        );

                        console.log("New Session:", sessionData);
                        extendedToken.session = sessionData.addSession.session;
                    } else if (account?.provider === 'google') {
                        // For GoogleProvider, just add the session with id, sessionToken, and expires
                        const sessionToken = jwt.sign({ ...user }, process.env.SECRET!, {
                            algorithm: "HS256",
                            expiresIn: 60 * 60 // 1 hour
                        });

                        const addSessionMutation = `
                           mutation AddSession($sessionToken: String!, $expires: DateTime!, $userId: ID!) {
                              addSession(input: [{ sessionToken: $sessionToken, expires: $expires, user: { id: $userId } }]) {
                                  session {
                                      id
                                      sessionToken
                                      expires
                                  }
                              }
                           }
                        `;

                        const expires = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour from now
                        const addSessionVariables = {
                            sessionToken,
                            expires,
                            userId: (user as User).id,
                        };

                        const sessionData = await client.request<{ addSession: { session: ExtendedSession } }>(
                            addSessionMutation,
                            addSessionVariables
                        );

                        console.log("New Session:", sessionData);
                        extendedToken.session = sessionData.addSession.session;

                        // Store tokens
                        extendedToken.accessToken = account.access_token!;
                        extendedToken.accessTokenExpires = Date.now() + (account.expires_in as number) * 1000;
                        extendedToken.refreshToken = account.refresh_token!;
                    }
                    else if (account?.provider === 'facebook_business') {
                        let expiresAt;
                        try {
                            const longLivedTokenData = await exchangeFacebookToken(account.access_token!);
                            console.log("long lived token data", longLivedTokenData);
                            extendedToken.accessToken = longLivedTokenData.access_token;
                            // Get the exact expiration time
                            expiresAt = await getFacebookTokenExpiration(longLivedTokenData.access_token);
                            extendedToken.accessTokenExpires = expiresAt * 1000; // Convert to milliseconds
                        } catch (error) {
                            console.error('Failed to obtain long-lived Facebook token:', error);
                            extendedToken.error = "LongLivedTokenError";
                        }

                        // Create session token and store session for Facebook
                        const sessionToken = jwt.sign({ ...user }, process.env.SECRET!, {
                            algorithm: "HS256",
                            expiresIn: expiresAt,
                        });

                        const addSessionMutation = `
                           mutation AddSession($sessionToken: String!, $expires: DateTime!, $userId: ID!) {
                              addSession(input: [{ sessionToken: $sessionToken, expires: $expires, user: { id: $userId } }]) {
                                  session {
                                      id
                                      sessionToken
                                      expires
                                  }
                              }
                           }
                        `;

                        if (!expiresAt) expiresAt = Math.floor(Date.now() / 1000) + 60 * 24 * 60 * 60; // Generally lasts about 60 days
                        // Convert expiresAt to ISO 8601 format
                        const expires = new Date(expiresAt * 1000).toISOString();

                        const addSessionVariables = {
                            sessionToken,
                            expires,
                            userId: (user as User).id,
                        };

                        const sessionData = await client.request<{ addSession: { session: ExtendedSession } }>(
                            addSessionMutation,
                            addSessionVariables
                        );

                        console.log("New Facebook Session:", sessionData);
                        extendedToken.session = sessionData.addSession.session;
                        // Set exp and maxAge based on expiresAt
                        extendedToken.exp = expiresAt;
                        extendedToken.maxAge = expiresAt - Math.floor(Date.now() / 1000);
                    }
                }
            }

            // Preserve sessionStartedAt on token refresh
            if (!extendedToken.sessionStartedAt && typeof token.sessionStartedAt === 'number') {
                extendedToken.sessionStartedAt = token.sessionStartedAt;
            }

            // Check if the session has expired (15 days limit)
            const maxSessionDuration = 15 * 24 * 60 * 60; // 15 days in seconds
            if (extendedToken.sessionStartedAt && (Date.now() / 1000 - extendedToken.sessionStartedAt) > maxSessionDuration) {
                console.log('Session has exceeded maximum duration of 15 days');
                return {} as ExtendedJWT; // Invalidate the session
            }

            // Refresh token rotation for credentials provider
            if (account?.provider === 'credentials' && typeof extendedToken.exp === 'number' && Date.now() > extendedToken.exp * 1000) {
                const { refreshToken } = extendedToken;

                // Fetch new tokens using the refresh token
                const data = await client.request<{ querySession: ExtendedSession[] }>(`
                    query {
                       querySession(filter: { refreshToken: { eq: "${refreshToken}" } }) {
                          user {
                             id
                             email
                          }
                       }
                    }
                `);

                if (data.querySession.length === 0) {
                    throw new Error('Invalid refresh token');
                }

                const user = data.querySession[0].user;

                if (!user || !user.id) { // Ensure user and user.id are defined
                    throw new Error('User is undefined or does not have an ID');
                }

                const newRefreshToken = generateRefreshToken();
                await client.request(`
                   mutation {
                      updateSession(input: { filter: { refreshToken: { eq: "${refreshToken}" } }, set: { refreshToken: "${newRefreshToken}" } }) {
                         session {
                             refreshToken
                         }
                      }
                   }
                `);

                extendedToken = { ...extendedToken, sub: user.id, exp: Math.floor(Date.now() / 1000) + 60 * 60, refreshToken: newRefreshToken };
            }

            // If the access token has not expired, return the token as is
            if (extendedToken.accessTokenExpires && Date.now() < extendedToken.accessTokenExpires) {
                return extendedToken;
            }

            // Access token has expired, try to update it using the refresh token for Google provider only
            if (extendedToken.provider === 'google') {
                return refreshAccessToken(extendedToken);
            }

            return extendedToken;
        },
        async session({ session, token }): Promise<ExtendedSession> {
            const extendedToken = token as ExtendedJWT;

            const extendedSession: ExtendedSession = {
                ...session,
                user: extendedToken.user,
                expires: typeof extendedToken.exp === 'number'
                    ? new Date(extendedToken.exp * 1000).toISOString()
                    : session.expires,
                error: extendedToken.error,
            };

            // Add access token if available
            if (extendedToken.accessToken) {
                extendedSession.accessToken = extendedToken.accessToken;
            }

            // Only add refreshToken for credentials provider sessions
            if (extendedToken.refreshToken && extendedToken.provider === 'credentials') {
                extendedSession.refreshToken = extendedToken.refreshToken;
            }

            // Add the provider to the session
            if (extendedToken.provider) {
                (extendedSession as any).provider = extendedToken.provider;
            }

            return extendedSession;
        },
        async signIn({ user, account, profile, email, credentials }) {
            // Define the allowed email addresses for each provider
            const allowedEmails: any = {
                credentials: 'demo@gmail.com',
                google: 'jay@hubspark.com',
                // google: 'kishan.excel2011@gmail.com',
                facebook: 'uzgjdw@hi2.in',
            };

            // Ensure account and provider are defined
            if (account && account.provider) {
                // Check if the provider has an allowed email specified
                if (allowedEmails.hasOwnProperty(account.provider)) {
                    const allowedEmail = allowedEmails[account.provider];
                    if (user.email !== allowedEmail) {
                        console.log(`Access denied for email: ${user.email} with provider: ${account.provider}`);
                        return false; // Redirects to the sign-in page
                    }
                }
            }

            // Allow sign-in
            return true;
        },
    },
});