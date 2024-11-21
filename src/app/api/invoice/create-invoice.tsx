import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";
import * as jwt from "jsonwebtoken";

const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
    headers: {
        "Content-Type": "application/json",
        "Dg-Auth": `${process.env.DGRAPH_GRAPHQL_KEY!}`,
    },
});

const refreshTokenMutation = `
  mutation RefreshToken($refreshToken: String!) {
    updateSession(input: { filter: { refreshToken: { eq: $refreshToken } }, set: { refreshToken: $refreshToken } }) {
      session {
        refreshToken
      }
    }
  }
`;

const item = `
{
    name: String!,
    quantity: Number!,
    unitPrice: String!
  }

`
const createInvoiceMutation = `
  mutation CreateInvoice(
    $items: [${item}]!,
    $title: String!,
    $dueDate: String!,
    $locationId: String,
    $allowOverPay: Boolean,
    $bankFundedOnlyOverride: Boolean,
    $email: String,
    $customerId: String!,
    $expireDate: String!,
    $allowPartialPar: Boolean,
    $sendEmail: Boolean,
    $invoiceNumber: String!,
    $itemHeader: String!,
    $itemFooter: String!,
    $amountDue: Float,
    $notificationEmail: String,
    $statusId: Int,
    $statusCode: Int,
    $note: String,
    $notificationDayB4DueDay: Int,
    $notificationDayAfterDueDay: Int,
    $notificationOnDueDate: Boolean,
    $sendTextToPay: Boolean,
    $remainingBalance: Float,
    $singlePaymentMinAmount: Float,
    $singlePaymentMaxAmount: Float,
    $cellPhone: String,
  ) {
    createInvoice(
      input: {
        filter: { email: { eq: $email } },
        set: {
            items: $items,
            title: $title,
            dueDate: $dueDate,
            locationId: $locationId,
            allowOverPay: $allowOverPay,
            bankFundedOnlyOverride: $bankFundedOnlyOverride,
            email: $email,
            customerId: $customerId,
            expireDate: $expireDate,
            allowPartialPar: $allowPartialPar,
            sendEmail: $sendEmail,
            invoiceNumber: $invoiceNumber,
            itemHeader: $itemHeader,
            itemFooter: $itemFooter,
            amountDue: $amountDue,
            notificationEmail: $notificationEmail,
            statusId: $statusId,
            statusCode: $statusCode,
            note: $note,
            notificationDayB4DueDay: $notificationDayB4DueDay,
            notificationDayAfterDueDay: $notificationDayAfterDueDay,
            notificationOnDueDate: $notificationOnDueDate,
            sendTextToPay: $sendTextToPay,
            remainingBalance: $remainingBalance,
            singlePaymentMinAmount: $singlePaymentMinAmount,
            singlePaymentMaxAmount: $singlePaymentMaxAmount,
            cellPhone: $cellPhone
        }
      }
    ) {
      user {
        firstName,
        lastName,
        businessInfo,
        phoneNumber,
        goals,
        image,
        jobTitle,
        selectedIndustry,
        selectedEmployees,
        selectedRevenue,
        emailList,
        businessWebsite,
        inviteEmailList
      }
    }
  }
`;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        return res.status(405).end(); // Method Not Allowed
    }

    const {
        token,
        email,
        items,
        title,
        dueDate,
        locationId,
        allowOverPay,
        bankFundedOnlyOverride,
        customerId,
        expireDate,
        allowPartialPar,
        sendEmail,
        invoiceNumber,
        itemHeader,
        itemFooter,
        amountDue,
        notificationEmail,
        statusId,
        statusCode,
        note,
        notificationDayB4DueDay,
        notificationDayAfterDueDay,
        notificationOnDueDate,
        sendTextToPay,
        remainingBalance,
        singlePaymentMinAmount,
        singlePaymentMaxAmount,
        cellPhone
    } = req.body;

    try {
        // Decode and verify the session token
        const decodedToken = jwt.verify(
            token.sessionToken,
            process.env.SECRET!
        ) as { email: string };
        // Update user in Dgraph
        const variables = {
            items: items,
            title: title,
            dueDate: dueDate,
            locationId: locationId,
            allowOverPay: allowOverPay,
            bankFundedOnlyOverride: bankFundedOnlyOverride,
            email: email,
            customerId: customerId,
            expireDate: expireDate,
            allowPartialPar: allowPartialPar,
            sendEmail: sendEmail,
            invoiceNumber: invoiceNumber,
            itemHeader: itemHeader,
            itemFooter: itemFooter,
            amountDue: amountDue,
            notificationEmail: notificationEmail,
            statusId: statusId,
            statusCode: statusCode,
            note: note,
            notificationDayB4DueDay: notificationDayB4DueDay,
            notificationDayAfterDueDay: notificationDayAfterDueDay,
            notificationOnDueDate: notificationOnDueDate,
            sendTextToPay: sendTextToPay,
            remainingBalance: remainingBalance,
            singlePaymentMinAmount: singlePaymentMinAmount,
            singlePaymentMaxAmount: singlePaymentMaxAmount,
            cellPhone: cellPhone
        };

        const data = await client.request(createInvoiceMutation, variables);
        const updatedUser = data.updateUser.user;

        if (updatedUser.length === 0) {
            throw new Error("User not found or update failed");
        }

        res.status(200).json(updatedUser[0]);
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            // Token expired, try to refresh it
            try {
                const decodedRefreshToken = jwt.decode(token.refreshToken) as string;                
                // Refresh token mutation
                await client.request(refreshTokenMutation, {
                    refreshToken: token.refreshToken,
                });

                // Retry the update user request with the original session token
                const newVariables = {
                    items: items,
                    title: title,
                    dueDate: dueDate,
                    locationId: locationId,
                    allowOverPay: allowOverPay,
                    bankFundedOnlyOverride: bankFundedOnlyOverride,
                    email: email,
                    customerId: customerId,
                    expireDate: expireDate,
                    allowPartialPar: allowPartialPar,
                    sendEmail: sendEmail,
                    invoiceNumber: invoiceNumber,
                    itemHeader: itemHeader,
                    itemFooter: itemFooter,
                    amountDue: amountDue,
                    notificationEmail: notificationEmail,
                    statusId: statusId,
                    statusCode: statusCode,
                    note: note,
                    notificationDayB4DueDay: notificationDayB4DueDay,
                    notificationDayAfterDueDay: notificationDayAfterDueDay,
                    notificationOnDueDate: notificationOnDueDate,
                    sendTextToPay: sendTextToPay,
                    remainingBalance: remainingBalance,
                    singlePaymentMinAmount: singlePaymentMinAmount,
                    singlePaymentMaxAmount: singlePaymentMaxAmount,
                    cellPhone: cellPhone
                };

                const newData = await client.request(createInvoiceMutation, newVariables);                
                const newUpdatedUser = newData.updateUser.user;                

                if (newUpdatedUser.length === 0) {
                    throw new Error("User not found or update failed");
                }

                res.status(200).json(newUpdatedUser[0]);
            } catch (refreshError) {
                console.error("Error refreshing refresh token:", refreshError);
                res.status(500).json({ error: "Failed to refresh refresh token" });
            }
        } else {
            console.error("Error updating user profile:", error);
            res.status(500).json({ error: "Failed to update user profile" });
        }
    }
}
