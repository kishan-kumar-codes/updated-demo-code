import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    // Ensure id is a string
    if (typeof id !== 'string') {
        return NextResponse.json({ error: 'Invalid parameter: id must be a string' }, { status: 400 });
    }

    // Construct the URL with the id directly in the endpoint
    // const url = `https://api.sandbox.fortis.tech/v1/transactions/cc/sale/keyed/${id}`;
    const url = "";

    // Fetch the data from the Fortis API
    try {
        const fortisResponse = await fetch(url, {
            method: 'GET',
            headers: {
                'user-id': process.env.USER_ID!,
                'user-api-key': process.env.USER_API_KEY!,
                'developer-id': process.env.DEVELOPER_ID!,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
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
            return NextResponse.json({ error: 'Failed to retrieve invoice', details: errorDetails }, { status: fortisResponse.status });
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