import Image, { StaticImageData } from "next/image";
import React from "react";

interface ExpansionCardProps {
  logoSrc: StaticImageData | string;
  description: string;
  quantity: number;
  price: number;
  category: string;
}

const ExpansionCard: React.FC<ExpansionCardProps> = ({
  logoSrc,
  description,
  quantity,
  price,
  category,
}) => {
  return (
    <div className="w-full bg-white h-[83px] flex items-center rounded-xl mt-[10px] lg:h-[104px] ">
      <div className="logo bg-chinesWhite h-[53px] w-[59px] ml-[22px] rounded-full lg:w-[60px] lg:h-[60px]">
        <Image
          src={logoSrc}
          alt={description}
          width={59}
          height={53}
          className="lg:w-[60px] lg:h-[60px] rounded-full"
        />
      </div>
      <div className="ml-[11px]">
        <h5 className="text-[14px] text-darkSilverColor font-bold md:text-[18px]">
          {description}
        </h5>
        <h5 className="text-[10px] text-darkSilverColor md:text-[15px]">
          {quantity}
        </h5>
        <h5 className="text-[10px] text-darkSilverColor md:text-[15px]">
          ${price} ,{category}
        </h5>
      </div>
    </div>
  );
};

export default ExpansionCard;
