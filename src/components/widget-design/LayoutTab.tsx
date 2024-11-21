import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";
import { Info } from "lucide-react";
import ReviewBudgetProgressBar from "../Review-Widget-mobile/ReviewBudgetProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { setWidget } from "@/store/slices/widgetSlice";

import { Popover } from "@radix-ui/react-popover";
import { RootState } from "@/store/store";
import { PopoverContent, PopoverTrigger } from "../ui/popover";
import useWidgetSelectors from "@/hooks/useWidgetSelector";

export default function LayoutTab() {
  const [isOpen, setIsOpen] = useState(false);

  const displayLayout = useSelector(
    (state: RootState) => state.widget.noOfLayout
  );
  const displayHeight = useSelector(
    (state: RootState) => state.widget.layoutWidgetHeight
  );
  const noofReviewstoShow = useSelector(
    (state: RootState) => state.widget.noofReviewstoShow
  );

  const {
    showCaseReview,
    selectReviews,
    widgetDesign,
    listWidget,
    carouselWidget,
  } = useWidgetSelectors();

  const handleSetProgressValue = (value: number) => {
    dispatch(
      setWidget({
        noofReviewstoShow: Number(value),
      })
    );
  };

  const dispatch = useDispatch();
  const handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setWidget({
        layoutWidgetHeight: Number(event.target.value),
      })
    );
  };

  return (
    <div className="px-4 md:px-2 lg:px-4 pb-4 pt-0 md:pt-4">
      {" "}
      <div className="text-[#6D6D6D]">
        {listWidget && (
          <>
            <div className="text-xs md:text-base lg:text-[20px]  font-bold py-2 ">
              Widget Max Height:
            </div>
            <div className="flex items-center gap-2">
              <Input
                className="rounded-xl bg-[#F4F4F4] w-[60%]"
                type="number"
                value={displayHeight}
                onChange={handleHeightChange}
              />
              <div className="text-xs md:text-base lg:text-[20px]   font-semibold ">
                px
              </div>
            </div>
            <div className=" flex items-center gap-2  font-bold py-2 md:py-4 ">
              <div className="text-xs md:text-base lg:text-[20px] leading-7 text-[#6D6D6D]">
                {" "}
                Desktop Layout Display:
              </div>
              <div>
                {" "}
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                  <PopoverTrigger
                    className="hover:cursor-pointer"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    asChild>
                    <Info color="#631363" />
                  </PopoverTrigger>
                  <PopoverContent className="w-fit rounded-full p-2 bg-white">
                    <p className="text-sm text-[#6D6D6D] font-semibold text-muted-foreground">
                      No of boxes in each section
                    </p>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid grid-cols-3 w-full gap-2">
              <div
                className={` w-full  cursor-pointer rounded-3xl border-2 border-[#631363] ${displayLayout === 1 ? "bg-[#631363]" : "bg-[#E0E0E0]"}`}>
                <div
                  onClick={() =>
                    dispatch(
                      setWidget({
                        noOfLayout: 1,
                      })
                    )
                  }
                  className="p-2 md:p-4 flex gap-1  h-full items-center justify-center  w-full flex-col">
                  <div className="px-2 py-1.5 w-full rounded-xl bg-[#E0E0E0] border-2 border-[#631363]"></div>
                  <div className="px-2 py-1.5 w-full rounded-xl bg-[#E0E0E0] border-2 border-[#631363]"></div>
                  <div className="px-2 py-1.5 w-full rounded-xl bg-[#E0E0E0] border-2 border-[#631363]"></div>
                </div>
              </div>
              <div
                onClick={() =>
                  dispatch(
                    setWidget({
                      noOfLayout: 2,
                    })
                  )
                }
                className={` w-full  cursor-pointer rounded-3xl border-2 border-[#631363] ${displayLayout === 2 ? "bg-[#631363]" : "bg-[#E0E0E0]"}`}>
                <div className="p-2 md:p-4 h-full items-center justify-center grid grid-cols-2 gap-1  ">
                  <div className="px-2 py-1.5 rounded-xl bg-[#E0E0E0] border-2 border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl bg-[#E0E0E0] border-2 border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl bg-[#E0E0E0] border-2 border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl bg-[#E0E0E0] border-2 border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl bg-[#E0E0E0] border-2 border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl bg-[#E0E0E0] border-2 border-[#631363]"></div>
                </div>
              </div>
              <div
                onClick={() =>
                  dispatch(
                    setWidget({
                      noOfLayout: 3,
                    })
                  )
                }
                className={` w-full  cursor-pointer rounded-3xl border-2 border-[#631363] ${displayLayout === 3 ? "bg-[#631363]" : "bg-[#E0E0E0]"}`}>
                <div className=" p-2 md:p-2 h-full items-center justify-center grid grid-cols-3 gap-1 ">
                  <div className="px-2 py-1.5 rounded-xl border-2 bg-[#E0E0E0] border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl border-2 bg-[#E0E0E0] border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl border-2 bg-[#E0E0E0] border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl border-2 bg-[#E0E0E0] border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl border-2 bg-[#E0E0E0] border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl border-2 bg-[#E0E0E0] border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl border-2 bg-[#E0E0E0] border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl border-2 bg-[#E0E0E0] border-[#631363]"></div>
                  <div className="px-2 py-1.5 rounded-xl border-2 bg-[#E0E0E0] border-[#631363]"></div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="text-xs md:text-base lg:text-[20px] text-[#6D6D6D] font-bold py-2 mt-0 md:mt-2">
          No of reviews to show:
        </div>
        <div className="flex items-center gap-2">
          <ReviewBudgetProgressBar
            firstColor={"#40F440"}
            progressValue={noofReviewstoShow}
            setProgressValue={handleSetProgressValue}
            secondColor={"#F4F4F4"}
          />
          <div className=" text-xs md:text-base lg:text-[20px] text-[#6D6D6D] font-semibold ">
            {Math.floor(noofReviewstoShow)}{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
