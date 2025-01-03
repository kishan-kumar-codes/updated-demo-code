import React, { FC, useEffect, useState } from "react";
import AllMessages from "./allMessages";
import LayoutView from "../layout";
import Drawer from '../components/Drawer'
import Chat from './chat'
import BulkActions from '../components/bulkActions'
import FilterView from "../components/filterView";


interface InboxViewProps {
  currentView: string;
  setSelectedMessage: (messageId: number) => void;
  setCurrentView: (view: string) => void;
}

interface tabsProbs {
  menuName: string;
  link: string;
}

const InboxView: FC<InboxViewProps> = ({
  currentView,
  setSelectedMessage,
  setCurrentView,
}) => {
  const [tabs, setTabs] = useState<tabsProbs[]>([
    {
      menuName: "All Messages",
      link: "",
    },
  ]);

  const [showNewestFilter, setShowNewestFilter] = useState(false)
  const [showOpenDropdown, setshowOpenDropdown] = useState(false)
  const [showThreeDotsFilter, setshowThreeDotsFilter] = useState(false)
  const [isBulkAction, setBulkAction] = useState(false)
  const [showFilterDialog, setShowFilterDialog] = useState(false)

  const handleMessageClick = (messageId: number) => {
    setSelectedMessage(messageId);
    setCurrentView("Chats");
  };

  const handleFilters = (isShow: boolean) => {    
    setShowFilterDialog(isShow)    

  }
  const handleFilterView = (isShow: boolean) => {
    setShowFilterDialog(isShow)
  }


  const handleBulkAction = (value: boolean) => {
    setBulkAction(value)
  }



  return (
    <LayoutView
      Childrens={
        <div className="flex-1 h-full  flex">
          <div className=" bg-cultured h-full overflow-x-hidden">
            <Drawer isOpen={true} setIsOpen={() => true} />
          </div>
          <div className="relative h-full pb-[20px] overflow-y-auto overflow-x-hidden bg-cultured px-[15px]">

            <div className="flex items-center mt-[36px] 2xl:mt[49px] justify-between">
              <div className="w-[403px]  h-[32px] bg-white text-darkSilverColor rounded-3xl flex items-center py-[7px] pl-[13px]">
                <span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8742 7.43722C13.8742 8.72859 13.3878 10.02 12.5774 10.9885C12.4153 11.1499 12.4153 11.392 12.5774 11.4727L12.6585 11.5535C14.1173 12.9255 15.495 14.2976 16.8728 15.7504C17.0349 15.8311 17.1158 15.9925 17.1969 16.0732C17.44 16.3961 17.4401 16.8803 17.1159 17.2032C16.8728 17.526 16.3054 17.526 15.9812 17.2032C15.657 16.9611 15.4139 16.6382 15.0087 16.2346C13.793 15.024 12.5773 13.8133 11.5237 12.6834C11.2806 12.4413 11.1185 12.4413 10.8753 12.6027C7.71461 14.7819 3.33829 13.9748 1.23113 10.8271C-0.957074 7.67935 -0.146669 3.321 3.01407 1.22253C4.31078 0.254006 5.85063 -0.0688356 7.47152 0.0118747C11.0375 0.415426 13.8742 3.48242 13.8742 7.43722ZM6.98537 12.3606C9.90297 12.4413 12.3342 10.1814 12.4962 7.27581C12.5773 4.37023 10.3082 2.02963 7.39059 1.7875C7.30955 1.7875 7.22846 1.7875 7.14742 1.7875C4.22982 1.86821 1.96045 4.28952 1.96045 7.19509C1.79836 10.02 4.14881 12.2799 6.98537 12.3606Z" fill="#BCBCBC" />
                  </svg>
                </span>
                <input type="text" placeholder="Search Message" className=" w-full h-full " />
              </div>
              <button onClick={() => handleFilters(true)} className="bg-palatinatePurple flex justify-evenly rounded-lg items-center text-white h-[29px] w-[81px] text-[14px] font-bold">
                <span>
                  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.458 1.44855C13.3581 1.05065 12.9584 0.951172 12.5589 0.951172H1.27183C0.872285 0.951172 0.672365 1.2496 0.372704 1.44855C0.272817 1.84645 0.272914 2.24435 0.472688 2.4433L4.9676 7.71548V11.794C4.9676 11.8934 5.06754 12.1919 5.26731 12.1919C5.46709 12.1919 5.36701 12.1919 5.56678 12.1919C5.66667 12.1919 5.66672 12.1919 5.86649 12.0924L8.66337 10.2024C8.76326 10.1029 8.96308 9.90394 8.96308 9.80447V7.616L13.458 2.34383C13.5579 2.14488 13.5579 1.74697 13.458 1.44855Z" fill="white" />
                  </svg>
                </span>
                <span>
                  Filter
                </span>
              </button>

            </div>

            <div className="mt-[20px] 2xl:mt-[42px] w-[510px] grid grid-cols-2">
              <button className="h-[40px] 2xl:h-[56px] bg-limeGreen text-darkSilverColor text-[18px] 2xl:text-[22px] flex justify-center items-center rounded-3xl">
                All incoming Activity
              </button>
              <button className="h-[40px] 2xl:h-[56px]  bg-white text-darkSilverColor text-[18px] 2xl:text-[22px] flex justify-center items-center rounded-3xl">
                All incoming Activity
              </button>
            </div>
            {
              isBulkAction ? <BulkActions setBulkAction={handleBulkAction} /> :

                <div className="flex justify-between mt-[20px] 2xl:mt-[35px] mb-[27px]">
                  <div className="relative">
                    <h5 onClick={() => setshowOpenDropdown(!showOpenDropdown)} className="text-[16px] 2xl:text-[20px] text-darkSilverColor font-bold flex items-center">
                      OPEN <span className="ml-[7px]"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.27681 7.44058L12.3711 2.36734C12.7707 1.96944 12.6708 1.3726 12.3711 0.974695C11.9716 0.67627 11.3722 0.67627 11.0726 0.974695L6.67763 5.3516L2.28245 0.974695C1.88291 0.576794 1.28368 0.576794 0.884134 0.974695C0.484586 1.3726 0.484586 1.96944 0.884134 2.36734L5.97823 7.44058C6.27789 7.739 6.97714 7.739 7.27681 7.44058Z" fill="#631363" />
                      </svg>
                      </span>
                    </h5>
                    {
                      showOpenDropdown &&
                      <div className="absolute w-[175px] flex flex-col justify-evenly pl-[19px]  bg-white border border-palatinatePurple left-0 z-30 top-7  rounded-3xl  h-[102px]">
                        <h5 className="text-[16px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">OPEN</h5>
                        <h5 className="text-[16px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">CLOSED</h5>
                      </div>
                    }
                  </div>
                  <div className="relative">
                    <h5  className="relative cursor-pointer text-[16px] 2xl:text-[20px] text-darkSilverColor font-bold flex items-center">
                      <span className="flex items-center" onClick={() => setShowNewestFilter(!showNewestFilter)}>
                        Newest <span className="ml-[7px]"><svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.27681 7.44058L12.3711 2.36734C12.7707 1.96944 12.6708 1.3726 12.3711 0.974695C11.9716 0.67627 11.3722 0.67627 11.0726 0.974695L6.67763 5.3516L2.28245 0.974695C1.88291 0.576794 1.28368 0.576794 0.884134 0.974695C0.484586 1.3726 0.484586 1.96944 0.884134 2.36734L5.97823 7.44058C6.27789 7.739 6.97714 7.739 7.27681 7.44058Z" fill="#631363" />
                        </svg>
                        </span>
                      </span>
                      <span onClick={() => setshowThreeDotsFilter(!showThreeDotsFilter)}  className={`ml-[15px] ${showThreeDotsFilter ? 'rotate-180' : ''}`}>
                        <svg width="7" height="20" viewBox="0 0 7 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.19521 6.01176C4.79503 6.01176 6.09184 4.72021 6.09184 3.12699C6.09184 1.53377 4.79503 0.242188 3.19521 0.242188C1.59539 0.242188 0.29834 1.53377 0.29834 3.12699C0.29834 4.72021 1.59539 6.01176 3.19521 6.01176Z" fill="#6D6D6D" />
                          <path d="M3.19521 14.5666C4.79503 14.5666 6.09184 13.275 6.09184 11.6818C6.09184 10.0885 4.79503 8.79699 3.19521 8.79699C1.59539 8.79699 0.29834 10.0885 0.29834 11.6818C0.29834 13.275 1.59539 14.5666 3.19521 14.5666Z" fill="#6D6D6D" />
                          <path d="M3.19521 23.1215C4.79503 23.1215 6.09184 21.8299 6.09184 20.2367C6.09184 18.6435 4.79503 17.3519 3.19521 17.3519C1.59539 17.3519 0.29834 18.6435 0.29834 20.2367C0.29834 21.8299 1.59539 23.1215 3.19521 23.1215Z" fill="#6D6D6D" />
                        </svg>

                      </span>

                    </h5>
                    {
                      showThreeDotsFilter &&
                      <div className="absolute w-[175px] flex flex-col justify-evenly pl-[19px]  bg-white border border-palatinatePurple -right-1 z-30 top-7  rounded-3xl  h-[102px]">
                        <h5 className="text-[16px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">Mark All As Read</h5>
                        <h5 className="text-[16px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">Mark All As Unread</h5>
                        <h5 onClick={() => setBulkAction(true)} className="text-[16px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">Bulk Actions</h5>
                      </div>
                    }
                    {
                      showNewestFilter &&
                      <div className="absolute w-[175px] flex flex-col justify-evenly pl-[19px]  bg-white border border-palatinatePurple -right-1 z-30 top-7  rounded-3xl  h-[102px]">
                        <h5 className="text-[16px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">Oldest</h5>
                        <h5 className="text-[16px] text-darkSilverColor cursor-pointer hover:text-palatinatePurple">Newest</h5>                        
                      </div>
                    }
                  </div>



                </div>
            }
            {
              showFilterDialog &&
              <FilterView 
                handleFilterView={handleFilterView}
                showFilterDialog={showFilterDialog}
              />
            }
            <AllMessages isBulk={isBulkAction} onMessageClick={handleMessageClick} />
          </div>
          <div className="flex-1 overflow-y-auto  bg-white mx-2">
            <Chat />
          </div>

        </div>
      }
    />
  );
};

export default InboxView;
