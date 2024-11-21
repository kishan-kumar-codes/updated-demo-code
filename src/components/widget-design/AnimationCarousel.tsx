"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSelector, useDispatch } from "react-redux";
import { setWidget } from "@/store/slices/widgetSlice";
import { RootState } from "@/store/store";
import ReviewBudgetProgressBar from "../Review-Widget-mobile/ReviewBudgetProgressBar";

export default function AnimationCarousel() {
  const dispatch = useDispatch();

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

  return (
    <div className="px-3 lg:px-6 pt-4 pb-6">
      <div className="flex flex-col w-full gap-5 ">
        <div className="w-full ">
          <div className="text-xs md:text-base lg:text-[20px] py-1 md:py-3 text-[#6D6D6D] font-bold">
            Auto rotate slides:
          </div>
          <RadioGroup
            onValueChange={(newValue: string) => {
              const booleanValue = newValue.toLowerCase() === "yes";
              dispatch(
                setWidget({
                  rotateSlides: booleanValue,
                })
              );
            }}
            defaultValue={"no"}>
            <div className="flex gap-2 pb-2  flex-row">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border flex-shrink-0 border-black"
                  value="yes"
                  id="yes"
                />
                <Label
                  className="text-[20px] text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="140">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border flex-shrink-0 border-black"
                  value="no"
                  id="no"
                />
                <Label
                  className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="no">
                  No
                </Label>
              </div>
            </div>
          </RadioGroup>
          <div className="text-xs md:text-base lg:text-[20px] py-1 md:py-3 text-[#6D6D6D] font-bold">
            Transition style:
          </div>
          <RadioGroup
            onValueChange={(newValue: string) => {
              const booleanValue = newValue.toLowerCase() === "yes";
              dispatch(
                setWidget({
                  transitionStyle: booleanValue,
                })
              );
            }}
            defaultValue={"yes"}>
            <div className="flex gap-2 pb-2  flex-row">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border flex-shrink-0 border-black"
                  value="yes"
                  id="yes"
                />
                <Label
                  className="text-[20px] text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="140">
                  Fade
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border flex-shrink-0 border-black"
                  value="no"
                  id="no"
                />
                <Label
                  className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="no">
                  Slide
                </Label>
              </div>
            </div>
          </RadioGroup>
          <div className=" flex flex-col pb-2 gap-2">
            <div className="text-xs md:text-base lg:text-[20px] py-1 text-[#6D6D6D] font-bold">
              Transition Animation Speed (seconds)
            </div>
            <div className="flex items-center gap-4">
              <ReviewBudgetProgressBar
                firstColor={"#40F440"}
                progressValue={transitionSpeed}
                maxValue={5000}
                setProgressValue={(newValue: number) => {
                  dispatch(
                    setWidget({
                      transitionSpeed: newValue,
                    })
                  );
                }}
                secondColor={"#F4F4F4"}
              />
              <div className="text-xs md:text-base lg:text-[20px] py-1 text-[#6D6D6D] font-bold">
                {" "}
                {Math.floor(transitionSpeed / 1000)}
              </div>
            </div>
          </div>
          <div className="text-xs md:text-base lg:text-[20px] py-1 md:py-3 text-[#6D6D6D] font-bold">
            Show slide arrows:
          </div>
          <RadioGroup
            onValueChange={(newValue: string) => {
              dispatch(
                setWidget({
                  showSlideArrows: newValue,
                })
              );
            }}
            defaultValue={showSlideArrows.toString()}>
            <div className="flex gap-2 py-2  flex-row">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border flex-shrink-0 border-black"
                  value="yes"
                  id="yes"
                />
                <Label
                  className="text-[20px] text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="140">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border flex-shrink-0 border-black"
                  value="no"
                  id="no"
                />
                <Label
                  className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="no">
                  No
                </Label>
              </div>
            </div>
          </RadioGroup>
          <div className="text-xs md:text-base lg:text-[20px] py-1 md:py-3 text-[#6D6D6D] font-bold">
            Show slide dots:
          </div>
          <RadioGroup
            onValueChange={(newValue: string) => {
              dispatch(
                setWidget({
                  showSlideDots: newValue,
                })
              );
            }}
            defaultValue={showSlideDots.toString()}>
            <div className="flex gap-2 pb-2  flex-row">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border flex-shrink-0 border-black"
                  value="yes"
                  id="yes"
                />
                <Label
                  className="text-[20px] text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="140">
                  Yes
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="border flex-shrink-0 border-black"
                  value="no"
                  id="no"
                />
                <Label
                  className="text-xs md:text-base lg:text-[20px] font-normal text-[#6D6D6D]"
                  htmlFor="no">
                  No
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
