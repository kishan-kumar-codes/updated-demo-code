// import { NextRequest, NextResponse } from "next/server";
// import { GraphQLClient } from "graphql-request";

// // Initialize GraphQL client with endpoint and authentication key
// const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
//   headers: {
//     "Content-Type": "application/json",
//     "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
//   },
// });

// // Define the query to fetch all deals by a specific user
// const getAllDealsQuery = `
//   query GetDealsByUser($userId: ID!) {
//     getUser(id: $userId) {
//       crmDeals {
//         id
//         dealName
//         description
//         company {
//           id
//           name
//           logo
//         }
//         startAt
//         stage
//         type
//         amount
//         user {
//           id
//           firstName
//           lastName
//           email
//         }
//       }
//     }
//   }
// `;

// // Define TypeScript interfaces for the expected GraphQL response
// interface GetDealsByUserResponse {
//   getUser: {
//     crmDeals: Array<{
//       id: string;
//       dealName: string;
//       description: string;
//       company: {
//         id: string;
//         name: string;
//       };
//       startAt: string;
//       stage: string;
//       type: string;
//       amount: number;
//       user: {
//         id: string;
//         firstName: string;
//         lastName: string;
//         email: string;
//       };
//     }>;
//   };
// }

// // The API handler for the App Router
// export async function POST(req: NextRequest) {
//   try {
//     // Parse the request body
//     const body = await req.json();
//     const { userId } = body;

//     // Validate the input
//     if (!userId) {
//       return NextResponse.json({ error: "User ID is required" }, { status: 400 });
//     }

//     // Fetch the deals data from the GraphQL API
//     const data: GetDealsByUserResponse = await client.request<GetDealsByUserResponse>(getAllDealsQuery, { userId });

//     // Extract deals from the response
//     const deals = data?.getUser?.crmDeals;

//     // Handle the case where no deals are found
//     if (!deals || deals.length === 0) {
//       return NextResponse.json({ error: "No deals found" }, { status: 404 });
//     }

//     // Return the deals in the response
//     return NextResponse.json(deals, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching deals:", error);
//     return NextResponse.json({ error: "Failed to fetch deals" }, { status: 500 });
//   }
// }



import { NextRequest, NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request";

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the query to fetch all deals by a specific user
const getAllDealsQuery = `
  query GetDealsByUser($userId: ID!) {
    getUser(id: $userId) {
      crmDeals {
        id
        dealName
        description
        company {
          id
          name
          logo
        }
        startAt
        stage
        type
        amount
        user {
          id
          firstName
          lastName
          email
        }
      }
    }
  }
`;

// Define TypeScript interfaces for the expected GraphQL response
interface GetDealsByUserResponse {
  getUser: {
    crmDeals: Array<{
      id: string;
      dealName: string;
      description: string;
      company: {
        id: string;
        name: string;
      };
      startAt: string;
      stage: string;
      type: string;
      amount: number;
      user: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
      };
    }>;
  };
}

// The API handler for the App Router
export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    const { userId } = body;

    // Validate the input
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    // Fetch the deals data from the GraphQL API
    const data: GetDealsByUserResponse = await client.request<GetDealsByUserResponse>(getAllDealsQuery, { userId });

    // Extract deals from the response
    const deals = data?.getUser?.crmDeals;

    // Handle the case where no deals are found
    if (!deals || deals.length === 0) {
      return NextResponse.json({ error: "No deals found" }, { status: 404 });
    }

    // Return the deals in the response
    return NextResponse.json(deals, { status: 200 });
  } catch (error) {
    console.error("Error fetching deals:", error);
    return NextResponse.json({ error: "Failed to fetch deals" }, { status: 500 });
  }
}
