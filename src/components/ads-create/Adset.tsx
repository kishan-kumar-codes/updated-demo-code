/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Session } from "next-auth";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { CalendarIcon, Eye, PencilLine } from "lucide-react";
import { z } from "zod";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { adsetformSchema } from "@/lib/schema/schema";

import { cn } from "@/lib/utils";
import Link from "next/link";
import PreviewComponent from "./AdPreview";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const min_age = [
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
];

interface AdDataItem {
  id: string;
  name: string;
  status: string;
}

interface AdAccount {
  account_id: string;
}

interface HandleClickAdId {
  handleclick: () => void;
  handleprevious: () => void;
  adId: string;
}

interface CustomUser {
  profile?: {
    accounts: {
      data: {
        id: string;
        name: string;
      }[];
    };
  };
}

interface CustomSession extends Session {
  user?: CustomUser & Session["user"];
}

const opt_goals = [
  "NONE",
  "APP_INSTALLS",
  "AD_RECALL_LIFT",
  "ENGAGED_USERS",
  "EVENT_RESPONSES",
  "IMPRESSIONS",
  "LEAD_GENERATION",
  "QUALITY_LEAD",
  "LINK_CLICKS",
  "OFFSITE_CONVERSIONS",
  "PAGE_LIKES",
  "POST_ENGAGEMENT",
  "QUALITY_CALL",
  "REACH",
  "LANDING_PAGE_VIEWS",
  "VISIT_INSTAGRAM_PROFILE",
  "VALUE",
  "THRUPLAY",
  "DERIVED_EVENTS",
  "APP_INSTALLS_AND_OFFSITE_CONVERSIONS",
  "CONVERSATIONS",
  "IN_APP_VALUE",
  "MESSAGING_PURCHASE_CONVERSION",
  "SUBSCRIBERS",
  "REMINDERS_SET",
  "MEANINGFUL_CALL_ATTEMPT",
  "PROFILE_VISIT",
  "MESSAGING_APPOINTMENT_CONVERSION",
];

const destination_type = [
  "WEBSITE",
  "APP",
  "MESSENGER",
  "APPLINKS_AUTOMATIC",
  "WHATSAPP",
  "INSTAGRAM_DIRECT",
  "FACEBOOK",
  "MESSAGING_MESSENGER_WHATSAPP",
  "MESSAGING_INSTAGRAM_DIRECT_MESSENGER",
  "MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP",
  "MESSAGING_INSTAGRAM_DIRECT_WHATSAPP",
  "SHOP_AUTOMATIC",
  "ON_AD",
  "ON_POST",
  "ON_EVENT",
  "ON_VIDEO",
  "ON_PAGE",
  "INSTAGRAM_PROFILE",
  "FACEBOOK_PAGE",
  "INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE",
];

const billing_event = [
  "APP_INSTALLS",
  "CLICKS",
  "IMPRESSIONS",
  "LINK_CLICKS",
  "NONE",
  "OFFER_CLAIMS",
  "PAGE_LIKES",
  "POST_ENGAGEMENT",
  "THRUPLAY",
  "PURCHASE",
  "LISTING_INTERACTION",
];

const transformValue = (value: string) => {
  return value
    .split("_")
    .map((word: string) => word.charAt(0) + word.slice(1).toLowerCase())
    .join(" ");
};

const billingItems = billing_event.map((value) => (
  <SelectItem
    key={value}
    value={value}
    className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
    {transformValue(value)}
  </SelectItem>
));

const selectItems = opt_goals.map((value) => (
  <SelectItem
    key={value}
    value={value}
    className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
    {transformValue(value)}
  </SelectItem>
));

const destinationItems = destination_type.map((value) => (
  <SelectItem
    key={value}
    value={value}
    className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
    {transformValue(value)}
  </SelectItem>
));

const min_age_group = min_age.map((value: number) => (
  <SelectItem
    key={value}
    value={value.toString()}
    className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
    {value}
  </SelectItem>
));
const max_age_group = min_age.reverse().map((value: number) => (
  <SelectItem
    key={value}
    value={value.toString()}
    className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
    {value}
  </SelectItem>
));
export default function AdsetComponent({
  handleclick,
  handleprevious,
  adId,
}: HandleClickAdId) {
  const { data: sessionData, status } = useSession();
  const session = sessionData as CustomSession;
  const [newError, setNewErrors] = useState("");
  const [adData, setAdData] = useState<AdDataItem[]>([]);
  const [adAccounts, setAdAccounts] = useState<AdAccount | null>(null);
  const [preview, setPreview] = useState(false);

  const campaignsItems = adData?.map((value, index) => (
    <SelectItem
      key={index}
      value={value.id}
      className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
      {value.name}
    </SelectItem>
  ));

  async function getAdAccounts() {
    try {
      const response = await axios.get("https://graph.facebook.com/v20.0/me", {
        params: {
          fields: "adaccounts",
          access_token: (session as any).accessToken,
        },
      });

      const adAccounts = response.data.adaccounts.data;
      setAdAccounts(adAccounts[0]);
      return adAccounts;
    } catch (error) {
      console.error("Failed to fetch ad accounts:", error);
      throw error;
    }
  }

  async function getAdCampaigns() {
    if (!adId) return;

    try {
      const response = await axios.get(
        `https://graph.facebook.com/v20.0/act_${adId}/campaigns`,
        {
          params: {
            fields:
              "id,name,created_time,buying_type,status,adsets{id,name},ads{adset_id,name}",
            limit: 100,
            access_token: (session as any).accessToken,
          },
        }
      );
      setAdData(response.data.data);
    } catch (error) {
      console.error("Failed to fetch ad campaigns:", error);
      throw error;
    }
  }

  const form = useForm<z.infer<typeof adsetformSchema>>({
    resolver: zodResolver(adsetformSchema),
    defaultValues: {
      adname: "",
      optimization_goal: undefined,
      min_age: undefined,
      max_age: undefined,
      gender: "0",
      // object_store_url: "",
      pagename: undefined,
      // billing: " ",
      events: undefined,
      bid_amount: "",
      daily_budget: "",
      status: undefined,
      startDate: new Date(),
      endDate: new Date(),
      destination_type: undefined,
      campaignid: "",
      location: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof adsetformSchema>) {
    const payload = {
      ad_account_id: adId,
      name: values.adname,
      optimization_goal: values.optimization_goal,
      billing_event: values.events,
      gender: values.gender,
      bid_amount: values.bid_amount,
      daily_budget: values.daily_budget,
      targeting: {
        geo_locations: { countries: [`${values.location}`] },
        facebook_positions: ["feed"],
        age_max: values.max_age,
        age_min: values.min_age,
        genders: [Number(values.gender)],
      },
      campaign_id: values.campaignid,
      pagename: {
        // application_id: `428566063274235`,
        // event_type: "OFFSITE_CONVERSION",
        // object_store_url: `http://localhost:3000`,
        page_id: `${String(values.pagename)}`,
        // object_store_url: `${String(values.object_store_url)}`,
      },
      status: values.status,
      startDate: values.startDate,
      endDate: values.endDate,
    };

    axios
      .post(
        `https://graph.facebook.com/v20.0/act_${
          payload?.ad_account_id
        }/adsets?status=${payload.status}&name=${payload.name}&billing_event=${
          payload.billing_event
        }&optimization_goal=${payload.optimization_goal}&bid_amount=${
          payload.bid_amount
        }&daily_budget=${payload.daily_budget}&campaign_id=${
          payload.campaign_id
        }&promoted_object=${JSON.stringify(
          payload.pagename
        )}&targeting=${JSON.stringify(payload.targeting)}&access_token=${
          (session as any).accessToken
        }&start_time=${Math.floor(
          new Date(`${payload.startDate}`).getTime() / 1000
        )}&end_time=${Math.floor(
          new Date(`${payload.endDate}`).getTime() / 1000
        )}`
      )
      .then((response: AxiosResponse) => {
        toast({
          title: "Success!",
          description: "Adset created successfully",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        });
        form.reset();
      })
      .catch((error) => {
        console.error("API Error:", error);
        const errorResponse = error.response;
        console.log("API Error:", errorResponse.data.error.message);
        if (errorResponse) {
          const errorMessage =
            errorResponse?.data?.error.error_user_title || "Invalid Paramter";
          toast({
            title: "Failed!",
            description: errorMessage,
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
          });
        }
      });
  }
  useEffect(() => {
    getAdCampaigns();
  }, [adId]);

  useEffect(() => {
    getAdAccounts();
  }, []);

  const formData = form.watch();

  return (
    <div>
      <div className="flex w-full justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <Card className="w-full max-w-2xl md:max-w-6xl shadow-lg rounded-lg">
              <CardHeader className="bg-[#631363] text-[#F4F4F4] py-4 px-6 rounded-t-lg">
                <CardTitle className="text-2xl font-bold">
                  Create New Adset
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 bg-[#F4F4F4]">
                <div className="flex justify-end gap-2 py-2">
                  <Link
                    href={`/ads-create/listadsets?adId=${adAccounts?.account_id}`}>
                    <div className="text-xs flex rounded-md cursor-pointer font-normal p-1 gap-1 h-8 items-center px-2 border border-[#631363] bg-[#631363] text-white">
                      Ad Sets
                    </div>
                  </Link>
                  <div
                    onClick={() => setPreview(false)}
                    className={`text-xs flex rounded-md cursor-pointer ${
                      !preview ? "bg-white" : ""
                    } p-1 gap-1 items-center border border-[#631363]`}>
                    <PencilLine color="#631363" />
                    Edit
                  </div>
                  <div
                    onClick={() => setPreview(true)}
                    className={`text-xs flex rounded-md cursor-pointer ${
                      preview ? "bg-white" : ""
                    } p-1 gap-1 items-center border border-[#631363]`}>
                    <Eye color="#631363" />
                    Preview
                  </div>
                </div>
                {preview ? (
                  <PreviewComponent data={formData} />
                ) : (
                  <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-10 pt-2 justify-items-start">
                    <FormField
                      control={form.control}
                      name="campaignid"
                      render={({ field }) => (
                        <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                          <FormLabel className="text-[#631363]">
                            {" "}
                            Choose a cammpaign for your adSet
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your Campaign" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              {campaignsItems}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="adname"
                      render={({ field }) => (
                        <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                          <FormLabel className="text-[#631363] font-medium">
                            {" "}
                            AdSet Name
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
                      name="optimization_goal"
                      render={({ field }) => (
                        <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                          <FormLabel className="text-[#631363]">
                            {" "}
                            Optimization goal
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select optimization goal" />
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
                        <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                          <FormLabel className="text-[#631363]">
                            Status
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem
                                value="ACTIVE"
                                className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
                                Active
                              </SelectItem>
                              <SelectItem
                                value="PAUSED"
                                className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
                                Archived
                              </SelectItem>
                              <SelectItem
                                value="DELETED"
                                className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
                                Deleted
                              </SelectItem>
                              <SelectItem
                                value="ARCHIVED"
                                className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
                                Paused
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="destination_type"
                      render={({ field }) => (
                        <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                          <FormLabel className="text-[#631363]">
                            Category
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Destination" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              {destinationItems}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                          <FormLabel className="text-[#631363]">
                            Locations
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              <SelectItem
                                value="US"
                                className="hover:bg-[#E0E0E0] hover:text-[#631363] px-4 py-2 rounded-md">
                                United States
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="events"
                      render={({ field }) => (
                        <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                          <FormLabel className="text-[#631363]">
                            Billing Events
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a billing events" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              {billingItems}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="pagename"
                      render={({ field }) => (
                        <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                          <FormLabel className="text-[#631363]">
                            Page to Publish
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a Page to Publish" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              {session?.user?.profile?.accounts.data.map(
                                (item, index) => (
                                  <SelectItem
                                    className="border "
                                    key={index}
                                    value={item.id}>
                                    {item.name}
                                  </SelectItem>
                                )
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                    <div className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                      <p className="text-[#631363] pb-2 font-semibold text-sm">
                        Audience controls
                      </p>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">*</span>
                            <p className="font-semibold text-[#631363] ">
                              Locations
                            </p>
                            <InfoIcon className="text-gray-500 h-4 w-4" />
                          </div>
                          <p className="ml-6 ">Location: United States</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">*</span>
                          <p className="font-semibold text-[#631363] ">Age</p>
                          <InfoIcon className="text-gray-500 h-4 w-4" />
                        </div>
                        <div className="flex w-full">
                          <FormField
                            control={form.control}
                            name="min_age"
                            render={({ field }) => (
                              <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="18" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-white">
                                    {min_age_group}
                                  </SelectContent>
                                </Select>
                                <FormMessage className="text-red-600" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="max_age"
                            render={({ field }) => (
                              <FormItem className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                                <Select
                                  onValueChange={field.onChange}
                                  value={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="65 +" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="bg-white">
                                    {max_age_group}
                                  </SelectContent>
                                </Select>
                                <FormMessage className="text-red-600" />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">*</span>
                          <p className="font-semibold text-[#631363]">Gender</p>
                          <InfoIcon className="text-gray-500 h-4 w-4 cursor-pointer" />
                        </div>
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel>Select a gender</FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex space-y-1">
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="0" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      All
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="1" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Male
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="2" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Female
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage className="text-red-600" />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </div>
                    <div className="flex-grow-0 w-full md:w-1/2 lg:w-1/3">
                      <div className="text-[#631363] font-medium">
                        Budget & schedule
                      </div>
                      <FormField
                        control={form.control}
                        name="bid_amount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#631363]">
                              Bid Amount
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="$189"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-600" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="daily_budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[#631363]">
                              Daily Budget
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="$89"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-600" />
                          </FormItem>
                        )}
                      />
                      <p className="text-sm text-[#631363] mt-1">
                        You&apos;ll spend an average of $
                        {formData?.daily_budget} per day. Your maximum daily
                        spend is ${Number(formData?.daily_budget) * 1.75} and
                        your maximum weekly spend is $
                        {Number(formData?.daily_budget) * 7}. Learn more.
                      </p>
                      <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col pt-4">
                            <FormLabel className="text-[#631363] ">
                              Start Date
                            </FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-[240px] pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}>
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start">
                                <Calendar
                                  className="bg-white"
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date < new Date() ||
                                    date < new Date("1900-01-01")
                                  }
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage className="text-red-600" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="text-[#631363] ">
                              End Date
                            </FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-[240px] pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}>
                                    {field.value ? (
                                      format(field.value, "PPP")
                                    ) : (
                                      <span>Pick a date</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start">
                                <Calendar
                                  className="bg-white"
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date < new Date("1900-01-01")
                                  }
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage className="text-red-600" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                <div className="grid gap-2 pt-4">
                  <div className="grid gap-2">
                    <div className="w-full flex justify-between">
                      <Button
                        className="bg-[#631363] text-[#F4F4F4] hover:bg-[#E0E0E0] hover:text-[#631363]"
                        variant="outline"
                        onClick={handleprevious}>
                        Previous
                      </Button>

                      <div>
                        <Button
                          type="submit"
                          className="bg-[#631363] text-[#F4F4F4] hover:bg-[#E0E0E0] hover:text-[#631363]"
                          variant="outline"
                          onClick={() => {
                            // handleclick();
                          }}>
                          Create AdSet
                        </Button>
                        <Button
                          className="bg-[#631363] text-[#F4F4F4] hover:bg-[#E0E0E0] hover:text-[#631363]"
                          variant="outline"
                          onClick={handleclick}>
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  );
}

function InfoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}
