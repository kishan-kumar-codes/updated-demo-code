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
    $logo: String!,
    $contacts: [crmContactRef!]!,
    $deals: [crmDealRef!]!,
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

async function getRequestBody(req: Request): Promise<any> {
  const reader = req.body?.getReader();
  const chunks: Uint8Array[] = [];

  if (!reader) {
    throw new Error("Request body is null or undefined");
  }

  let done = false;

  while (!done) {
    const { value, done: readerDone } = await reader.read();
    if (value) {
      chunks.push(value);
    }
    done = readerDone;
  }

  const bodyString = Buffer.concat(chunks).toString("utf-8");
  return JSON.parse(bodyString);
}

export async function POST(req: Request) {
  try {
    const body = await getRequestBody(req);

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
      userId,
    } = body;

    // Verify JWT token
    const decodedToken = jwt.verify(token.sessionToken, process.env.SECRET!);

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
      logo,
      contacts,
      deals,
      userId,
    };

    // Execute GraphQL mutation
    const data:any = await client.request(addCompanyMutation, variables);
    const company = data.addcrmCompany.crmCompany;

    if (!company) {
      throw new Error("Company creation failed");
    }

    return new Response(JSON.stringify(company), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating company:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create company" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
