"use client";
import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSelector, useDispatch } from "react-redux";
import { setWidget } from "@/store/slices/widgetSlice";
import { RootState } from "@/store/store";
import useWidgetSelectors from "@/hooks/useWidgetSelector";
import ColorPickerComponent from "../Webchat-Settings/ColorPicker";

export default function ReviewLayout() {
  const [isBgPickerVisible, setIsBgPickerVisible] = useState(false);
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  const { widgetDesign, listWidget, carouselWidget } = useWidgetSelectors();

  const dispatch = useDispatch();

  const handleBlurX = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setWidget({
        shadowX: Number(event.target.value),
        setCustomizeShadow: true,
      })
    );
  };
  const handleBlurY = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setWidget({
        shadowY: Number(event.target.value),
        setCustomizeShadow: true,
      })
    );
  };
  const handleShadowBlur = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setWidget({
        shadowBlur: Number(event.target.value),
        setCustomizeShadow: true,
      })
    );
  };
  const handleShadowSpread = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setWidget({
        shadowSpread: Number(event.target.value),
        setCustomizeShadow: true,
      })
    );
  };
  const handleBorderRadius = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setWidget({
        setCornerRadius: Number(event.target.value),
        setCustomizeBorder: true,
      })
    );
  };
  const handleShadowChange = (newValue: boolean) => {
    dispatch(
      setWidget({
        setCustomizeShadow: newValue,
      })
    );
  };

  const handleCustomizeBorderChange = (newValue: boolean) => {
    dispatch(
      setWidget({
        setCustomizeBorder: newValue,
      })
    );
  };
  const handleIconChange = (newValue: boolean) => {
    dispatch(
      setWidget({
        showReviewerSiteIcon: newValue,
      })
    );
  };
  const handleDetailsChange = (newValue: boolean) => {
    dispatch(
      setWidget({
        showBusinessDetails: newValue,
      })
    );
  };
  const handleBackgroundChange = (newValue: string) => {
    dispatch(
      setWidget({
        setReviewBg: newValue,
      })
    );
  };
  const handleShadowbgColor = (newColor: string) => {
    dispatch(
      setWidget({
        shadowColor: newColor,
      })
    );
  };
  const handleDateFormat = (newValue: string) => {
    dispatch(
      setWidget({
        customizeDate: newValue,
      })
    );
  };
  const handleFontChar = (newValue: string) => {
    dispatch(
      setWidget({
        fontCharacter: Number(newValue),
      })
    );
  };

  const showReviewerName = useSelector(
    (state: RootState) => state.widget.showReviewerName
  );
  const showReviewerSiteIcon = useSelector(
    (state: RootState) => state.widget.showReviewerSiteIcon
  );
  const showBusinessDetails = useSelector(
    (state: RootState) => state.widget.showBusinessDetails
  );
  const shadowX = useSelector((state: RootState) => state.widget.shadowX);
  const shadowY = useSelector((state: RootState) => state.widget.shadowY);
  const shadowBlur = useSelector((state: RootState) => state.widget.shadowBlur);
  const cornerRadius = useSelector(
    (state: RootState) => state.widget.setCornerRadius
  );
  const setCustomizeShadow = useSelector(
    (state: RootState) => state.widget.setCustomizeShadow
  );
  const setReviewBg = useSelector(
    (state: RootState) => state.widget.setReviewBg
  );
  const shadowSpread = useSelector(
    (state: RootState) => state.widget.shadowSpread
  );

  const customizeShadow = useSelector(
    (state: RootState) => state.widget.customizeShadow
  );
  const setCustomizeBorder = useSelector(
    (state: RootState) => state.widget.setCustomizeBorder
  );
  const shadowColor = useSelector(
    (state: RootState) => state.widget.shadowColor
  );

  const showDateFormat = useSelector(
    (state: RootState) => state.widget.customizeDate
  );
  const fontCharacter = useSelector(
    (state: RootState) => state.widget.fontCharacter
  );

  return (
    <div className="px-3 lg:px-6 pt-4 md:pt-10 pb-6">
      <div className="flex flex-col w-full gap-5 ">
        <div className="w-full ">
          <div className="flex flex-col pb-2 gap-3 md:gap-4">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={showReviewerName}
                onCheckedChange={() => {
                  dispatch(setWidget({ showReviewerName: !showReviewerName }));
                }}
                id="border-text"
                className="border-black rounded-sm"
              />
              <Label
                htmlFor="border-text"
                className="text-xs md:text-base lg:text-[20px]  font-normal text-[#6D6D6D]">
                Display Reviewer’s Name
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={showReviewerSiteIcon}
                onCheckedChange={() => {
                  dispatch(
                    setWidget({ showReviewerSiteIcon: !showReviewerSiteIcon })
                  );
                }}
                id="shadow-text"
                className="border-black rounded-sm"
              />
              <Label
                htmlFor="shadow-text"
                className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]">
                Display Review Site Icon
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                checked={showBusinessDetails}
                onCheckedChange={() => {
                  dispatch(
                    setWidget({ showBusinessDetails: !showBusinessDetails })
                  );
                }}
                id="widget-title"
                className="border-black rounded-sm"
              />
              <Label
                htmlFor="widget-title"
                className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]">
                Add Business Details To Schema
              </Label>
            </div>
          </div>
          <div className="text-xs md:text-base lg:text-[20px] py-1 md:py-3 text-[#6D6D6D] font-bold">
            Date Format:
          </div>
          <RadioGroup
            onValueChange={handleDateFormat}
            defaultValue={showDateFormat}>
            <div className="flex gap-2 pb-2 flex-wrap  flex-row">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border text-xs md:text-base lg:text-[20px] border-black"
                  value="MMDDYYYY"
                  id="r1"
                />
                <Label
                  className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="r1">
                  MMDDYYYY
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border border-black"
                  value="DDMMYYYY"
                  id="r2"
                />
                <Label
                  className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="r2">
                  DDMMYYYY
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border border-black"
                  value="hidden"
                  id="r3"
                />

                <Label
                  className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="r3">
                  Hiden
                </Label>
              </div>
            </div>
          </RadioGroup>
          <div className="text-xs md:text-base lg:text-[20px] py-1 md:py-3 text-[#6D6D6D] font-bold">
            Font:
          </div>
          <RadioGroup
            onValueChange={handleFontChar}
            defaultValue={fontCharacter.toString()}>
            <div className="flex gap-2 pb-2  flex-row">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border flex-shrink-0 border-black"
                  value="140"
                  id="140char"
                />
                <Label
                  className="text-[20px] text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="140">
                  140 Characters
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border flex-shrink-0 border-black"
                  value="280"
                  id="280char"
                />
                <Label
                  className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="280char">
                  280 Characters
                </Label>
              </div>
            </div>
          </RadioGroup>
          <div className="flex md:flex-wrap lg:flex-nowrap">
            <div>
              <div className="text-xs md:text-base lg:text-[20px] py-1 md:py-3 text-[#6D6D6D] font-bold">
                Background:
              </div>
              <div className="flex items-center  w-full gap-4 md:gap-2">
                <div className="text-sm bg-[#F4F4F4]  rounded-xl w-20 md:w-32 p-2">
                  {setReviewBg}
                </div>
                <div
                  className="relative h-10 w-10 rounded-2xl"
                  style={{ backgroundColor: setReviewBg }}
                  onMouseEnter={() => setIsBgPickerVisible(true)}
                  onMouseLeave={() => setIsBgPickerVisible(false)}>
                  {isBgPickerVisible && (
                    <ColorPickerComponent
                      id="bubbleColor"
                      pickColor={setReviewBg}
                      onChange={handleBackgroundChange}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex pl-4 md:pl-0 lg:pl-[6px] w-full  flex-col">
              <div className=" py-1 md:py-3 flex-nowrap tracking-tight whitespace-nowrap text-xs md:text-base lg:text-[20px] text-[#6D6D6D] font-bold">
                Corner Radius:
              </div>
              <div className="flex items-center gap-2">
                <Input
                  className="rounded-xl md:w-[30%] lg:w-[50%] bg-[#F4F4F4]"
                  onChange={handleBorderRadius}
                  value={cornerRadius}
                  type="number"
                />
                <div className="text-xs md:text-base lg:text-[20px] text-[#6D6D6D] font-bold">
                  px
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {listWidget && (
        <>
          <div className="flex py-1 md:py-3 pt-3 items-center gap-2">
            <Checkbox
              checked={setCustomizeBorder}
              onCheckedChange={handleCustomizeBorderChange}
              id="shadow-text"
              className="border-black rounded-sm"
            />
            <Label
              htmlFor="shadow-text"
              className="text-xs md:text-base lg:text-[20px]  text-[#6D6D6D]">
              Customize Border
            </Label>
          </div>
          <div className="flex  py-3 items-center gap-2">
            <Checkbox
              checked={setCustomizeShadow}
              onCheckedChange={handleShadowChange}
              id="shadow-text"
              className="border-black rounded-sm"
            />
            <Label
              htmlFor="shadow-text"
              className="text-xs md:text-base lg:text-[20px] text-[#6D6D6D]">
              Customize Shadow
            </Label>
          </div>
          <div className="flex gap-1 flex-wrap">
            <div className="flex flex-col items-start">
              <Label className="text-[#6D6D6D] pl-1 py-1 md:py-2 font-bold text-xs md:text-base lg:text-[20px]">
                X:
              </Label>
              <Input
                value={shadowX}
                onChange={handleBlurX}
                className="w-10 md:w-14 rounded-xl"
                type="number"
              />
            </div>
            <div className="flex flex-col items-start ">
              <Label className="text-xs md:text-base lg:text-[20px] text-[#6D6D6D]  pl-1 py-1 md:py-2 font-bold">
                Y:
              </Label>
              <Input
                value={shadowY}
                onChange={handleBlurY}
                className="w-10 md:w-14 rounded-xl"
                type="number"
              />
            </div>
            <div className="flex flex-col items-start">
              {" "}
              <Label className="text-xs md:text-base lg:text-[20px] pl-1 py-1 md:py-2 text-[#6D6D6D] font-bold">
                Blur:
              </Label>
              <Input
                value={shadowBlur}
                onChange={handleShadowBlur}
                className="w-10 md:w-14 rounded-xl"
                type="number"
              />
            </div>
            <div className="flex flex-col items-start">
              <Label className="text-xs md:text-base lg:text-[20px]  pl-1 py-1 md:py-2 text-[#6D6D6D] font-bold">
                Spread:
              </Label>
              <Input
                value={shadowSpread}
                onChange={handleShadowSpread}
                className="w-12 md:w-14 rounded-xl"
                type="number"
              />
            </div>
            <div className="pl-1.5 flex flex-col items-start">
              <Label className="text-xs md:text-base lg:text-[20px]  pl-1 py-1 md:py-2 text-[#6D6D6D] font-bold">
                Color:
              </Label>
              <div className="flex items-center  w-full gap-4">
                <div className="text-sm bg-[#F4F4F4] rounded-xl w-fit md:w-24 p-2">
                  {shadowColor}
                </div>
                <div
                  className="relative h-10 w-10 rounded-2xl"
                  style={{ backgroundColor: shadowColor }}
                  onMouseEnter={() => setIsPickerVisible(true)}
                  onMouseLeave={() => setIsPickerVisible(false)}>
                  {isPickerVisible && (
                    <ColorPickerComponent
                      id="bubbleColor"
                      pickColor={shadowColor}
                      onChange={handleShadowbgColor}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
