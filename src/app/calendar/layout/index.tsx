import React, { useState } from "react";
import Header from "@/components/header";
import Drawer from "@/components/Drawer";
import Footer from "../components/footer";
import TopHeader from "../components/TopHeader";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";

interface LayoutViewProps {
  Childrens: React.ReactNode;
}

const Layout: React.FC<LayoutViewProps> = ({ Childrens }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDrawer = (isDrawerOpen: boolean): void => {
    setIsOpen(isDrawerOpen);
  };
  return (
    <div className="h-screen relative w-screen justify-center bg-[#f4f4f4]">
      <div className=" bg-cultured flex flex-col mx-auto md:mx-auto h-full md:overflow-y-hidden sm:overflow-y-scroll">
        <div className="md:hidden">
          <Header showDrawer={handleDrawer} module="Calendar" />
        </div>
        <div className="hidden md:flex bg-white h-fit w-full">
          {/* <TopHeader /> */}
          <CitationNavbar heading="Calendar" isHeaderVisible={false} />
        </div>
        <div></div>
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

        <div className="md:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
