import { GraphQLClient } from "graphql-request";
import { NextResponse } from "next/server";

// TypeScript interfaces for the GraphQL response
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Business {
  id: string;
  name: string;
}

interface Company {
  id: string;
  name: string;
  business: Business | null;
  size: string | null;
  address: string | null;
  city: string | null;
  zipCode: string | null;
  state: string | null;
  website: string | null;
  user: User | null;
  linkedin: string | null;
  phoneNumber: string | null;
  accountManager: string | null;
  logo: string | null;
}

interface GetCompaniesByUserResponse {
  getUser: {
    crmCompanies: Company[];
  } | null;
}

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// GraphQL query to fetch companies by user ID
const getCompaniesByUserQuery = `
  query GetCompaniesByUser($userId: ID!) {
  getUser(id: $userId) {
    crmCompanies {
      id
      name
      business  # Business is a string, so no subfields
      size
      address
      city
      zipCode
      state
      website
      user {
        id
        firstName
        lastName
        email
      }
      linkedin
      phoneNumber
      accountManager
      logo
    }
  }
}

`;

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const { userId } = body;
console.log("_++++++++++++++++++++++")
console.log(userId);
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Fetch data from the GraphQL API
    const data = await client.request<GetCompaniesByUserResponse>(
      getCompaniesByUserQuery,
      { userId }
    );

    const companies = data?.getUser?.crmCompanies;

    // Check if companies array is undefined or empty
    if (!companies || companies.length === 0) {
      return NextResponse.json({ error: "No companies found for this user" }, { status: 404 });
    }

    return NextResponse.json(companies, { status: 200 });
  } catch (error) {
    console.error("Error fetching companies:", error);
    return NextResponse.json({ error: "Failed to fetch companies" }, { status: 500 });
  }
}
