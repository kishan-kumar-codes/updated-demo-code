import { SQSClient } from "@aws-sdk/client-sqs";

const region = process.env.AWS_REGION;
const sqsClient = new SQSClient({
    region,
});

export { sqsClient };
