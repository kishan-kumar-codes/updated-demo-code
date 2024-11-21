import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the UniqueReview interface directly in this file
export interface UniqueReview {
    id: number;
    content: string;
    rating: number;
    reviewerName:string
    img:any
}

interface ReviewState {
    reviews: UniqueReview[];
}

const initialState: ReviewState = {
    reviews: [],
};

const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        setReviews(state, action: PayloadAction<UniqueReview[]>) {
            state.reviews = action.payload;
        },
    },
});

export const { setReviews } = reviewSlice.actions;
export default reviewSlice.reducer;
