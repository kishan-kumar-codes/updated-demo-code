import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
interface SideBarMeetingProps {
  onSelect: (selectedSection: string) => void;
}

const SideBarMeeting: React.FC<SideBarMeetingProps> = () => {
  const [activeLink, setActiveLink] = useState("Meeting Details");
  const pathname = usePathname();
  const router = useRouter()


  useEffect(() => {
    // Set the active link based on the current pathname
    if (pathname === "/calendar/calendar25") {
      setActiveLink("Meeting Details");
    } else if (pathname === "/calendar/calendar27") {
      setActiveLink("Availability");
    } else if (pathname === "/calendar/calendar28") {
      setActiveLink("Notifications & Additional Options");
    } 
    else if (pathname === "/calendar/calendar29") {
        setActiveLink("Customizations");
      }
    else {
      setActiveLink(""); 
    }
  }, [pathname]);

  const handleLinkClick = (section: string) => {
    setActiveLink(section);
    onSelect(section); // Call the callback to notify parent
  };

  return (

    <div className="bg-gray-100 h-full w-[250px] p-4 flex flex-col gap-4">
      <button
        className={`text-left px-3 py-2 rounded-lg ${
          activeLink === "Meeting Details"
            ? "bg-palatinatePurple text-white font-semibold"
            : "text-gray-700"
        }`}
        onClick={() => router.push('/calendar/calendar25')}
      >
        Meeting Details
      </button>
      <button
        className={`text-left px-3 py-2 rounded-lg ${
          activeLink === "Availability"
            ? "bg-palatinatePurple text-white font-semibold"
            : "text-gray-700"
        }`}
        onClick={() => router.push('/calendar/calendar27')}
      >
        Availability
      </button>
      <button
        className={`text-left px-3 py-2 rounded-lg ${
          activeLink === "Notifications & Additional Options"
            ? "bg-palatinatePurple text-white font-semibold"
            : "text-gray-700"
        }`}
        onClick={() => router.push('/calendar/calendar28')}
      >
        Notifications & Additional Options
      </button>
      <button
        className={`text-left px-3 py-2 rounded-lg ${
          activeLink === "Customizations"
            ? "bg-palatinatePurple text-white font-semibold"
            : "text-gray-700"
        }`}
        onClick={() => router.push('/calendar/calendar29')}
      >
        Customizations
      </button>
    </div>
  );
};

export default SideBarMeeting;
