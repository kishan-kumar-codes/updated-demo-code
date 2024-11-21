"use client";
import { useState, ChangeEvent, useEffect } from "react";
import ReviewBudgetProgressBar from "../Review-Widget-mobile/ReviewBudgetProgressBar";
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setWidget } from "@/store/slices/widgetSlice";
import { RootState } from "@/store/store";
import ColorPickerComponent from "../Webchat-Settings/ColorPicker";

const fonts = [
  "Lato",
  "Inter",
  "Arial",
  "Roboto",
  "Lora",
  "Open Sans",
  "Source Sans 3",
  "Roboto Mono",
  "Poppins",
  "Montserrat",
  "Nunito",
  "Merriweather",
  "Playfair Display",
  "Oswald",
  "Raleway",
  "Ubuntu",
  "Helvetica",
  "Georgia",
  "Times New Roman",
  "Verdana",
] as const;

export default function TextEditor() {
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [isLinkPickerVisible, setLinkPickerVisible] = useState(false);

  const dispatch = useDispatch();

  const customizeTextBgColor = useSelector(
    (state: RootState) => state.widget.customizeTextBackGround
  );
  const customizTextAlignment = useSelector(
    (state: RootState) => state.widget.customizeAlignment
  );
  const customizeSize = useSelector(
    (state: RootState) => state.widget.customizeSize
  );
  const selectedFonts = useSelector(
    (state: RootState) => state.widget.customizeFont
  );

  const customizeLinkColor = useSelector(
    (state: RootState) => state.widget.customizeLinkColor
  );
  const handleSetProgressValue = (value: number) => {
    dispatch(
      setWidget({
        customizeSize: Number(value),
      })
    );
  };

  const handleColorChange = (newColor: string) => {
    dispatch(
      setWidget({
        customizeTextBackGround: newColor,
      })
    );
  };
  const handlefontChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setWidget({
        customizeFont: event.target.value,
      })
    );
  };

  const handleLinkColorChange = (newColor: string) => {
    dispatch(
      setWidget({
        customizeLinkColor: newColor,
      })
    );
  };

  useEffect(() => {
    const WebFont = require("webfontloader");
    if (selectedFonts) {
      WebFont.load({
        google: {
          families: [selectedFonts + ":400"],
        },
      });
    }
  }, [selectedFonts]);

  return (
    <div className="px-3 lg:px-4">
      <div className="flex justify-start md:justify-between md:flex-wrap gap-2 lg:gap-4 py-4 ">
        <div className="w-full md:w-fit">
          <div className="text-xs md:text-base lg:text-[20px] py-1 md:py-2 text-[#6D6D6D] font-bold">
            Font:
          </div>
          <select
            value={selectedFonts}
            onChange={handlefontChange}
            className="p-3 border text-xs md:text-base lg:text-[20px] py-1 text-[#6D6D6D] h-8 md:h-12 w-[60px] md:w-20 bg-[#F4F4F4] rounded-xl">
            {fonts.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-fit">
          <div className="text-xs md:text-base lg:text-[20px] py-1 md:py-2 text-[#6D6D6D] font-bold">
            Background:
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs md:text-base lg:text-[20px] font-normal items-center flex py-1 text-[#6D6D6D] bg-[#F4F4F4] h-8 md:h-fit text-center rounded-xl justify-center w-20 md:w-fit md:p-3">
              {customizeTextBgColor}
            </div>
            <div
              className="relative  h-8 md:h-10 w-10 rounded-2xl"
              style={{ backgroundColor: customizeTextBgColor }}
              onMouseEnter={() => setIsPickerVisible(true)}
              onMouseLeave={() => setIsPickerVisible(false)}>
              {isPickerVisible && (
                <ColorPickerComponent
                  id="bubbleColor"
                  pickColor={customizeTextBgColor}
                  onChange={handleColorChange}
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-fit">
          <div className="text-xs md:text-base lg:text-[20px] py-1 md:py-2 text-[#6D6D6D] font-bold">
            Link Color:
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-xs md:text-base lg:text-[20px] h-8  md:h-fit items-center flex text-center py-1 text-[#6D6D6D] bg-[#F4F4F4] rounded-xl w-20 md:w-fit p-2 md:p-3">
              {customizeLinkColor}
            </div>
            <div
              className={`relative h-8 md:h-10 w-10 rounded-2xl`}
              style={{ backgroundColor: customizeLinkColor }}
              onMouseEnter={() => setLinkPickerVisible(true)}
              onMouseLeave={() => setLinkPickerVisible(false)}>
              {isLinkPickerVisible && (
                <ColorPickerComponent
                  id="bubbleColor"
                  pickColor={customizeLinkColor}
                  onChange={handleLinkColorChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-2">
        <div className="text-xs md:text-base lg:text-[20px] py-1 text-[#6D6D6D] font-bold">
          Size:
        </div>
        <div>
          <ReviewBudgetProgressBar
            firstColor={"#40F440"}
            maxValue={18}
            progressValue={customizeSize}
            setProgressValue={handleSetProgressValue}
            secondColor={"#F4F4F4"}
          />
        </div>
      </div>
      <div className=" flex flex-col gap-2 py-3 pb-8">
        <div className="text-xs md:text-base lg:text-[20px] py-1 text-[#6D6D6D] font-bold">
          Alignment:
        </div>
        <div className="flex flex-wrap gap-4">
          <div
            onClick={() =>
              dispatch(
                setWidget({
                  customizeAlignment: "start",
                })
              )
            }
            className={`flex gap-1 items-center text-xs md:text-base lg:text-[20px] ${customizTextAlignment === "start" ? "bg-[#631363] text-white" : "bg-[#FFFFFF] text-[#631363]"} cursor-pointer border-[#631363] border  rounded-2xl font-bold  px-2 py-1`}>
            <AlignLeft /> Left
          </div>
          <div
            onClick={() =>
              dispatch(
                setWidget({
                  customizeAlignment: "center",
                })
              )
            }
            className={`flex gap-1 items-center text-xs md:text-base lg:text-[20px] ${customizTextAlignment === "center" ? "bg-[#631363] text-white" : "bg-[#FFFFFF] text-[#631363]"} cursor-pointer border-[#631363] border  rounded-2xl font-semibold  px-2 py-1`}>
            {" "}
            <AlignCenter /> Center
          </div>
          <div
            onClick={() =>
              dispatch(
                setWidget({
                  customizeAlignment: "end",
                })
              )
            }
            className={`flex gap-1 items-center text-xs md:text-base lg:text-[20px] ${customizTextAlignment === "end" ? "bg-[#631363] text-white" : "bg-[#FFFFFF] text-[#631363]"} cursor-pointer border-[#631363] border rounded-2xl font-semibold  px-2 py-1`}>
            {" "}
            <AlignRight /> Right
          </div>
        </div>
      </div>
    </div>
  );
}
