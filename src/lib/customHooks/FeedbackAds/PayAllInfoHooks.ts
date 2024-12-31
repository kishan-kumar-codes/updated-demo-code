import { addPayAll } from "@/lib/features/FacebookAds/PayAllSlice";
import { useAppDispatch } from "@/hooks/hooks";
import React from "react";

export function usePayAllInfoHooks() {
  const dispatch = useAppDispatch();

  const [isTransactionSuccessful, setIsTransactionSuccessful] =
    React.useState(false);
  const [paymentInfo, setPaymentInfo] = React.useState({
    name: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
  });
  const [billingInfo, setBillingInfo] = React.useState({
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
  });
  const [additionalInfo, setAdditionalInfo] = React.useState({
    email: "",
    phone: "",
    notificationEmail: "",
    termsAndConditions: false,
  });

  const payAllDetails = {
    paymentInfo,
    billingInfo,
    additionalInfo,
  };

  const handleSubmitInfo = () => {
    dispatch(addPayAll(payAllDetails));
    setIsTransactionSuccessful(true);
  };

  return {
    dispatch,
    isTransactionSuccessful,
    setIsTransactionSuccessful,
    paymentInfo,
    setPaymentInfo,
    billingInfo,
    setBillingInfo,
    additionalInfo,
    setAdditionalInfo,
    handleSubmitInfo,
    payAllDetails,
  };
}
