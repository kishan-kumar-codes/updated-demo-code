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
const getCCSaleTransactionsQuery = `
query GetCCSaleTransactionsByUser($userId: ID!) {
  getUser(id: $userId) {
    CCSaleTransactions {
    id
    sale_transaction_Id
    checkin_date
    checkout_date
    clerk_number
    customer_id
    description
    iias_ind
    image_front
    image_back
    installment
    installment_number
    installment_count
    product_transaction_id
    advance_deposit
    no_show
    notification_email_address
    order_number
    po_number
    quick_invoice_id
    recurring
    recurring_number
    room_num
    room_rate
    save_account
    save_account_title
    subtotal_amount
    surcharge_amount
    tax
    tip_amount
    transaction_amount
    secondary_amount
    transaction_c1
    transaction_c2
    transaction_c3
    bank_funded_only_override
    allow_partial_authorization_override
    auto_decline_cvv_override
    auto_decline_street_override
    auto_decline_zip_override
    secure_auth_data
    secure_protocol_version
    secure_crytogram
    secure_directory_server_transaction_id
    terminal_serial_number
    threedsecure
    account_holder_name
    account_number
    entry_mode_id
    exp_date
    wallet_type
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

    const data = await client.request(getCCSaleTransactionsQuery, { userId });

    const CCSaleTransactions = data?.getUser?.CCSaleTransactions; // Correct field for contacts

    if (!CCSaleTransactions || CCSaleTransactions.length === 0) {
      console.warn("No contact found"); // Warn if no contacts are returned
    }

    res.status(200).json(CCSaleTransactions);
  } catch (error) {
    console.error("Error fetching quickInvoice:", error);
    res.status(500).json({ error: "Failed to fetch quickInvoice" });
  }
}
