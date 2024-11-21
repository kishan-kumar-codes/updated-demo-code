import { NextRequest, NextResponse } from 'next/server';
import { ApolloClient, InMemoryCache, createHttpLink, gql, ApolloError } from '@apollo/client';
import { NextApiRequest, NextApiResponse } from 'next';
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


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get('q');
    const ll = searchParams.get('ll');
    const type = searchParams.get('type') || "search";
    const hl = searchParams.get('hl') || "en";

    const params = new URLSearchParams({
        engine: "google_maps",
        q: q as string,
        ll: ll as string,
        type: type as string,
        hl: hl as string,
        api_key: process.env.SERPAPI_KEY!
    });

    try {
        const response = await fetch(`https://serpapi.com/search.json?${params}`);
        if (!response.ok) {
            console.error(`Failed to fetch. Status: ${response.status}`);
            return NextResponse.json({ message: "Failed to fetch data from server." }, { status: response.status });
        }
        const data = await response.json();
        const results = type === "search" ? data.local_results : data;
        return NextResponse.json(results || [], { status: 200 });
    } catch (error) {
        console.error("Error in serpapi/localSearch API route:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}