import { createSlice, PayloadAction } from '@reduxjs/toolkit';




export interface WidgetTypes {

    // Reputation Tab 
    showCaseReview: boolean;
    selectReviews: boolean;
    widgetDesign: boolean;
    listWidget: boolean;
    carouselWidget: boolean;


    //Design Type
    preset: number;

    //Layout Type
    layoutWidgetHeight: number;
    noOfLayout: number;
    noofReviewstoShow: number;

    // Container Type
    customizeBackground: string;
    customizeRadius: number;
    customizeBorder: boolean;
    customizeShadow: boolean;
    customizeWidgetTitle: boolean;
    customizeTitleText: string;
    displayReview: boolean;

    //Text Type
    customizeFont: string,
    customizeTextBackGround: string,
    customizeLinkColor: string,
    customizeSize: number,
    customizeAlignment: string,

    //Review Type
    showReviewerName: boolean
    showReviewerSiteIcon: boolean
    showBusinessDetails: boolean
    customizeDate: string
    fontCharacter: number
    setReviewBg: string
    setCornerRadius: number
    setCustomizeBorder: boolean
    setCustomizeShadow: boolean
    shadowX: number
    shadowY: number
    shadowBlur: number
    shadowSpread: number
    shadowColor: string
    isExpanded: { [key: number]: boolean }

    //Full Screen
    isFullScreen: boolean
    handleSmallScreen: boolean


    //Animation Carousel 
    rotateSlides: boolean,
    transitionStyle: boolean,
    transitionSpeed: number,
    showSlideArrows: string,
    showSlideDots: string,

}

export const initialState: WidgetTypes = {


    //Reputation Tab
    showCaseReview: true,
    selectReviews: false,
    widgetDesign: false,
    listWidget: false,
    carouselWidget: false,



    // Design Preset
    preset: 0,

    // Layout
    layoutWidgetHeight: 960,
    noOfLayout: 1,
    noofReviewstoShow: 50,

    // Container State
    customizeBackground: "#FFFFFF",
    customizeRadius: 20,
    customizeBorder: false,
    customizeShadow: false,
    customizeWidgetTitle: false,
    customizeTitleText: "Customer Reviews",
    displayReview: true,

    // Text State
    customizeFont: "Arial",
    customizeTextBackGround: "#6D6D6D",
    customizeLinkColor: "#BF0C0C",
    customizeSize: 9,
    customizeAlignment: "start",

    //Review State
    showReviewerName: true,
    showReviewerSiteIcon: true,
    showBusinessDetails: true,
    customizeDate: "hidden",
    fontCharacter: 140,
    setReviewBg: "#cdcdcd",
    setCornerRadius: 12,
    setCustomizeBorder: false,
    setCustomizeShadow: false,
    shadowX: 0,
    shadowY: 3,
    shadowBlur: 3,
    shadowSpread: 3,
    shadowColor: "#6D6D6D",
    isExpanded: {},

    //full screen
    isFullScreen: false,
    handleSmallScreen: false,


    //animation carousel 
    rotateSlides: false,
    transitionStyle: true,
    transitionSpeed: 2000,
    showSlideArrows: "yes",
    showSlideDots: "yes",
};


const widgetSlice = createSlice({
    name: 'widget',
    initialState,
    reducers: {
        setWidget(state, action: PayloadAction<Partial<WidgetTypes>>) {
            return { ...state, ...action.payload };
        },

    },
});


export const { setWidget } = widgetSlice.actions;
export default widgetSlice.reducer;