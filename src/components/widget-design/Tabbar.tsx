"use client";
import { useState } from "react";
import DesignPersist from "./DesignPersistCard";
import TextEditor from "./TextEditor";
import LayoutTab from "./LayoutTab";
import ContainerLayout from "./ConatinerLayout";
import ReviewLayout from "./ReviewLayout";
import AnimationCarousel from "./AnimationCarousel";
import useWidgetSelectors from "@/hooks/useWidgetSelector";

export default function WidgetTabBar() {
  const [designTab, setDesignTab] = useState(false);
  const [textTab, setTextTab] = useState(false);
  const [layoutTab, setLayoutTab] = useState(false);
  const [container, setWidget] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [animate, setAnimate] = useState(false);

  const { widgetDesign, listWidget, carouselWidget } = useWidgetSelectors();
  return (
    <div className="flex flex-col gap-4 pt-4">
      <div className="bg-[#E0E0E0] md:bg-[#F4F4F4] rounded-xl">
        <div
          onClick={() => setDesignTab(!designTab)}
          className="bg-[#631363] text-white rounded-xl text-[16px] md:text-lg lg:text-[24px] font-bold p-3 md:p-2 cursor-pointer">
          Design Preset
        </div>
        {designTab && <DesignPersist />}
      </div>

      <div className="bg-[#E0E0E0] rounded-xl">
        <div
          onClick={() => setLayoutTab(!layoutTab)}
          className="bg-[#631363] text-white rounded-xl text-[16px] md:text-lg lg:text-[24px] font-bold p-3 md:p-2 cursor-pointer">
          Layout
        </div>
        {layoutTab && <LayoutTab />}
      </div>
      <div className="bg-[#E0E0E0] rounded-xl">
        <div
          onClick={() => setWidget(!container)}
          className="bg-[#631363] text-white rounded-xl text-[16px] md:text-lg lg:text-[24px] font-bold p-3 md:p-2 cursor-pointer">
          Container
        </div>
        {container && <ContainerLayout />}
      </div>
      <div className="bg-[#E0E0E0] rounded-xl">
        <div
          onClick={() => setTextTab(!textTab)}
          className="bg-[#631363] text-white rounded-xl text-[16px] md:text-lg lg:text-[24px] font-bold p-3 md:p-2 cursor-pointer">
          Text
        </div>
        {textTab && <TextEditor />}
      </div>
      <div className="bg-[#E0E0E0] rounded-xl">
        <div
          onClick={() => setReviews(!reviews)}
          className="bg-[#631363] text-white rounded-xl text-[16px] md:text-lg lg:text-[24px] font-bold p-3 md:p-2 cursor-pointer">
          Reviews
        </div>
        {reviews && <ReviewLayout />}
      </div>
      {carouselWidget && (
        <div className="bg-[#E0E0E0] rounded-xl">
          <div
            onClick={() => setAnimate(!animate)}
            className="bg-[#631363] text-white rounded-xl text-[16px] md:text-lg lg:text-[24px] font-bold p-3 md:p-2 cursor-pointer">
            Animation
          </div>
          {animate && <AnimationCarousel />}
        </div>
      )}
    </div>
  );
}
