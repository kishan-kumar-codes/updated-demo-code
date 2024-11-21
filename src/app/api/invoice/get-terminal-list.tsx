import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";

// Initialize GraphQL client with endpoint and authentication key
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

// Define the query to fetch all companies
const getAllTerminalQuery = `
query GetTerminalByUser($userId: ID!) {
  getUser(id: $userId) {
    TerminalConfigurations {
    id
    terminal_id
    location_id
    terminal_application_id
    terminal_manufacturer_code
    title
    serial_number
    debit
    emv
    cashback_enable
    print_enable
    sig_capture_enable
    terminal_cvm_id
    local_ip_address
    port
    terminal_timeouts{
        id
        card_entry_timeout
        device_terms_prompt_timeout
        overall_timeout
        pin_entry_timeout
        signature_input_timeout
        signature_submit_timeout
        status_display_time
        tip_cashback_timeout
        transaction_timeout
    }
    location_api_id
    header_line_1
    header_line_2
    header_line_3
    header_line_4
    header_line_5
    trailer_line_1
    trailer_line_2
    trailer_line_3
    trailer_line_4
    trailer_line_5
    default_checkin
    default_checkout
    default_room_rate
    default_room_number
    is_provisioned
    tip_enable
    validated_decryption
    communication_type
    active
      user{
        id
        firstName
        lastName
        email
      }
    }
  }
}
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { userId } = req.body; // Get the userId from the request body
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const data = await client.request(getAllTerminalQuery, { userId });
    const terminalConfigurations = data?.getUser?.TerminalConfigurations; // Correct field for contacts

    if (!terminalConfigurations || terminalConfigurations.length === 0) {
      console.warn("No terminalConfigurations found"); // Warn if no contacts are returned
    }

    res.status(200).json(terminalConfigurations);
  } catch (error) {
    console.error("Error fetching terminalConfigurations:", error);
    res.status(500).json({ error: "Failed to fetch terminalConfigurations" });
  }
}
