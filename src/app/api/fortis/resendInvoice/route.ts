import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest
) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        // Check if id is provided
        if (!id) {
            return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
        }


        // Construct the URL with the id directly in the endpoint
        const url = `https://api.sandbox.fortis.tech/v1/quick-invoices/${id}/resend`;

        // Forward the request to the Fortis API
        const fortisResponse = await fetch(url, {
            method: 'POST',
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
            return NextResponse.json(
                { error: 'Failed to resend invoice', details: errorDetails },
                { status: fortisResponse.status }
            );
        } else {
            const responseText = await fortisResponse.text();
            let responseData;
            try {
                responseData = responseText ? JSON.parse(responseText) : {};
            } catch (jsonError) {
                console.error('Error parsing JSON response:', jsonError);
                return NextResponse.json(
                    { error: 'Error parsing response from Fortis API', details: responseText },
                    { status: 500 }
                );
            }
            return NextResponse.json(responseData);
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json(
            {
                error: 'Internal Server Error',
                message: error instanceof Error ? error.message : 'An unknown error occurred'
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export async function PUT() {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export async function DELETE() {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export async function PATCH() {
    return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

