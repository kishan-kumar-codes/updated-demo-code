import Image from "next/image";
import Linkedin from "../../../assets/images/D-linkedin.svg"

interface ContactCardProps {
  name: string;
  role: string;
  notes: number;
  tags: string[];
  daysAgo: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  role,
  notes,
  tags,
  daysAgo,
}) => {
  return (
    <div className="bg-white flex justify-between items-center mt-0.5 pb-[13px] pt-[18px] pr-[18px] md:h-[151px] md:rounded-xl md:px-6 ">
      <div className="flex items-center">
        <div className="ml-[12px]">
          <input
            type="checkbox"
            name=""
            id=""
            className="h-[17px] w-[17px] rounded-lg md:w-[29px] md:h-[29px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="h-[40px] w-[40px] rounded-full bg-grayX11 ml-[16.4px] md:w-[65px] md:h-[65px]">
            <span className="h-[40px] w-[40px] flex items-center justify-center text-white font-bold md:w-[65px] md:h-[65px] md:text-[28px]  ">
              {name && name.substring(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="ml-[12px] mt-2">
            <Image src={Linkedin} alt="Linkedin" className="md:w-[32px] md:h-[32px]" />
          </div>
        </div>
        
        <div className="ml-[16px]">
          <h5 className="text-[14px] font-bold text-darkSilverColor ml-[6px] md:text-[26px]">
            {name}
          </h5>
          <div className="md:flex md:gap-4 md:items-center">
          <h5 className="text-[12px] text-darkSilverColor ml-[6px] md:text-[22px] ">
            {role} - {notes} notes
          </h5>
          <div>
            {tags &&
              tags.map((tag, index) => (
                <button
                  key={index}
                  className={`${index%2 == 0 ? "bg-[#6D6D6D]":"bg-[#5F1762]"} rounded-xl text-white font-bold text-[8px] md:text-[13px] px-[6px] py-[5px] ml-[4px] md:rounded-lg`}
                >
                  {tag}
                </button>
              ))}
          </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse md:gap-3 md:items-center md:hidden xl:flex ">
        <div>
          <div className="h-[8px] w-[8px] rounded-full mb-1 bg-palatinatePurple float-right md:w-[13px] md:h-[13px]"></div>
        </div>
        <div className="md:flex md:flex-row md:gap-1 md:items-center ">
        <h5 className="text-[10px] text-darkSilverColor md:text-[16px]">last activity</h5>
        <h5 className="text-[10px] text-darkSilverColor md:text-[16px]">
          {daysAgo} days ago
        </h5>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
