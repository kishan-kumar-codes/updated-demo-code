'use client'

import { createContext } from "react";

export interface MyContextType {
  contextData: {
    firstName: string;
    lastName: string;
    businessInfo?: string;
    phoneNumber?: string;
    goals?: string[];
    image: string | null;
    jobTitle: string | null;
    selectedIndustry?: string | null;
    searchTerm?: string;
    selectedEmployees?: string | null;
    selectedRevenue?: string | null;
    emailList?: string[];
    businessWebsite?: string | null;
    inviteEmailList?: string[] | null;
  };
  updateContextData: (newData: Partial<MyContextType["contextData"]>) => void;
  clearContext: () => void;
}

export const MyContext = createContext<MyContextType | undefined>(undefined);
