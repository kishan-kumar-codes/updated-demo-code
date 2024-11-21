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

const addCCSaleTransactionMutation = `
  mutation AddCCSaleTransaction(
    $id: ID!,
    $userId: ID!,
    $location_id: String,
    $transaction_amount: Float!,
    $terminal_id: String!,
    $additional_amounts: [AdditionalAmountInput!]!,
    $billing_address: BillingAddressInput!,
    $checkin_date: String!,
    $checkout_date: String!,
    $clerk_number: String!,
    $contact_api_id: String!,
    $contact_id: String!,
    $custom_data: CustomDataInput,
    $customer_id: String!,
    $description: String,
    $identity_verification: IdentityVerificationInput,
    $iias_ind: Int,
    $image_front: String!,
    $image_back: String!,
    $installment: Boolean!,
    $installment_number: Int,
    $installment_count: Int,
    $location_api_id: String,
    $product_transaction_id: String!,
    $advance_deposit: Boolean!,
    $no_show: Boolean!,
    $notification_email_address: String,
    $order_number: String,
    $po_number: String,
    $quick_invoice_id: String!,
    $recurring: Boolean,
    $recurring_number: Int,
    $room_num: String!,
    $room_rate: Float!,
    $save_account: Boolean,
    $save_account_title: String,
    $subtotal_amount: Float!,
    $surcharge_amount: Float,
    $tags: [String],
    $tax: Float,
    $tip_amount: Float,
    $secondary_amount: Float,
    $transaction_api_id: String!,
    $transaction_c1: String,
    $transaction_c2: String,
    $transaction_c3: String,
    $bank_funded_only_override: Boolean,
    $allow_partial_authorization_override: Boolean,
    $auto_decline_cvv_override: Boolean,
    $auto_decline_street_override: Boolean,
    $auto_decline_zip_override: Boolean,
    $cardholder_present: Boolean!,
    $card_present: Boolean,
    $secure_auth_data: String,
    $secure_protocol_version: Int,
    $secure_cryptogram: String,
    $secure_directory_server_transaction_id: String,
    $secure_ecomm_url: String,
    $terminal_serial_number: String!,
    $threedsecure: Boolean!,
    $wallet_type: String!,
    $terminal_api_id: String!,
    $e_format: String!,
    $e_track_data: String!,
    $e_serial_number: String!
  ) {
    addCCSaleTransaction(
      input: [{
        id: $id,
        user: { id: $userId },
        location_id: $location_id,
        transaction_amount: $transaction_amount,
        terminal_id: $terminal_id,
        additional_amounts: $additional_amounts,
        billing_address: $billing_address,
        checkin_date: $checkin_date,
        checkout_date: $checkout_date,
        clerk_number: $clerk_number,
        contact_api_id: $contact_api_id,
        contact_id: $contact_id,
        custom_data: $custom_data,
        customer_id: $customer_id,
        description: $description,
        identity_verification: $identity_verification,
        iias_ind: $iias_ind,
        image_front: $image_front,
        image_back: $image_back,
        installment: $installment,
        installment_number: $installment_number,
        installment_count: $installment_count,
        location_api_id: $location_api_id,
        product_transaction_id: $product_transaction_id,
        advance_deposit: $advance_deposit,
        no_show: $no_show,
        notification_email_address: $notification_email_address,
        order_number: $order_number,
        po_number: $po_number,
        quick_invoice_id: $quick_invoice_id,
        recurring: $recurring,
        recurring_number: $recurring_number,
        room_num: $room_num,
        room_rate: $room_rate,
        save_account: $save_account,
        save_account_title: $save_account_title,
        subtotal_amount: $subtotal_amount,
        surcharge_amount: $surcharge_amount,
        tags: $tags,
        tax: $tax,
        tip_amount: $tip_amount,
        secondary_amount: $secondary_amount,
        transaction_api_id: $transaction_api_id,
        transaction_c1: $transaction_c1,
        transaction_c2: $transaction_c2,
        transaction_c3: $transaction_c3,
        bank_funded_only_override: $bank_funded_only_override,
        allow_partial_authorization_override: $allow_partial_authorization_override,
        auto_decline_cvv_override: $auto_decline_cvv_override,
        auto_decline_street_override: $auto_decline_street_override,
        auto_decline_zip_override: $auto_decline_zip_override,
        cardholder_present: $cardholder_present,
        card_present: $card_present,
        secure_auth_data: $secure_auth_data,
        secure_protocol_version: $secure_protocol_version,
        secure_cryptogram: $secure_cryptogram,
        secure_directory_server_transaction_id: $secure_directory_server_transaction_id,
        secure_ecomm_url: $secure_ecomm_url,
        terminal_serial_number: $terminal_serial_number,
        threedsecure: $threedsecure,
        wallet_type: $wallet_type,
        terminal_api_id: $terminal_api_id,
        e_format: $e_format,
        e_track_data: $e_track_data,
        e_serial_number: $e_serial_number
      }]
    ) {
      CCSaleTransaction {
        id
        checkin_date
        checkout_date
        transaction_amount
        order_number
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
    return;
  }

  try {
    const rawBody = await getRawBody(req);
    const data = JSON.parse(rawBody.toString());

    // Forward the request to the Fortis API
    const fortisResponse = await fetch(
      "https://api.sandbox.fortis.tech/transactions/cc/sale/terminal",
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
      console.log("responseData", responseData);
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
