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
    <div className="bg-white flex justify-between items-center mt-0.5 pb-[13px] pt-[18px] pr-[18px] ">
      <div className="flex items-center">
        <div className="ml-[12px]">
          <input
            type="checkbox"
            name=""
            id=""
            className="h-[17px] w-[17px] rounded-lg "
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="h-[40px] w-[40px] rounded-full bg-grayX11 ml-[16.4px]">
            <span className="h-[40px] w-[40px] flex items-center justify-center text-white font-bold">
              {name && name.substring(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="ml-[12px] mt-2">
            <Image src={Linkedin} alt="Linkedin" />
          </div>
        </div>
        
        <div className="ml-[16px]">
          <h5 className="text-[14px] font-bold text-darkSilverColor ml-[6px]">
            {name}
          </h5>
          <h5 className="text-[12px] text-darkSilverColor ml-[6px] ">
            {role} - {notes} notes
          </h5>
          <div>
            {tags &&
              tags.map((tag, index) => (
                <button
                  key={index}
                  className="bg-darkSilverColor rounded-lg text-white font-bold text-[8px] px-[6px] py-[5px] ml-[4px]"
                >
                  {tag}
                </button>
              ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div>
          <div className="h-[8px] w-[8px] rounded-full mb-1 bg-palatinatePurple float-right "></div>
        </div>
        <h5 className="text-[10px] text-darkSilverColor ">last activity</h5>
        <h5 className="text-[10px] text-darkSilverColor ">
          {daysAgo} days ago
        </h5>
      </div>
    </div>
  );
};

export default ContactCard;
