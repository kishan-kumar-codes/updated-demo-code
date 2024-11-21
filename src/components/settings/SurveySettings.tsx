import React from "react";
import HeadBar from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";
import SquareCheckBoxButton from "../citations-builder/SquareCheckBox";
import { StarRating } from "@/pages/demo";
import StarInput from "./StarInput";
import RadioButton from "../reviews/RadioButton";
import { GoogleReviewSvg } from "@/svgs/review-dashboard/svgs";
import { StarRatingComponents } from "@/utils/helper";
const typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const textStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
};

const SurveySettings = () => {
  return (
    <div className=" flex flex-col gap-2  -ml-3 w-[400px] mt-5 m-9 ">
      <HeadBar title="External Review Sites" />
      <div className="flex rounded-3xl -mt-14 z-10 min-h-[160px] w-[400px] justify-start px-5 ml-5     bg-[#E0E0E0] py-3">
        <div className="pt-12">
          <div>
            <span style={typography}>
              Review Sites will be presented to your customers when they are
              sent a customer feedback request via one of the HubSpark mobile
              applications, or the admin portal.
            </span>
          </div>
          <div className="flex-col  w-full items-start h-full pt-4   flex -ml-1 justify-start ">
            <span
              className="bg-[#40F440]  py-2.5  font-[500] text-black p-1 px-3 rounded-lg  "
              style={{ ...typography, color: "#27272D" }}>
              + Add A Review Site
            </span>
          </div>
        </div>
      </div>
      <HeadBar title="Review Form Configuration" />
      <div className="flex flex-col  rounded-3xl -mt-14 z-10 min-h-[160px]  w-[400px]  justify-start px-5 ml-5     bg-[#E0E0E0] py-3">
        <div className="flex flex-col  pt-7 my-4">
          <InputBarField
            label="Review form title (optional)"
            placeHolder="Type something..."
            textCenter="text-left"
          />
          <span style={textStyle}>
            If set, this title will be shown at the top of the review form
            instead of the default title. See the default title
          </span>
          <InputBarField
            label="Review form message"
            placeHolder="Type something..."
            textCenter="text-left"
          />
          <span style={textStyle}>
            If set, this title will be shown at the top of the review form
            instead of the default title. See the default title
          </span>
          <InputBarField
            label="External review sites message"
            placeHolder="Type something..."
            textCenter="text-left"
          />
          <span style={textStyle}>
            If set, this title will be shown at the top of the review form
            instead of the default title. See the default title
          </span>
          <SquareCheckBoxButton
            label="Display External Sites First"
            id="display-external-sites-first"
          />
          <span className="pt-1" style={textStyle}>
            Check this option to display links to your external review sites
            before our review form.
          </span>
          <InputBarField
            label="Review confirmation"
            placeHolder="Type something..."
            textField
          />
          <span style={textStyle}>
            This message is displayed when the end user completes a review. See
            the default message
          </span>
        </div>
      </div>
      <HeadBar title="Custom Review Confirmation Redirect (Advanced)" />
      <div className="flex flex-col  rounded-3xl -mt-14 z-10 min-h-[160px]  w-[400px]  justify-start px-5 ml-5     bg-[#E0E0E0] py-3">
        <div className="flex flex-col my-10  items-start  pt-4    -ml-1 justify-start ">
          <StarInput
            svg={<StarRatingComponents rating={1} />}
            placeHolder="url"
            width={258}
          />
          <StarInput
            svg={<StarRatingComponents rating={2} />}
            placeHolder="url"
            width={258}
          />
          <StarInput
            svg={<StarRatingComponents rating={3} />}
            placeHolder="url"
            width={298}
          />
          <StarInput
            svg={<StarRatingComponents rating={4} />}
            placeHolder="url"
            width={258}
          />
          <StarInput
            svg={<StarRatingComponents rating={5} />}
            placeHolder="url"
            width={258}
          />{" "}
          <span className="pt-1" style={textStyle}>
            Upon review completion, the user will be redirected to the specified
            URL associated with the overall rating he or she left.
          </span>
        </div>
      </div>
      <HeadBar title="Intelligent Review Routing" />
      <div className="flex flex-col  rounded-3xl -mt-14 z-10 min-h-[160px]  w-[400px] justify-start px-5 ml-5     bg-[#E0E0E0] py-3">
        <div className="flex flex-col pt-10 gap-2 my-5">
          <RadioButton
            label="Optimize for HubSpark Reviews (default)"
            id="echo-hubspark-reviews"
            fontSize={12}
          />
          <span style={textStyle}>
            Present potential reviewer with a choice of review location, always
            including native HubSpark reviews to yield an industry-leading 40%
            average response rate, as well as any third-party options you setup.
          </span>
          <div className="flex-col  w-full items-start  pt-4   flex -ml-1 justify-start ">
            <RadioButton
              label="Apply Intelligent Review Routing to Optimize for Google and/or Facebook Reviews"
              id="route-to-google-or-facebook"
              fontSize={12}
            />
          </div>
          <span style={textStyle}>
            Apply our proprietary algorithm to decide when to bypass reviewer
            choice selectively and send them directly to provide a Google or
            Facebook review. You can optimize for Google alone (choose only the
            Google option below), Facebook alone (choose only Facebook below),
            or both Google and Facebook (choose both options below). We will
            apply your choices in order, and will always fall back to the normal
            HubSpark review process if the conditions for Intelligent Review
            Routing are not met.
          </span>
          <div className="flex-col   ml-10 items-start  pt-4   flex  justify-start ">
            <SquareCheckBoxButton
              label="Include Optimization for Google"
              id="routeo-google-or-facebook"
            />
            <span className="pt-2" style={textStyle}>
              Choose between two Google Review Optimization options
            </span>
            <div className="flex-col pb-3  w-full items-start gap-2 pt-4   flex ml-5 justify-start">
              <RadioButton
                label="Maximize Google My Business Review Opportunities"
                id="maximize-google-my-business"
                fontSize={12}
              />
              <span style={textStyle}>
                Optimized to gain the most Google My Business reviews possible
                by including potential reviewers who may be less likely to
                respond. This should yield the maximum possible Google My
                Business reviews, but will also have a greater effect on the
                total number of HubSpark reviews you receive.
              </span>
              <RadioButton
                label="Maximize Google My Business Review Conversions"
                id="maximize-google-my-conversions"
                fontSize={12}
              />
              <span style={textStyle}>
                Optimized for the highest possible conversion rate for Google My
                Business reviews. This should yield a great Google My Business
                review volume while minimizing the impact on the total number of
                HubSpark reviews you receive.
              </span>
            </div>
            <SquareCheckBoxButton
              label="Apply Intelligent Review Routing to Optimize for Google and/or Facebook Reviews"
              id="route-to-google-or-facebook"
            />
            <span className="pt-2" style={textStyle}>
              Optimized for the highest possible conversion rate for Facebook
              reviews. This should yield a great Facebook review volume while
              minimizing the impact on the total number of HubSpark reviews you
              receive.
            </span>
          </div>
        </div>
      </div>
      <HeadBar title="Local SMS Number For Review Requests" />
      <div className="flex flex-col  rounded-3xl -mt-14 z-10 min-h-[160px]  justify-start px-5 ml-5  w-[400px]    bg-[#E0E0E0] py-3">
        <div className="flex flex-col my-10  items-start gap-4  pt-4    -ml-1 justify-start ">
          <span style={typography}>
            Your Local SMS number is (555) 555-5555
          </span>
          <span style={typography}>
            When you send review requests via SMS, they will be sent from this
            number.
          </span>
          <span className=" my-4" style={textStyle}>
            Setting a disclaimer will require the customer to review and
            acknowledge the disclaimer before they can submit the review.
          </span>
          <SquareCheckBoxButton
            label="Obscure Customer Data"
            id="obscure-customer-data"
          />
          <span style={textStyle}>
            Use this feature to replace customer names with initials anywhere a
            name is publicly displayed.
          </span>
          <div className="flex-col  w-full items-start  pt-4   flex -ml-1 justify-start ">
            <span className="bg-[#40F440]   font-[500] text-black p-1 px-3 rounded-lg  ">
              Save Changes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveySettings;
