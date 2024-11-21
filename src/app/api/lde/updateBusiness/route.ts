// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'PUT') {
//         res.setHeader('Allow', ['PUT']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     } else {
//         try {
//             // Extract businessId from the URL parameter
//             const { businessId } = req.query;

//             // Ensure there is a payload to update the business
//             if (!req.body) {
//                 res.status(400).json({ error: 'No data provided for update' });
//                 return;
//             }

//             // Construct the URL for the external API call
//             const apiUrl = `https://staging-api.ldex.co/listings-management/api/v2/businesses/${businessId}`;

//             // Forward the request to the new API endpoint
//             const jsonResponse = await fetch(apiUrl, {
//                 method: 'PUT',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'apikey': process.env.LDE_API_KEY!
//                 },
//                 body: JSON.stringify(req.body) // Forward the body received from the client
//             });

//             if (jsonResponse.ok) {
//                 const responseData = await jsonResponse.json();
//                 console.log('Updated business successfully:', responseData);
//                 res.status(200).json(responseData);
//             } else {
//                 let errorDetails;
//                 try {
//                     const errorData = await jsonResponse.json();
//                     errorDetails = JSON.stringify(errorData);
//                 } catch (jsonError) {
//                     errorDetails = 'Unable to parse error details from the API';
//                 }
//                 console.error(`Error from the API: Status ${jsonResponse.status}, Details: ${errorDetails}`);
//                 res.status(jsonResponse.status).json({ error: 'Failed to update business', details: errorDetails });
//             }
//         } catch (error) {
//             // Handle unexpected errors
//             if (error instanceof Error) {
//                 console.error('Unexpected error during business update:', error.message);
//                 res.status(500).json({
//                     error: 'Internal Server Error',
//                     message: error.message
//                 });
//             } else {
//                 console.error('Unexpected error during business update:', error);
//                 res.status(500).json({
//                     error: 'Internal Server Error',
//                     message: 'An unknown error occurred'
//                 });
//             }
//         }
//     }
// }


import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest, { params }: { params: { businessId: string } }) {
    try {
        const businessId = params.businessId;

        // Ensure there is a payload to update the business
        const body = await request.json();
        if (!body) {
            return NextResponse.json({ error: 'No data provided for update' }, { status: 400 });
        }

        // Construct the URL for the external API call
        const apiUrl = `https://staging-api.ldex.co/listings-management/api/v2/businesses/${businessId}`;

        // Forward the request to the new API endpoint
        const jsonResponse = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'apikey': process.env.LDE_API_KEY!
            },
            body: JSON.stringify(body) // Forward the body received from the client
        });

        if (jsonResponse.ok) {
            const responseData = await jsonResponse.json();
            console.log('Updated business successfully:', responseData);
            return NextResponse.json(responseData);
        } else {
            let errorDetails;
            try {
                const errorData = await jsonResponse.json();
                errorDetails = JSON.stringify(errorData);
            } catch (jsonError) {
                errorDetails = 'Unable to parse error details from the API';
            }
            console.error(`Error from the API: Status ${jsonResponse.status}, Details: ${errorDetails}`);
            return NextResponse.json(
                { error: 'Failed to update business', details: errorDetails },
                { status: jsonResponse.status }
            );
        }
    } catch (error) {
        // Handle unexpected errors
        if (error instanceof Error) {
            console.error('Unexpected error during business update:', error.message);
            return NextResponse.json(
                { error: 'Internal Server Error', message: error.message },
                { status: 500 }
            );
        } else {
            console.error('Unexpected error during business update:', error);
            return NextResponse.json(
                { error: 'Internal Server Error', message: 'An unknown error occurred' },
                { status: 500 }
            );
        }
    }
}