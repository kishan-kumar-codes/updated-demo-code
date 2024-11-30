import Image, { StaticImageData } from "next/image";
import PersonIcon from "../../../assets/images/person.svg";
import DollarIcon from "../../../assets/images/dollar.svg";

interface CompaniesCardProps {
  comLogo: StaticImageData | string | undefined;
  comName: string;
  comDesc: string | undefined;
  compContacts: number | undefined;
  compDeals: number | undefined;
}

const CompaniesCard: React.FC<CompaniesCardProps> = ({
  comLogo,
  comName,
  comDesc,
  compContacts,
  compDeals,
}) => {
  return (
    <div className="card flex items-center flex-col w-full h-[177px] bg-white rounded-lg mt-6 md:min-w-[330px] md:min-h-[246px]">
      <div className="mt-2">
        <div className="logo h-[60px] w-[60px] rounded-full bg-chinesWhite relative">
          {
            <Image
              src={comLogo}
              alt="company logo"
              fill
              className="rounded-full"
            />
          }
        </div>
      </div>
      <h5 className="text-darkSilverColor text-[14px] font-arial font-bold mt-[6px] md:text-[20px]">
        {comName}{" "}
      </h5>
      <h5 className="text-darkSilverColor text-[10px] md:text-[16px]">
        {comDesc}
      </h5>
      <div className="flex justify-evenly w-full mt-[12px]">
        <div className="flex items-center ">
          <span>
            <Image
              src={PersonIcon}
              alt="person"
              className="md:w-[32px] md:h-[37px]"
            />
          </span>
          <h5 className="text-darkSilverColor text-[10px] ml-[14px] md:text-[16px]">
            {compContacts} <br /> Contacts
          </h5>
        </div>
        <div className="flex items-center ">
          <span>
            <Image
              src={DollarIcon}
              alt="person"
              className="h-[27px] w-[23px] md:w-[32px] md:h-[37px]"
            />
          </span>
          <h5 className="text-darkSilverColor text-[10px] ml-[14px] md:text-[16px]">
            {compDeals}
            <br /> Deal
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CompaniesCard;
