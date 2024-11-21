import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PATCH') {
        res.setHeader('Allow', ['PATCH']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    } else {
        try {
            // Extract data from the request body
            const data = req.body;

              // Extract query parameters from the request
              const { id } = req.query;

              // Ensure id is a string
              if (Array.isArray(id) || typeof id !== 'string') {
                  res.status(400).json({ error: 'Invalid query parameter: id should be a single string' });
                  return;
              }
  
              // Construct the URL with the id directly in the endpoint
              const url = `https://api.sandbox.fortis.tech/v1/quick-invoices/${id}`;  

            // Forward the request to the Fortis API
            const fortisResponse = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'user-id': process.env.USER_ID!,
                    'user-api-key': process.env.USER_API_KEY!,
                    'developer-id': process.env.DEVELOPER_ID!,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
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
                res.status(fortisResponse.status).json({ error: 'Failed to create merchant onboarding', details: errorDetails });
            } else {
                const responseData = await fortisResponse.json();                
                res.status(200).json(responseData);
            }
        } catch (error) {
            // Assert that error is of type Error to access its properties like message
            if (error instanceof Error) {
                console.error('Unexpected error:', error.message);
                res.status(500).json({
                    error: 'Internal Server Error',
                    message: error.message
                });
            } else {
                // Handle cases where the error is not an instance of Error
                console.error('Unexpected error:', error);
                res.status(500).json({
                    error: 'Internal Server Error',
                    message: 'An unknown error occurred'
                });
            }
        }
    }
}