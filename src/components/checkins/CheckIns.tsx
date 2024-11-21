"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { getImageData } from "@/utils/getImageUrl";
import { useState, ChangeEvent, useEffect } from "react";
import Screen from "@/assets/images/hubspark/BottomScreen.png";
import User from "@/assets/images/hubspark/user-icon.svg";
import { CalendarIcon, Camera } from "lucide-react";
import { Video } from "lucide-react";
import { format } from "date-fns";
import MobileHeader from "../Header/Header-main";
import Header from "../Reputation-mobile/Header";
import SuccessMessage from "./SuccessMessage";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "../ui/calendar";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const FormSchema = z.object({
  teammember: z.string(),
  customer: z.string(),
  address: z.string(),
  city: z.string(),
  st: z.string(),
  postal: z.string(),
  avtar: z.string(),
  picture: z.string(),
  workdesc: z.string(),
  date: z.any(),
});

export default function CheckIns() {
  const [preview, setPreview] = useState("");
  const [fileName, setFileName] = useState("No file chosen");

  const handleCamera = () => {
    console.log("Opening camera");
  };

  const handleGallery = () => {
    console.log("Opening gallery");
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      teammember: "",
      customer: "",
      address: "",
      city: "",
      st: "",
      postal: "",
      avtar: "",
      picture: "",
      workdesc: "",
      date: "",
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

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files, displayUrl } = getImageData(event);
    if (files && files.length > 0) {
      setFileName(files[0].name);
    } else {
      setFileName("No file chosen");
    }

    setPreview(displayUrl);
  };

  const teamMember = [
    { value: "m@example.com", label: "Mellisa Huidson" },
    { value: "m@google.com", label: "Angela Parker" },
    { value: "m@hotmail.com", label: "Tianna Bradshaw" },
    { value: "m@yahoo.com", label: "Greta Tyler" },
    { value: "m@outlook.com", label: "Dolores Collins" },
    { value: "m@live.com", label: "Patrick Callahan" },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="bg-[#F4F4F4]">
      <CitationNavbar heading="Check In" />
      <div className="px-6 md:pt-8 pt-2">
        <div className="bg-transparent rounded-lg md:px-6 px-0 md:py-2 lg:py-4 py-0  text-[14px] md:text-xl lg:text-[28px] text-[#6D6D6D]  font-bold md:w-full md:bg-white w-fit ">
          {" "}
          Steven’s Rockstars Public Profile
        </div>
      </div>
      <div className="px-4 py-2 w-full  md:px-16 ">
        <div className="rounded-3xl mt-2 w-full bg-[#E0E0E0] mb-4 ">
          <div className="rounded-3xl text-white pl-4 md:pl-8 text-[16px] md:text-xl lg:text-[26px] font-bold px-4 py-2 lg:py-5 bg-[#631363]">
            Address Check-in
          </div>
          <div className="px-4 w-full flex py-4 ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-1 py-2">
                <FormField
                  control={form.control}
                  name="teammember"
                  render={({ field }) => (
                    <FormItem className="flex justify-center items-center w-full">
                      <FormLabel className="text-[#6D6D6D] w-[40%] text-nowrap text-center md:text-end md:pr-4 pr-0 font-semibold  text-[11px] md:text-sm lg:text-[20px]">
                        Team Member*
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-2xl py-4 md:py-6 w-[60%] bg-[#F4F4F4]">
                            <SelectValue
                              className="placeholder:italic"
                              placeholder="Select a team member"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-white">
                          {teamMember.map((member, index) => (
                            <SelectItem key={member.value} value={member.value}>
                              {member.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="customer"
                  render={({ field }) => (
                    <FormItem className="flex justify-end items-center w-full">
                      <FormLabel className="text-[#6D6D6D] w-[40%] text-nowrap md:text-end md:pr-4 pr-0  flex-shrink-0 text-center   font-semibold   text-[11px] md:text-sm lg:text-[20px]">
                        Customer Name*
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-xl py-4 md:py-6 w-[60%] bg-[#F4F4F4]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className=" flex justify-end items-center w-full">
                      <div className="text-[#6D6D6D] w-[40%] text-nowrap font-semibold text-[10px]">
                        <FormLabel className="text-[#6D6D6D] font-semibold   text-[11px] md:text-sm lg:text-[20px] pt-1 w-full flex justify-end pr-4">
                          Address
                        </FormLabel>
                        <p className="text-[9px] md:text-sm text-[#631363] tracking-tight font-semibold md:text-end md:pr-4 pr-0 w-full">
                          (Search near by location if exact location not found)*
                        </p>
                      </div>
                      <FormControl>
                        <Input
                          placeholder="Enter a location"
                          className="rounded-xl py-7 w-[60%] bg-[#F4F4F4]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex space-y-2">
                  <FormLabel className="text-[#6D6D6D] font-semibold text-center  md:text-end md:pr-4  flex items-center justify-end  text-[11px] md:text-sm lg:text-[20px] w-[40%] pr-2">
                    City/ST/Postal Code*
                  </FormLabel>
                  <div className="flex w-[60%] gap-1 ">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormControl>
                            <Input
                              className="rounded-xl py-4 md:py-6 bg-[#F4F4F4]"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="st"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormControl>
                            <Input
                              className="rounded-xl py-4 md:py-6 bg-[#F4F4F4]"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="postal"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormControl>
                            <Input
                              className="rounded-xl py-4 md:py-6 bg-[#F4F4F4]"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="picture"
                  render={({ field }) => (
                    <>
                      <FormItem className="flex justify-center items-center w-full">
                        <FormLabel className="text-[#6D6D6D] w-[40%] font-semibold text-center md:text-end md:pr-4  text-[11px] md:text-sm lg:text-[20px]">
                          Photo or Video (optional)
                        </FormLabel>
                        <FormControl>
                          {isSmallScreen ? (
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  className="w-[60%] justify-start bg-[#F4F4F4] text-[#6D6D6D]">
                                  <Camera className="mr-2" color="#631363" />
                                  <Video className="mr-2" color="#40F440" />
                                  <span className="text-xs font-normal">
                                    {fileName || "Choose file"}
                                  </span>
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent className="bg-[#F4F4F4] rounded-2xl">
                                <AlertDialogHeader className="mx-6">
                                  <AlertDialogDescription className="text-center rounded-3xl py-2 text-white bg-[#631363]">
                                    <Button
                                      onClick={handleCamera}
                                      className="w-full">
                                      Take with Camera
                                    </Button>
                                  </AlertDialogDescription>
                                  <AlertDialogDescription className="text-center rounded-3xl py-2 text-white bg-[#631363]">
                                    <AlertDialogAction onClick={handleGallery}>
                                      Select from gallery
                                    </AlertDialogAction>
                                  </AlertDialogDescription>
                                  <AlertDialogDescription className="text-center rounded-3xl py-2 text-white bg-[#ED0303]">
                                    <AlertDialogCancel className="outline-none w-full border-0 mt-0 h-full py-2">
                                      Cancel
                                    </AlertDialogCancel>
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                              </AlertDialogContent>
                            </AlertDialog>
                          ) : (
                            <div className="bg-[#F4F4F4] rounded-xl py-2 md:py-4 w-[60%] text-[#6D6D6D] font-semibold text-[11px] md:text-sm pt-1 flex justify-start pr-4">
                              <Input
                                type="file"
                                className="hidden"
                                id="fileInput"
                                onChange={handleImageChange}
                              />
                              <label
                                htmlFor="fileInput"
                                className="text-[#6D6D6D] text-xs flex gap-2 px-2 rounded-xl font-semibold cursor-pointer">
                                <Camera color="#631363" />
                                <Video color="#40F440" />
                              </label>
                              <span className="text-[#6D6D6D] font-normal pl-4 pt-1 text-xs max-w-14">
                                {fileName}
                              </span>
                            </div>
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    </>
                  )}
                />

                <FormField
                  control={form.control}
                  name="workdesc"
                  render={({ field }) => (
                    <FormItem className="flex w-full">
                      <FormLabel className="text-[#6D6D6D] w-[40%] text-nowrap md:pl-[12%] pl-0 pr-4 text-center font-semibold flex items-center  text-[11px] md:text-sm lg:text-[20px]">
                        Work Descripion (public checkin / service summary)*
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="rounded-xl  w-[60%] bg-[#F4F4F4]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex justify-start items-center w-full">
                      <FormLabel className="text-[#6D6D6D] w-[40%] text-nowrap text-center font-semibold   text-[11px] md:text-sm lg:text-[20px] md:text-end md:pr-6">
                        Date and Time*
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="datetime-local"
                          className="rounded-xl py-4 md:py-6 text-center w-[60%] bg-[#F4F4F4]"
                          {...field}
                        />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />
                <div className="flex justify-center w-full">
                  <Button
                    onClick={openModal}
                    className="bg-[#40F440] mt-6 px-2 md:px-6 py-0 text-[#27272D] rounded-xl text-xs font-semibold"
                    type="submit">
                    Check in
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      {showModal && <SuccessMessage closeModal={closeModal} />}
      <Image
        height={0}
        width={0}
        priority={true}
        style={{ width: "100%", height: "auto" }}
        className="flex md:hidden"
        alt="screen"
        src={Screen}
      />
    </div>
  );
}
