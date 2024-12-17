import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient } from 'graphql-request';
import { headers } from 'next/headers';

export async function POST(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    try {

        // Extract data from the request body
        const data = await request.json();
        const { terminal_db_id, token, userId, ...fortisData } = data;
        console.log("data", fortisData);

        // Construct the URL with the id directly in the endpoint
        const url = `https://api.sandbox.fortis.tech/v1/terminals/${id}`;

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
            body: JSON.stringify(fortisData),
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
                { error: 'Failed to update merchant onboarding', details: errorDetails },
                { status: fortisResponse.status }
            );
        } else {
            const responseData = await fortisResponse.json();
            return NextResponse.json(responseData);
        }
    } catch (error) {
        console.error('Unexpected error:', error instanceof Error ? error.message : error);
        return NextResponse.json(
            {
                error: 'Internal Server Error',
                message: error instanceof Error ? error.message : 'An unknown error occurred',
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}



export async function PUT() {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
    return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}

