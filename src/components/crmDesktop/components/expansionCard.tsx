import Image from "next/image";
import React from "react";
import company1 from '@/assets/images/companies-2.png'

interface ExpansionCardProps {
  description: string;
  dealNumber: string;
  amount: number;
  companyName: string;
  logo:any
}

const ExpansionCard: React.FC<ExpansionCardProps> = ({logo, description, dealNumber, amount, companyName }) => {
  return (
    <div className=" bg-white py-[22px] mt-[12px] flex items-center rounded-lg  ">
      <div className="logo bg-chinesWhite h-[41px] 2xl:h-[51px] w-[51px] 2xl:w-[51px] 2xl:ml-[22px] ml-[11px] rounded-full ">
        <Image src={logo} alt="Image not found" width={81} height={60}/>
      </div>
      <div className="ml-[11px]">
        <h5 className="text-[12px] xl:text-[12px] 2xl:text-[18px] md:text-darkSilverColor font-bold">
          {description}
        </h5>
        <h5 className="text-[10px] xl:text-[10px] 2xl:text-[15px] text-darkSilverColor">
          {dealNumber}
        </h5>
        <h5 className="text-[10px] xl:text-[10px] 2xl:text-[15px] text-darkSilverColor">
          ${amount}, {companyName}
        </h5>
      </div>
    </div>
  );
};

export default ExpansionCard;
