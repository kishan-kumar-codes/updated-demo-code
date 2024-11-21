// import type { NextApiRequest, NextApiResponse } from 'next';
// import { SendMessageCommand } from '@aws-sdk/client-sqs';
// import { sqsClient } from '@/lib/sqsClient';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const queueUrl = process.env.SQS_REQUEST_QUEUE_URL;

//     const { body } = req;
//     const messagePayload = {
//         job: 'App\\Jobs\\RequestReviews',
//         data: {
//             api_key: process.env.API_KEY,
//             ...body, // Spread the body directly into data
//         },
//     };

//     try {
//         const command = new SendMessageCommand({
//             QueueUrl: queueUrl,
//             MessageBody: JSON.stringify(messagePayload),
//         });

//         const result = await sqsClient.send(command);
//         console.log(result);
//         res.status(200).json({ messageId: result.MessageId, message: 'Request submitted successfully.' });
//     } catch (error) {
//         console.error('Error sending message to SQS:', error);
//         res.status(500).json({ error: 'Failed to send message to SQS' });
//     }
// }


import { NextRequest, NextResponse } from 'next/server';
import { SendMessageCommand } from '@aws-sdk/client-sqs';
import { sqsClient } from '@/lib/sqsClient';

export async function POST(request: NextRequest) {
    const queueUrl = process.env.SQS_REQUEST_QUEUE_URL;

    try {
        const body = await request.json();
        const messagePayload = {
            job: 'App\\Jobs\\RequestReviews',
            data: {
                api_key: process.env.API_KEY,
                ...body, // Spread the body directly into data
            },
        };

        const command = new SendMessageCommand({
            QueueUrl: queueUrl,
            MessageBody: JSON.stringify(messagePayload),
        });

        const result = await sqsClient.send(command);
        console.log(result);
        return NextResponse.json({ messageId: result.MessageId, message: 'Request submitted successfully.' });
    } catch (error) {
        console.error('Error sending message to SQS:', error);
        return NextResponse.json({ error: 'Failed to send message to SQS' }, { status: 500 });
    }
}