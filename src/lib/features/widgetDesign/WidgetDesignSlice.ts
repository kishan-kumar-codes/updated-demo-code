import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WidgetDesignState {
  activePreset: string;
  widgetMaxHeight: number;
  activeLayout: string;
  bg: string;
  cornerRadius: number;
  titleText: string;
  textBg: string;
  linkColor: string;
  alignmentActive: string;
  reviewDateFormate: string;
  reviewfontCount: string;
  reviewbg: string;
  reviewCornerRedius: number;
  reviewX: number;
  reviewY: number;
  reviewBlur: number;
  reviewSpread: number;
  reviewColor: string;
}

interface IWidgetDesign {
  widgetDesignValues: WidgetDesignState; // Change to not allow null
}

const initialState: IWidgetDesign = {
  widgetDesignValues: {
    activePreset: 'Modern',
    widgetMaxHeight: 100,
    activeLayout: '1',
    bg: '#F4F4F4',
    cornerRadius: 10,
    titleText: 'Container',
    textBg: '#F4F4F4',
    linkColor: '#BF0C0C',
    alignmentActive: 'left',
    reviewDateFormate: 'MMDDYYYY',
    reviewfontCount: '140 Characters',
    reviewbg: '#F4F4F4',
    reviewCornerRedius: 5,
    reviewX: 0,
    reviewY: 0,
    reviewBlur: 5,
    reviewSpread: 3,
    reviewColor: '#6D6D6D',
  },
};

export const widgetDesignSlice = createSlice({
  name: "widgetDesign",
  initialState,
  reducers: {
    updateWidgetDesign: (state, action: PayloadAction<Partial<WidgetDesignState>>) => {
      const newValues = action.payload;

      // Only update values if newValues contains at least one property
      if (Object.keys(newValues).length > 0) {
        state.widgetDesignValues = { ...state.widgetDesignValues, ...newValues };
      }
    },
  },
});

export const { updateWidgetDesign } = widgetDesignSlice.actions;
export default widgetDesignSlice.reducer;
