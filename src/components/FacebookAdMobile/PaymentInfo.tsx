import React from "react";
// import { HeaderBarMobile } from "../citations-builder/HeadBar";
import InputBarField from "../citations-builder/InputBarField";
import { FacebookAdMobileCardSvgs } from "@/svgs/FacebookAdMobile/svgs";
import { Input } from "../ui/input";
interface PaymentInfoProps {
  setPaymentInfo: React.Dispatch<
    React.SetStateAction<{
      name: string;
      cardNumber: string;
      cvv: string;
      expiryDate: string;
    }>
  >;
  paymentInfo: {
    name: string;
    cardNumber: string;
    cvv: string;
    expiryDate: string;
  };
}
const PaymentInfo = ({ setPaymentInfo, paymentInfo }: PaymentInfoProps) => {
  return (
    <div className="flex flex-col w-full">
      {/* <HeaderBarMobile title="Payment Info" /> */}
      <div className="flex flex-col rounded-3xl z-10 min-h-[160px] justify-start  w-full bg-[#E0E0E0]">
        <div
          // onClick={() => setToggle((prev) => !prev)}
          className="w-full rounded-xl text-white text-[16px] cursor-pointer lg:text-[26px] font-bold pl-5 py-2.5 lg:py-4 bg-[#631363] lg:rounded-2xl">
          Payment Info
        </div>
        <div className="flex flex-col w-full gap-2 px-2 lg:px-8 py-8">
          <span className="text-[#6D6D6D] text-xs  lg:text-[22px] pt-0 lg:pt-4 px-2  font-bold leading-normal">
            Name
          </span>
          <Input className="rounded-xl bg-[#F4F4F4] h-8 lg:h-12" />
          <div className="flex w-full gap-1 my-2 flex-col">
            <span className="text-[#6D6D6D] text-xs pl-2 lg:text-[22px] font-bold leading-normal">
              Expiration Date (MM/YY)
            </span>
            <div className="flex w-full items-center bg-[#FFF] rounded-2xl px-2">
              <input
                type="text"
                value={paymentInfo.expiryDate}
                onChange={(e) =>
                  setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })
                }
                className="w-full h-10 lg:h-14 rounded-2xl p-2 focus:outline-none text-[#6D6D6D] text-xs"
              />
              <div className="bg-[#FFF]">
                <FacebookAdMobileCardSvgs />
              </div>
            </div>
          </div>
          <InputBarField
            label="CVV (Optional)"
            value={paymentInfo.cvv}
            setValue={(newValue) =>
              setPaymentInfo({ ...paymentInfo, cvv: newValue })
            }
            placeHolder=""
            isMobile={true}
            textCenter="text-left"
          />
          <InputBarField
            label="Name On Card"
            value={paymentInfo.name}
            setValue={(newValue) =>
              setPaymentInfo({ ...paymentInfo, name: newValue })
            }
            placeHolder=""
            isMobile={true}
            textCenter="text-left"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
