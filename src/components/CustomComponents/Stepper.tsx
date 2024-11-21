"use client";
import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { styled } from "@mui/material/styles";
import StepLabel from "@mui/material/StepLabel";

interface CustomStepLabelProps {
  active: boolean;
}

const CustomStepLabel = styled(StepLabel, {
  shouldForwardProp: (prop) => prop !== "active",
})<CustomStepLabelProps>(({ theme, active }) => ({
  "& .MuiStepLabel-label": {
    color: (props: CustomStepLabelProps) => (props.active ? "pink" : "default"),
  },
  "& .MuiSvgIcon-root.Mui-completed": {
    color: "transparent",
    backgroundColor: "#CF232A",
    borderRadius: "50%",
  },
  "& .MuiSvgIcon-root.Mui-disabled": {
    color: "red",
  },
  "& .css-117w1su-MuiStepIcon-text": {
    fill: "transparent",
    border: "2px solid black",
    backgroundColor: "#FAAC18",
  },
  "& .css-z7uhs0-MuiStepConnector-line": {
    borderTopWidth: "2px",
  },
  "& .css-zpcwqm-MuiStepConnector-root": {
    left: "calc(-60% + 20px)",
    right: "calc(40% + 20px)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "20%",
    left: "50%",
    width: "12px",
    height: "12px",
    backgroundColor: active ? "#F4F4F4" : "transparent",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

interface CustomizedSteppersProps {
  currentStep: number;
}

export const CustomizedSteppers: React.FC<CustomizedSteppersProps> = ({
  currentStep,
}) => {
  const steps = [
    "10th Nov 2023",
    "10th Dec 2023",
    "10th Jan 2024",
    "10th Feb 2024",
    "10th Mar 2024",
    "10th Apr 2024",
  ];

  return (
    <Stepper activeStep={currentStep} alternativeLabel>
      {steps.map((label, index) => (
        <Step key={label}>
          <div className="w-1 h-8 absolute top-[4px] ml-[2px] -translate-y-1/4 left-1/2 transform -translate-x-1/2  rotate-135 border-l border-slate-800 -z-10"></div>
          <CustomStepLabel active={currentStep === index}>
            {label}
          </CustomStepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
