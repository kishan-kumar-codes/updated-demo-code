"use client";
import { useState, ChangeEvent } from "react";
import ReviewBudgetProgressBar from "../Review-Widget-mobile/ReviewBudgetProgressBar";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
// import { setConatinerBg } from "@/store/slices/widgetSlice";
import { setWidget } from "@/store/slices/widgetSlice";
import ColorPickerComponent from "../Webchat-Settings/ColorPicker";

export default function ContainerLayout() {
  const dispatch = useDispatch();
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const fonts = [
    "Lato",
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Courier New",
  ];

  const handleColorChange = (newColor: string) => {
    dispatch(
      setWidget({
        customizeBackground: newColor,
      })
    );
  };
  const handleBorderChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setWidget({
        customizeRadius: Number(event.target.value),
        customizeBorder: true,
      })
    );
  };

  const handleCustomizeBorder = (state: boolean) => {
    dispatch(setWidget({ customizeBorder: state }));
  };
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setWidget({
        customizeTitleText: event.target.value,
        customizeWidgetTitle: true,
      })
    );
  };

  const handleDisplayReview = (state: boolean) => {
    dispatch(setWidget({ displayReview: state }));
  };
  // const handleCustomerChange = (e: any) => {
  //   setCustomer(e.target.value);
  // };
  const customizeBackground = useSelector(
    (state: RootState) => state.widget.customizeBackground
  );
  const customizeRadius = useSelector(
    (state: RootState) => state.widget.customizeRadius
  );
  const customizeBorder = useSelector(
    (state: RootState) => state.widget.customizeBorder
  );
  const customizeShadow = useSelector(
    (state: RootState) => state.widget.customizeShadow
  );
  const customizeTitleText = useSelector(
    (state: RootState) => state.widget.customizeTitleText
  );
  const customizeWidgetTitle = useSelector(
    (state: RootState) => state.widget.customizeWidgetTitle
  );
  const displayReview = useSelector(
    (state: RootState) => state.widget.displayReview
  );
  return (
    <div className="md:px-3 lg:px-6 px-3 pt-4 md:pt-4 lg:pt-8 pb-6">
      <div className="flex flex-nowrap md:flex-wrap w-full gap-4 md:gap-2 lg:gap-4">
        <div className="w-full md:w-fit ">
          <div className="text-xs md:text-base lg:text-[20px] py-1 text-[#6D6D6D] font-bold">
            Background:
          </div>
          <div className="flex items-center justify-between w-full gap-2 lg:gap-4">
            <div className="text-xs md:text-base lg:text-[20px] bg-[#F4F4F4] text-[#6D6D6D] rounded-xl w-[80px] md:w-fit lg:w-36 p-3 md:p-2">
              {customizeBackground}
            </div>
            <div
              className="relative h-10 w-10 rounded-2xl"
              style={{ backgroundColor: customizeBackground }}
              onMouseEnter={() => setIsPickerVisible(true)}
              onMouseLeave={() => setIsPickerVisible(false)}>
              {isPickerVisible && (
                <ColorPickerComponent
                  id="bubbleColor"
                  pickColor={customizeBackground}
                  onChange={handleColorChange}
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-fit flex-shrink  flex-col">
          <div className="text-xs md:text-base lg:text-[20px] py-1 text-[#6D6D6D] font-bold">
            Corner Radius:
          </div>
          <div className="flex gap-2 items-center">
            <Input
              className="rounded-xl text-xs md:text-base w-32 lg:w-44 lg:text-[20px] py-1 text-[#6D6D6D] bg-[#F4F4F4]"
              value={customizeRadius}
              type="number"
              pattern="[0-9]*"
              onChange={handleBorderChange}
            />
            <div className="text-[#6D6D6D] text-xs md:text-base lg:text-[20px] font-bold">
              px
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2 lg:gap-4 pt-6">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={customizeBorder}
            onCheckedChange={handleCustomizeBorder}
            id="border-text"
            className="border-black rounded-sm"
          />
          <Label
            htmlFor="border-text"
            className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]">
            Customize Border
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={customizeShadow}
            onCheckedChange={() => {
              dispatch(setWidget({ customizeShadow: !customizeShadow }));
            }}
            id="shadow-text"
            className="border-black rounded-sm"
          />
          <Label
            htmlFor="shadow-text"
            className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]">
            Customize Shadow
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={customizeWidgetTitle}
            onCheckedChange={() => {
              dispatch(
                setWidget({ customizeWidgetTitle: !customizeWidgetTitle })
              );
            }}
            id="widget-title"
            className="border-black rounded-sm"
          />
          <Label
            htmlFor="widget-title"
            className="leading-7 text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]">
            Customize Widget Title
          </Label>
        </div>
      </div>
      <div className="flex w-full pt-4 lg:pt-6 flex-col">
        <Label
          htmlFor="customer-review"
          className="text-xs md:text-base lg:text-[20px] text-[#6D6D6D] pb-1 lg:pb-3 font-bold">
          Title Text:
        </Label>
        <div className="flex gap-2">
          <Input
            id="customer-review"
            value={customizeTitleText}
            onChange={handleTitleChange}
            placeholder="Customer Reviews"
            className="rounded-xl text-xs md:text-base lg:text-[20px] text-[#6D6D6D]  bg-[#F4F4F4]"
          />
        </div>
      </div>
      <div className="flex  py-3 md:py-4 items-center gap-2">
        <Checkbox
          id="widget-title"
          checked={displayReview}
          onCheckedChange={handleDisplayReview}
          className="border-black rounded-sm"
        />
        <Label
          htmlFor="widget-title"
          className=" leading-7 text-xs md:text-base lg:text-[20px] text-[#6D6D6D]">
          Display overall rating and review count
        </Label>
      </div>
    </div>
  );
}
