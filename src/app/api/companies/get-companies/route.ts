// import { NextRequest, NextResponse } from 'next/server';
// import { GraphQLClient } from 'graphql-request';

// // Initialize GraphQL client with endpoint and authentication key
// const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
//   headers: {
//     "Content-Type": "application/json",
//     "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
//   },
// });

// // Query to fetch companies by user ID
// const getCompaniesByUserQuery = `
//   query GetCompaniesByUser($userId: ID!) {
//     getUser(id: $userId) {
//       crmCompanies {
//        id
//         name
//         business
//         size
//         address
//         city
//         zipCode
//         state
//         website
//         user {
//           id
//           firstName
//           lastName
//           email
//         }
//         linkedin
//         phoneNumber
//         accountManager
//         logo
//       }
//     }
//   }
// `;

// export const runtime = 'edge';  // Use 'edge' runtime or 'nodejs' depending on your use case.

// export async function POST(req: NextRequest) {
//   try {
//     const { userId } = await req.json(); // Get the userId from the request body
//     if (!userId) {
//       return NextResponse.json({ error: "User ID is required" }, { status: 400 });
//     }

//     // Fetch data from GraphQL API, passing userId as a variable
//     const data: any = await client.request(getCompaniesByUserQuery, { userId });
//     const companies = data?.getUser?.crmCompanies; // Safely access the query result

//     // Check if companies array is undefined or empty
//     if (!companies || companies.length === 0) {
//       return NextResponse.json({ error: "No companies found for this user" }, { status: 404 });
//     }
//     return NextResponse.json(companies, { status: 200 }); // Return the list of companies
//   } catch (error) {
//     console.error("Error fetching companies:", error);

//     // Check if the error is due to an invalid query field or GraphQL response issue
//     if ((error as any).response && (error as any).response.errors) {
//       console.error('GraphQL Errors:', (error as any).response.errors);
//     }

//     return NextResponse.json({ error: "Failed to fetch companies" }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Query to fetch companies by user ID
const getCompaniesByUserQuery = `
  query GetCompaniesByUser($userId: ID!) {
    getUser(id: $userId) {
      crmCompanies {
       id
        name
        business
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

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json(); // Get the userId from the request body
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Fetch data from GraphQL API, passing userId as a variable
    const data: any = await client.request(getCompaniesByUserQuery, { userId });
    const companies = data?.getUser?.crmCompanies; // Safely access the query result

    // Check if companies array is undefined or empty
    if (!companies || companies.length === 0) {
      return NextResponse.json({ error: "No companies found for this user" }, { status: 404 });
    }
    return NextResponse.json(companies, { status: 200 }); // Return the list of companies
  } catch (error) {
    console.error("Error fetching companies:", error);

    // Check if the error is due to an invalid query field or GraphQL response issue
    if (error.response && error.response.errors) {
      console.error('GraphQL Errors:', error.response.errors);
    }

    return NextResponse.json({ error: "Failed to fetch companies" }, { status: 500 });
  }
}
