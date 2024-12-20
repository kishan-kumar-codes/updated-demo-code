import { NextRequest, NextResponse } from 'next/server';


export const dynamic = 'force-dynamic';
export async function GET(req: NextRequest) {
    try {
        // Forward the request to the Fortis API
        const fortisResponse = await fetch('https://api.sandbox.fortis.tech/v1/transactions', {
            method: 'GET',
            headers: {
                'user-id': process.env.USER_ID!,
                'user-api-key': process.env.USER_API_KEY!,
                'developer-id': process.env.DEVELOPER_ID!,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
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
            return new NextResponse(JSON.stringify({ error: 'Failed to fetch transactions', details: errorDetails }), {
                status: fortisResponse.status,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store, max-age=0'
                }
            });
        } else {
            const responseData = await fortisResponse.json();
            return new NextResponse(JSON.stringify(responseData), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-store, max-age=0'
                }
            });
        }
    } catch (error) {
        // Handle unexpected errors
        console.error('Unexpected error:', error);
        return new NextResponse(JSON.stringify({
            error: 'Internal Server Error',
            message: error instanceof Error ? error.message : 'An unknown error occurred',
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store, max-age=0'
            }
        });
    }
}