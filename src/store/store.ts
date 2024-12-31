import { configureStore } from '@reduxjs/toolkit';
import widgetSlice from './slices/widgetSlice';
import webChatReducer, { webChatSlice } from './slices/webChatSlice';
import webChatSettingsSlice from "./slices/webChatSettingSlice"
import reviewReducer from './slices/reviewSlice';
import campaignReducer from "@/lib/features/FacebookAds/CampaignSlice";
import adsetReducer from "@/lib/features/FacebookAds/AdsetSlice";
import adCreativeReducer from "@/lib/features/FacebookAds/AdCreativeSlice";
import payAllReducer from "@/lib/features/FacebookAds/PayAllSlice";

const store = configureStore({
    reducer: {
        widget: widgetSlice,
        webChat: webChatReducer,
        webChats: webChatSettingsSlice,
        reviews: reviewReducer,
        Fbcampaign: campaignReducer,
        FbadSet: adsetReducer,
        FbadCreative: adCreativeReducer,
        FbPayAll: payAllReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;