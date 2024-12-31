import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Updated AdSetDetails to include `id`
export interface AdSetDetails {
 
  id?: string; // Unique identifier for each ad set
  adSetStartDate: string;
  adSetEndDate: string;
  adSetCampaignName: string;
  adSetoptimizationGoal: string;
  adSetStatus: string;
  adSetCategory: string;
  adSetBillingEvents: string;
  adSetPublish: string;
  adSetAgeFrom: string;
  adSetAgeTo: string;
  adSetGender: string;
  adSetName: string;
  adSetBidAmount: string;
  adSetDailyBudget: string;
  adSetCountry: string;
}

interface IAdsetState {
  adset: AdSetDetails[];
  loading: boolean;
  error: string | null;
}

const initialState: IAdsetState = {
  adset: [],
  loading: false,
  error: null,
};

export const adsetSlice = createSlice({
  name: "adset",
  initialState,
  reducers: {
    // Modified to include an auto-generated `id` for each new ad set
    adAdset: (state, action: PayloadAction<Omit<AdSetDetails, "id">>) => {
      const newAdSet = { id: crypto.randomUUID(), ...action.payload };
      state.adset.push(newAdSet);
    },
  },
});

export const { adAdset } = adsetSlice.actions;

export default adsetSlice.reducer;
