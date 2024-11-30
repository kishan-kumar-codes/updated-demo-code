import Image, { StaticImageData } from "next/image";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import ExportIcon from "../../../assets/images/export-icon.svg";
import PersonIcon from "../../../assets/images/person.svg";
import DollarIcon from "../../../assets/images/dollar.svg";

interface CompaniesCardProps {
  comLogo: string;
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
    <div className="card flex items-center flex-col w-full h-[246px] bg-white rounded-lg mt-6">
      <div className="mt-[15px]">
        <div className="logo h-[81px] w-[81px] flex items-center justify-center rounded-full bg-chinesWhite">
          {<Image src={comLogo} alt="company logo" width={81} // Required width
              height={81} // Required height
              className="rounded-full w-[81px] h-[81px]" />}
        </div>
      </div>
      <h5 className="text-darkSilverColor text-[14px] lg:text-[20px] font-arial font-bold mt-[8px]">
        {comName}{" "}
      </h5>
      <h5 className="text-darkSilverColor text-[10px] lg:text-[18px]">{comDesc}</h5>
      <div className="flex justify-evenly w-full mt-[12px]">
        <div className="flex items-center ">
          <span>
            <Image
              src={PersonIcon}
              alt="person"
              className="h-[37px] w-[32px]"
            />
          </span>
          <h5 className="text-darkSilverColor text-[16px] ml-[21px]">
            <strong>{compContacts}</strong> <br /> Contacts
          </h5>
        </div>
        <div className="flex items-center ">
          <span>
            <Image
              src={DollarIcon}
              alt="person"
              className="h-[37px] w-[32px]"
            />
          </span>
          <h5 className="text-darkSilverColor text-[16px] ml-[21px]">
            <strong>{compDeals}</strong> <br /> Deal
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CompaniesCard;
