import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PayAllState {
  paymentInfo: {
    name: string;
    cardNumber: string;
    cvv: string;
    expiryDate: string;
  };
  billingInfo: {
    address: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
  };
  additionalInfo: {
    email: string;
    phone: string;
    notificationEmail: string;
    termsAndConditions: boolean;
  };
}

interface IPayAllSlice {
  payAllDetails: PayAllState[];
  loading: boolean;
  error: string | null;
}

const initialState: IPayAllSlice = {
  payAllDetails: [],
  loading: false,
  error: null,
};

export const payAllSlice = createSlice({
  name: "payAllDetails",
  initialState,
  reducers: {
    addPayAll: (state, action: PayloadAction<Omit<PayAllState, "id">>) => {
      const newPayAll = { id: crypto.randomUUID(), ...action.payload };
      state.payAllDetails.push(newPayAll);
    },
  },
});

export default payAllSlice.reducer;
export const { addPayAll } = payAllSlice.actions;
