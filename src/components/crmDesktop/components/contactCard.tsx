import Image from "next/image";
import { useRouter } from "next/navigation";
import Linkedin from "../../../assets/images/D-linkedin.svg";

interface ContactCardProps {
  contact: {
    id: string;
    firstName: string;
    lastName: string;
    company: { id: string; name: string };
    email: string;
    phoneNumber_1: string;
    phoneNumber_2: string;
    background: string;
    contactLogo: string;
    tag: string;
    hasNewsLetter: boolean;
    title: string;
    user: { id: string; email: string };
  };
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const router = useRouter();

  const handleCardClick = async () => {
    // Navigate to details page and pass the contact data as state
    // router.push({
    //   pathname: "/crm/contacts/detailContact",
    //   query: { id: contact.id }, // Optionally pass data via URL params
    // });
    try {
      await router.push(`/crm/contacts/detailContact?id=${contact.id}`);
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  const handleCheckboxClick = (event: React.MouseEvent) => {
    // Prevent checkbox clicks from triggering the card navigation
    event.stopPropagation();
  };

  return (
    <div
      className="bg-white flex justify-between rounded-lg items-center mt-1 border-darkSilverColor border-solid pb-[13px] pt-[18px] pr-[18px] cursor-pointer"
      onClick={handleCardClick}>
      <div className="flex items-center">
        <div className="md:ml-[24px] ml-[12px]">
          {/* Checkbox: Stop propagation on click */}
          <input
            type="checkbox"
            className="md:h-[29px] md:w-[29px] h-[20px] w-[20px] rounded-lg"
            onClick={handleCheckboxClick} // Prevent card navigation when clicking checkbox
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="md:h-[65px] md:w-[65px] h-[40px] w-[40px] rounded-full flex align-middle items-center bg-grayX11 md:ml-[24px] ml-[12px]">
            <span className="w-[100%] flex items-center justify-center text-white font-bold md:text-2xl">
              {/* {contact.firstName[0]}{contact.lastName[0]}  */}
              {/* Initials */}
              <Image src={contact.company.logo} alt="" width={60} height={60} />
            </span>
          </div>
          <div className="ml-[12px] mt-[15px] block md:hidden">
            <Image src={Linkedin} alt="" />
          </div>
        </div>
        <div className="ml-[16px] relative">
          <h5 className="2xl:text-[26px] text-[14px] font-bold text-darkSilverColor md:ml-[6px]">
            {contact.firstName} {contact.lastName}
          </h5>
          <div className="flex flex-col md:flex-row">
            <h5 className="md:text-[22px] text-[12px] text-darkSilverColor md:ml-[6px]">
              {contact.title} at {contact.company.name}
            </h5>
            <div className="flex md:block">
              <button className="bg-darkSilverColor rounded-lg text-white font-bold text-[8px] md:text-[13px] px-[12px] md:py-[8px] md:ml-[38px]">
                {contact.tag}
              </button>
            </div>
          </div>
          <div className="ml-[8px] hidden md:block">
            <Image src={Linkedin} alt="" />
          </div>
        </div>
      </div>

      <div className="flex md:items-center items-end flex-col-reverse md:flex-row">
        <h5 className="md:text-[16px] text-[10px] text-darkSilverColor">
          last activity <br /> 6 days ago
        </h5>
        <div>
          <div className="h-[8px] w-[8px] md:h-[13px] md:w-[13px] ml-[21px] rounded-full bg-palatinatePurple float-right"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
