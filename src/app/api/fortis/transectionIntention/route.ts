import { NextResponse, NextRequest } from "next/server";

const url = 'https://api.sandbox.fortis.tech/v1/elements/transaction/intention';

const developerId = process.env.DEVELOPER_ID;
const userApiKey = process.env.USER_API_KEY;
const userId = process.env.USER_ID;

if (!developerId || !userApiKey || !userId) {
    throw new Error('Missing required environment variables');
}

const headers = new Headers({
    'developer-id': developerId,
    'user-api-key': userApiKey,
    'user-id': userId,
});


const requestOptions = {
    method: 'POST',
    headers: headers,
};

export async function POST(request: NextRequest) {
    try {
        const response = await fetch(url, requestOptions,);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return NextResponse.json(data);
    } catch (error) {
        console.error('Fetch error:', error);
        return NextResponse.error();
    }
}