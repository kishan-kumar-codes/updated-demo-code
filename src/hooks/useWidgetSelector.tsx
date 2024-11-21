import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const useWidgetSelectors = () => {
  const designPresetTab = useSelector(
    (state: RootState) => state.widget.preset
  );

  const shadowX = useSelector((state: RootState) => state.widget.shadowX);
  const shadowY = useSelector((state: RootState) => state.widget.shadowY);
  const shadowBlur = useSelector((state: RootState) => state.widget.shadowBlur);
  const shadowSpread = useSelector(
    (state: RootState) => state.widget.shadowSpread
  );
  const displayLayout = useSelector(
    (state: RootState) => state.widget.noOfLayout
  );
  const shadowColor = useSelector(
    (state: RootState) => state.widget.shadowColor
  );

  const customizeTextBgColor = useSelector(
    (state: RootState) => state.widget.customizeTextBackGround
  );

  const customizTextAlignment = useSelector(
    (state: RootState) => state.widget.customizeAlignment
  );

  const reviewBgColor = useSelector(
    (state: RootState) => state.widget.setReviewBg
  );
  const noOfLayout = useSelector((state: RootState) => state.widget.noOfLayout);

  const cornerRadius = useSelector(
    (state: RootState) => state.widget.setCornerRadius
  );

  const showReviewerName = useSelector(
    (state: RootState) => state.widget.showReviewerName
  );
  const showReviewerSiteIcon = useSelector(
    (state: RootState) => state.widget.showReviewerSiteIcon
  );
  const showBusinessDetails = useSelector(
    (state: RootState) => state.widget.showBusinessDetails
  );

  const showDateFormat = useSelector(
    (state: RootState) => state.widget.customizeDate
  );

  const customizeSize = useSelector(
    (state: RootState) => state.widget.customizeSize
  );
  const fontCharacter = useSelector(
    (state: RootState) => state.widget.fontCharacter
  );
  const customizeLinkColor = useSelector(
    (state: RootState) => state.widget.customizeLinkColor
  );
  const noOfReviewsToShows = useSelector(
    (state: RootState) => state.widget.noofReviewstoShow
  );
  const isExpanded = useSelector((state: RootState) => state.widget.isExpanded);
  const selectedFonts = useSelector(
    (state: RootState) => state.widget.customizeFont
  );

  const customizeTitleText = useSelector(
    (state: RootState) => state.widget.customizeTitleText
  );
  const displayHeight = useSelector(
    (state: RootState) => state.widget.layoutWidgetHeight
  );
  const setCustomizeShadow = useSelector(
    (state: RootState) => state.widget.setCustomizeShadow
  );
  const isFullScreen = useSelector(
    (state: RootState) => state.widget.isFullScreen
  );

  const rotateSlides = useSelector(
    (state: RootState) => state.widget.rotateSlides
  );
  const transitionStyle = useSelector(
    (state: RootState) => state.widget.transitionStyle
  );

  const transitionSpeed = useSelector(
    (state: RootState) => state.widget.transitionSpeed
  );
  const showSlideArrows = useSelector(
    (state: RootState) => state.widget.showSlideArrows
  );

  const showSlideDots = useSelector(
    (state: RootState) => state.widget.showSlideDots
  );
  const showCaseReview = useSelector(
    (state: RootState) => state.widget.showCaseReview
  );
  const selectReviews = useSelector(
    (state: RootState) => state.widget.selectReviews
  );
  const widgetDesign = useSelector(
    (state: RootState) => state.widget.widgetDesign
  );
  const listWidget = useSelector((state: RootState) => state.widget.listWidget);
  const carouselWidget = useSelector(
    (state: RootState) => state.widget.carouselWidget
  );
  const displayReview = useSelector(
    (state: RootState) => state.widget.displayReview
  );

  return {
    displayReview,
    listWidget,
    carouselWidget,
    showCaseReview,
    selectReviews,
    widgetDesign,
    rotateSlides,
    transitionStyle,
    transitionSpeed,
    showSlideArrows,
    showSlideDots,
    displayHeight,
    customizeTitleText,
    noOfReviewsToShows,
    designPresetTab,
    shadowX,
    shadowY,
    shadowBlur,
    shadowSpread,
    displayLayout,
    shadowColor,
    customizeTextBgColor,
    customizTextAlignment,
    reviewBgColor,
    cornerRadius,
    showReviewerName,
    showReviewerSiteIcon,
    showBusinessDetails,
    showDateFormat,
    customizeSize,
    fontCharacter,
    customizeLinkColor,
    isExpanded,
    selectedFonts,
    setCustomizeShadow,
    isFullScreen,
    noOfLayout,
  };
};

export default useWidgetSelectors;
