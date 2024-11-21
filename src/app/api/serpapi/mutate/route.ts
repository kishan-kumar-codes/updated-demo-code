import { ApolloClient, InMemoryCache, createHttpLink, gql, ApolloError } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const httpLink = createHttpLink({
    uri: process.env.DGRAPH_GRAPHQL_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY2!,
    },
    fetchOptions: {
        timeout: 90000, // Set timeout to 90 seconds
    },
});

const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

interface Location {
    position: number;
    title: string;
    place_id: string;
    gps_coordinates: {
        latitude: number;
        longitude: number;
    };
    address: string;
    searchContexts: SearchContext[];
    reviews: number;
    rating: number;
    type: string;
    types: string[];
}

interface SearchContext {
    searchLatitude: number;
    searchLongitude: number;
    position: number;
    distance: number;
    direction: string;
    missing?: boolean;
    title: string;
}

interface Entry extends Location {
    keyword: string;
}

interface Context {
    searchLatitude: number;
    searchLongitude: number;
    position: number;
    distance: number;
    direction: string;
    missing?: boolean;
    title: string;
}

const ADD_LOCATION_MUTATION = gql`
    mutation AddLocation($input: [AddLocationInput!]!) {
        addLocation(input: $input) {
            location {
                id
                position
                title
                place_id
                gps_coordinates {
                    latitude
                    longitude
                }
                address
                searchContexts {
                    direction
                    distance
                    missing
                    position
                    searchLatitude
                    searchLongitude
                    title
                }
                reviews
                rating
                type
                types
            }
        }
    }
`;

const ADD_REPORT_MUTATION = gql`
    mutation AddReport($input: [AddReportInput!]!) {
        addReport(input: $input) {
            report {
                id
                user {
                    id
                }
                date
                keyword
                locations {
                    id
                    address
                    gps_coordinates {
                        latitude
                        longitude
                    }
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
    const { allResults, date } = await req.json();

    try {
        for (const resultArray of allResults) {
            const keyword = resultArray[0].keyword;

            const locations = resultArray.map((entry: Entry) => ({
                position: entry.position,
                title: entry.title,
                place_id: entry.place_id,
                gps_coordinates: {
                    latitude: entry.gps_coordinates.latitude,
                    longitude: entry.gps_coordinates.longitude
                },
                address: entry.address,
                reviews: entry.reviews,
                rating: entry.rating,
                type: entry.type,
                types: entry.types,
                searchContexts: entry.searchContexts.map((context: Context) => ({
                    searchLatitude: context.searchLatitude,
                    searchLongitude: context.searchLongitude,
                    position: context.position,
                    distance: context.distance,
                    direction: context.direction,
                    missing: context.missing || false,
                    title: context.title,
                })),
            }));

            const { data: locationData } = await apolloClient.mutate({
                mutation: ADD_LOCATION_MUTATION,
                variables: {
                    input: locations
                },
            });
            console.log("Mutation successful:", locationData);
            console.log("locations:", locations);

            // Create a report associated with this location
            const { data: reportData } = await apolloClient.mutate({
                mutation: ADD_REPORT_MUTATION,
                variables: {
                    input: {
                        user: { id: "0xfffd8d729991588d" },
                        date,
                        keyword,
                        locations
                    }
                },
            });
            console.log("Report creation successful:", reportData);
        }
        return NextResponse.json({ message: 'Mutations executed successfully' }, { status: 200 });

    } catch (error) {
        console.error("Error during mutation:", error);

        if (error instanceof ApolloError) {
            console.error("GraphQL Errors:", error.graphQLErrors);
            console.error("Network Error:", error.networkError);
            console.error("Error Message:", error.message);
        } else {
            console.error("An unexpected error occurred:", error);
        }

        return NextResponse.json({ message: 'An error occurred during the mutation process', error }, { status: 500 });
    }
}