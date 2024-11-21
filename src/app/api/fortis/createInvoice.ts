import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";
import * as jwt from "jsonwebtoken";
import getRawBody from "raw-body";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parser
  },
};

const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

const addInvoiceMutation = `
  mutation addQuickInvoice(
      $invoice_id: String!,
      $title: String!,
      $due_date: String!,
      $location_id: String!,
      $allow_overpayment: Boolean!,
      $bank_funded_only_override: Boolean!,
      $email: String!,
      $customer_id: String!,
      $expire_date: String!,
      $allow_partial_pay: Boolean!,
      $invoice_number: String!,
      $item_header: String,
      $item_footer: String,
      $amount_due: Float!,
      $notification_email: String!,
      $status_id: Int!,
      $status_code: Int!,
      $note: String,
      $notification_days_before_due_date: Int!,
      $notification_days_after_due_date: Int!,
      $notification_on_due_date: Boolean!,
      $send_text_to_pay: Boolean!,
      $remaining_balance: Float!,
      $single_payment_min_amount: Float!,
      $single_payment_max_amount: Float!,
      $cell_phone: String,
      $quick_invoice_api_id: String!,
      $attach_files_to_email: Boolean!,
      $item_list: [ItemRef!]! # Pass item_list as ItemRef array
      $userId: ID!
    ) {
      addQuickInvoice(
        input: [{
          invoice_id: $invoice_id,
          title: $title,
          due_date: $due_date,
          location_id: $location_id,
          allow_overpayment: $allow_overpayment,
          bank_funded_only_override: $bank_funded_only_override,
          email: $email,
          customer_id: $customer_id,
          expire_date: $expire_date,
          allow_partial_pay: $allow_partial_pay,
          invoice_number: $invoice_number,
          item_header: $item_header,
          item_footer: $item_footer,
          amount_due: $amount_due,
          notification_email: $notification_email,
          status_id: $status_id,
          status_code: $status_code,
          note: $note,
          notification_days_before_due_date: $notification_days_before_due_date,
          notification_days_after_due_date: $notification_days_after_due_date,
          notification_on_due_date: $notification_on_due_date,
          send_text_to_pay: $send_text_to_pay,
          remaining_balance: $remaining_balance,
          single_payment_min_amount: $single_payment_min_amount,
          single_payment_max_amount: $single_payment_max_amount,
          cell_phone: $cell_phone,
          quick_invoice_api_id: $quick_invoice_api_id,
          attach_files_to_email: $attach_files_to_email,
          item_list: $item_list
          user: { id: $userId }
        }]
      ) {
        quickInvoice {
          title
          due_date
          amount_due
          invoice_number
          invoice_id
          status_id
        }
      }
    }  
  `;

// Mutation to create an item and return its ID
const addItemMutation = `
    mutation addItem($name: String!, $amount: Float!) {
      addItem(input: [{ name: $name, amount: $amount }]) {
        item {
          id  # Get the 'id' from your schema
        }
      }
    }
  `;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } else {
    try {
      // Extract data from the request body
      const rawBody = await getRawBody(req);
      const data = JSON.parse(rawBody.toString());
      delete data.token;
      delete data.invoice_id;
      delete data.userId;
      // Forward the request to the Fortis API
      const fortisResponse = await fetch(
        "https://api.sandbox.fortis.tech/v1/quick-invoices",
        {
          method: "POST",
          headers: {
            "user-id": process.env.USER_ID!,
            "user-api-key": process.env.USER_API_KEY!,
            "developer-id": process.env.DEVELOPER_ID!,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!fortisResponse.ok) {
        let errorDetails;
        try {
          const errorData = await fortisResponse.json();
          errorDetails = JSON.stringify(errorData);
        } catch (jsonError) {
          errorDetails = "Unable to parse error details from Fortis API";
        }
        console.error(
          `Error from Fortis API: Status ${fortisResponse.status}, Details: ${errorDetails}`
        );
        res
          .status(fortisResponse.status)
          .json({
            error: "Failed to create merchant onboarding",
            details: errorDetails,
          });
      } else {
        const responseData = await fortisResponse.json();
        const body = JSON.parse(rawBody.toString());        

        const {
          token,
          invoice_id,
          title,
          due_date,
          location_id,
          allow_overpayment,
          bank_funded_only_override,
          email,
          customer_id,
          expire_date,
          allow_partial_pay,
          invoice_number,
          item_header,
          item_footer,
          amount_due,
          notification_email,
          status_id,
          status_code,
          note,
          notification_days_before_due_date,
          notification_days_after_due_date,
          notification_on_due_date,
          send_text_to_pay,
          remaining_balance,
          single_payment_min_amount,
          single_payment_max_amount,
          cell_phone,
          quick_invoice_api_id,
          attach_files_to_email,
          item_list,
          userId
        } = body;

        const decodedToken = jwt.verify(
          token.sessionToken,
          process.env.SECRET!
        );

        // Create each item in item_list separately and retrieve their IDs
        const itemRefs = await Promise.all(
          item_list.map(async (item) => {
            try {
              const addItemResponse = await client.request(addItemMutation, {
                name: item.name,
                amount: item.amount,
              });

              // Log the full response to debug
              console.log("addItemResponse:", addItemResponse);

              // Check if the response has an item and an id inside an array
              if (
                addItemResponse.addItem &&
                Array.isArray(addItemResponse.addItem.item) &&
                addItemResponse.addItem.item.length > 0
              ) {
                const itemId = addItemResponse.addItem.item[0].id; // Access the first item in the array
                
                return { id: itemId };
              } else {
                console.error("No item ID found in response for item:", item);
                return { id: null }; // Return null or handle missing ID case
              }
            } catch (error) {
              console.error("Error adding item:", item, error);
              return { id: null }; // Handle error scenario
            }
          })
        );

        const variables = {
          invoice_id:responseData.data.id,
          title,
          due_date,
          location_id,
          allow_overpayment,
          bank_funded_only_override,
          email,
          customer_id,
          expire_date,
          allow_partial_pay,
          invoice_number,
          item_header,
          item_footer,
          amount_due,
          notification_email,
          status_id,
          status_code,
          note,
          notification_days_before_due_date,
          notification_days_after_due_date,
          notification_on_due_date,
          send_text_to_pay,
          remaining_balance,
          single_payment_min_amount,
          single_payment_max_amount,
          cell_phone,
          quick_invoice_api_id,
          attach_files_to_email,
          item_list: itemRefs, // Pass the item references
          userId:userId
        };

        
        // Create the invoice with the item references
        const dataInvoice = await client.request(addInvoiceMutation, variables);
        const invoice = data?.addQuickInvoice?.quickInvoice;


        res.status(200).json(responseData);
      }
    } catch (error) {
      // Assert that error is of type Error to access its properties like message
      if (error instanceof Error) {
        console.error("Unexpected error:", error.message);
        res.status(500).json({
          error: "Internal Server Error",
          message: error.message,
        });
      } else {
        // Handle cases where the error is not an instance of Error
        console.error("Unexpected error:", error);
        res.status(500).json({
          error: "Internal Server Error",
          message: "An unknown error occurred",
        });
      }
    }
  }
}
