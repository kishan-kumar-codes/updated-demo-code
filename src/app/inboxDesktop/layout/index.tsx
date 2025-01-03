import React, { useState } from "react";
import Drawer from "@/components/Drawer";
// import Footer from "../component/footer"
import Header from "../components/header";

interface LayoutViewProps {
  Childrens: React.ReactNode;
}

const Layout: React.FC<LayoutViewProps> = ({ Childrens }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDrawer = (isDrawerOpen: boolean): void => {
    setIsOpen(isDrawerOpen);
  };
  return (
    <div className="h-screen w-screen overflow-x-hidden ">
      <div className="w-full h-full bg-cultured flex flex-col">
        <Header />
        <div className="layout w-full overflow-y-hidden  h-full flex flex-col flex-1 ">
          {Childrens}
        </div>
      </div>
    </div>
  );
};

export default Layout;
