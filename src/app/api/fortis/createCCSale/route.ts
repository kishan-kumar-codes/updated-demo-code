import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';
import * as jwt from 'jsonwebtoken';
import getRawBody from 'raw-body';

const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
    headers: {
        'Content-Type': 'application/json',
        'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
    },
});

const createCCSaleTransactionMutation = `
mutation createCCSaleTransaction(
    $sale_transaction_Id: String!,
    $checkin_date: DateTime!,
    $checkout_date: DateTime!,
    $clerk_number: String!,
    $customer_id: String!,
    $description: String,
    $iias_ind: Int,
    $image_front: String,
    $image_back: String,
    $installment: Boolean,
    $installment_number: Int,
    $installment_count: Int,
    $product_transaction_id: String!,
    $advance_deposit: Boolean,
    $no_show: Boolean,
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
    $transaction_amount: Float!,
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
    $account_holder_name: String!,
    $account_number: String!,
    $entry_mode_id: String!,
    $exp_date: String!,
    $wallet_type: String!
    $userId: ID!
  ) {
    addCCSaleTransaction(
      input: {
        sale_transaction_Id: $sale_transaction_Id,
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
        transaction_amount: $transaction_amount,
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
        account_holder_name: $account_holder_name,
        account_number: $account_number,
        entry_mode_id: $entry_mode_id,
        exp_date: $exp_date,
        wallet_type: $wallet_type,
        user: { id: $userId }
      }
    ) {
      cCSaleTransaction {
        id
        sale_transaction_Id
        checkin_date
        checkout_date
        transaction_amount
        terminal_serial_number
        account_holder_name
      }
    }
  }  
`;

export async function POST(request: NextRequest) {
    try {
        // Extract data from the request body
        const body = await request.json();
        const data = { ...body };
        delete data.token;
        delete data.userId;

        // Forward the request to the Fortis API
        const fortisResponse = await fetch(
            // 'https://api.sandbox.fortis.tech/v1/transactions/cc/sale/keyed',
            "",
            {
                method: 'POST',
                headers: {
                    'user-id': process.env.USER_ID!,
                    'user-api-key': process.env.USER_API_KEY!,
                    'developer-id': process.env.DEVELOPER_ID!,
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );

        if (!fortisResponse.ok) {
            let errorDetails;
            let base64Image;
            try {
                const errorData = await fortisResponse.json();
                errorDetails = JSON.stringify(errorData);

                // Log base64 image if exists in error response
                base64Image = errorData?.image_front ?? null;
                if (base64Image) {
                    console.log('Base64 Image:', base64Image);
                }
            } catch (jsonError) {
                errorDetails = 'Unable to parse error details from Fortis API';
            }

            console.error(
                `Error from Fortis API: Status ${fortisResponse.status}, Details: ${errorDetails}`
            );

            // Include Base64 image in response if it exists
            return NextResponse.json(
                {
                    error: 'Failed to create merchant onboarding',
                    details: errorDetails,
                    base64Image: base64Image ? base64Image : 'No Base64 image data',
                },
                { status: fortisResponse.status }
            );
        } else {
            const responseData = await fortisResponse.json();

            // Extract variables from the body
            const {
                token,
                checkin_date,
                checkout_date,
                clerk_number,
                customer_id,
                description,
                iias_ind,
                image_front,
                image_back,
                installment,
                installment_number,
                installment_count,
                product_transaction_id,
                advance_deposit,
                no_show,
                notification_email_address,
                order_number,
                po_number,
                quick_invoice_id,
                recurring,
                recurring_number,
                room_num,
                room_rate,
                save_account,
                save_account_title,
                subtotal_amount,
                surcharge_amount,
                tax,
                tip_amount,
                transaction_amount,
                secondary_amount,
                transaction_c1,
                transaction_c2,
                transaction_c3,
                bank_funded_only_override,
                allow_partial_authorization_override,
                auto_decline_cvv_override,
                auto_decline_street_override,
                auto_decline_zip_override,
                secure_auth_data,
                secure_protocol_version,
                secure_crytogram,
                secure_directory_server_transaction_id,
                terminal_serial_number,
                threedsecure,
                account_holder_name,
                account_number,
                entry_mode_id,
                exp_date,
                wallet_type,
                userId,
            } = body;

            const decodedToken = jwt.verify(
                token.sessionToken,
                process.env.SECRET!
            );

            const variables = {
                sale_transaction_Id: responseData.data.id,
                checkin_date,
                checkout_date,
                clerk_number,
                customer_id,
                description,
                iias_ind,
                image_front,
                image_back,
                installment,
                installment_number,
                installment_count,
                product_transaction_id,
                advance_deposit,
                no_show,
                notification_email_address,
                order_number,
                po_number,
                quick_invoice_id,
                recurring,
                recurring_number,
                room_num,
                room_rate,
                save_account,
                save_account_title,
                subtotal_amount,
                surcharge_amount,
                tax,
                tip_amount,
                transaction_amount,
                secondary_amount,
                transaction_c1,
                transaction_c2,
                transaction_c3,
                bank_funded_only_override,
                allow_partial_authorization_override,
                auto_decline_cvv_override,
                auto_decline_street_override,
                auto_decline_zip_override,
                secure_auth_data,
                secure_protocol_version,
                secure_crytogram,
                secure_directory_server_transaction_id,
                terminal_serial_number,
                threedsecure,
                account_holder_name,
                account_number,
                entry_mode_id,
                exp_date,
                wallet_type,
                userId,
            };

            const dataSaleTransaction = await client.request(
                createCCSaleTransactionMutation,
                variables
            );
            const invoice = dataSaleTransaction?.addQuickInvoice?.quickInvoice;

            return NextResponse.json(responseData, { status: 200 });
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error('Unexpected error:', error.message);
            return NextResponse.json(
                {
                    error: 'Internal Server Error',
                    message: error.message,
                },
                { status: 500 }
            );
        } else {
            console.error('Unexpected error:', error);
            return NextResponse.json(
                {
                    error: 'Internal Server Error',
                    message: 'An unknown error occurred',
                },
                { status: 500 }
            );
        }
    }
}