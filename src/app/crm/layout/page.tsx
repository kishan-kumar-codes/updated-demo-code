"use client";

import React, { useState } from "react";
// import Header from "@/components/header";
import Drawer from "@/components/Drawer";
import Footer from "../component/footer";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import TabNavigation from "@/components/crmDesktop/components/tabNavigation";
import Header from "../component/Header";

interface LayoutViewProps {
  Childrens: React.ReactNode;
}

const Layout: React.FC<LayoutViewProps> = ({ Childrens }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDrawer = (isDrawerOpen: boolean): void => {
    setIsOpen(isDrawerOpen);
  };
  return (
    <div className=" w-screen lg:min-h-screen justify-center bg-[#F4F4F4]">
      {/* <div className="w-full lg:max-w-full bg-cultured flex flex-col mx-auto  sm:container md:container md:mx-auto h-full md:overflow-y-hidden sm:overflow-y-scroll"> */}
      {/* <Header showDrawer={handleDrawer} module="CRM" /> */}
      {/* <CitationNavbar
          onNavbarClick={handleDrawer}
          isHeaderVisible={false}
          heading="CRM"
        /> */}
      <Header
        onNavbarClick={handleDrawer}
        isHeaderVisible={false}
        heading="CRM"
        navItems={<TabNavigation />}
      />

      {/* <div className="absolute hidden  lg:flex top-4 transform left-[40%]">
          <TabNavigation />
        </div> */}
      <div
        className={`flex-grow  relative w-full flex overflow-y-scroll  md:py-0`}>
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
      {/* </div> */}
    </div>
  );
};

export default Layout;
