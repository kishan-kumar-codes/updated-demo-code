"use client";
import React, { useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";

export function useFeedbackAdsHooks() {
  const dispatch = useAppDispatch();
  const [currentStep, setCurrentStep] = useState(1);
  const handleNextStep = () => setCurrentStep((prevStep) => prevStep + 1);
  const handlePrevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  return {
    dispatch,
    currentStep,
    handleNextStep,
    handlePrevStep,
  };
}
