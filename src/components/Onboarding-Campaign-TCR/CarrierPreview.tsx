
import React from "react";
import CurrentStatusCard from "./CurrentStatusCard";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

export const statusArray = [
  {
    title: "AT&T",
    title1: "Yes",
    title2: "No",
    title3: "Campaign",
    title4: "240",
    title5: "E",
  },
  {
    title: "AT&T",
    title1: "Yes",
    title2: "No",
    title3: "Campaign",
    title4: "240",
    title5: "E",
  },
  {
    title: "AT&T",
    title1: "Yes",
    title2: "No",
    title3: "Campaign",
    title4: "240",
    title5: "E",
  },
  {
    title: "AT&T",
    title1: "Yes",
    title2: "No",
    title3: "Campaign",
    title4: "240",
    title5: "E",
  },
];
const CarrierPreview = () => {
 
  const currentTtit = [
    "QUALIFY",
    "MNO REVIEW",
    "TPM SCOPE",
    "TPM",
    "MESSAGE CLASS",
  ];
  return (
    <div className="flex w-full gap-1 flex-col ">
      <span className="text-[#6D6D6D] text-sm text-center pb-3 font-normal leading-normal">
        This below list shows campaign qualification <br /> results and terms
        for each MNO.
      </span>
      {statusArray.map((item, index) => (
        <CurrentStatusCard
          key={index}
          title={item.title}
          title1={item.title1}
          title2={item.title2}
          title3={item.title3}
          title4={item.title4}
          title5={item.title5}
          currentTItle={currentTtit}
        />
      ))}
      <div className="w-full flex justify-around  gap-7 py-[11px] items-center">
        <Button className="border border-[#631363]  text-[#631363] bg-[#FFF] py-3 min-w-[129px] min-h-[33px] font-bold rounded-lg">
          Previous
        </Button>

        <Dialog>
          <DialogTrigger>
            <Button className="bg-[#631363] text-[#FFF] py-3 min-w-[129px] min-h-[33px] font-bold rounded-lg px-10">
              Next
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[80%] flex bg-[#F4F4F4] hide-scrollbar">
            <DialogDescription className="w-full flex ">
              <div className="w-full flex flex-col text-center justify-center items-center">
                <span className="text-[#6D6D6D] text-xs font-normal leading-normal pl-2">
                  The terms displayed in this page may be <br />
                  subject to change at the sole
                  <br />
                  <strong>discretion of the MNO!</strong>
                </span>
                <div className="w-full flex justify-center my-4  gap-7 items-center">
                  <DialogClose asChild>
                    <Button className="bg-[#631363] text-[#FFF] py-3 font-bold rounded-lg px-10">
                      ok
                    </Button>
                  </DialogClose>
                </div>
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
export default CarrierPreview;
