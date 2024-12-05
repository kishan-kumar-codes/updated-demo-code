"use client";

import { Button } from "@/components/ui/button";
import React from "react";
// import Input from "react-select/dist/declarations/src/components/Input";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormData {
  firstName: string;
  lastName: string;
  merchantEmail: string;
  businessName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
  routingNumber: string;
  accountNumber: string;
  accountHolderName: string;
}

type PrimaryPrincipal = {
  first_name: string;
  last_name: string;
  middle_name?: string;
  title?: string;
  date_of_birth: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state_province: string;
  postal_code: string;
  ownership_percent: number;
  phone_number: string;
};
type MerchantLocation = {
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state_province: string;
  postal_code: string;
  phone_number: string;
};
type BankAccount = {
  routing_number: string;
  account_number: string;
  account_holder_name: string;
};
type Contact = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};
type FortisOnboardingRequest = {
  parent_id: string;
  primary_principal: PrimaryPrincipal;
  template_code: string;
  email: string;
  dba_name: string;
  location: MerchantLocation;
  app_delivery: string;
  business_category?: string;
  swiped_percent?: number;
  keyed_percent?: number;
  ecommerce_percent?: number;
  ownership_type?: string;
  fed_tax_id?: string;
  cc_average_ticket_range?: number;
  cc_monthly_volume_range?: number;
  cc_high_ticket?: number;
  ec_average_ticket_range?: number;
  ec_monthly_volume_range?: number;
  ec_high_ticket?: number;
  website?: string;
  bank_account: BankAccount;
  alt_bank_account?: BankAccount;
  legal_name: string;
  contact: Contact;
  client_app_id: string;
};
type FortisOnboardingResponse = {
  type: string;
  data: {
    parent_id: string;
    primary_principal: {
      first_name: string;
      last_name: string;
      middle_name?: string;
      title?: string;
      date_of_birth: string;
      address_line_1: string;
      address_line_2?: string;
      city: string;
      state_province: string;
      postal_code: string;
      ownership_percent: number;
      phone_number: string;
    };
    template_code: string;
    email: string;
    dba_name: string;
    location: {
      address_line_1: string;
      address_line_2?: string;
      city: string;
      state_province: string;
      postal_code: string;
      phone_number: string;
    };
    app_delivery: string;
    business_category?: string;
    swiped_percent?: number;
    keyed_percent?: number;
    ecommerce_percent?: number;
    ownership_type?: string;
    fed_tax_id?: string;
    cc_average_ticket_range?: number;
    cc_monthly_volume_range?: number;
    cc_high_ticket?: number;
    ec_average_ticket_range?: number;
    ec_monthly_volume_range?: number;
    ec_high_ticket?: number;
    website?: string;
    bank_account: {
      routing_number: string;
      account_number: string;
      account_holder_name: string;
    };
    alt_bank_account: {
      routing_number: string;
      account_number: string;
      account_holder_name: string;
      deposit_type: string;
    };
    legal_name: string;
    contact: {
      first_name: string;
      last_name: string;
      email: string;
      phone_number: string;
    };
    client_app_id: string;
    app_link: string;
  };
};
const MerchantOnboarding: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    merchantEmail: "",
    businessName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    routingNumber: "",
    accountNumber: "",
    accountHolderName: "",
  });
  // Construct the request data
  const requestData = {
    parent_id: "11ee3d1876fce656870ba956",
    primary_principal: {
      first_name: formData.firstName,
      last_name: formData.lastName,
      middle_name: "Todd",
      title: "Mr",
      date_of_birth: "2021-12-01",
      address_line_1: formData.address1,
      address_line_2: formData.address2,
      city: formData.city,
      state_province: formData.state,
      postal_code: formData.zipCode,
      ownership_percent: 100,
      phone_number: formData.phoneNumber,
    },
    template_code: "TESTING1234",
    email: formData.merchantEmail,
    dba_name: formData.businessName,
    location: {
      address_line_1: "1200 West Hartford Pkwy",
      address_line_2: "Suite 2000",
      city: "Dover",
      state_province: "DE",
      postal_code: "55022",
      phone_number: "7165722802",
    },
    app_delivery: "link_iframe",
    business_category: "professional_services",
    swiped_percent: 0,
    keyed_percent: 0,
    ecommerce_percent: 100,
    ownership_type: "llp",
    fed_tax_id: "0000000000",
    cc_average_ticket_range: 5,
    cc_monthly_volume_range: 1,
    cc_high_ticket: 1500,
    ec_average_ticket_range: 5,
    ec_monthly_volume_range: 2,
    ec_high_ticket: 1500,
    website: "http://www.example.com",
    bank_account: {
      routing_number: formData.routingNumber,
      account_number: formData.accountNumber,
      account_holder_name: formData.accountHolderName,
    },
    alt_bank_account: {
      routing_number: "011103093",
      account_number: "01234567890123",
      account_holder_name: "Geoffrey Bolton",
      deposit_type: "fees_adjustments",
    },
    legal_name: "HubSpark",
    contact: {
      first_name: "Geoffrey",
      last_name: "Bolton",
      email: "geoffrey@hubspark.com",
      phone_number: "7165722802",
    },
    client_app_id: "MerchantRef6322395",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/fortis/merchantBoarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      if (!response.ok) {
        // Handle HTTP errors here
        console.error(`HTTP error! status: ${response.status}`);
        return;
      }
      const data = await response.json();
      console.log("Request submitted successfully", data);
      // Extract the app_link and redirect
      if (data?.data?.app_link) {
        window.location.href = data.data.app_link;
      } else {
        console.error("App link not found in the response");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      // Handle other types of errors (e.g., network errors)
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* <h1>Merchant Onboarding</h1>
      <button onClick={handleSubmit} style={{ cursor: "pointer" }}>
        Submit Onboarding Request
      </button> */}

      <div className="bg-[#F4F4F4] md:max-w-[450px]">
        <Card className="w-full">
          <CardHeader className=" text-white py-2">
            <CardTitle className="text-center text-[30px] pt-4 text-[#6D6D6D]">
              MPA
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            <form onSubmit={handleSubmit} className="space-y-4 px-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="firstName"
                    className="text-[#631363] text-xs font-bold">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-[#E0E0E0] rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="lastName"
                    className="text-[#631363] text-xs font-bold">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-[#E0E0E0] rounded-2xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="merchantEmail"
                  className="text-[#631363] text-xs font-bold">
                  Merchant Email
                </Label>
                <Input
                  id="merchantEmail"
                  name="merchantEmail"
                  type="email"
                  value={formData.merchantEmail}
                  onChange={handleChange}
                  required
                  className="bg-[#E0E0E0] rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="businessName"
                  className="text-[#631363] text-xs font-bold">
                  Business Name
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="bg-[#E0E0E0] rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="address1"
                  className="text-[#631363] text-xs font-bold">
                  Address
                </Label>
                <Input
                  id="address1"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  required
                  className="bg-[#E0E0E0] rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="address2"
                  className="text-[#631363] text-xs font-bold">
                  Address 2
                </Label>
                <Input
                  id="address2"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                  className="bg-[#E0E0E0] rounded-2xl"
                />
              </div>

              <div className="grid grid-cols-3 gap-1">
                <div className="space-y-2">
                  <Label
                    htmlFor="city"
                    className="text-[#6D6D6D] text-xs font-bold">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="bg-[#E0E0E0] rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="state"
                    className="text-[#6D6D6D] text-xs font-bold">
                    State
                  </Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="bg-[#E0E0E0] rounded-2xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="zipCode"
                    className="text-[#6D6D6D] text-xs font-bold">
                    Zip/Postal Code
                  </Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="bg-[#E0E0E0] rounded-2xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="phoneNumber"
                  className="text-[#631363] text-xs font-bold">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="bg-[#E0E0E0] rounded-2xl"
                />
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-xs text-[#631363]">
                  Bank Account
                </h3>
                <div className="grid grid-cols-3 gap-1">
                  <div className="space-y-2">
                    <Label
                      htmlFor="routingNumber"
                      className="text-[#6D6D6D] whitespace-nowrap text-xs font-bold">
                      Routing Number
                    </Label>
                    <Input
                      id="routingNumber"
                      name="routingNumber"
                      value={formData.routingNumber}
                      onChange={handleChange}
                      required
                      className="bg-[#E0E0E0] rounded-2xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="accountNumber"
                      className="text-[#6D6D6D] text-xs font-bold">
                      Account Number
                    </Label>
                    <Input
                      id="accountNumber"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      required
                      className="bg-[#E0E0E0] rounded-2xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="accountHolderName"
                      className="text-[#6D6D6D] whitespace-nowrap text-xs font-bold">
                      Account Holder Name
                    </Label>
                    <Input
                      id="accountHolderName"
                      name="accountHolderName"
                      value={formData.accountHolderName}
                      onChange={handleChange}
                      required
                      className="bg-[#E0E0E0] rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}

              <Button
                type="submit"
                className="w-full bg-[#40F440] font-bold text-white"
                disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default MerchantOnboarding;
