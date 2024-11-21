
import { NextResponse as Response, NextRequest as Request } from 'next/server';



const formData =
{
    checkin_date: "2021-12-01",
    checkout_date: "2021-12-01",
    clerk_number: "AE1234",
    customer_id: "customerid",
    description: "some description",
    iias_ind: 1,
    image_front: "",
    image_back: "",
    installment: true,
    installment_number: 1,
    installment_count: 1,
    product_transaction_id: "31ef2344e2764888aaf17782",
    advance_deposit: false,
    no_show: false,
    notification_email_address: "johnsmith@smiths.com",
    order_number: "433659378839",
    po_number: "555555553123",
    quick_invoice_id: "11e95f8ec39de8fbdb0a4f1a",
    recurring: false,
    recurring_number: 1,
    room_num: "303",
    room_rate: 95,
    save_account: false,
    save_account_title: "John Account",
    subtotal_amount: 599,
    surcharge_amount: 100,
    tax: 0,
    tip_amount: 0,
    transaction_amount: 699,
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
    terminal_serial_number: "1234567890",
    threedsecure: true,
    account_holder_name: "smith",
    account_number: "5454545454545454",
    entry_mode_id: "K",
    exp_date: "0722",
    wallet_type: "000",
    // additional_amounts:[
    //     {
    //         type: "cashback",
    //         amount: 10,
    //         account_type: "credit",
    //         currency: 840
    //     }
    // ]
}

export const POST = async (req: Request, res: Response) => {
    if (req.method !== 'POST') {
        return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
            status: 405,
            headers: {
                'Allow': 'POST',
                'Content-Type': 'application/json'
            }
        });
    } else {
        try {
            const data = req.body;
            console.log('Request data: >>>>>>>>>>>>>>>', data);
            // Forward the request to the Fortis API
            const fortisResponse = await fetch('https://api.sandbox.fortis.tech/transactions/cc/sale/terminal', {
                method: 'POST',
                headers: {
                    'user-id': process.env.USER_ID!,
                    'user-api-key': process.env.USER_API_KEY!,
                    'developer-id': process.env.DEVELOPER_ID!,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });


            if (!fortisResponse.ok) {
                let errorDetails;
                try {
                    const errorData = await fortisResponse.json();
                    errorDetails = JSON.stringify(errorData);
                } catch (jsonError) {
                    errorDetails = 'Unable to parse error details from Fortis API';
                }
                console.error(`Error from Fortis API: Status ${fortisResponse.status}, Details: ${errorDetails}`);
                Response.json({ message: 'Failed to create merchant onboardings', details: errorDetails }, {
                    status: fortisResponse.status,
                });
            } else {
                const responseData = await fortisResponse.json();
                console.log('response data', responseData);
                return Response.json({ data: `hello world ${responseData}` })
            }
        } catch (error) {
            // Assert that error is of type Error to access its properties like message
            if (error instanceof Error) {
                console.error('Unexpected error:', error.message);
                new Response(JSON.stringify({ message: 'Internal Server Error', details: error.message }), {
                    status: 500,
                });
            } else {
                // Handle cases where the error is not an instance of Error
                console.error('Unexpected error:', error);
                Response.json(({
                    error: 'Internal Server Error',
                    message: 'An unknown error occurred'
                }), {
                    status: 500,
                });
            }
        }
    }

}