import { StarRatingMobile } from "@/utils/helper";
import { ReviewCard } from "../review-dashboard-mobile/ReviewCard";
import Review1 from "@/assets/images/hubspark/review1.png";
import Review2 from "@/assets/images/hubspark/review2.png";
import JSONPLACHOLDER from "@/assets/images/hubspark/jsonplaceholder.png";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { RecentGoogleIcon, RecentRevIcon } from "@/icons/marketing/icons";
import InputBarField from "../citations-builder/InputBarField";
import { setWidget } from "@/store/slices/widgetSlice";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
import { useEffect, useState } from "react";
import { DecimalStar } from "../CustomComponents/DecimalStar";
import CopyWidgetBuilder from "./CopyWidgetBuider";
import PreviewWidgetButton from "./PreviewWidgetButton";

const RecentArray = [
  {
    id: 1,
    logo: <RecentGoogleIcon />,
    img: Review1,
    title: "Cindy Brennan",
    des: "From the moment I called, their customer service was outstanding–friendly, responsive, and efficient.",
    svgRating: <StarRatingMobile rating={5} />,
  },

  {
    id: 2,
    logo: <RecentRevIcon />,
    img: Review2,
    title: "Maddie Connor",
    des: "They exceeded my expectations in every way, and I am grateful for their dedication to excellence.  ",
    svgRating: <StarRatingMobile rating={5} />,
  },
];

interface ShowcaseReviewProps {
  bundle?: string | null;
  bundleLoading?: boolean
}

export default function ShowcaseReview({ bundle, bundleLoading }: ShowcaseReviewProps) {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [bundleValue, setBundleValue] = useState('');
  const [isCopy, setIsCopy] = useState(false);
  const [listWidget, setListWidget] = useState(false);
  const [crowsalWidget, setCrowsalWidget] = useState(false);

  useEffect(() => {
    if (bundle) {
      handleBundlevalue()
    }
  }, [bundle])

  const handleShowListWidget = () => {
    dispatch(
      setWidget({
        showCaseReview: false,
        selectReviews: true,
        listWidget: true,
        carouselWidget: false,
      })
    );
  };

  const handleBundlevalue = async () => {
    try {
      const response = await fetch('/api/widget/get-widget-content');
      const data = await response.json();
      if (data.error) {
        return;
      }

      // const fileContent = data.content;
      const fileName = data.filename;
      let filenameWithpoutExtension = fileName.split('.').slice(0, -1).join('.');
      console.log(filenameWithpoutExtension);
      let value = `<div data-embed-placeholder="1"><script src="https://www.HubSpark.com/external/showcase-reviews/embed/${filenameWithpoutExtension}?id=1"></script></div>`
      setBundleValue(value);
      console.log(fileName)
    } catch (error) {
      console.log("error:", error)

    }
  };

  const handleShowCarouselWidget = () => {
    dispatch(
      setWidget({
        showCaseReview: false,
        selectReviews: true,
        listWidget: false,
        carouselWidget: true,
      })
    );
  };

  return (
    <>
      <CitationNavbar heading="Reputation" isHeaderVisible={false} />
      <div className="px-0 md:px-[4%] ">
        <div className="bg-[#631363] pl-12 hidden my-5 md:flex text-sm md:text-xl lg:text-2xl text-white p-2 font-semibold rounded-xl">
          Showcase Reviews
        </div>
        <div className="w-full grid-cols-1 grid lg:grid-cols-3 gap-4 lg:gap-2 bg-[#F4F4F4] py-4 px-[5%] md:px-0">
          <div className="bg-[#E0E0E0] row-start-1 lg:row-end-2  rounded-xl">
            <div className="bg-[#631363] md:hidden text-white p-2  font-semibold rounded-xl">
              Showcase Reviews
            </div>
            <div className="p-4 lg:py-8">
              <div className="flex justify-between flex-col rounded-xl    px-2 bg-white py-4">
                <div className="w-full flex justify-between items-center pb-2">
                  <div className="text-[#6D6D6D]  text-[9.04px] md:text-[18px] lg:text-xl font-semibold">
                    Customer Reviews
                  </div>
                  <div className="flex text-[9px] justify-center items-center gap-1">
                    <div className="w-16 md:w-28 h-fit">
                      {" "}
                      <DecimalStar rating={5.0} />
                    </div>
                    <span className="font-semibold text-[#6D6D6D] pt-1 text-[9.04px] md:text-[18px] ">
                      5.0
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 flex-col">
                  {RecentArray.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col px-[3%] md:px-[3%]  w-full h-full rounded-2xl py-1 md:py-2.5 bg-[#E0E0E0]">
                      <div className="flex w-full gap-2 justify-between">
                        <div className="flex w-fit items-center py-1 md:py-2">
                          <Image
                            className="w-7 md:h-10 rounded-full h-7  md:w-10"
                            alt="Icons"
                            width={50}
                            height={50}
                            src={item.img}
                          />
                        </div>
                        <div className="flex w-full flex-col gap-0.5 py-1 md:py-2">
                          <div className="w-full flex">
                            <div className="w-16 md:w-28 h-fit">
                              {" "}
                              {item.svgRating}
                            </div>
                          </div>
                          <div className="font-family-Glacial_Indifference-Bold-Helvetica text-[9.04px] w-full flex-shrink-0 md:text-[16px] font-semibold text-[#6D6D6D]">
                            {item.title}
                          </div>
                          <div className="font-family-Glacial_Indifference-Bold-Helvetica  flex  items-end py-0 pb-2 md:pb-0 justify-start flex-wrap w-full font-normal text-[#6D6D6D] ">
                            <div className="text-[6px] md:text-xs">
                              {item.des}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-1">
                <div className="text-xs md:text-xl lg:text-[26px] text-center py-1 text-[#6D6D6D] pt-2 md:pt-6 font-semibold w-full">
                  List Widget
                </div>
                <div className="text-[10px] md:text-lg lg:text-[20px] tracking-[-0.06em] text-[#7F7F7F] text-center">
                  Display reviews in an ordered,{" "}
                  <span className="text-[#631363]">customizable</span> list
                  { }
                  {bundle && <textarea
                    className={`py-2 font-normal text-[10px] lg:text-[15px] w-full pl-2  px-3 h-[111px]  italic rounded-xl focus:outline-none lg:w-full lg:h-[130px]`}
                    cols={10}
                    value={bundleValue}
                  />}
                </div>
                <div className="flex justify-center gap-1">
                  <button
                    disabled={!!bundle}
                    onClick={handleShowListWidget}
                    className={`${!!bundle ? "cursor-not-allowed" : ""} font-bold md:text-lg mt-0 md:mt-4 lg:text-[20px] border px-6 py-2 text-[10px] rounded-xl w-fit text-white text-center bg-[#631363]`}>
                    Create
                  </button>
                {bundle &&
                  <CopyWidgetBuilder setIsCopy={setIsCopy} />}
                </div>
                {isCopy && <PreviewWidgetButton />}
              </div>
            </div>
          </div>
          <div className="bg-[#E0E0E0] row-start-2 lg:row-end-1 rounded-xl">
            <div className="p-4 lg:py-8 h-auto">
              <div className="flex justify-start flex-col rounded-xl md:min-h-[290px] px-2 bg-white py-4">
                <div className="w-full flex justify-between items-center pb-2">
                  <div className="text-[#6D6D6D] text-[9.04px] md:text-[18px] lg:text-xl font-semibold">
                    Customer Reviews
                  </div>
                  <div className="flex text-[9px] justify-center items-center gap-1">
                    <div className="w-16 md:w-28 h-fit">
                      <DecimalStar rating={5.0} />
                    </div>
                    <span className="font-semibold text-[#6D6D6D] text-[9.04px] pt-1 md:text-[18px]">
                      5.0
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 h-full min-h-full">
                  {RecentArray.map((item, index) => (
                    <div
                      key={index}
                      className="flex w-full h-full min-h-[120px] md:min-h-[200px] lg:min-h-[245px] flex-col rounded-2xl relative">
                      <div className="flex w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 justify-center gap-2 items-center">
                        <Image
                          className="w-7 md:w-10 md:h-10 bg-[#F4F4F4] p-1.5 rounded-full h-7"
                          alt="Icons"
                          width={50}
                          height={50}
                          src={item.img}
                        />
                      </div>

                      <div className="flex w-full relative gap-2 justify-between flex-grow">
                        <div className="flex w-full h-auto flex-col">
                          <div className="h-1/2 px-2 pb-4 flex items-center justify-center rounded-t-xl text-[6px] bg-[#E0E0E0] md:text-xs leading-normal text-center text-[#6D6D6D]">
                            {item.des}
                          </div>

                          <div className="h-1/2 flex flex-col justify-center items-center w-full bg-[#F4F4F4] rounded-b-xl">
                            <div className="w-full flex justify-center">
                              <div className="w-16 md:w-28 h-fit">
                                {item.svgRating}
                              </div>
                            </div>
                            <div className="text-center text-[9.04px] w-full md:text-[16px] font-semibold text-[#6D6D6D]">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-1">
                <div className="text-xs md:text-xl lg:text-[26px] text-center py-1 pt-2 md:pt-6 text-[#6D6D6D] font-semibold w-full">
                  Carousel Widget
                </div>
                <div className="text-[10px] md:text-lg lg:text-[20px] tracking-[-0.06em] text-[#7F7F7F] text-center">
                  Display reviews in a compact animated carousel.
                </div>
                  <button
                    onClick={handleShowCarouselWidget}
                  className="font-semibold border mt-0 md:mt-4 px-6 py-2 text-[10px] md:text-lg lg:text-[20px] rounded-xl w-fit text-white text-center bg-[#631363]">
                    Create
                  </button>
              </div>
            </div>
          </div>
          <div className="bg-[#E0E0E0] row-start-3 lg:row-end-1  rounded-xl">
            <div className="p-4 lg:py-8">
              <Image
                className="w-full object-contain h-full rounded-lg"
                alt="Icons"
                width={100}
                height={100}
                src={JSONPLACHOLDER}
                loading="lazy"
              />
              <div className="flex  mt-0 lg:mt-3 flex-col justify-center items-center w-full gap-1">
                <div className="text-xs md:text-xl lg:text-[26px] text-center pt-4 text-[#6D6D6D] font-semibold w-full">
                  JSON Feed
                </div>
                {showInput &&

                  <InputBarField textField />
                }
                <div className="text-[10px] md:text-xl tracking-[-0.06em] lg:text-[20px] lg:leading-6 px-2 lg:px-0 pt-2 text-[#7F7F7F] text-center">
                  Use just the review data only to completely customize the
                  layout to fit your interface&apos;s code the way you want it
                </div>
                <button
                  onClick={() => setShowInput(true)}
                  className="font-bold md:text-lg mt-0 lg:mt-4 lg:text-[20px] text-xs border px-6 py-2 rounded-xl w-fit text-white text-center bg-[#631363]">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
