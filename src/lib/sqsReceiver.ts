import { SQSClient, ReceiveMessageCommand, DeleteMessageCommand, Message } from "@aws-sdk/client-sqs";
import 'dotenv/config';

// Instantiate SQS Client
const client = new SQSClient({
    region: process.env.AWS_REGION,
});

// Parameterized function to poll messages from a specified SQS queue
async function pollQueueForMessages(queueUrl: string) {
    try {
        // Request to receive messages from the specified SQS queue
        const receiveCommand = new ReceiveMessageCommand({
            QueueUrl: queueUrl,
            MaxNumberOfMessages: 10, // Adjustable and based on preference
            WaitTimeSeconds: 20, // Enable long polling
        });

        // Send command to receive messages
        const response = await client.send(receiveCommand);

        if (response.Messages && response.Messages.length > 0) {
            console.log(`Received ${response.Messages.length} messages from ${queueUrl}`);

            // Iterate through each message
            for (const message of response.Messages) {
                console.log("Message Body:", message.Body);
                // Distinguish processing logic based on the queue URL
                if (queueUrl === process.env.SQS_FINISH_QUEUE_URL) {
                    console.log("Processing message from finish queue:", message.Body);
                    // Process success message
                    await processFinishMessage(message);
                } else if (queueUrl === process.env.SQS_ERROR_QUEUE_URL) {
                    console.log("Processing message from error queue:", message.Body);
                    // Process error message
                    processErrorMessage(message);
                }

                // Delete the message from the queue after processing to prevent it from being received again
                await client.send(new DeleteMessageCommand({
                    QueueUrl: queueUrl,
                    ReceiptHandle: message.ReceiptHandle!,
                }));
            }
        }
    } catch (error) {
        console.error("Error receiving messages:", error);
    }

    // Continuously poll the queue
    setTimeout(() => pollQueueForMessages(queueUrl), 1000);
}

async function processFinishMessage(message: Message) {
    if (!message.Body) return;

    try {
        const messageData = JSON.parse(message.Body);
        // Assuming the message contains a 'business' object with relevant info
        const { business, reviews_urls } = messageData;

        console.log(`Received review data for business ID: ${business.id}`);
        // Example action: Update the database with the received review data

        // Check if reviews_urls is present and is an array
        if (Array.isArray(reviews_urls)) {
            // Process each URL in the reviews_urls array
            for (const url of reviews_urls) {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        console.error(`Failed to fetch review data from ${url}: HTTP ${response.status}`);
                        continue; // Skip to the next URL in case of error
                    }

                    // Assuming the files contain JSON Lines format
                    const text = await response.text();
                    const reviews = text.trim().split('\n').map(line => {
                        const review = JSON.parse(line);

                        // Decode base64 encoded 'text' and 'author_name', if they are not null, using atob
                        if (review.text) {
                            review.text = atob(review.text);
                        }
                        if (review.author_name) {
                            review.author_name = atob(review.author_name);
                        }

                        console.log(review);
                        return review;
                    });

                    // Example action: Process the fetched review data
                    console.log(`Fetched ${reviews.length} reviews from ${url}`);
                    // Here could update the database or perform further processing with the reviews

                } catch (error) {
                    console.error(`Error fetching or processing reviews from ${url}:`, error);
                }
            }
        }

    } catch (error) {
        console.error("Error processing finish message:", error);
    }
}

function processErrorMessage(message: Message) {
    if (!message.Body) return;

    try {
        const messageData = JSON.parse(message.Body);
        // Assuming the message contains an 'error' object with a code and message
        const { error } = messageData;

        console.error(`Error processing review request: ${error.code} - ${error.message}`);
        // Example action: Log the error to an error tracking service or send an alert
        // e.g., sendErrorNotification(error);

    } catch (error) {
        console.error("Error processing error message:", error);
    }
}

const finishQueueUrl = process.env.SQS_FINISH_QUEUE_URL; // URL for the finish queue
const errorQueueUrl = process.env.SQS_ERROR_QUEUE_URL; // URL for the error queue
console.log("Finish Queue URL:", process.env.SQS_FINISH_QUEUE_URL);
console.log("Error Queue URL:", process.env.SQS_ERROR_QUEUE_URL);

// Start polling the queues
if (finishQueueUrl && errorQueueUrl) {
    pollQueueForMessages(finishQueueUrl).then(r => {
        console.log('Finished polling the finish queue', r);
    }).catch(err => {
        console.error('Error polling the finish queue:', err);
    });

    pollQueueForMessages(errorQueueUrl).then(r => {
        console.log('Finished polling the error queue', r);
    }).catch(err => {
        console.error('Error polling the error queue:', err);
    });
} else {
    console.error('One or more required environment variables (finishQueueUrl or errorQueueUrl) are not defined.');
}
