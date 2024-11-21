"use client";

import { useEffect, useState } from "react";
import { StarRatingMobile } from "@/utils/helper";
import { useSelector, useDispatch } from "react-redux";
import { setWidget } from "@/store/slices/widgetSlice";
import { RootState } from "@/store/store";
import { isStateChangedSelector } from "@/store/helper/trackChanges";

export default function DesignPersist() {
  const designPresetTab = useSelector(
    (state: RootState) => state.widget.preset
  );
  const customizeBackground = useSelector(
    (state: RootState) => state.widget.customizeBackground
  );
  const customizeTextBackGround = useSelector(
    (state: RootState) => state.widget.customizeTextBackGround
  );

  const isChanged = useSelector(isStateChangedSelector);

  const dispatch = useDispatch();

  const handlePresetChange = (preset: number, setCustomizeShadow: boolean) => {
    dispatch(
      setWidget({
        preset: preset,
        setCustomizeShadow: setCustomizeShadow,
        shadowX: 0,
        shadowY: 0,
        shadowBlur: 0,
        shadowSpread: 0,
        shadowColor: customizeBackground,
      })
    );
  };

  return (
    <div className="grid gap-1 md:gap-3 grid-cols-[repeat(auto-fit,_minmax(30%,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(40%,_1fr))]  lg:grid-cols-[repeat(auto-fit,_minmax(30%,_1fr))]  w-full pt-4 px-2 lg:px-2 md:px-0">
      <div className="flex flex-col items-center">
        <div
          onClick={() =>
            dispatch(
              setWidget({
                preset: 1,
                setCustomizeShadow: true,
                shadowX: 0,
                shadowY: 3,
                shadowBlur: 3,
                shadowSpread: 3,
                shadowColor: customizeTextBackGround,
              })
            )
          }
          className={` bg-white max-w-fit rounded-2xl pt-4 pl-3 ${designPresetTab === 1 && "border"} border-[#631363]`}>
          <div className="bg-[#3D3D3D] max-w-fit pt-1 pl-1 pb-1 rounded-xl">
            <div className="bg-[#E0E0E0] max-w-fit rounded-xl flex flex-col justify-start py-4 pl-2 md:pl-2 pr-1">
              <div className="w-16 md:w-20 h-fit">
                {" "}
                <StarRatingMobile rating={5} />
              </div>
              <div className="text-[9px] md:text-xs pt-1 font-bold text-[#6D6D6D]">
                Cindy Brennan
              </div>
              <div className="text-[6px] md:text-[10px] lg:text-xs py-1 tracking-tighter text-[#6D6D6D]">
                From the moment I cal <br />
                and efficient.
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs md:text-base lg:text-[20px] pt-1 md:pt-4 text-center font-bold text-[#6D6D6D]">
          Modern
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div
          onClick={() => handlePresetChange(2, false)}
          className={` bg-white max-w-fit rounded-2xl pt-5 pl-4 ${designPresetTab === 2 && "border"} border-[#631363]`}>
          <div className="bg-[#E0E0E0] max-w-fit rounded-2xl border border-black flex flex-col justify-start py-4 pl-2 md:pl-2 pr-1">
            <div className="w-16 md:w-20 h-fit">
              {" "}
              <StarRatingMobile rating={5} />
            </div>
            <div className="text-[9px] md:text-xs pt-1 font-bold text-[#6D6D6D]">
              Cindy Brennan
            </div>
            <div className="text-[6px] md:text-[10px] lg:text-xs py-1 tracking-tighter text-[#6D6D6D]">
              From the moment I cal <br />
              and efficient.
            </div>
          </div>
        </div>
        <div className="text-xsmd:text-base lg:text-[20px] pt-1 md:pt-4 text-center font-bold text-[#6D6D6D]">
          Classic
        </div>
      </div>

      <div className="flex flex-col items-center md:pr-0">
        <div
          onClick={() => handlePresetChange(3, false)}
          className={` bg-white max-w-fit rounded-2xl pt-5 pl-3 ${designPresetTab === 3 && "border"} border-[#631363]`}>
          <div className="bg-[#E0E0E0] max-w-fit rounded-2xl flex flex-col justify-start py-4 pl-2 md:pl-2 pr-1">
            <div className="w-16 md:w-20 h-fit">
              {" "}
              <StarRatingMobile rating={5} />
            </div>
            <div className="text-[9px] md:text-xs pt-1 font-bold text-[#6D6D6D]">
              Cindy Brennan
            </div>
            <div className="text-[6px] md:text-[10px] lg:text-xs py-1 tracking-tighter text-[#6D6D6D]">
              From the moment I cal <br />
              and efficient.
            </div>
          </div>
        </div>
        <div className="text-xs md:text-base lg:text-[20px] text-center pt-1 md:pt-4 font-bold text-[#6D6D6D]">
          Bootstrap
        </div>
      </div>
      <div className="flex flex-col items-center md:pr-0">
        <div
          onClick={() =>
            dispatch(
              setWidget({
                preset: 4,
                setCustomizeShadow: true,
                shadowX: 0,
                shadowY: 3,
                shadowBlur: 3,
                shadowSpread: 3,
                shadowColor: customizeTextBackGround,
              })
            )
          }
          className={` bg-white max-w-fit rounded-2xl pt-5 pl-3 ${designPresetTab === 4 && "border"} border-[#631363]`}>
          <div className="bg-[#E0E0E0] border-2 border-dotted border-slate-400 max-w-fit rounded-2xl flex flex-col justify-start py-4 pl-2 md:pl-2 pr-1">
            <div className="w-16 md:w-20 h-fit">
              {" "}
              <StarRatingMobile rating={5} />
            </div>
            <div className="text-[9px] md:text-xs pt-1 font-bold text-[#6D6D6D]">
              Cindy Brennan
            </div>
            <div className="text-[6px] md:text-[10px] lg:text-xs py-1 tracking-tighter text-[#6D6D6D]">
              From the moment I cal <br />
              and efficient.
            </div>
          </div>
        </div>
        <div className="text-xs md:text-base lg:text-[20px] text-center pt-1 md:pt-4 font-bold text-[#6D6D6D]">
          Custom
        </div>
      </div>
    </div>
  );
}
