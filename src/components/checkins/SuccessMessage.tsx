"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import SuccessMessage from "@/assets/images/hubspark/SuccessMessage.png";
import SuccessVector from "@/assets/images/hubspark/SuccessVector.png";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Component({ closeModal }: any) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="w-full md:w-[40%]" ref={modalRef}>
        <div className="flex justify-end flex-col w-full p-2">
          <div className="bg-[#F4F4F4] flex flex-col items-center w-full justify-between">
            <Card className="w-full rounded-none border-0 ">
              <CardContent className="pt-12 px-6 pb-0 flex flex-col  items-center">
                <div className="mb-4 w-full flex justify-center">
                  <Image alt="success" src={SuccessMessage} />
                </div>
                <h2 className="text-[#631363] text-2xl font-bold mb-2">
                  All Done!
                </h2>
                <p className="text-[#6D6D6D] text-center mb-6">
                  Check-in completed successfully.
                </p>
              </CardContent>
              <CardFooter className="pb-6 relative px-6 flex justify-center w-full">
                <Button className="w-fit absolute top-0 bg-[#631363]  text-white py-3 rounded-2xl">
                  Request Review
                </Button>
                <Image alt="success" className="w-full" src={SuccessVector} />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
