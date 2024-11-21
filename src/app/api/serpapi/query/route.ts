import { ApolloClient, InMemoryCache, createHttpLink, gql, ApolloError } from '@apollo/client';
import { NextRequest, NextResponse } from 'next/server';

const httpLink = createHttpLink({
    uri: process.env.DGRAPH_GRAPHQL_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY2!,
    },
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

interface Report {
    id: string;
    user: { id: string };
    date: string;
    keyword: string;
    locations: [Location]
}

interface UserReportsData {
    queryUser: {
        id: string;
        reports: Report[];
    }[];
}

interface UserReportsVariables {
    userIds: string[];
}

const USER_REPORTS_QUERY = gql`
    query MyQuery($userIds: [ID!]!) {
        queryUser(filter: { id: $userIds }) {
            id
            reports {
                id
                date
                keyword
                locations {
                    gps_coordinates {
                        latitude
                        longitude
                    }
                    address
                    id
                    place_id
                    position
                    rating
                    reviews
                    searchContexts {
                        direction
                        distance
                        missing
                        position
                        searchLatitude
                        searchLongitude
                        title
                    }
                    title
                    type
                    types
                }
            }
        }
    }
`;

export async function POST(req: NextRequest) {
    const { userIds } = await req.json();

    try {
        const { data } = await apolloClient.query<UserReportsData, UserReportsVariables>({
            query: USER_REPORTS_QUERY,
            variables: { userIds },
        });

        if (data && data.queryUser.length > 0 && data.queryUser[0].reports.length > 0) {
            return NextResponse.json(data.queryUser[0].reports, { status: 200 });
        } else {
            return NextResponse.json([], { status: 200 });
        }
    } catch (error) {
        console.error('Error fetching reports:', error);

        if (error instanceof ApolloError) {
            console.error("GraphQL Errors:", error.graphQLErrors);
            console.error("Network Error:", error.networkError);
            console.error("Error Message:", error.message);
        } else {
            console.error("An unexpected error occurred:", error);
        }

        return NextResponse.json({ message: 'An error occurred while fetching reports', error }, { status: 500 });
    }
}
