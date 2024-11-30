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
const addContactMutation = `
  mutation addcrmContact(
    $firstName: String!,
    $lastName: String!,
    $company: crmCompanyRef!,
    $email: String!,
    $phoneNumber_1: String!,
    $phoneNumber_2: String!,
    $background: String!,
    $contactLogo: String!,
    $tag: String!,
    $hasNewsLetter: Boolean!,
    $title: String!   # Add $ prefix and remove the trailing comma
    $userId: ID!
  ) {
    addcrmContact(
      input: [{
        firstName: $firstName,
        lastName: $lastName,
        company: $company,
        email: $email,
        phoneNumber_1: $phoneNumber_1,
        phoneNumber_2: $phoneNumber_2,
        background: $background,
        contactLogo: $contactLogo,
        tag: $tag,
        hasNewsLetter: $hasNewsLetter,
        title: $title   # Same here
        user: { id: $userId }
      }]
    ) {
      crmContact {
        firstName
        lastName
        company {  
          id
          name
        }
        email
        phoneNumber_1
        phoneNumber_2
        background
        contactLogo
        tag
        hasNewsLetter
        title
      }
    }
  }
`;


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    // Get raw body and parse it manually
    const rawBody = await getRawBody(req);
    const body = JSON.parse(rawBody.toString());
    console.log("body",body);
    const {
      token,
      firstName,
      lastName,
      company,
      email,
      phoneNumber_1,
      phoneNumber_2,
      background,
      contactLogo,
      tag,
      hasNewsLetter,
      title,
      userId
    } = body;

    const decodedToken = jwt.verify(token.sessionToken, process.env.SECRET!);

    const variables = {
      firstName,
      lastName,
      company: { id: company },
      email,
      phoneNumber_1,
      phoneNumber_2,
      background,
      contactLogo,
      tag,
      hasNewsLetter,
      title,
      userId
    };

    console.log("variables",variables);

    const data = await client.request(addContactMutation, variables);
    const contact = data?.addcrmContact.crmContact;

    if (!contact) {
      throw new Error("contact creation failed");
    }

    res.status(200).json(contact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Failed to create contact" });
  }
}
