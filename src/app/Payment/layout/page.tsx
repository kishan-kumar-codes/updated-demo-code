"use client";

import React, { useState } from "react";
import Drawer from "@/components/Drawer";
// import Footer from "../component/footer"
import Header from "../components/header";
import HeaderMobile from "../components/headerMobile";
import { useRouter } from "next/navigation";
import BottomBar from "../components/bottomBar";

interface LayoutViewProps {
  Childrens: React.ReactNode;
  hHeading?: string;
}

const Layout: React.FC<LayoutViewProps> = ({ Childrens, hHeading }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleDrawer = (isDrawerOpen: boolean): void => {
    setIsOpen(isDrawerOpen);
  };

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden flex flex-col">
      <div className="relative flex flex-col flex-1">
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="md:hidden">
          <HeaderMobile
            hHeading={hHeading || "Payment"}
            showDrawer={() => null}
          />
        </div>
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          {Childrens}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full z-[500000000] md:hidden">
        <BottomBar />
      </div>
    </div>
  );
};

export default Layout;
