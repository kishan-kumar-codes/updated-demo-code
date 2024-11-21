import type { NextApiRequest, NextApiResponse } from 'next';

type FortisOnboardingWebhookResponse = {
    type: string;
    stage: string;
    data: {
        company: {
            legal_name: string;
            dba_name: string;
            address: {
                address_1: string;
                address_2: string;
                city: string;
                state: string;
                postal_code: string;
                country: string;
                phone_number: string;
            };
            email: string;
            website: string;
        };
        parent_id: string;
        location_id: string;
        client_app_id: string;
        tz: string;
        users: Array<{
            user_id: string;
            user_api_key: string;
            email: string;
        }>;
        product_transactions: Array<{
            id: string;
            payment_method: string;
            processor: string;
            title: string;
            receipt_header: string | null;
            receipt_footer: string | null;
            receipt_add_account_above_signature: string | null;
            receipt_add_recurring_above_signature: string | null;
            receipt_logo: string | null;
            receipt_show_contact_name: boolean;
            industry_type: string;
            partner: string | null;
            vt_cvv: boolean;
            vt_street: boolean;
            vt_zip: boolean;
            vt_order_num: boolean;
            display_avs: boolean;
            vt_enable: boolean;
            vt_enable_tip: boolean;
            velocity_settings: {
                debit_hold_days: number;
                debit_items_per_day: number;
                debit_daily_aggregate: number;
                debit_items_per_month: number;
                debit_monthly_aggregate: number;
                refund_items_per_day: number;
                refund_daily_aggregate: number;
                refund_items_per_month: number;
                refund_monthly_aggregate: number;
                refund_hold_days: number;
                credit_largest_item: number;
                credit_daily_aggregate: number;
                credit_items_per_day: number;
                credit_items_per_month: number;
                credit_monthly_aggregate: number;
            };
            surcharge: object | null;
            default_transaction_type: string;
            vt_require_street: boolean;
            vt_require_zip: boolean;
            vt_enable_sales_tax: boolean;
            vt_override_sales_tax_allowed: boolean;
            current_batch: number;
            vt_billing_phone: boolean;
            vt_clerk_number: boolean;
            quick_invoice_allow: boolean;
            active: boolean;
            hosted_payment_page_max_allowed: number;
            hosted_payment_page_allow: boolean;
            auto_decline_cvv: boolean;
            level3_allow: boolean;
            level3_default: string | null;
            tax_surcharge_config: number;
        }>;
    };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const webhookData: FortisOnboardingWebhookResponse = req.body;

            // Send a response back to acknowledge the receipt of the webhook
            res.status(200).json({ message: 'Webhook received and processed' });
        } catch (error) {
            console.error('Error processing webhook:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // If the request is not a POST request
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}