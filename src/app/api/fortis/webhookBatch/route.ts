import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log("data in the webhookBatch:", data);
    const fortisResponse = await fetch('https://api.sandbox.fortis.tech/v1/webhooks/batch', {
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
        return NextResponse.json({ error: 'Failed to create webhook batch', details: errorDetails }, { status: fortisResponse.status });
    }

    const responseData = await fortisResponse.json();
    console.log("responseData in the webhookBatch:", responseData);
    return NextResponse.json(responseData, { status: 200 });
}