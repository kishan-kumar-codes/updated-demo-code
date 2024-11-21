"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { PencilLine } from "lucide-react";
import { Eye } from "lucide-react";
import { z } from "zod";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FormStatus } from "react-dom";
import { campaignformSchema } from "@/lib/schema/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import PreviewComponent from "./AdPreview";

interface AdAccount {
  account_id: string;
}

interface ApiResponse {
  data?: any;
  id: number;
  error?: string;
}

interface HandleClickAdId {
  handleclick: () => void;
  adId: string;
}

export default function CampaignComponent({
  handleclick,
  adId,
}: HandleClickAdId) {
  const { data: session, status } = useSession();
  const [adAccounts, setAdAccounts] = useState<AdAccount | null>(null);
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  // const
  const form = useForm<z.infer<typeof campaignformSchema>>({
    resolver: zodResolver(campaignformSchema),
    mode: "onChange",
    defaultValues: {
      buying: undefined,
      adname: "",
      objective: undefined,
      status: undefined,
      special_ad_categories: undefined,
    },
  });

  const formData = form.watch();
  const {
    formState: { errors },
  } = useForm();

  function onSubmit(values: z.infer<typeof campaignformSchema>) {
    setLoading(true);
    const payload = {
      ad_account_id: adId,
      buying_type: values.buying,
      name: values.adname,
      objective: values.objective,
      status: values.status,
      special_ad_categories: values.special_ad_categories,
    };

    axios
      .post(
        `https://graph.facebook.com/v20.0/act_${
          payload?.ad_account_id
        }/campaigns?effective_status=${payload.status}&name=${
          payload.name
        }&objective=${payload.objective}&special_ad_categories=${
          payload.special_ad_categories
        }&access_token=${(session as any).accessToken}`
      )
      .then((response: { data: ApiResponse }) => {
        if (response?.data.id) {
          toast({
            title: "Success!",
            description: "Campaign created successfully",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
          form.reset();
          setLoading(false);
        } else {
          const errorMessage = response?.data?.error;
          toast({
            title: "Failed!",
            description: errorMessage,
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
          console.error("Failed to create the campaign:", response);
        }
      })
      .catch((error) => {
        console.error("API Error:", error); // Log the error
        const errorResponse = error.response;
        console.log("API Error:", errorResponse.data.error.message); // Log the error
        if (errorResponse) {
          const errorMessage =
            errorResponse?.data?.error.message || "API Error";
          toast({
            title: "Failed!",
            description: errorMessage,
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }
        setLoading(false);
      });
  }

  useEffect(() => {
    const getAdAccounts = async () => {
      try {
        const response = await axios.get(
          "https://graph.facebook.com/v20.0/me",
          {
            params: {
              fields: "adaccounts",
              access_token: (session as any).accessToken,
            },
          }
        );

        const adAccounts = response.data.adaccounts.data;
        setAdAccounts(adAccounts[0]);
        return adAccounts;
      } catch (error) {
        console.error("Failed to fetch ad accounts:", error);
        throw error;
      }
    };
    getAdAccounts();
  }, [session]);

  const values = [
    "OUTCOME_AWARENESS",
    "OUTCOME_ENGAGEMENT",
    "OUTCOME_LEADS",
    "OUTCOME_SALES",
    "OUTCOME_TRAFFIC",
    "OUTCOME_APP_PROMOTION",
  ];
  ("");
  const special_ad = [
    "NONE",
    "EMPLOYMENT",
    "HOUSING",
    "CREDIT",
    "ISSUES_ELECTIONS_POLITICS",
    "ONLINE_GAMBLING_AND_GAMING",
  ];

  const statusValues = ["Active", "Archived", "Deleted", "Paused"];

  const transformValue = (value: string) => {
    return value
      .split("_")
      .map((word: string) => word.charAt(0) + word.slice(1).toLowerCase())
      .join(" ");
  };

  const selectItems = values.map((value) => (
    <SelectItem
      key={value}
      value={value}
      className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
      {transformValue(value)}
    </SelectItem>
  ));
  const selectStatusItems = statusValues.map((value) => (
    <SelectItem
      key={value}
      value={value}
      className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
      {transformValue(value)}
    </SelectItem>
  ));
  const specialselectItems = special_ad.map((value) => (
    <SelectItem
      key={value}
      value={value}
      className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
      {transformValue(value)}
    </SelectItem>
  ));

  const { toast } = useToast();
  return (
    <Form {...form}>
      <div className="flex w-full justify-center">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full flex justify-center">
          <Card className="w-full max-w-2xl md:max-w-6xl shadow-lg rounded-lg">
            <CardHeader className="bg-[#631363] text-[#F4F4F4] py-4 px-6 rounded-t-lg">
              <CardTitle className="text-2xl font-bold">
                Create New Campaign
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 bg-[#F4F4F4]">
              <div className="flex justify-end gap-2">
                <Link
                  href={`/ads-create/listcampaigns?adId=${adAccounts?.account_id}`}>
                  <div className="text-xs flex rounded-md cursor-pointer font-normal p-1 gap-1 h-8 items-center px-2 border border-[#631363] bg-[#631363] text-white">
                    Campaigns
                  </div>
                </Link>

                <div
                  onClick={() => setPreview(false)}
                  className={`text-xs flex rounded-md cursor-pointer ${
                    preview ? "" : "bg-white"
                  } p-1 gap-1 items-center border border-[#631363]`}>
                  <PencilLine color="#631363" />
                  Edit
                </div>
                <div
                  onClick={() => setPreview(true)}
                  className={`text-xs border-[#631363] cursor-pointer ${
                    preview ? "bg-white" : ""
                  } flex rounded-md p-1 gap-1 items-center border`}>
                  <Eye color="#631363" />
                  Review
                </div>
              </div>
              {preview ? (
                <PreviewComponent data={formData} />
              ) : (
                <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                  <FormField
                    control={form.control}
                    name="adname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#631363] font-medium">
                          {" "}
                          Campaign Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Summer_Sale_2024_Promo"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="objective"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#631363]">
                          {" "}
                          Objective
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select objective" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            {selectItems}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#631363]">Status</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a Status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            {selectStatusItems}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="special_ad_categories"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#631363]">
                          {" "}
                          Special Ad Category
                        </FormLabel>
                        <p className="text-xs">
                          Select the categories that best describe what this
                          campaign will advertise.
                        </p>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            {specialselectItems}
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="buying"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#631363]">
                          Buying type
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select buying type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem
                              value="auction"
                              className="hover:bg-[#40F440] hover:text-[#631363]">
                              Auction
                            </SelectItem>
                            <SelectItem
                              value="reservation"
                              className="hover:bg-[#40F440] hover:text-[#631363]">
                              Reservation
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </CardContent>
            <CardFooter className="bg-[#F4F4F4] py-4 px-6 flex justify-between rounded-b-lg">
              <Button
                disabled={loading}
                type="submit"
                variant="outline"
                className="bg-[#631363] text-[#F4F4F4] hover:bg-[#E0E0E0] hover:text-[#631363] px-6 py-2 rounded-md shadow-md">
                Create Campaign
              </Button>
              <Button
                onClick={() => handleclick()}
                variant="outline"
                className="bg-[#631363] text-[#F4F4F4] hover:bg-[#E0E0E0] hover:text-[#631363] px-6 py-2 rounded-md shadow-md">
                Next
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </Form>
  );
}
