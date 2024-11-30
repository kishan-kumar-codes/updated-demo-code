
// import { NextRequest, NextResponse } from "next/server";
// import { GraphQLClient } from "graphql-request";
// import * as jwt from "jsonwebtoken";

// // Initialize GraphQL client with endpoint and authentication key
// const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
//   headers: {
//     "Content-Type": "application/json",
//     "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
//   },
// });

// // Mutation to create a company
// const addCompanyMutation = `
//   mutation AddcrmCompany(
//     $name: String!,
//     $business: String!,  
//     $size: String!,
//     $address: String!,
//     $city: String!,
//     $zipCode: String!,
//     $state: String!,
//     $website: String!,
//     $linkedin: String!,
//     $phoneNumber: String!,
//     $accountManager: String!,
//     $logo: String!,
//     $contacts: [crmContactRef!]!,
//     $deals: [crmDealRef!]!,
//     $userId: ID!
//   ) {
//     addcrmCompany(
//       input: [{
//         name: $name,
//         business: $business,
//         size: $size,
//         address: $address,
//         city: $city,
//         zipCode: $zipCode,
//         state: $state,
//         website: $website,
//         linkedin: $linkedin,
//         phoneNumber: $phoneNumber,
//         accountManager: $accountManager,
//         logo: $logo,
//         contacts: $contacts,
//         deals: $deals,
//         user: { id: $userId }
//       }]
//     ) {
//       crmCompany {
//         name
//         business
//         size
//         address
//         city
//         zipCode
//         state
//         website
//         linkedin
//         phoneNumber
//         accountManager
//         logo
//       }
//     }
//   }
// `;



// export const runtime = 'edge';

// export async function POST(req: NextRequest) {
//   try {
//     // Parse the incoming request body directly as JSON
//     const body = await req.json();

//     const {
//       token,
//       name,
//       business,
//       size,
//       address,
//       city,
//       zipCode,
//       state,
//       website,
//       linkedin,
//       phoneNumber,
//       accountManager,
//       logo,
//       contacts = [],
//       deals = [],
//       userId
//     } = body;

//     // Decode and verify JWT token if needed

//     // Ensure that business and userId are in the correct format (ID type)
//     const variables = {
//       name,
//       business,  // business should already be in ID format
//       size,
//       address,
//       city,
//       zipCode,
//       state,
//       website,
//       linkedin,
//       phoneNumber,
//       accountManager,
//       logo,
//       contacts,
//       deals,
//       userId  // Ensure userId is in ID format (can be extracted from decodedToken if needed)
//     };

//     // Send the request to the GraphQL API
//     const data: any = await client.request(addCompanyMutation, variables);
//     const company = data.addcrmCompany.crmCompany;

//     if (!company) {
//       throw new Error("Company creation failed");
//     }
//     console.log("Company created successfully");
//     return NextResponse.json(company, { status: 200 });
//   } catch (error: any) {
//     // Enhanced error handling with logging
//     console.error("Error creating company:", error.message || error);
//     return NextResponse.json({ error: error.message || "Failed to create company" }, { status: 500 });
//   }
// }




import { NextRequest, NextResponse } from "next/server";
import { GraphQLClient } from "graphql-request";
import * as jwt from "jsonwebtoken";

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Mutation to create a company
const addCompanyMutation = `
  mutation AddcrmCompany(
    $name: String!,
    $business: String!,  
    $size: String!,
    $address: String!,
    $city: String!,
    $zipCode: String!,
    $state: String!,
    $website: String!,
    $linkedin: String!,
    $phoneNumber: String!,
    $accountManager: String!,
    $logo: String!,
    $contacts: [crmContactRef!]!,
    $deals: [crmDealRef!]!,
    $userId: ID!
  ) {
    addcrmCompany(
      input: [{
        name: $name,
        business: $business,
        size: $size,
        address: $address,
        city: $city,
        zipCode: $zipCode,
        state: $state,
        website: $website,
        linkedin: $linkedin,
        phoneNumber: $phoneNumber,
        accountManager: $accountManager,
        logo: $logo,
        contacts: $contacts,
        deals: $deals,
        user: { id: $userId }
      }]
    ) {
      crmCompany {
        name
        business
        size
        address
        city
        zipCode
        state
        website
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
    // Parse the incoming request body directly as JSON
    const body = await req.json();

    const {
      token,
      name,
      business,
      size,
      address,
      city,
      zipCode,
      state,
      website,
      linkedin,
      phoneNumber,
      accountManager,
      logo,
      contacts = [],
      deals = [],
      userId
    } = body;

    // Decode and verify JWT token if needed
    
    // Ensure that business and userId are in the correct format (ID type)
    const variables = {
      name,
      business,  // business should already be in ID format
      size,
      address,
      city,
      zipCode,
      state,
      website,
      linkedin,
      phoneNumber,
      accountManager,
      logo,
      contacts,
      deals,
      userId  // Ensure userId is in ID format (can be extracted from decodedToken if needed)
    };

    // Send the request to the GraphQL API
    const data: any = await client.request(addCompanyMutation, variables);
    const company = data.addcrmCompany.crmCompany;

    if (!company) {
      throw new Error("Company creation failed");
    }
console.log("Company created successfully");
    return NextResponse.json(company, { status: 200 });
  } catch (error: any) {
    // Enhanced error handling with logging
    console.error("Error creating company:", error.message || error);
    return NextResponse.json({ error: error.message || "Failed to create company" }, { status: 500 });
  }
}
