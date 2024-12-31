import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";
interface BillingInfoProps {
  setBillingInfo: React.Dispatch<
    React.SetStateAction<{
      address: string;
      country: string;
      state: string;
      city: string;
      zipCode: string;
    }>
  >;
  billingInfo: {
    address: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
  };
}
const BillingInfo = ({ setBillingInfo, billingInfo }: BillingInfoProps) => {
  return (
    <div className="flex flex-col w-full">
      {/* <HeaderBarMobile title="Billing Info" /> */}
      <div className="flex rounded-3xl z-10 min-h-[160px] justify-start flex-col w-full bg-[#E0E0E0]">
        <div
          // onClick={() => setToggle((prev) => !prev)}
          className="w-full rounded-xl text-white text-[16px] cursor-pointer lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          Billing Info
        </div>
        <div className="flex flex-col w-full gap-2 px-2 lg:px-8 py-8">
          <InputBarField
            label="Address"
            placeHolder=""
            value={billingInfo.address}
            setValue={(newValue) =>
              setBillingInfo({ ...billingInfo, address: newValue })
            }
            isMobile={true}
            marginY="my-1"
            textCenter="text-left"
          />
          <InputBarField
            label="Country"
            value={billingInfo.country}
            setValue={(newValue) =>
              setBillingInfo({ ...billingInfo, country: newValue })
            }
            placeHolder=""
            isMobile={true}
            marginY="my-1"
            textCenter="text-left"
          />
          <InputBarField
            label="State"
            placeHolder=""
            value={billingInfo.state}
            setValue={(newValue) =>
              setBillingInfo({ ...billingInfo, state: newValue })
            }
            isMobile={true}
            marginY="my-1"
            textCenter="text-left"
          />
          <InputBarField
            label="City (Optional)"
            placeHolder=""
            value={billingInfo.city}
            setValue={(newValue) =>
              setBillingInfo({ ...billingInfo, city: newValue })
            }
            isMobile={true}
            marginY="my-1"
            textCenter="text-left"
          />
          <InputBarField
            label="Zip Code"
            value={billingInfo.zipCode}
            setValue={(newValue) =>
              setBillingInfo({ ...billingInfo, zipCode: newValue })
            }
            placeHolder=""
            isMobile={true}
            marginY="my-1"
            textCenter="text-left"
          />
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
