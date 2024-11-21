import React, { useState } from "react";
import WebChatWindow from "./WebChatWindow";
import WebChatBubble from "./WebChatBubble";
import WebChatHeader from "./WebChatHeader";
import WebChatBot from "./WebChatBot";
import WebChatFlow from "./WebChatFlow";
import WebChatInstall from "./WebChatInstall";
import DesktopHeader from "./DesktopHeader";
import useWebChatSelectors from "@/hooks/useWebChatSelector";
import { useDispatch } from "react-redux";
import { setWebChat } from "@/store/slices/webChatSettingSlice";
import MobileHeader from "./MobileHeader";
const WebChatEdit = ({ fileInputRef }: any) => {
  const {
    desktopinstall,
    desktopchatBubble,
    desktopchatWindow,
    desktopchatHeader,
    desktopchatFlow,
    desktopchatBot,
    install,
    chatBubble,
    chatWindow,
    chatHeader,
    chatFlow,
    chatBot,
  } = useWebChatSelectors();
  const dispatch = useDispatch();
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [activeKey, setActiveKey] = useState("");

  const handleToggle = (key: string) => {
    // Create a new state object with all values set to false
    const newState: any = {
      desktopinstall: false,
      desktopchatBubble: false,
      desktopchatWindow: false,
      desktopchatHeader: false,
      desktopchatFlow: false,
      desktopchatBot: false,
    };

    // Set the clicked key's state to true
    newState[key] = true;

    dispatch(setWebChat(newState));
    setActiveKey(key);
  };
  const handleMobileToggle = (key: string) => {
    // Create a new state object with all values set to false
    const newState: any = {
      install: false,
      chatBubble: false,
      chatWindow: false,
      chatHeader: false,
      chatFlow: false,
      chatBot: false,
    };

    // Set the clicked key's state to true
    newState[key] = true;
    setActiveComponent(key);

    dispatch(setWebChat(newState));
  };

  const heading = [
    {
      heading: "Install",
      stateKey: "desktopinstall",
      currentValue: desktopinstall,
    },
    {
      heading: "Chat Bubble",
      stateKey: "desktopchatBubble",
      currentValue: desktopchatBubble,
    },
    {
      heading: "Chat Window",
      stateKey: "desktopchatWindow",
      currentValue: desktopchatWindow,
    },
    {
      heading: "Chat Header",
      stateKey: "desktopchatHeader",
      currentValue: desktopchatHeader,
    },
    {
      heading: "Chat Flow",
      stateKey: "desktopchatFlow",
      currentValue: desktopchatFlow,
    },
    {
      heading: "Chat Bot",
      stateKey: "desktopchatBot",
      currentValue: desktopchatBot,
    },
  ];

  const mobileheading = [
    {
      heading: "Install",
      stateKey: "install",
      currentValue: desktopinstall,
      component: <WebChatInstall />,
    },
    {
      heading: "Chat Bubble",
      stateKey: "chatBubble",
      component: <WebChatBubble fileInputRef={fileInputRef} />,
    },
    {
      heading: "Chat Window",
      stateKey: "chatWindow",
      component: <WebChatWindow />,
    },
    {
      heading: "Chat Header",
      stateKey: "chatHeader",
      component: <WebChatHeader />,
    },
    { heading: "Chat Flow", stateKey: "chatFlow", component: <WebChatFlow /> },
    { heading: "Chat Bot", stateKey: "chatBot", component: <WebChatBot /> },
  ];

  return (
    <div className="w-full flex gap-3 flex-col lg:flex-row justify-center lg:justify-start items-center">
      <div className="w-full lg:hidden flex flex-col gap-3">
        <div className="flex flex-col justify-center rounded-2xl items-center w-full h-full">
          <div className=" w-full flex gap-2 flex-col">
            {" "}
            {mobileheading.map((item, index) => (
              <>
                <MobileHeader
                  key={index}
                  title={item.heading}
                  handleClick={handleMobileToggle}
                  stateKey={item.stateKey}
                  component={item.component}
                  isActive={activeComponent === item.stateKey}
                />
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:flex flex-col ">
        <div className="lg:flex justify-start">
          {heading.map((item, index) => (
            <DesktopHeader
              isActive={activeKey === item.stateKey}
              key={index}
              title={item.heading}
              handleClick={handleToggle}
              stateKey={item.stateKey}
            />
          ))}
        </div>
        <div className="h-1 -mt-[10px] mx-auto bg-[#CCCCCC] w-full my-2"></div>
        <div className="py-8">
          {desktopinstall && <WebChatInstall />}
          {desktopchatBubble && <WebChatBubble fileInputRef={fileInputRef} />}
          {desktopchatWindow && <WebChatWindow />}
          {desktopchatHeader && <WebChatHeader />}
          {desktopchatFlow && <WebChatFlow />}
          {desktopchatBot && <WebChatBot />}
        </div>
      </div>
    </div>
  );
};

export default WebChatEdit;
