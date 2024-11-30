import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";
import * as jwt from "jsonwebtoken";
import getRawBody from "raw-body";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parser
  },
};

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
    $business: ID!,
    $size: String!,
    $address: String!,
    $city: String!,
    $zipCode: String!,
    $state: String!,
    $website: String!,
    $linkedin: String!,
    $phoneNumber: String!,
    $accountManager: String!,
    $logo: String!
    $contacts: [crmContactRef!]!,
    $deals: [crmDealRef!]!
    $userId: ID!
  ) {
    addcrmCompany(
      input: [{
        name: $name,
        business: { id: $business },
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
        business { id name }
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

export const runtime = 'edge';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    // Get raw body and parse it manually
    const rawBody = await getRawBody(req);
    const body = JSON.parse(rawBody.toString());
    console.log("body", body);
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

    const decodedToken = jwt.verify(token.sessionToken, process.env.SECRET!);

    console.log("userId", userId);
    const variables = {
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
      logo, // Pass the logo if needed
      contacts,  // Ensure contacts is included
      deals,
      userId
    };

    const data = await client.request(addCompanyMutation, variables);
    const company = (data as any).addcrmCompany.crmCompany;

    if (!company) {
      throw new Error("Company creation failed");
    }

    res.status(200).json(company);
  } catch (error) {
    console.error("Error creating company:", error);
    res.status(500).json({ error: "Failed to create company" });
  }
}
