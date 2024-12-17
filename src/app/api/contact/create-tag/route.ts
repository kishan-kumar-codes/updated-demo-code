import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
    headers: {
        'Content-Type': 'application/json',
        'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
    },
});

// Mutation to update contact's tags
const updateContactTagMutation = `
  mutation updatecrmContact(
    $contactId: ID!,
    $tags: String!
  ) {
    updatecrmContact(
      input: {
        filter: { id: [$contactId] },
        set: {
          tag: $tags
        }
      }
    ) {
      crmContact {
        id
        firstName
        lastName
        tag
      }
    }
  }
`;

// Query to get existing tags (Fixed query name)
const getContactQuery = `
  query getcrmContact($contactId: ID!) {
    getcrmContact(id: $contactId) {
      tag
    }
  }
`;

interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    tag: string;
}

interface GraphQLResponse {
    updatecrmContact: {
        crmContact: Contact[];
    };
}

interface GetContactResponse {
    getcrmContact: {  // Updated interface to match the query
        tag: string;
    };
}

export async function POST(req: NextRequest) {
    try {
        const rawBody = await req.text();
        const body = JSON.parse(rawBody);

        const { contactId, tag } = body;

        // Validate required fields
        if (!contactId || !tag) {
            return NextResponse.json(
                { error: 'Contact ID and tag are required' },
                { status: 400 }
            );
        }

        // First, get existing tags (Updated response handling)
        const existingData = await client.request<GetContactResponse>(getContactQuery, { contactId });
        const existingTags = existingData?.getcrmContact?.tag || '';

        // Create new tags string by combining existing and new tags
        // Split existing tags by comma, filter out empty strings, and remove duplicates
        const currentTags = existingTags ? existingTags.split(',').map(t => t.trim()).filter(t => t) : [];

        // Only add the new tag if it doesn't already exist
        if (!currentTags.includes(tag)) {
            currentTags.push(tag);
        }

        // Join tags back into a comma-separated string
        const updatedTags = currentTags.join(',');

        // Set up GraphQL mutation variables
        const variables = {
            contactId,
            tags: updatedTags
        };

        // Make GraphQL request to update contact's tags
        const data = await client.request<GraphQLResponse>(updateContactTagMutation, variables);

        // Ensure data is available
        const updatedContact = data?.updatecrmContact?.crmContact[0];

        if (!updatedContact) {
            return NextResponse.json({ error: 'Failed to update contact tag' }, { status: 400 });
        }

        // Return the updated contact
        return NextResponse.json(updatedContact, { status: 200 });
    } catch (error) {
        console.error('Error updating contact tag:', error);
        return NextResponse.json({ error: 'Failed to update contact tag' }, { status: 500 });
    }
}