"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Drawer from "@/components/Drawer";
import Footer from "../components/footer";

interface LayoutViewProps {
  Childrens: React.ReactNode;
}

const Layout: React.FC<LayoutViewProps> = ({ Childrens }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDrawer = (isDrawerOpen: boolean): void => {
    setIsOpen(isDrawerOpen);
  };
  return (
    <div className="h-screen w-screen  justify-center">
      <div className="container bg-cultured flex flex-col mx-auto  sm:container md:container md:mx-auto h-full md:overflow-y-hidden sm:overflow-y-scroll">
        <Header showDrawer={handleDrawer} module="Calendar" />
        <div
          className={`flex-grow py-5 relative w-full flex overflow-y-scroll`}
          style={{ height: "100%" }}>
          {isOpen && (
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`${"bg-blackOlive opacity-75 w-full md:hidden sm:block h-full z-30 absolute top-0 left-0"}`}
            />
          )}
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
          {Childrens}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
