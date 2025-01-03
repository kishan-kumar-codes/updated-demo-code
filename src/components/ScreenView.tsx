import { useState } from "react";
import Header from "./header";
import Drawer from "./Drawer";

interface ScreenViewProps {
  Childrens: React.ReactNode;
}

const ScreenView: React.FC<ScreenViewProps> = ({ Childrens }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDrawer = (isDrawerOpen: boolean): void => {
    setIsOpen(isDrawerOpen);
  };

  return (
    <div className="h-screen lg:h-[88vh] w-screen flex justify-center">
      <div className=" lg:hidden w-full bg-cultured flex flex-col mx-auto overflow-x-hidden md:mx-auto h-full md:overflow-y-hidden sm:overflow-y-scroll">
        <Header module="Inbox" showDrawer={handleDrawer} />
        <div className={`relative w-full flex flex-grow overflow-y-auto`}>
          {isOpen && (
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`${"bg-blackOlive opacity-75 w-full md:hidden sm:block h-full z-30 absolute top-0 left-0"}`}
            />
          )}
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
          {Childrens}
        </div>
      </div>
      <div className=" bg-cultured hidden lg:flex flex-col mx-auto overflow-x-hidden  md:mx-auto h-full sm:overflow-y-scroll">
        <div className="relative w-full flex flex-grow overflow-y-auto">
          <Drawer isOpen={true} />
          {Childrens}
        </div>
      </div>
    </div>
  );
};

export default ScreenView;
