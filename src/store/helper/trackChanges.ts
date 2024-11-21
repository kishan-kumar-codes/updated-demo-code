import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { WidgetTypes } from '../slices/widgetSlice';
import { initialState } from '../slices/widgetSlice';


const isStateChangedSelector = createSelector(
    (state: RootState) => state.widget,
    (widgetState) => {
        for (const key in initialState) {
            if (key !== 'preset' && widgetState[key as keyof WidgetTypes] !== initialState[key as keyof WidgetTypes]) {
                return true;
            }
        }
        return false;
    }
);
export { isStateChangedSelector };