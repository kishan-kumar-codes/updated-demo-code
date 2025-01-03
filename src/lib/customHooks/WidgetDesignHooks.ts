import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import {
  updateWidgetDesign,
  WidgetDesignState,
} from "../features/widgetDesign/WidgetDesignSlice";

export function useWidgetDesign() {
  const dispatch = useAppDispatch();
  // State for widget tab
  const [widgettabActive, setWidgetTabActive] = React.useState<string>("Edit");

  // State for design preset
  const [design, setDesign] = React.useState<boolean>(false);
  const [activePreset, setActivePreset] = React.useState<string>("Modern");
  const [loading, setLoading] = useState<boolean>(false);
  // State for layout settings
  const [layout, setLayout] = React.useState<boolean>(false);
  const [activeLayout, setActiveLayout] = React.useState<string>("1");
  const [widgetMaxHeight, setWidgetMaxHeight] = React.useState<number>(100);

  // State for container settings
  const [container, setContainer] = React.useState<boolean>(false);
  const [bg, setBg] = React.useState<string>("#F4F4F4");
  const [cornerRadius, setCornerRadius] = React.useState<number>(10);
  const [titleText, setTitleText] = React.useState<string>("Customer Reviews");

  // State for text settings
  const [text, setText] = React.useState<boolean>(false);
  const [alignmentActive, setAlignmentActive] = React.useState<string>("left");
  const [textBg, setTextBg] = React.useState<string>("#F4F4F4");
  const [linkColor, setLinkColor] = React.useState<string>("#BF0C0C");

  // State for reviews settings
  const [reviews, setReviews] = React.useState<boolean>(false);
  const [reviewDateFormate, setReviewDateFormate] =
    React.useState<string>("MMDDYYYY");
  const [reviewfontCount, setReviewFontCount] =
    React.useState<string>("140 Characters");
  const [reviewbg, setReviewBg] = React.useState<string>("#E0E0E0");
  const [reviewCornerRedius, setReviewCornerRadius] = React.useState<number>(5); // Should be a number
  const [reviewColor, setReviewColor] = React.useState<string>("#6D6D6D");
  const [reviewX, setReviewX] = React.useState<number>(0); // Changed to number
  const [reviewY, setReviewY] = React.useState<number>(0); // Changed to number
  const [reviewBlur, setReviewBlur] = React.useState<number>(5); // Changed to number
  const [reviewSpread, setReviewSpread] = React.useState<number>(3); // Changed to number

  // Handlers for toggling reviews
  const handleReviews = () => {
    setReviews(!reviews);
  };

  // Handlers for reviews configuration
  const handleReviewDateFormate = (value: string) => {
    setReviewDateFormate(value);
  };
  const handleReviewFontCountChange = (value: string) => {
    setReviewFontCount(value);
  };

  // Handlers for design preset
  const handleDesign = () => setDesign(!design);
  const handleActive = (value: string) => setActivePreset(value);

  // Handlers for layout settings
  const handleLayout = () => setLayout(!layout);

  // Handlers for container settings
  const handleContainer = () => {
    setContainer(!container);
  };

  // Handlers for text settings
  const handleText = () => {
    setText(!text);
  };

  const handleAlignmentActive = (value: string) => {
    setAlignmentActive(value);
  };

  const handleBgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextBg(e.target.value);
  };

  const handleLinkColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkColor(e.target.value);
  };

  const handleActiveLayout = (value: string) => setActiveLayout(value);

  // Handler for widget tab switching
  const widgetDesign: WidgetDesignState = {
    activePreset,
    widgetMaxHeight,
    activeLayout,
    bg,
    cornerRadius,
    titleText,
    textBg,
    linkColor,
    alignmentActive,
    reviewDateFormate,
    reviewfontCount,
    reviewbg,
    reviewCornerRedius,
    reviewX,
    reviewY,
    reviewBlur,
    reviewSpread,
    reviewColor,
  };

  const handleWidgetTab = (value: string) => setWidgetTabActive(value);

  // Function to save the edited widget design
  const handleSaveEditWidgetDesign = async () => {
    try {
      setLoading(true); // Set loading to true when the process starts
      await dispatch(updateWidgetDesign(widgetDesign)); // Wait for the dispatch action to complete
    } catch (error) {
      console.error("Error saving widget design:", error); // Handle any errors if needed
    } finally {
      setLoading(false); // Set loading to false after the save process completes
    }
  };
  

  
  // Return values and handlers
  return {
    // Review-related state and handlers
    reviewDateFormate,
    setReviewDateFormate,
    reviews,
    setReviews,
    reviewfontCount,
    setReviewFontCount,
    reviewbg,
    setReviewBg,
    reviewCornerRedius,
    setReviewCornerRadius,
    reviewColor,
    setReviewColor,
    reviewX,
    setReviewX,

    reviewY,
    reviewBlur,
    reviewSpread,

    setReviewY,

    setReviewBlur,

    setReviewSpread,
    handleReviews,
    handleReviewDateFormate,
    handleReviewFontCountChange,

    // Design-related state and handlers
    design,
    container,
    bg,
    cornerRadius,
    titleText,
    handleText,
    text,
    alignmentActive,
    textBg,
    linkColor,
    handleAlignmentActive,
    handleBgChange,
    handleLinkColorChange,
    handleLayout,
    handleContainer,
    handleDesign,
    handleActive,
    setDesign,
    setContainer,
    setBg,
    setCornerRadius,
    setTitleText,

    // Layout-related state and handlers
    activePreset,
    setActivePreset,
    setWidgetMaxHeight,
    layout,
    widgetMaxHeight,
    activeLayout,
    handleActiveLayout,
    setActiveLayout,
    handleSaveEditWidgetDesign,
    loading,
    // Widget tab-related state and handler
    widgettabActive,
    handleWidgetTab,
  };
}
