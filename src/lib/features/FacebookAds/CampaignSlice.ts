import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Campaign {
  campaignName: string;
  campaignObjective: string;
  campaignStatus: string;
  campaignCategory: string;
  campaignBuyingType: string;
}

interface ICampaignState {
  campaign: Campaign[];
  loading: boolean;
  error: string | null;
}

const initialState: ICampaignState = {
  campaign: [],
  loading: false,
  error: null,
};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    addCampaign: (state, action: PayloadAction<Campaign>) => {
      state.campaign.push(action.payload);
    },
  },
});

export const { addCampaign } = campaignSlice.actions;

export default campaignSlice.reducer;
