import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // Extract data from the request body
        const data = await request.json();

        // Forward the request to the Fortis API
        const fortisResponse = await fetch(
            // 'https://api.sandbox.fortis.tech/v1/transactions/cc/refund/terminal', ""
            {
                method: 'POST',
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
            return NextResponse.json({ error: 'Failed to create merchant onboarding', details: errorDetails }, { status: fortisResponse.status });
        } else {
            const responseData = await fortisResponse.json();
            return NextResponse.json(responseData, { status: 200 });
        }
    } catch (error) {
        if (error instanceof Error) {
            console.error('Unexpected error:', error.message);
            return NextResponse.json({ error: 'Internal Server Error', message: error.message }, { status: 500 });
        } else {
            console.error('Unexpected error:', error);
            return NextResponse.json({ error: 'Internal Server Error', message: 'An unknown error occurred' }, { status: 500 });
        }
    }
}