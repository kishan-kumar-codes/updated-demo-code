import { GraphQLClient } from "graphql-request";
import { NextRequest, NextResponse } from "next/server";

// Initialize the GraphQL client
const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
    headers: {
        "Content-Type": "application/json",
        "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
    },
});



// Define the GraphQL mutation
const addCCSaleTransactionMutation = `
  mutation AddCCSaleTransaction(
    $userId: ID!,
    $transaction_amount: Float!,
    $checkin_date: DateTime!,
    $checkout_date: DateTime!,
    $clerk_number: String!,
    $customer_id: String!,
    $description: String,
    $iias_ind: Int,
    $image_front: String!,
    $image_back: String!,
    $installment: Boolean!,
    $installment_number: Int,
    $installment_count: Int,
    $product_transaction_id: String!,
    $advance_deposit: Boolean!,
    $no_show: Boolean!,
    $notification_email_address: String!,
    $order_number: String!,
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
    $tax: Float,
    $tip_amount: Float,
    $secondary_amount: Float,
    $transaction_c1: String,
    $transaction_c2: String,
    $transaction_c3: String,
    $bank_funded_only_override: Boolean,
    $allow_partial_authorization_override: Boolean,
    $auto_decline_cvv_override: Boolean,
    $auto_decline_street_override: Boolean,
    $auto_decline_zip_override: Boolean,
    $secure_auth_data: String!,
    $secure_protocol_version: Int!,
    $secure_crytogram: String!,
    $secure_directory_server_transaction_id: String!,
    $terminal_serial_number: String!,
    $threedsecure: Boolean!,
    $wallet_type: String!,
    $account_holder_name: String!,
    $account_number: String!,
    $entry_mode_id: String!,
    $exp_date: String!,
    $sale_transaction_Id: String!
  ) {
    addCCSaleTransaction(
      input: [{
        user: { id: $userId },
        transaction_amount: $transaction_amount,
        checkin_date: $checkin_date,
        checkout_date: $checkout_date,
        clerk_number: $clerk_number,
        customer_id: $customer_id,
        description: $description,
        iias_ind: $iias_ind,
        image_front: $image_front,
        image_back: $image_back,
        installment: $installment,
        installment_number: $installment_number,
        installment_count: $installment_count,
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
        tax: $tax,
        tip_amount: $tip_amount,
        secondary_amount: $secondary_amount,
        transaction_c1: $transaction_c1,
        transaction_c2: $transaction_c2,
        transaction_c3: $transaction_c3,
        bank_funded_only_override: $bank_funded_only_override,
        allow_partial_authorization_override: $allow_partial_authorization_override,
        auto_decline_cvv_override: $auto_decline_cvv_override,
        auto_decline_street_override: $auto_decline_street_override,
        auto_decline_zip_override: $auto_decline_zip_override,
        secure_auth_data: $secure_auth_data,
        secure_protocol_version: $secure_protocol_version,
        secure_crytogram: $secure_crytogram,
        secure_directory_server_transaction_id: $secure_directory_server_transaction_id,
        terminal_serial_number: $terminal_serial_number,
        threedsecure: $threedsecure,
        wallet_type: $wallet_type,
        account_holder_name: $account_holder_name,
        account_number: $account_number,
        entry_mode_id: $entry_mode_id,
        exp_date: $exp_date,
        sale_transaction_Id: $sale_transaction_Id
      }]
    ) {
      cCSaleTransaction {
        id
        checkin_date
        checkout_date
        transaction_amount
        order_number
      }
    }
  }
`;




export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const fortisData = {
            checkin_date: data.default_checkin,
            checkout_date: data.default_checkout,
            description: data.description,
            location_id: data.location_id,
            room_num: data.default_room_number,
            room_rate: data.default_room_rate,
            transaction_amount: data.transaction_amount,
            terminal_serial_number: data.serial_number,
            terminal_id: data.terminal_id,
            notification_email_address: data.notification_email_address,

            // custom_data:{
            //     data1:"",
            //     data2:"",
            // },
            // customer_id:data.customer_id,
            // iias_ind:data.iias_ind,
            // image_front:data.image_front,
            // image_back:data.image_back,
            // installment:data.installment,
            // installment_number:data.installment_number,
            // installment_count:data.installment_count,
            // advance_deposit:data.advance_deposit,
            // no_show:data.no_show,

            // order_number:data.order_number,
            // po_number:data.po_number,
            // quick_invoice_id:data.quick_invoice_id,
            // recurring:data.recurring,
            // recurring_number:data.recurring_number,
            // save_account:data.save_account,
            // save_account_title:data.save_account_title,
            // subtotal_amount:data.subtotal_amount,
            // surcharge_amount:data.surcharge_amount,
            // tax:data.tax,
            // tip_amount:data.tip_amount,
            // secondary_amount:data.secondary_amount,
            // transaction_api_id:data.transaction_api_id,
            // transaction_c1:data.transaction_c1,
            // transaction_c2:data.transaction_c2,
            // transaction_c3:data.transaction_c3, 
            // bank_funded_only_override:data.bank_funded_only_override,
            // allow_partial_authorization_override:data.allow_partial_authorization_override,
            // auto_decline_cvv_override:data.auto_decline_cvv_override,
            // auto_decline_street_override:data.auto_decline_street_override,
            // auto_decline_zip_override:data.auto_decline_zip_override,
            // secure_auth_data:data.secure_auth_data,
            // secure_protocol_version:data.secure_protocol_version,
            // secure_crytogram:data.secure_crytogram,
            // secure_directory_server_transaction_id:data.secure_directory_server_transaction_id,
            // threedsecure:data.threedsecure,
            // three_ds_server_trans_id:data.three_ds_server_trans_id,
            // e_format:data.e_format,

        }
        // Forward the request to the Fortis API
        const fortisResponse = await fetch(
            "https://api.sandbox.fortis.tech/v1/transactions/cc/sale/terminal",
            {
                method: "POST",
                headers: {
                    "user-id": process.env.USER_ID!,
                    "user-api-key": process.env.USER_API_KEY!,
                    "developer-id": process.env.DEVELOPER_ID!,
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(fortisData),
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
            return NextResponse.json(
                { error: "Failed to create a transection in Sandbox Environment", details: errorDetails },
                { status: fortisResponse.status }
            );
        }

        // Regardless of the Fortis API response, use the dummy data for the GraphQL mutation
        const databaseData = {
            userId: data.userId,
            transaction_amount: data.transaction_amount,
            checkin_date: data.default_checkin,
            checkout_date: data.default_checkout,
            clerk_number: "AE1234",
            customer_id: "customerid",
            description: data.description,
            iias_ind: 1,
            image_front: "base64encodedimage",
            image_back: "base64encodedimage",
            installment: true,
            installment_number: 1,
            installment_count: 1,
            product_transaction_id: "31ef2344e2764888aaf17782",
            advance_deposit: false,
            no_show: false,
            notification_email_address: data.notification_email_address,
            order_number: "433659378839",
            po_number: "555555553123",
            quick_invoice_id: "11e95f8ec39de8fbdb0a4f1a",
            recurring: false,
            recurring_number: 1,
            room_num: data.default_room_number,
            room_rate: data.default_room_rate,
            save_account: false,
            save_account_title: "John Account",
            subtotal_amount: 599,
            surcharge_amount: 100,
            tax: 0,
            tip_amount: 0,
            secondary_amount: 0,
            transaction_c1: "custom-data-1",
            transaction_c2: "custom-data-2",
            transaction_c3: "custom-data-3",
            bank_funded_only_override: false,
            allow_partial_authorization_override: false,
            auto_decline_cvv_override: false,
            auto_decline_street_override: false,
            auto_decline_zip_override: false,
            secure_auth_data: "vVwL7UNHCf8W8M2LAfvRChNHN7c%3D",
            secure_protocol_version: 2,
            secure_crytogram: "ZVVEVDJITHpTNE9yNlNHMUh0R0E=",
            secure_directory_server_transaction_id: "d65e93c3-35ab-41ba-b307-767bfc19eae",
            terminal_serial_number: data.serial_number,
            threedsecure: true,
            wallet_type: "000",
            account_holder_name: data.cardholder_name,
            account_number: data.card_number,
            entry_mode_id: "K",
            exp_date: data.exp_year,
            sale_transaction_Id: "31efb6c7267a7322a250912a"
        }
        try {
            const mutationResponse = await client.request(addCCSaleTransactionMutation, databaseData);
            console.log("GraphQL Mutation Response:", mutationResponse);
        } catch (graphqlError) {
            console.error("GraphQL Mutation Error:", graphqlError);
            return NextResponse.json({ error: "GraphQL Mutation Error", message: graphqlError }, { status: 500 })
        }


        const responseData = await fortisResponse.json();
        // return NextResponse.json(responseData);
        return NextResponse.json({ Message: "Successfully Created", responseData }, { status: 200 })

    } catch (error) {
        if (error instanceof Error) {
            console.error("Unexpected error:", error.message);
            return NextResponse.json(
                { error: "Internal Server Error", message: error.message },
                { status: 500 }
            );
        } else {
            console.error("Unexpected error:", error);
            return NextResponse.json(
                { error: "Internal Server Error", message: "An unknown error occurred" },
                { status: 500 }
            );
        }
    }
}

export async function GET() {
    return NextResponse.json({ message: "This endpoint only accepts POST requests" }, { status: 405 });
}