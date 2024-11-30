import React, { useState } from "react";
import Drawer from "@/components/Drawer";
// import Footer from "../component/footer"
import Header from "../components/header";
import MobileHeader from "@/components/header";
import Companies from "../companies/page";

interface LayoutViewProps {
  Childrens: React.ReactNode;
}

const Layout: React.FC<LayoutViewProps> = ({ Childrens }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDrawer = (isDrawerOpen: boolean): void => {
    setIsOpen(isDrawerOpen);
  };
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <div className="hidden md:flex w-full bg-cultured  flex-col">
        <Header />
        <div className="layout w-full h-full flex flex-col flex-1 ">
          {Childrens}
        </div>
      </div>
      {/* for mobile view */}
      <div className="md:hidden flex w-full bg-cultured  flex-col">
        <MobileHeader module="CRM" showDrawer={() => false} />
        <div className="layout w-full h-full flex flex-col flex-1 ">
          {Childrens}
        </div>
      </div>
    </div>
  );
};

export default Layout;
