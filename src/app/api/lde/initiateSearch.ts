// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'POST') {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     } else {
//         try {
//             // Extract data from the request body
//             const data = req.body; // Use the body sent from the front-end

//             // Validate the received data if necessary
//             if (!data.name || !data.street || !data.zip || !data.country) {
//                 res.status(400).json({ error: 'Missing required fields' });
//                 return;
//             }

//             // Forward the request to the new API endpoint
//             const jsonResponse = await fetch('https://staging-api.ldex.co/listings-management/api/v2/presence/search', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'apikey': process.env.LDE_API_KEY!
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (!jsonResponse.ok) {
//                 let errorDetails;
//                 try {
//                     const errorData = await jsonResponse.json();
//                     errorDetails = JSON.stringify(errorData);
//                 } catch (jsonError) {
//                     errorDetails = 'Unable to parse error details from the API';
//                 }
//                 console.error(`Error from the API: Status ${jsonResponse.status}, Details: ${errorDetails}`);
//                 res.status(jsonResponse.status).json({ error: 'Failed to complete search', details: errorDetails });
//             } else {
//                 const responseData = await jsonResponse.json();
//                 console.log('response data', responseData);
//                 res.status(200).json(responseData);
//             }
//         } catch (error) {
//             // Assert that error is of type Error to access its properties like message
//             if (error instanceof Error) {
//                 console.error('Unexpected error:', error.message);
//                 res.status(500).json({
//                     error: 'Internal Server Error',
//                     message: error.message
//                 });
//             } else {
//                 console.error('Unexpected error:', error);
//                 res.status(500).json({
//                     error: 'Internal Server Error',
//                     message: 'An unknown error occurred'
//                 });
//             }
//         }
//     }
// }



import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // Extract data from the request body
        const data = await request.json();

        // Validate the received data
        if (!data.name || !data.street || !data.zip || !data.country) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Forward the request to the new API endpoint
        const jsonResponse = await fetch('https://staging-api.ldex.co/listings-management/api/v2/presence/search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'apikey': process.env.LDE_API_KEY!
            },
            body: JSON.stringify(data),
        });

        if (!jsonResponse.ok) {
            let errorDetails;
            try {
                const errorData = await jsonResponse.json();
                errorDetails = JSON.stringify(errorData);
            } catch (jsonError) {
                errorDetails = 'Unable to parse error details from the API';
            }
            console.error(`Error from the API: Status ${jsonResponse.status}, Details: ${errorDetails}`);
            return NextResponse.json(
                { error: 'Failed to complete search', details: errorDetails },
                { status: jsonResponse.status }
            );
        } else {
            const responseData = await jsonResponse.json();
            console.log('response data', responseData);
            return NextResponse.json(responseData);
        }
    } catch (error) {
        // Assert that error is of type Error to access its properties like message
        if (error instanceof Error) {
            console.error('Unexpected error:', error.message);
            return NextResponse.json(
                { error: 'Internal Server Error', message: error.message },
                { status: 500 }
            );
        } else {
            console.error('Unexpected error:', error);
            return NextResponse.json(
                { error: 'Internal Server Error', message: 'An unknown error occurred' },
                { status: 500 }
            );
        }
    }
}
