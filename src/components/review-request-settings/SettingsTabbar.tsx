interface TabBarType {
  setSelectedTab: (tab: string) => void;
  selectedTab: string;
}

export default function SettingsTabbar({
  setSelectedTab,
  selectedTab,
}: TabBarType) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex text-sm flex-grow w-full justify-between text-[#3D3D3D]">
        <div
          onClick={() => setSelectedTab("myprofile")}
          className={`${
            selectedTab === "myprofile" ? "bg-[#40F440]" : "bg-[#FFFFFF]"
          } border flex items-center justify-center text-center flex-1 h-11 rounded-tl-2xl rounded-bl-2xl flex-grow`}>
          My Profile
        </div>
        <div
          onClick={() => setSelectedTab("companyprofile")}
          className={`${
            selectedTab === "companyprofile" ? "bg-[#40F440]" : "bg-[#FFFFFF]"
          }  border flex items-center justify-center  text-center flex-1 h-11 flex-grow`}>
          Comapany Profile
        </div>
        <div
          onClick={() => setSelectedTab("surveysettings")}
          className={`${
            selectedTab === "surveysettings" ? "bg-[#40F440]" : "bg-[#FFFFFF]"
          }  rounded-tr-2xl flex items-center justify-center text-wrap  rounded-br-2xl border text-center flex-1 h-11 flex-grow`}>
          Survey Settings{" "}
        </div>
      </div>
      <div className="flex text-sm w-full justify-between text-[#3D3D3D]">
        <div
          onClick={() => setSelectedTab("map")}
          className={`${
            selectedTab === "map" ? "bg-[#40F440]" : "bg-[#FFFFFF]"
          }  border flex items-center rounded-tl-2xl rounded-bl-2xl justify-center  text-center flex-1 h-11 flex-grow`}>
          Maps
        </div>
        <div
          onClick={() => setSelectedTab("api")}
          className={`${
            selectedTab === "api" ? "bg-[#40F440]" : "bg-[#FFFFFF]"
          }  border flex items-center justify-center  text-center flex-1 h-11 flex-grow`}>
          API
        </div>
        <div
          onClick={() => setSelectedTab("password")}
          className={`${
            selectedTab === "password" ? "bg-[#40F440]" : "bg-[#FFFFFF]"
          }  border flex items-center justify-center rounded-tr-2xl rounded-br-2xl   text-center flex-1 h-11 flex-grow`}>
          My Password
        </div>
      </div>
    </div>
  );
}
