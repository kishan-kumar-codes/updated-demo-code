import Image, { StaticImageData } from "next/image";
import PersonIcon from "../../../assets/images/person.svg";
import DollarIcon from "../../../assets/images/dollar.svg";

interface CompaniesCardProps {
  comLogo: StaticImageData;
  comName: string;
  comDesc: string;
  compContacts: number;
  compDeals: number;
}

const CompaniesCard: React.FC<CompaniesCardProps> = ({
  comLogo,
  comName,
  comDesc,
  compContacts,
  compDeals,
}) => {
  return (
    <div className="card flex items-center flex-col w-full h-[177px] bg-white rounded-lg mt-6">
      <div className="mt-2">
        <div className="logo h-[60px] w-[60px] rounded-full bg-chinesWhite">
          {<Image src={comLogo} alt="company logo" />}
        </div>
      </div>
      <h5 className="text-darkSilverColor text-[14px] font-arial font-bold mt-[6px]">
        {comName}{" "}
      </h5>
      <h5 className="text-darkSilverColor text-[10px]">{comDesc}</h5>
      <div className="flex justify-evenly w-full mt-[12px]">
        <div className="flex items-center ">
          <span>
            <Image src={PersonIcon} alt="person" />
          </span>
          <h5 className="text-darkSilverColor text-[10px] ml-[14px]">
            {compContacts} <br /> Contacts
          </h5>
        </div>
        <div className="flex items-center ">
          <span>
            <Image
              src={DollarIcon}
              alt="person"
              className="h-[27px] w-[23px]"
            />
          </span>
          <h5 className="text-darkSilverColor text-[10px] ml-[14px]">
            {compDeals}
            <br /> Deal
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CompaniesCard;
