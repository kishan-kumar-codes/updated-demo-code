import React, { FC, useState } from "react";
import BottomNavigation from "../../components/bottomNavigation";

const EmailView: FC = () => {
  const [tabs, setTabs] = useState<string[]>(["Received", "Sent", "Draft"]);

  return (
    <div className="relative flex flex-col w-full h-full">
      <div className="flex-1 flex justify-center mt-3 text-xl font-bold ">
        Page Not Found
      </div>

      <div className="bottom-navigation container fixed bottom-0 z-50">
        <BottomNavigation component="404" />
      </div>
    </div>
  );
};

export default EmailView;
