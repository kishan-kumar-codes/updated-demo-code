import { NextRequest, NextResponse } from 'next/server';

function generateCode(): string {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

export async function POST(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const to = searchParams.get('to');

    if (!to) {
        return NextResponse.json({ success: false, error: 'Phone number is required' }, { status: 400 });
    }

    const code = generateCode();
    const url = 'https://api.telnyx.com/v2/messages';

    const data = {
        from: process.env.TELNYX_PHONE_NUMBER,
        messaging_profile_id: process.env.TELNYX_PROFILE_ID,
        to: `+1${to}`,
        text: `Your verification code is: ${code}`,
        subject: "From Hubspark!",
        type: "SMS"
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.TELNYX_API_KEY}`
            },
            body: JSON.stringify(data)
        });

        console.log(response, ">>>>>>>>>>")

        if (response.ok) {
            const responseData = await response.json();
            return NextResponse.json({ success: true, code, message: 'SMS sent successfully', data: responseData });
        } else {
            const errorText = await response.text();
            console.error("Failed to send SMS:", errorText);
            return NextResponse.json({ success: false, error: errorText }, { status: 502 });
        }
    } catch (error) {
        console.error('Unexpected error:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}