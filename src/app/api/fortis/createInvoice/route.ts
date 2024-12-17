import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';
import * as jwt from 'jsonwebtoken';

const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
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
    $item_list: [ItemRef!]!,
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

const addItemMutation = `
  mutation addItem($name: String!, $amount: Float!) {
    addItem(input: [{ name: $name, amount: $amount }]) {
      item {
        id
      }
    }
  }
`;

export async function POST(request: NextRequest) {
  try {

    const contentType = request.headers.get("content-type");
    if (contentType !== "application/json") {
      return NextResponse.json({ error: "Content-Type must be application/json" }, { status: 400 });
    }

    const bodyText = await request.text();
    if (!bodyText) {
      return NextResponse.json({ error: "Request body is empty" }, { status: 400 });
    }

    let data;
    try {
      data = JSON.parse(bodyText);
    } catch (e) {
      console.error("Error parsing JSON:", e);
      return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 });
    }

    console.log("Received data:", data);
    // const data = await request.json();
    const { token, invoice_id, userId, ...fortisData } = data;

    console.log("this is the data from",)

    // if (!token) {
    //   return NextResponse.json({ error: 'Authentication token must be provided' }, { status: 401 });
    // }
    // Forward the request to the Fortis API
    const fortisResponse = await fetch(
      'https://api.sandbox.fortis.tech/v1/quick-invoices',
      {
        method: 'POST',
        headers: {
          'user-id': process.env.USER_ID!,
          'user-api-key': process.env.USER_API_KEY!,
          'developer-id': process.env.DEVELOPER_ID!,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fortisData),
      }
    );

    if (!fortisResponse.ok) {
      const errorData = await fortisResponse.json();
      console.error(`Error from Fortis API: Status ${fortisResponse.status}, Details: ${JSON.stringify(errorData)}`);
      return NextResponse.json({ error: 'Failed to create merchant onboarding', details: errorData }, { status: fortisResponse.status });
    }

    const responseData = await fortisResponse.json();

    // Verify the JWT token
    // let decodedToken;

    // console.log("Secret", process.env.SECRET)
    // try {
    //   decodedToken = jwt.verify(token, process.env.SECRET || "");
    // } catch (error) {
    //   console.error('JWT verification failed:', error);
    //   return NextResponse.json({ error: 'Invalid authentication token' }, { status: 401 });
    // }

    // Create each item in item_list separately and retrieve their IDs
    const itemRefs = await Promise.all(
      data.item_list.map(async (item: { name: string; amount: number }) => {
        try {
          const addItemResponse = await client.request(addItemMutation, {
            name: item.name,
            amount: item.amount,
          });

          if (
            addItemResponse.addItem &&
            Array.isArray(addItemResponse.addItem.item) &&
            addItemResponse.addItem.item.length > 0
          ) {
            const itemId = addItemResponse.addItem.item[0].id;
            return { id: itemId };
          } else {
            console.error('No item ID found in response for item:', item);
            return { id: null };
          }
        } catch (error) {
          console.error('Error adding item:', item, error);
          return { id: null };
        }
      })
    );

    const variables = {
      ...data,
      invoice_id: responseData.data.id,
      item_list: itemRefs,
      userId: userId
    };

    // Create the invoice with the item references
    const dataInvoice = await client.request(addInvoiceMutation, variables);
    const invoice = dataInvoice?.addQuickInvoice?.quickInvoice;

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', message: error instanceof Error ? error.message : 'An unknown error occurred' },
      { status: 500 }
    );
  }
}

