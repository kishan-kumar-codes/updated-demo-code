import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getImageData } from "@/utils/getImageUrl";
import { useState, ChangeEvent } from "react";
import Screen from "@/assets/images/hubspark/BottomScreen.png";
import Advocate from "@/assets/images/hubspark/advocate-logo.png";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import TimezoneSelect from "react-timezone-select";

const items = [
  {
    id: "recents",
    label: "Air Conditioning, Commercial",
  },
  {
    id: "home",
    label: "Air Conditioning, Residential",
  },
  {
    id: "applications",
    label: "Air Duct Cleaning",
  },
  {
    id: "desktop",
    label: "Air Quality, Indoor",
  },
  {
    id: "downloads",
    label: "Alternative Energy",
  },
] as const;

const FormSchema = z.object({
  name: z.string().min(2),
  targetkeyword: z.string().min(2),
  phonenumber: z.string().min(2),
  slogan: z.string().min(2),
  website: z.string().min(2),
  googlemapapi: z.string().min(2),
  twitter: z.string().min(2),
  googleplaceid: z.string().min(2),
  correspondenceemail: z.string().min(2),
  avatar: z.string().min(2),
  verticalmarks: z.string().min(2),
  settings: z.boolean(),
  emailreview: z.boolean(),
  emailalerts: z.boolean(),
  address: z.string(),
  zip: z.string(),
  city: z.string(),
  state: z.string(),
});

export default function CompanyProfile() {
  const [preview, setPreview] = useState("");
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      targetkeyword: "",
      phonenumber: "",
      slogan: "",
      website: "",
      settings: false,
      googlemapapi: "",
      googleplaceid: "",
      correspondenceemail: "",
      twitter: "",
      emailreview: false,
      emailalerts: false,
      avatar: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const [fileName, setFileName] = useState("No file chosen");

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files, displayUrl } = getImageData(event);
    if (files && files.length > 0) {
      setFileName(files[0].name);
    } else {
      setFileName("No file chosen");
    }

    setPreview(displayUrl);
  };
  return (
    <>
      <div className="rounded-2xl mt-2 w-full bg-[#E0E0E0]">
        <div className="rounded-2xl text-white font-bold px-4 py-4 bg-[#631363]">
          Company Information
        </div>
        <div className="px-4 w-full py-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-1 py-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2">
                    <FormLabel className="text-[#6D6D6D] flex-1/2 pr-14 justify-start flex items-center font-semibold text-xs">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-xl flex-1 bg-[#F4F4F4]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetkeyword"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 pt-1">
                    <FormLabel className="text-[#6D6D6D] flex-1/2  justify-start flex items-center font-semibold text-xs">
                      Target Keyword
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="rounded-xl flex-1 bg-[#F4F4F4]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phonenumber"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 pt-1">
                    <FormLabel className="text-[#6D6D6D] w-fit min-w-fit text-nowrap pr-1 justify-start flex pt-2 font-semibold text-xs">
                      Phone number
                    </FormLabel>
                    <div className="flex flex-col w-full">
                      <FormControl>
                        <Input
                          className="rounded-xl flex-1 py-2.5 bg-[#F4F4F4]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-[#6D6D6D] tracking-tight text-xs px-2 py-1">
                        {" "}
                        Visible from your profile page.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slogan"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-1 pt-1">
                    <FormLabel className="text-[#6D6D6D] flex-1/2 pr-[3.2rem] justify-start flex items-center font-semibold text-xs">
                      Slogan
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your unique slogan"
                        className="rounded-xl flex-1 bg-[#F4F4F4]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 pt-1">
                    <FormLabel className="text-[#6D6D6D] flex-1 text-nowrap pr-[2.6rem] justify-start flex pt-2 font-semibold text-xs">
                      Website
                    </FormLabel>
                    <div className="flex flex-col w-full">
                      <FormControl>
                        <Input
                          className="rounded-xl flex-1 py-2.5 bg-[#F4F4F4]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-[#6D6D6D] tracking-tight text-xs px-2 py-1">
                        {" "}
                        Be sure to add your website. We will link to it from
                        your profile page.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="settings"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 pt-1">
                    <FormLabel className="text-[#6D6D6D] flex-1 text-nowrap max-w-fit  justify-start items-start flex pt-2 font-semibold text-xs">
                      Settings
                    </FormLabel>
                    <FormControl>
                      <Checkbox
                        className="border border-[#6D6D6D] ml-6 md:ml-10"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-semibold text-[#6D6D6D]">
                        Suppress Business Schema
                      </FormLabel>
                      <FormDescription className="text-[#6D6D6D] text-xs">
                        Check this only if your website template already
                        provides business schema.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitter"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 pt-1">
                    <FormLabel className="text-[#6D6D6D] flex-1 text-nowrap pr-12 justify-start flex pt-2 font-semibold text-xs">
                      Twitter
                    </FormLabel>
                    <div className="flex flex-col w-full">
                      <FormControl>
                        <div className="relative">
                          <div className="bg-[#631363] text-white w-fit rounded-xl px-2.5 top-[2px] py-1.5 absolute left-0 font-semibold">
                            @
                          </div>
                          <Input
                            className="rounded-xl flex-1 pl-10 bg-[#F4F4F4]"
                            {...field}
                          />
                        </div>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="googlemapapi"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 pt-1">
                    <FormLabel className="text-[#6D6D6D] flex-1 text-wrap min-w-[5.5rem]  justify-start flex pt-2 font-semibold text-xs">
                      Google Maps API Key
                    </FormLabel>
                    <div className="flex flex-col w-full">
                      <FormControl>
                        <div className="relative">
                          <div className="bg-[#631363] text-white w-fit rounded-xl px-2.5 top-[2px] py-1.5 absolute left-0 font-semibold">
                            id
                          </div>
                          <Input
                            className="rounded-xl pl-10 flex-1 bg-[#F4F4F4]"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormDescription className="text-[#6D6D6D] tracking-tight text-xs px-2 py-1">
                        {" "}
                        Your Google Maps API Key for displaying heat-maps, and
                        location maps.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="googleplaceid"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 pt-1">
                    <FormLabel className="text-[#6D6D6D] flex-1 text-wrap min-w-[5.5rem]  justify-start flex pt-2 font-semibold text-xs">
                      Google Place id
                    </FormLabel>
                    <div className="flex flex-col w-full">
                      <FormControl>
                        <div className="relative">
                          <div className="bg-[#631363] text-white w-fit rounded-xl px-2.5 top-[2px] py-1.5 absolute left-0 font-semibold">
                            id
                          </div>
                          <Input
                            className="rounded-xl flex-1 pl-10 bg-[#F4F4F4]"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormDescription className="text-[#6D6D6D] tracking-tight text-xs px-2 py-1">
                        {" "}
                        Your Google Maps API Key for displaying heat-maps, and
                        location maps..
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="correspondenceemail"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 pt-1">
                    <FormLabel className="text-[#6D6D6D] flex-1/2 justify-start flex font-semibold text-xs">
                      Correspondence Email
                    </FormLabel>
                    <div className="flex flex-col">
                      <FormControl>
                        <Input
                          placeholder="List email address"
                          className="rounded-xl flex-1 bg-[#F4F4F4]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-[#6D6D6D] tracking-tight text-xs px-2 py-1">
                        If you&apos;d like to have system emails go to email
                        addresses that are not users on the account, enter them
                        here, separated by a comma.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emailreview"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 ">
                    <FormControl>
                      <Checkbox
                        className="border border-[#6D6D6D] "
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="leading-none">
                      <FormLabel className="text-[#6D6D6D] tracking-tight font-semibold ">
                        Send e-mail alerts to admins of the location when
                        customers give reviews using HubSpark reviews system.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emailalerts"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
                    <FormControl>
                      <Checkbox
                        className="border border-[#6D6D6D]"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="leading-none">
                      <FormLabel className="text-[#6D6D6D] tracking-tight font-semibold ">
                        Send e-mail alerts to admins of the location when new
                        reviews received from google.
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button
                className="bg-[#40F440] mt-6 px-2 py-1 text-[#27272D] rounded-xl text-xs font-semibold"
                type="submit">
                Save Changes
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="rounded-2xl mt-2 w-full bg-[#E0E0E0]">
        <div className="rounded-2xl text-white font-bold px-4 py-4 bg-[#631363]">
          Company Logo
        </div>
        <div className="px-4 w-full py-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-3 py-2">
              <div className="flex w-full justify-start">
                <FormLabel className="text-[#6D6D6D] flex items-center font-semibold text-xs flex-1">
                  Logo
                </FormLabel>
                <div className="h-24 w-80 mt-2 flex-1 rounded-xl">
                  {" "}
                  <div className="grid gap-2 w-full md:max-w-96 rounded-xl">
                    {!preview && (
                      <div className="h-24 w-56 mt-2 bg-[#FFFFFF] rounded-xl">
                        <Image
                          src={Advocate}
                          alt="Preview"
                          width={224}
                          height={96}
                          quality={100}
                          className="w-full rounded-md object-cover"
                        />
                      </div>
                    )}
                    {preview && (
                      <div className="h-24 w-56 mt-2 bg-[#FFFFFF] rounded-xl max-h-24">
                        <Image
                          src={preview}
                          alt="Preview"
                          width={224}
                          height={96}
                          className="w-full h-full rounded-md object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <FormField
                control={form.control}
                name="avatar"
                render={({ field }) => (
                  <>
                    <FormItem className="space-y-0 pt-1">
                      <div className="flex pt-2">
                        <FormLabel className="text-[#6D6D6D] pr-7 flex items-center font-semibold text-xs text-nowrap flex-1">
                          New Logo
                        </FormLabel>
                        <FormControl>
                          <div className="bg-[#F4F4F4] rounded-xl py-3 w-full">
                            <Input
                              type="file"
                              className="hidden"
                              id="fileInput"
                              onChange={handleImageChange}
                              // {...field}
                            />
                            <label
                              htmlFor="fileInput"
                              className="px-3 ml-2 py-2 bg-[#6D6D6D] text-white text-xs rounded-xl font-semibold cursor-pointer">
                              Choose File
                            </label>
                            <span className="text-[#6D6D6D] font-thin pl-4 text-xs max-w-14 ">
                              {fileName}
                            </span>
                          </div>
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />

              <Button
                className="bg-[#40F440] mt-6 px-3 text-[#27272D] rounded-xl text-xs font-semibold"
                type="submit">
                Upload Logo
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="rounded-2xl mt-2 w-full bg-[#E0E0E0]">
        <div className="rounded-2xl text-white font-bold px-4 py-4 bg-[#631363]">
          Company Location
        </div>
        <div className="px-4 w-full py-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="py-2">
              <div className="flex w-full justify-start">
                <FormLabel className="text-[#6D6D6D] flex max-w-96 items-center font-semibold text-xs">
                  Address, City, State, Zip
                </FormLabel>
                <div className="flex gap-2 pl-4 flex-col">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="space-y-0 flex gap-2">
                        <FormControl>
                          <Input
                            className="rounded-xl flex-1 bg-[#F4F4F4]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-1">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem className="space-y-0 flex gap-2">
                          <FormControl>
                            <Input
                              className="rounded-xl flex-1 bg-[#F4F4F4]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem className="space-y-0 flex gap-2">
                          <FormControl>
                            <Input
                              className="rounded-xl flex-1 bg-[#F4F4F4]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />{" "}
                    <FormField
                      control={form.control}
                      name="zip"
                      render={({ field }) => (
                        <FormItem className="space-y-0 flex gap-2">
                          <FormControl>
                            <Input
                              className="rounded-xl flex-1 bg-[#F4F4F4]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-0 flex gap-2 pt-8">
                    <FormLabel className="text-[#6D6D6D] flex-1/2 pr-2 justify-start flex items-center font-semibold text-xs">
                      Timezone
                    </FormLabel>
                    <div className="max-w-lg">
                      {" "}
                      <FormControl>
                        <TimezoneSelect
                          className="flex-1 rounded-2xl bg-[#F4F4F4]"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="bg-[#40F440] mt-5 px-2 py-1 text-[#27272D] rounded-xl text-xs font-semibold"
                type="submit">
                Save Changes
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="rounded-2xl mt-2 w-full bg-[#E0E0E0] mb-4">
        <div className="rounded-2xl text-white font-bold px-4 py-4 bg-[#631363]">
          Vertical Markets
        </div>
        <div className="px-4 w-full py-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="gap-2 py-2">
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="verticalmarks"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-center space-x-3 space-y-2">
                        <FormControl>
                          <Checkbox
                            className="border border-[#6D6D6D] mt-2"
                            checked={field.value?.includes(item.id)}
                            // onCheckedChange={(checked) => {
                            //   return checked
                            //     ? field.onChange([
                            //         ...field.value,
                            //         item.id,
                            //       ])
                            //     : field.onChange(
                            //         field.value?.filter(
                            //           (value) => value !== item.id
                            //         )
                            //       );
                            // }}
                          />
                        </FormControl>
                        <FormLabel className="font-semibold text-[#6D6D6D]  text-xs">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <Button
                className="bg-[#40F440] mt-6 px-2 py-1 rounded-xl text-xs font-semibold text-[#27272D]"
                type="submit">
                Save Changes
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Image
        height={0}
        width={0}
        priority={true}
        style={{ width: "100%", height: "auto" }}
        className="flex md:hidden"
        alt="screen"
        src={Screen}
      />
    </>
  );
}
