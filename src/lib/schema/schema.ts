import { z } from "zod";
export const campaignformSchema = z.object({
    buying: z.enum([
        "auction",
        "reservation",
    ], {
        required_error: "Buying is required",
        invalid_type_error: "Invalid Buying",
    }),
    adname: z.string().min(1, {
        message: "Please enter your adname ",
    }),
    objective: z.enum(
        [
            "OUTCOME_AWARENESS",
            "OUTCOME_ENGAGEMENT",
            "OUTCOME_LEADS",
            "OUTCOME_SALES",
            "OUTCOME_TRAFFIC",
            "OUTCOME_APP_PROMOTION",
        ],
        {
            required_error: "Objective is required",
            invalid_type_error: "Invalid objective",
        }
    ),
    status: z.enum(
        [
            "Active",
            "Archived",
            "Deleted",
            "Paused",
        ],
        {
            required_error: "Status is required",
            invalid_type_error: "Invalid Status",
        }
    ),

    special_ad_categories: z.enum(["NONE",
        "EMPLOYMENT",
        "HOUSING",
        "CREDIT",
        "ISSUES_ELECTIONS_POLITICS",
        "ONLINE_GAMBLING_AND_GAMING"], {
        required_error: "Special ad is required",
        invalid_type_error: "Invalid Special ad",
    }
    ),
});




export const adsetformSchema = z.object({
    min_age: z.string(),
    max_age: z.string(),
    events: z.enum([
        "APP_INSTALLS",
        "CLICKS",
        "IMPRESSIONS",
        "LINK_CLICKS",
        "NONE",
        "OFFER_CLAIMS",
        "PAGE_LIKES",
        "POST_ENGAGEMENT",
        "THRUPLAY",
        "PURCHASE",
        "LISTING_INTERACTION",
    ], {
        required_error: "Events is required",
        invalid_type_error: "Invalid event goal",
    }),
    bid_amount: z.string().min(1, {
        message: "Bid amount is required",
    }),
    optimization_goal: z.enum(["NONE",
        "APP_INSTALLS",
        "AD_RECALL_LIFT",
        "ENGAGED_USERS",
        "EVENT_RESPONSES",
        "IMPRESSIONS",
        "LEAD_GENERATION",
        "QUALITY_LEAD",
        "LINK_CLICKS",
        "OFFSITE_CONVERSIONS",
        "PAGE_LIKES",
        "POST_ENGAGEMENT",
        "QUALITY_CALL",
        "REACH",
        "LANDING_PAGE_VIEWS",
        "VISIT_INSTAGRAM_PROFILE",
        "VALUE",
        "THRUPLAY",
        "DERIVED_EVENTS",
        "APP_INSTALLS_AND_OFFSITE_CONVERSIONS",
        "CONVERSATIONS",
        "IN_APP_VALUE",
        "MESSAGING_PURCHASE_CONVERSION",
        "SUBSCRIBERS",
        "REMINDERS_SET",
        "MEANINGFUL_CALL_ATTEMPT",
        "PROFILE_VISIT",
        "MESSAGING_APPOINTMENT_CONVERSION"], {
        required_error: "Optimization goal is required",
        invalid_type_error: "Invalid Optimization goal",
    }),
    // object_store_url: z.string(),
    daily_budget: z.string().min(1, {
        message: "Daily budget is required",
    }),
    gender: z.string(),
    adname: z.string().min(1, {
        message: "Please enter your adset name ",
    }),
    pagename: z.string().min(1, {
        message: "Please select a page to publish",
    }),
    status: z.enum(
        [
            "Active",
            "Archived",
            "Deleted",
            "Paused",
        ],
        {
            required_error: "Status is required",
            invalid_type_error: "Invalid Status",
        }
    ),
    startDate: z.date({
        required_error: "Start date is required",
    }).min(new Date(), {
        message: "Start date must be in the future",
    }),
    endDate: z.date({
        required_error: "End date is required",
    }).min(new Date(), {
        message: "End date must be in the future",
    }),
    destination_type: z.enum([
        "WEBSITE",
        "APP",
        "MESSENGER",
        "APPLINKS_AUTOMATIC",
        "WHATSAPP",
        "INSTAGRAM_DIRECT",
        "FACEBOOK",
        "MESSAGING_MESSENGER_WHATSAPP",
        "MESSAGING_INSTAGRAM_DIRECT_MESSENGER",
        "MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP",
        "MESSAGING_INSTAGRAM_DIRECT_WHATSAPP",
        "SHOP_AUTOMATIC",
        "ON_AD",
        "ON_POST",
        "ON_EVENT",
        "ON_VIDEO",
        "ON_PAGE",
        "INSTAGRAM_PROFILE",
        "FACEBOOK_PAGE",
        "INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE",
    ], {
        required_error: "Destination is required",
        invalid_type_error: "Invalid destination name",
    }),
    campaignid: z.string().min(1, {
        message: "Please select your campaign",
    }),
    location: z.enum(["US"], {
        required_error: "Country name is required",
        invalid_type_error: "Invalid country name",
    }
    ),
})
export const cc_schema = z.object({
    card_no: z.string(),
    cardholder: z.string(),
    expirey: z.string(),
    cvv: z.string(),
    country: z.string(),
    state: z.string(),
    city: z.string(),
    address: z.string(),
    zip_address: z.string(),
}
)