// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== 'GET') {
//         res.setHeader('Allow', ['GET']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     } else {
//         try {
//             // Extract data from the query parameters
//             const { id, token, publisher } = req.query;

//             // Validate the received data to ensure they are present
//             if (!id || !token || !publisher) {
//                 res.status(400).json({ error: 'Missing required parameters: id, token, or publisher' });
//                 return;
//             }

//             // Construct the URL for the external API call
//             const apiUrl = `https://staging-api.ldex.co/listings-management/api/v2/presence/search/${id}/${token}/${publisher}`;

//             // Forward the request to the new API endpoint
//             const jsonResponse = await fetch(apiUrl, {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'apikey': process.env.LDE_API_KEY!
//                 }
//             });

//             if (jsonResponse.ok) {
//                 const responseData = await jsonResponse.json();
//                 console.log('Response data:', responseData);
//                 res.status(200).json(responseData);
//             } else {
//                 let error;
//                 try {
//                     const errorData = await jsonResponse.json();
//                     error = JSON.stringify(errorData);
//                 } catch (jsonError) {
//                     error = 'Unable to parse error details from the API';
//                 }
//                 console.error(`Error from the API: Status ${jsonResponse.status}, Details: ${error}`);
//                 res.status(jsonResponse.status).json({ error: 'Failed to complete search', details: error });
//             }
//         } catch (error) {
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

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string; token: string; publisher: string } }
) {
    try {
        const { id, token, publisher } = params;

        // Validate the received data to ensure they are present
        if (!id || !token || !publisher) {
            return NextResponse.json(
                { error: 'Missing required parameters: id, token, or publisher' },
                { status: 400 }
            );
        }

        // Construct the URL for the external API call
        const apiUrl = `https://staging-api.ldex.co/listings-management/api/v2/presence/search/${id}/${token}/${publisher}`;

        // Forward the request to the new API endpoint
        const jsonResponse = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'apikey': process.env.LDE_API_KEY!
            }
        });

        if (jsonResponse.ok) {
            const responseData = await jsonResponse.json();
            console.log('Response data:', responseData);
            return NextResponse.json(responseData);
        } else {
            let error;
            try {
                const errorData = await jsonResponse.json();
                error = JSON.stringify(errorData);
            } catch (jsonError) {
                error = 'Unable to parse error details from the API';
            }
            console.error(`Error from the API: Status ${jsonResponse.status}, Details: ${error}`);
            return NextResponse.json(
                { error: 'Failed to complete search', details: error },
                { status: jsonResponse.status }
            );
        }
    } catch (error) {
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