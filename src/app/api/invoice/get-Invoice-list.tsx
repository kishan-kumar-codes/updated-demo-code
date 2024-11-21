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
const getAllInvoiceQuery = `
query GetInvoiceByUser($userId: ID!) {
  getUser(id: $userId) {
    QuickInvoices {    
    invoice_id
    item_list{
        id
        name
        amount
    }
    location_id
    invoice_number
    title
    item_header
    item_footer
    status_id
    payment_status_id
    amount_due
    remaining_balance
    due_date
    expire_date
    email
    allow_partial_pay
    single_payment_min_amount
    single_payment_max_amount
    allow_overpayment
    notification_days_before_due_date
    notification_on_due_date
    notification_days_after_due_date
    cc_product_transaction_id
    ach_product_transaction_id
    note
    notification_email
    attach_files_to_email
    cell_phone
    send_text_to_pay
    quick_invoice_api_id
    bank_funded_only_override
    quick_invoice_c1
    quick_invoice_c2
    quick_invoice_c3
    status_code
    customer_id
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

    const data = await client.request(getAllInvoiceQuery, { userId });

    const quickInvoice = data?.getUser?.QuickInvoices; // Correct field for contacts

    if (!quickInvoice || quickInvoice.length === 0) {
      console.warn("No contact found"); // Warn if no contacts are returned
    }

    res.status(200).json(quickInvoice);
  } catch (error) {
    console.error("Error fetching quickInvoice:", error);
    res.status(500).json({ error: "Failed to fetch quickInvoice" });
  }
}
