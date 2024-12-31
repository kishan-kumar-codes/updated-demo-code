import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AdCreativeState {
  id?: string;
  adCreativeName: string;
  adCreativePrimaryText: string;
  adCreativeHeadline: string;
  adCreativeImage: string;
  adCreativebody: string;
  adCreativeObjectUrl: string;
  adCreativeStatus: string;
}


interface IAdCreativeState {
  adCreative: AdCreativeState[];
  loading: boolean;
  error: string | null;
}


const initialState: IAdCreativeState = {
  adCreative: [],
  loading: false,
  error: null,
};

export const adCreativeSlice = createSlice({
  name: "adCreative",
  initialState,
  reducers: {
    addAdCreative: (state, action: PayloadAction<Omit<AdCreativeState, "id">>) => {
        const newAdCreative = { id: crypto.randomUUID(), ...action.payload };
        state.adCreative.push(newAdCreative);
      },
      },
});

export default adCreativeSlice.reducer;
export const { addAdCreative } = adCreativeSlice.actions;