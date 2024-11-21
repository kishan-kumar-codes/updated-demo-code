import { ReactNode, useState } from "react";
import { MyContext, MyContextType } from "./MyContext";

interface MyContextProviderProps {
  children: ReactNode;
}

const initialContextData = {
  firstName: "",
  lastName: "",
  businessInfo: "",
  phoneNumber: "",
  goals: [] as string[],
  image: null,
  jobTitle: null,
  selectedIndustry: null,
  searchTerm: "",
  selectedEmployees: null,
  selectedRevenue: null,
  emailList: [] as string[],
  businessWebsite: null,
  inviteEmailList: [] as string[],
};

export const MyContextProvider = ({ children }: MyContextProviderProps) => {
  const [contextData, setContextData] = useState<MyContextType["contextData"]>(
    initialContextData
  );

  const updateContextData = (
    newData: Partial<MyContextType["contextData"]>
  ) => {
    setContextData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const clearContext = () => {
    setContextData(initialContextData);
  };

  const contextValue: MyContextType = {
    contextData,
    updateContextData,
    clearContext,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
