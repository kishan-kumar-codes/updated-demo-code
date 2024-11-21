"use client";
import CitationNavbar from "../review-dashboard-mobile/ReviewNavbar";
import { useState } from "react";
import { Input } from "../ui/input";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import {
  addDays,
  format,
  startOfWeek,
  startOfMonth,
  startOfYear,
  endOfMonth,
} from "date-fns";
import { DateRange } from "react-day-picker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar as CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Image from "next/image";

export default function PhoneNumber() {
  const [chooseNum, setChooseNum] = useState(false);
  const [myNum, setMynum] = useState(false);
  const [order, setOrders] = useState(false);
  const [code, setCode] = useState("716");

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  const [active, setActive] = React.useState("");
  const [tab, setTab] = useState(1);

  return (
    <div className="bg-[#F4F4F4]">
      <CitationNavbar heading="Phone Number" />
      <div className="flex flex-col gap-4 p-4">
        <div className="bg-[#E0E0E0] rounded-2xl">
          <div
            onClick={() => setChooseNum((prev) => !prev)}
            className="bg-[#631363] rounded-2xl text-white text-[16px] p-4 font-bold">
            Choose Numbers
          </div>
          {chooseNum && (
            <div className="px-2 py-6">
              <Label
                htmlFor="country"
                className="text-[#6D6D6D] font-bold text-xs pb-1 ">
                Country <span className="text-[#631363]">(Required)</span>
              </Label>
              <Input className="rounded-2xl bg-[#F4F4F4] mt-1" name="country" />
              <span className="text-[#6D6D6D] font-normal leading-normal text-[10px] pl-2">
                Your number will be available for HD Voice, SMS, MMS,
              </span>
              <div className="text-[#6D6D6D] font-normal text-[10px] pl-2 pb-2">
                International SMS
              </div>
              <div>
                <Label
                  htmlFor="Type"
                  className="text-[#6D6D6D] font-bold text-xs pb-1 pt-4">
                  Type
                </Label>
                <Select>
                  <SelectTrigger className="w-full rounded-2xl text-[#6D6D6D] mt-1 bg-[#F4F4F4]">
                    <SelectValue
                      className="text-[#6D6D6D]"
                      placeholder="Select a type"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectGroup>
                      <SelectItem value="apple">Local</SelectItem>
                      <SelectItem value="banana">Toll-Free</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Label
                htmlFor="code"
                className="text-[#6D6D6D] font-bold text-xs pt-4">
                Area Code
              </Label>
              <div className="flex pt-1">
                <Input
                  readOnly
                  value={code}
                  className="rounded-2xl w-[80px] bg-[#F4F4F4]"
                  name="code"
                />
                <div className="flex gap-3">
                  <Button
                    className="bg-[#631363] text-white rounded-2xl ml-4 font-bold"
                    variant="outline">
                    {" "}
                    Edit
                  </Button>
                  <Button
                    className="bg-[#40F440] rounded-2xl font-bold"
                    variant="outline">
                    {" "}
                    Confirm
                  </Button>
                </div>
              </div>
              <div className="px-4">
                <span className="text-[#6D6D6D] text-[10px] font-normal">
                  Would you like additional phone numbers that will call forward
                </span>
                <div className="text-[#6D6D6D] text-[10px] font-normal">
                  to your main number above?{" "}
                  <span className="text-[#631363] text-[10px]">
                    (ea. add’l number costs $5/mo.)
                  </span>
                </div>
              </div>
              <RadioGroup defaultValue="comfortable">
                <div className="flex gap-3 p-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">No</Label>
                  </div>
                </div>
              </RadioGroup>
              <div className="flex justify-end">
                <Button className="bg-[#40F440] rounded-xl font-bold">
                  Search Numbers
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="bg-[#E0E0E0] rounded-2xl">
          <div
            onClick={() => setMynum((prev) => !prev)}
            className="bg-[#631363] rounded-2xl text-white text-[16px] p-4 font-bold">
            My Numbers
          </div>
          {myNum && (
            <div className="px-4 pb-4">
              <div className="text-xs font-bold py-4 text-[#6D6D6D]">
                Here are the phone number(s) that you selected:
              </div>
              <div className="flex gap-4 justify-between items-center">
                <div className="text-[#6D6D6D] font-bold">Main:</div>
                <div className="flex-1 text-[#6D6D6D]">(555)-555-5555</div>
                <Button className="bg-[#40F440] rounded-xl font-bold">
                  Active
                </Button>
              </div>
              <div className="flex gap-4 justify-between items-center py-2">
                <div className="text-[#6D6D6D] font-bold">Main:</div>
                <div className="flex-1 text-[#6D6D6D]">(555)-555-5555</div>
                <Button className="bg-[#631363] text-white rounded-xl font-bold">
                  Pending
                </Button>
              </div>
              <div className="flex gap-4 justify-between items-center">
                <div className="text-[#6D6D6D] font-bold">Main:</div>
                <div className="flex-1 text-[#6D6D6D]">(555)-555-5555</div>
                <Button className="bg-[#BA0416] text-white rounded-xl font-bold">
                  Under Review
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="bg-[#E0E0E0] rounded-2xl">
          <div
            onClick={() => setOrders((prev) => !prev)}
            className="bg-[#631363] rounded-2xl text-white text-[16px] p-4 font-bold">
            Orders
          </div>
          {order && (
            <>
              {tab === 1 && (
                <div className="p-4">
                  <div className="text-xs text-[#6D6D6D] font-bold">Date</div>
                  <Popover>
                    <PopoverTrigger className="font-normal  text-[#6D6D6D] text-xs aria-selected:font-bold">
                      <div className="relative">
                        <Input
                          className="mt-1 rounded-2xl"
                          value={"DD/MM/YY"}
                          readOnly
                        />
                        <div className="absolute right-[10px] top-[6px]">
                          <CalendarIcon color="black" />
                        </div>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent
                      style={{ zIndex: "1000" }}
                      className="z-[10000] border-0 bg-white shadow-none">
                      <Calendar
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={1}
                      />
                    </PopoverContent>
                  </Popover>
                  <div className="text-xs text-[#6D6D6D] pt-2 font-bold">
                    Phone Numbers
                  </div>
                  <div className="pt-3">
                    <div className="flex text-[13px] rounded-t-xl bg-[#631363]">
                      <span className="min-w-[100px] text-[13px] p-2  text-white">
                        {" "}
                        Main
                      </span>
                      <span className="bg-[#FFFFFF] text-[11px] pt-2 pl-1 rounded-tr-xl text-[#6D6D6D] min-w-[70%]">
                        (555)-555-5555
                      </span>
                    </div>
                    <div className="flex text-[13px] bg-[#631363]">
                      <span className="min-w-[100px] text-white p-2">
                        {" "}
                        Additional
                      </span>

                      <span className="bg-[#F4F4F4] pt-2 pl-1  text-[#6D6D6D] min-w-[70%]">
                        (555)-555-5555
                      </span>
                    </div>
                    <div className="flex text-[13px] rounded-b-xl bg-[#631363]">
                      <span className="min-w-[100px] text-white p-2">
                        {" "}
                        Additional
                      </span>
                      <span className="bg-[#FFFFFF] pt-2 pl-1 rounded-br-xl text-[#6D6D6D] min-w-[70%]">
                        (555)-555-5555
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <div className="text-xs font-bold pt-5 text-[#6D6D6D]">
                        Total Phone Numbers
                      </div>
                      <div className="text-xs font-bold text-[#6D6D6D] pt-5 ">
                        4
                      </div>
                    </div>
                    <div className="h-0.5 bg-[#6D6D6D] w-full rounded-xl"></div>
                    <div className="flex justify-between">
                      <div className="text-xs font-bold text-[#6D6D6D] pt-3 ">
                        Subtotal: (additional numbers are $5/mo ea.)
                      </div>
                      <div className="text-xs font-bold text-[#6D6D6D] pt-3 ">
                        $15.00
                      </div>
                    </div>
                    <div className="h-0.5 bg-[#6D6D6D] w-full rounded-xl"></div>
                    <div className="flex justify-between">
                      <div className="text-xs font-bold text-[#6D6D6D] pt-3 ">
                        Applicable Taxes: (7%)
                      </div>
                      <div className="text-xs font-bold text-[#6D6D6D] pt-3 ">
                        $1.50
                      </div>
                    </div>
                    <div className="h-0.5 bg-[#6D6D6D] w-full rounded-xl"></div>
                    <div className="flex  justify-between pt-1">
                      <div className="text-[#631363] font-bold text-xs">
                        Total
                      </div>
                      <div className="text-[#631363] font-bold text-xs">
                        $16.50
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6">
                    <div className="text-[#6D6D6D] font-bold text-xs">
                      Current Wallet Balance : $47.12
                    </div>
                    <Button
                      onClick={() => setTab(3)}
                      variant="outline"
                      className="text-white font-bold bg-[#631363] rounded-xl">
                      Place Order
                    </Button>
                  </div>

                  <div className="font-normal text-[#6D6D6D] pb-4 text-[10px] mt-[-10px]">
                    (The first $100.00 is on us)
                  </div>
                  <Button
                    variant="outline"
                    className=" font-bold bg-[#40F440] rounded-xl">
                    +Add to Balance
                  </Button>
                  <div>
                    <Label
                      htmlFor="Type"
                      className="text-[#6D6D6D] font-bold text-xs pb-1 pt-4">
                      How much you would like to add:
                    </Label>
                    <Select>
                      <SelectTrigger className="w-full rounded-2xl text-[#6D6D6D] mt-1 bg-[#F4F4F4]">
                        <SelectValue
                          className="text-[#6D6D6D]"
                          placeholder="Select amount"
                        />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectGroup>
                          <SelectItem value="10">$10.00</SelectItem>
                          <SelectItem value="25">$25.00</SelectItem>
                          <SelectItem value="50">$50.00</SelectItem>
                          <SelectItem value="100">$100.00</SelectItem>
                          <SelectItem value="200">$200.00</SelectItem>
                          <span className="text-[#6D6D6D] text-xs font-bold">
                            Enter amount
                          </span>
                          {/* <SelectItem value="apple">
                        <Input placeholder="Enter amount" />
                      </SelectItem> */}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex pt-4 justify-end">
                    <Button
                      onClick={() => setTab(2)}
                      variant="outline"
                      className=" font-bold bg-[#40F440] rounded-xl">
                      +Add To Wallet
                    </Button>
                  </div>
                </div>
              )}
              {tab === 2 && (
                <div className="px-4 w-full min-h-[300px] text-center">
                  <div className="text-[11px] text-center pt-4 pb-2 text-[#6D6D6D] font-bold">
                    Yay! You’ve added to your wallet balance.
                  </div>
                  <div className="text-[16px] font-bold text-center text-[#6D6D6D] ">
                    Current Balance: <span>$47.12</span>
                  </div>
                  <Button
                    onClick={() => setTab(1)}
                    variant="outline"
                    className="font-bold bg-[#40F440] mt-8 rounded-xl">
                    Complete your Order
                  </Button>
                </div>
              )}
              {tab === 3 && (
                <div className="px-4 pb-4">
                  <div className="text-[#6D6D6D] pt-3 font-bold">
                    Oh oh, there is an issue with your card.
                  </div>
                  <div className="text-[#6D6D6D] py-2 font-bold">
                    Please try a different payment method.
                  </div>
                  <Label
                    htmlFor="namecard"
                    className="text-[#6D6D6D] font-bold text-xs  pb-1 ">
                    Name on Card:{" "}
                  </Label>
                  <Input
                    className="rounded-2xl bg-[#F4F4F4] mt-1"
                    name="namecard"
                  />
                  <Label
                    htmlFor="cardno"
                    className="text-[#6D6D6D] font-bold text-xs  pb-1 ">
                    Card Number:{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      className="rounded-2xl bg-[#F4F4F4] mt-1"
                      name="cardno"
                    />
                    <div className="absolute flex top-2 items-center right-2">
                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21.501 19.821H2.30103C1.20103 19.821 0.301025 18.921 0.301025 17.821V2.92099C0.301025 1.82099 1.20103 0.92099 2.30103 0.92099H21.501C22.601 0.92099 23.501 1.82099 23.501 2.92099V17.821C23.501 18.921 22.601 19.821 21.501 19.821Z"
                          fill="#F9F9F9"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.90112 7.42099L9.0011 13.121H10.5011L11.4011 7.42099H9.90112ZM7.70117 7.42099L6.30115 11.321L6.10107 10.521V10.321C5.90107 9.92098 5.50115 9.22097 4.80115 8.62097C4.60115 8.42097 4.40107 8.32097 4.10107 8.12097L5.40112 13.021H6.90112L9.30115 7.32098H7.70117V7.42099ZM13.5011 8.92099C13.5011 8.32099 14.9011 8.32098 15.6011 8.72098L15.8011 7.521C15.8011 7.521 15.1011 7.32098 14.5011 7.32098C13.8011 7.32098 12.0011 7.62098 12.0011 9.22098C12.0011 10.721 14.1011 10.721 14.1011 11.521C14.1011 12.321 12.3012 12.121 11.7012 11.621L11.5011 12.921C11.5011 12.921 12.2012 13.221 13.2012 13.221C14.2012 13.221 15.7012 12.721 15.7012 11.321C15.6012 9.72098 13.5011 9.62099 13.5011 8.92099ZM19.6011 7.42099H18.4011C17.8011 7.42099 17.7012 7.82098 17.7012 7.82098L15.5011 13.121H17.0011L17.3011 12.321H19.2012L19.4011 13.121H20.8011L19.6011 7.42099ZM17.8011 11.021L18.6011 8.92099L19.0011 11.021H17.8011Z"
                          fill="#005BAC"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.70117 7.92099C5.70117 7.92099 5.6011 7.42099 5.0011 7.42099H2.60107V7.521C2.60107 7.521 3.70115 7.72097 4.80115 8.62097C5.80115 9.42097 6.20117 10.521 6.20117 10.521L5.70117 7.92099Z"
                          fill="#F6AC1D"
                        />
                      </svg>
                      <svg
                        width="24"
                        height="19"
                        viewBox="0 0 24 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.101318 1.52097C0.101318 0.720966 0.601416 0.120941 1.20142 0.120941H22.0013C22.6013 0.120941 23.1013 0.720966 23.1013 1.52097V17.1209C23.1013 17.9209 22.6013 18.521 22.0013 18.521H1.20142C0.601416 18.521 0.101318 17.9209 0.101318 17.1209V1.52097Z"
                          fill="black"
                        />
                        <mask
                          id="mask0_1_473"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="19">
                          <path
                            d="M0.101318 1.52097C0.101318 0.720966 0.601416 0.120941 1.20142 0.120941H22.0013C22.6013 0.120941 23.1013 0.720966 23.1013 1.52097V17.1209C23.1013 17.9209 22.6013 18.521 22.0013 18.521H1.20142C0.601416 18.521 0.101318 17.9209 0.101318 17.1209V1.52097Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0_1_473)">
                          <path
                            d="M0.101318 1.52097C0.101318 0.720966 0.601416 0.120941 1.20142 0.120941H22.0013C22.6013 0.120941 23.1013 0.720966 23.1013 1.52097V17.1209C23.1013 17.9209 22.6013 18.521 22.0013 18.521H1.20142C0.601416 18.521 0.101318 17.9209 0.101318 17.1209V1.52097Z"
                            fill="black"
                            stroke="black"
                            stroke-width="2"
                            stroke-miterlimit="10"
                          />
                        </g>
                        <mask
                          id="mask1_1_473"
                          maskUnits="userSpaceOnUse"
                          x="4"
                          y="13"
                          width="17"
                          height="3">
                          <path
                            d="M6.80139 15.7209V14.821C6.80139 14.521 6.60139 14.3209 6.30139 14.2209C6.10139 14.2209 6.00139 14.221 5.80139 14.521C5.70139 14.321 5.50139 14.2209 5.30139 14.2209C5.20139 14.2209 5.00137 14.221 4.90137 14.421V14.321H4.60132V15.7209H4.90137V14.921C4.90137 14.721 5.00142 14.521 5.20142 14.521C5.40142 14.521 5.50134 14.621 5.50134 14.921V15.7209H5.80139V14.921C5.80139 14.721 5.90132 14.521 6.10132 14.521C6.30132 14.521 6.40137 14.621 6.40137 14.921V15.7209H6.80139ZM11.3014 14.321H10.8014V13.921H10.5013V14.321H10.2014V14.6209H10.5013V15.2209C10.5013 15.5209 10.6013 15.7209 11.0013 15.7209C11.1013 15.7209 11.3014 15.7209 11.4014 15.6209L11.3014 15.321C11.2014 15.321 11.1013 15.421 11.0013 15.421C10.9013 15.421 10.8014 15.3209 10.8014 15.2209V14.6209H11.3014V14.321ZM13.8014 14.321C13.6014 14.321 13.5014 14.421 13.4014 14.521V14.321H13.1013V15.7209H13.4014V14.921C13.4014 14.721 13.5014 14.521 13.7014 14.521C13.8014 14.521 13.8014 14.521 13.9014 14.521L14.0013 14.2209C14.0013 14.3209 13.9014 14.321 13.8014 14.321ZM10.0013 14.421C9.90134 14.321 9.70137 14.321 9.40137 14.321C9.10137 14.321 8.80139 14.5209 8.80139 14.7209C8.80139 14.9209 9.00139 15.1209 9.30139 15.1209H9.40137C9.60137 15.1209 9.70142 15.221 9.70142 15.321C9.70142 15.421 9.60137 15.521 9.40137 15.521C9.20137 15.521 9.10137 15.421 8.90137 15.421L8.80139 15.6209C9.00139 15.7209 9.20137 15.821 9.40137 15.821C9.80137 15.821 10.0013 15.621 10.0013 15.421C10.0013 15.221 9.80134 15.021 9.50134 15.021H9.40137C9.30137 15.021 9.10132 15.021 9.10132 14.921C9.10132 14.821 9.20137 14.7209 9.40137 14.7209C9.60137 14.7209 9.70139 14.821 9.80139 14.821L10.0013 14.421ZM14.1013 15.021C14.1013 15.421 14.4014 15.7209 14.8014 15.7209C15.0014 15.7209 15.1014 15.721 15.3014 15.521L15.2014 15.321C15.1014 15.421 15.0014 15.421 14.8014 15.421C14.6014 15.421 14.4014 15.221 14.4014 14.921C14.4014 14.621 14.6014 14.421 14.8014 14.421C14.9014 14.421 15.1014 14.421 15.2014 14.521L15.3014 14.321C15.2014 14.221 15.0014 14.1209 14.8014 14.1209C14.4014 14.3209 14.1013 14.621 14.1013 15.021ZM12.2014 14.321C11.8014 14.321 11.5013 14.621 11.5013 15.021C11.5013 15.421 11.8014 15.7209 12.2014 15.7209C12.4014 15.7209 12.6014 15.721 12.8014 15.521L12.7014 15.321C12.6014 15.421 12.4014 15.421 12.3014 15.421C12.1014 15.421 11.9014 15.3209 11.9014 15.1209H12.9014V15.021C12.8014 14.521 12.6014 14.321 12.2014 14.321ZM12.2014 14.521C12.4014 14.521 12.5013 14.621 12.6013 14.821H11.9014C11.9014 14.721 12.0014 14.521 12.2014 14.521ZM8.50134 15.021V14.321H8.20142V14.521C8.10142 14.421 7.90139 14.321 7.80139 14.321C7.40139 14.321 7.10132 14.621 7.10132 15.021C7.10132 15.421 7.40139 15.7209 7.80139 15.7209C8.00139 15.7209 8.10142 15.621 8.20142 15.521V15.7209H8.50134V15.021ZM7.40137 15.021C7.40137 14.721 7.60139 14.521 7.80139 14.521C8.10139 14.521 8.20142 14.721 8.20142 15.021C8.20142 15.321 8.00139 15.521 7.80139 15.521C7.60139 15.521 7.40137 15.221 7.40137 15.021ZM18.0013 14.321C17.8013 14.321 17.7013 14.421 17.6013 14.521V14.321H17.3014V15.7209H17.6013V14.921C17.6013 14.721 17.7014 14.521 17.9014 14.521C18.0014 14.521 18.0013 14.521 18.1013 14.521L18.2014 14.2209C18.1014 14.3209 18.0013 14.321 18.0013 14.321ZM20.2014 15.521C20.3014 15.521 20.3014 15.5209 20.3014 15.6209C20.3014 15.6209 20.3014 15.7209 20.3014 15.6209C20.0014 15.5209 20.1014 15.521 20.2014 15.521C20.1014 15.521 20.1014 15.521 20.2014 15.521C20.1014 15.521 20.1014 15.521 20.2014 15.521ZM20.2014 15.7209C20.3014 15.6209 20.3014 15.6209 20.2014 15.7209C20.3014 15.6209 20.3014 15.6209 20.3014 15.6209C20.1014 15.6209 20.1014 15.6209 20.2014 15.7209C20.1014 15.6209 20.1014 15.6209 20.2014 15.7209C20.1014 15.7209 20.1014 15.7209 20.2014 15.7209C20.1014 15.7209 20.1014 15.7209 20.2014 15.7209ZM20.2014 15.521C20.2014 15.621 20.2014 15.621 20.2014 15.521L20.3014 15.6209L20.2014 15.521ZM20.1013 15.6209C20.2013 15.6209 20.2013 15.6209 20.1013 15.6209C20.2013 15.6209 20.2013 15.6209 20.1013 15.6209C20.2013 15.5209 20.2013 15.5209 20.1013 15.6209ZM16.9014 15.021V14.321H16.6013V14.521C16.5013 14.421 16.3014 14.321 16.2014 14.321C15.8014 14.321 15.5013 14.621 15.5013 15.021C15.5013 15.421 15.8014 15.7209 16.2014 15.7209C16.4014 15.7209 16.5013 15.621 16.6013 15.521V15.7209H16.9014V15.021ZM15.8014 15.021C15.8014 14.721 16.0014 14.521 16.2014 14.521C16.5014 14.521 16.6013 14.721 16.6013 15.021C16.6013 15.321 16.4014 15.521 16.2014 15.521C16.0014 15.421 15.8014 15.221 15.8014 15.021ZM19.7014 15.021V13.821H19.4014V14.521C19.3014 14.421 19.1013 14.321 19.0013 14.321C18.6013 14.321 18.3014 14.621 18.3014 15.021C18.3014 15.421 18.6013 15.7209 19.0013 15.7209C19.2013 15.7209 19.3014 15.621 19.4014 15.521V15.7209H19.7014V15.021ZM18.6013 15.021C18.6013 14.721 18.8013 14.521 19.0013 14.521C19.3013 14.521 19.4014 14.721 19.4014 15.021C19.4014 15.321 19.2013 15.521 19.0013 15.521C18.7013 15.421 18.6013 15.221 18.6013 15.021Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask1_1_473)">
                          <path
                            d="M21.4015 12.6209H3.50146V16.921H21.4015V12.6209Z"
                            fill="white"
                          />
                        </g>
                        <mask
                          id="mask2_1_473"
                          maskUnits="userSpaceOnUse"
                          x="9"
                          y="3"
                          width="6"
                          height="10">
                          <path
                            d="M14.6013 3.92096H9.60132V12.021H14.6013V3.92096Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask2_1_473)">
                          <path
                            d="M15.8015 2.72095H8.50146V13.1209H15.8015V2.72095Z"
                            fill="#FF5F00"
                          />
                        </g>
                        <mask
                          id="mask3_1_473"
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="2"
                          width="10"
                          height="12">
                          <path
                            d="M10.2014 7.92096C10.2014 6.22096 11.0014 4.82096 12.2014 3.92096C11.3014 3.22096 10.2013 2.82095 9.00134 2.82095C6.20134 2.82095 3.90137 5.12096 3.90137 7.92096C3.90137 10.721 6.20134 13.021 9.00134 13.021C10.2013 13.021 11.3014 12.621 12.2014 11.921C10.9014 11.021 10.2014 9.62096 10.2014 7.92096Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask3_1_473)">
                          <path
                            d="M13.2014 1.62094H2.60132V14.2209H13.2014V1.62094Z"
                            fill="#EB001B"
                          />
                        </g>
                        <mask
                          id="mask4_1_473"
                          maskUnits="userSpaceOnUse"
                          x="19"
                          y="10"
                          width="2"
                          height="2">
                          <path
                            d="M20.0013 11.1209V10.921H20.1013H19.9014H20.0013V11.1209ZM20.3014 11.1209V10.921L20.2014 11.021L20.1013 10.921V11.1209V10.921V11.021L20.3014 11.1209V10.921V11.1209Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask4_1_473)">
                          <path
                            d="M21.4014 9.82095H18.7014V12.321H21.4014V9.82095Z"
                            fill="#F79E1B"
                          />
                        </g>
                        <mask
                          id="mask5_1_473"
                          maskUnits="userSpaceOnUse"
                          x="12"
                          y="2"
                          width="9"
                          height="12">
                          <path
                            d="M20.5013 7.92096C20.5013 10.721 18.2014 13.021 15.4014 13.021C14.2014 13.021 13.1014 12.621 12.2014 11.921C13.4014 11.021 14.2014 9.52096 14.2014 7.92096C14.2014 6.22096 13.4014 4.82096 12.2014 3.92096C13.1014 3.22096 14.2014 2.82095 15.4014 2.82095C18.2014 2.82095 20.5013 5.12096 20.5013 7.92096Z"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask5_1_473)">
                          <path
                            d="M21.6014 1.62094H11.0015V14.2209H21.6014V1.62094Z"
                            fill="#F79E1B"
                          />
                        </g>
                      </svg>
                      <svg
                        width="24"
                        height="19"
                        viewBox="0 0 24 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20.9011 13.2208V13.0208C20.5011 13.2208 20.7011 13.2208 14.6011 13.2208C14.6011 12.2208 14.6011 12.2208 14.6011 12.2208C14.5011 12.2208 14.5012 12.2208 14.2012 12.2208C14.2012 12.9208 14.2012 12.5208 14.2012 13.2208H12.6011C12.6011 12.7208 12.6011 12.6208 12.6011 12.0208C12.2011 12.2208 11.7012 12.3208 11.2012 12.3208C11.2012 12.9208 11.2012 12.6208 11.2012 13.2208H9.20117C9.00117 13.0208 9.10107 13.1208 8.60107 12.5208C8.50107 12.6208 8.1011 13.1208 8.0011 13.2208H4.70117V9.52084H8.10107C8.30107 9.72084 8.20117 9.62082 8.70117 10.2208C8.80117 10.1208 9.20115 9.72084 9.30115 9.52084H11.6011C12.0011 9.52084 12.3011 9.62082 12.6011 9.72083V9.52084C14.8011 9.52084 15.2012 9.42083 15.7012 9.72083V9.52084H18.9011V9.72083C19.4011 9.42083 19.7011 9.52084 21.5011 9.52084V9.72083C21.9011 9.52083 22.2012 9.52084 23.7012 9.52084V2.42084C23.7012 1.32084 22.8011 0.520844 21.8011 0.520844H2.40112C1.30112 0.520844 0.501099 1.42084 0.501099 2.42084V6.82083C0.901099 5.92083 1.30112 4.92082 1.40112 4.62082H3.0011C3.2011 5.02082 3.10112 4.72084 3.40112 5.52084V4.62082H5.30115C5.40115 4.92082 5.70112 5.62083 5.90112 5.82083C6.10112 5.32083 6.30112 4.82082 6.40112 4.62082H10.6011H11.1011C12.9011 4.62082 13.3012 4.62083 13.7012 4.82083V4.62082H15.3011V5.02084C15.6011 4.82084 16.0011 4.62082 16.5011 4.62082H17.6011H17.7012H19.0011C19.2011 5.02082 19.1011 4.82084 19.4011 5.42084V4.62082H21.1011C21.3011 4.92082 21.1011 4.52083 21.6011 5.32083V4.62082H23.2012V8.32083H21.5011C21.3011 7.92083 21.4011 8.22084 21.0011 7.42084V8.32083H18.9011C18.6011 7.72083 18.9011 8.32083 18.6011 7.72083H17.8011C17.6011 8.12083 17.7011 7.92083 17.5011 8.32083H16.4011C15.9011 8.32083 15.5012 8.22084 15.2012 7.92084V8.32083H12.5011C12.5011 7.72083 12.5011 7.32083 12.5011 7.32083C12.4011 7.32083 12.4011 7.32083 12.1011 7.32083V8.32083H6.60107V7.82083C6.50107 8.02083 6.50112 8.02083 6.40112 8.32083H5.20117C5.00117 7.92083 5.1011 8.02083 5.0011 7.82083V8.32083H2.90112C2.70112 7.92083 2.80107 8.12083 2.60107 7.72083H1.80115C1.60115 8.12083 1.7011 7.92083 1.5011 8.32083H0.401123V16.5208C0.401123 17.6208 1.30115 18.4208 2.30115 18.4208H21.7012C22.8012 18.4208 23.6011 17.5208 23.6011 16.5208V12.9208C23.1011 13.3208 22.3011 13.2208 20.9011 13.2208Z"
                          fill="#016FD0"
                        />
                        <path
                          d="M14.6011 5.22083H13.9011V8.02084H14.6011V5.22083Z"
                          fill="#016FD0"
                        />
                        <path
                          d="M13.5012 5.92084C13.5012 5.22084 12.9012 5.22083 12.4012 5.22083H10.8013V8.02084H11.5012V7.02084H12.2013C12.9013 7.02084 12.8013 7.42084 12.8013 8.02084H13.5012V7.52084C13.5012 7.12084 13.4012 6.92083 13.1012 6.82083C13.3012 6.52083 13.5012 6.22084 13.5012 5.92084ZM12.3013 6.42084H11.5012V5.82083H12.3013C12.5013 5.82083 12.7013 5.82082 12.7013 6.12082C12.7013 6.32082 12.5013 6.42084 12.3013 6.42084Z"
                          fill="#016FD0"
                        />
                        <path
                          d="M10.3011 5.72083V5.22083H8.10107V8.02084H10.3011V7.42084H8.80115V6.82083H10.3011V6.22083H8.80115V5.72083H10.3011Z"
                          fill="#016FD0"
                        />
                        <path
                          d="M7.60107 8.02084V5.22083H6.5011L5.70117 7.12082L4.80115 5.22083H3.70117V7.92084L2.60107 5.22083H1.60107L0.401123 8.02084H1.10107L1.40112 7.42084H2.80115L3.10107 8.02084H4.5011V5.82083L5.5011 8.02084H6.10107L7.10107 5.82083V8.02084H7.60107ZM1.60107 6.82083L2.10107 5.72083L2.60107 6.82083H1.60107Z"
                          fill="#016FD0"
                        />
                        <path
                          d="M11.6011 10.0208H9.5011L8.70117 10.9208L7.90112 10.0208H5.20117V12.8208H7.80115L8.70117 11.9208L9.5011 12.8208H10.8011V11.9208C11.6011 11.9208 12.8011 12.1208 12.8011 11.0208C12.8011 10.2208 12.3011 10.0208 11.6011 10.0208ZM7.40112 12.2208H5.80115V11.6208H7.30115V11.0208H5.80115V10.5208H7.5011L8.20117 11.3208L7.40112 12.2208ZM10.1011 12.5208L9.10107 11.4208L10.1011 10.3208V12.5208ZM11.6011 11.3208H10.7012V10.6208H11.6011C11.8011 10.6208 12.0011 10.7208 12.0011 10.9208C12.0011 11.2208 11.9011 11.3208 11.6011 11.3208Z"
                          fill="#016FD0"
                        />
                        <path
                          d="M14.9011 6.62082C14.9011 7.52082 15.3012 8.02084 16.2012 8.02084H17.0011L17.3011 7.42084H18.7012L19.0011 8.02084H20.4011V5.92084L21.7012 8.02084H22.7012V5.22083H22.0011V7.12082L20.8011 5.22083H19.8011V7.82083L18.7012 5.22083H17.7012L16.8011 7.42084H16.5011C16.0011 7.42084 15.9011 7.12082 15.9011 6.62082C15.9011 5.62082 16.5012 5.82083 17.2012 5.82083V5.22083H16.5011C15.3011 5.22083 14.9011 5.62082 14.9011 6.62082ZM18.0011 5.62082L18.5011 6.72083H17.6011L18.0011 5.62082Z"
                          fill="#016FD0"
                        />
                        <path
                          d="M20.1012 12.2208H18.8013V12.8208H20.1012C20.7012 12.8208 21.2013 12.6208 21.2013 11.9208C21.2013 10.6208 19.5012 11.4208 19.5012 10.8208C19.5012 10.6208 19.7012 10.5208 19.9012 10.5208H21.1012V9.92084H19.8013C19.3013 9.92084 18.9012 10.2208 18.9012 10.7208C18.9012 12.0208 20.6012 11.2208 20.6012 11.8208C20.4012 12.1208 20.2012 12.2208 20.1012 12.2208Z"
                          fill="#016FD0"
                        />
                        <path
                          d="M15.8011 10.7208C15.8011 10.0208 15.2012 9.92084 14.7012 9.92084H13.1011V12.7208H13.8011V11.7208H14.5011C14.9011 11.7208 15.1011 11.8208 15.1011 12.3208V12.8208H15.8011V12.2208C15.8011 11.8208 15.7011 11.6208 15.4011 11.5208C15.6011 11.3208 15.8011 11.0208 15.8011 10.7208ZM14.6011 11.2208H13.8011V10.6208H14.6011C14.8011 10.6208 15.0011 10.6208 15.0011 10.9208C15.0011 11.1208 14.8011 11.2208 14.6011 11.2208Z"
                          fill="#016FD0"
                        />
                        <path
                          d="M18.4011 10.6208V10.0208H16.1011V12.8208H18.4011V12.2208H16.8011V11.6208H18.3011V11.1208H16.8011V10.6208H18.4011Z"
                          fill="#016FD0"
                        />
                        <path
                          d="M22.4012 10.6208H23.6012V10.0208H22.3013C21.8013 10.0208 21.3013 10.3208 21.3013 10.8208C21.3013 12.1208 23.0012 11.3208 23.0012 11.9208C23.0012 12.1208 22.8013 12.2208 22.7013 12.2208H21.4012V12.8208H22.7013C23.0013 12.8208 23.4012 12.7208 23.6012 12.4208V11.4208C23.2012 10.8208 22.0012 11.3208 22.0012 10.9208C22.0012 10.6208 22.2012 10.6208 22.4012 10.6208Z"
                          fill="#016FD0"
                        />
                      </svg>

                      <svg
                        width="24"
                        height="20"
                        viewBox="0 0 24 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M21.601 0.92099H2.30103C1.20103 0.92099 0.301025 1.82099 0.301025 2.92099V17.821C0.301025 18.921 1.20103 19.821 2.30103 19.821H21.401C22.501 19.821 23.601 18.921 23.601 17.821V2.92099C23.501 1.82099 22.701 0.92099 21.601 0.92099Z"
                          fill="#F9F9F9"
                        />
                        <path
                          d="M21.5011 8.92098C22.0011 8.82098 22.3011 8.52098 22.3011 7.92098C22.3011 6.72098 21.1011 6.92098 20.1011 6.92098V10.321H20.8011V8.92098H20.9011L21.8011 10.321H22.6011L21.5011 8.92098ZM20.9011 8.52098H20.7012V7.52098H20.9011C21.3011 7.52098 21.5011 7.72098 21.5011 8.02098C21.6011 8.32098 21.4011 8.52098 20.9011 8.52098Z"
                          fill="black"
                        />
                        <path
                          d="M17.801 6.92099H19.601V7.521H18.401V8.22098H19.601V8.82098H18.401V9.72098H19.601V10.321H17.801V6.92099Z"
                          fill="black"
                        />
                        <path
                          d="M14.9011 6.92099L15.8011 9.22098L16.8011 6.92099H17.5011L16.0011 10.421H15.7012L14.2012 6.92099H14.9011Z"
                          fill="black"
                        />
                        <path
                          d="M12.601 6.82098C13.601 6.82098 14.401 7.62097 14.401 8.62097C14.401 9.62097 13.601 10.421 12.601 10.421C11.601 10.421 10.801 9.62097 10.801 8.62097C10.801 7.62097 11.601 6.82098 12.601 6.82098Z"
                          fill="#FF6F00"
                        />
                        <path
                          d="M10.601 7.021V7.82099C9.80095 7.02099 8.70105 7.62097 8.70105 8.62097C8.70105 9.62097 9.80095 10.221 10.601 9.42099V10.221C9.40095 10.821 8.00098 10.021 8.00098 8.62097C8.00098 7.32097 9.30095 6.421 10.601 7.021Z"
                          fill="black"
                        />
                        <path
                          d="M6.60107 9.82098C7.10107 9.82098 7.5011 9.22098 6.5011 8.82098C5.9011 8.62098 5.70117 8.32098 5.70117 7.92098C5.70117 6.92098 7.00115 6.62098 7.80115 7.32098L7.5011 7.72097C7.1011 7.22097 6.5011 7.42098 6.5011 7.82098C6.5011 8.02098 6.6011 8.12097 7.0011 8.22097C7.8011 8.52097 8.0011 8.72098 8.0011 9.32098C8.0011 10.521 6.40117 10.821 5.70117 9.82098L6.10107 9.42098C6.00107 9.62098 6.30107 9.82098 6.60107 9.82098Z"
                          fill="black"
                        />
                        <path
                          d="M5.20105 6.92099H4.50098V10.321H5.20105V6.92099Z"
                          fill="black"
                        />
                        <path
                          d="M23.501 17.821V12.321C21.901 13.321 12.601 18.021 3.50098 19.821H21.301C22.501 19.821 23.501 18.921 23.501 17.821Z"
                          fill="#FF6F00"
                        />
                        <path
                          d="M2.40088 6.92099H1.40088V10.321H2.40088C3.70088 10.321 4.20093 9.42097 4.20093 8.62097C4.20093 7.62097 3.50088 6.92099 2.40088 6.92099ZM3.20093 9.521C3.00093 9.721 2.7009 9.82098 2.3009 9.82098H2.10083V7.62097H2.3009C2.7009 7.62097 3.00093 7.72099 3.20093 7.92099C3.40093 8.12099 3.60083 8.42098 3.60083 8.72098C3.50083 8.92098 3.40093 9.221 3.20093 9.521Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <Label
                        htmlFor="cardno"
                        className="text-[#6D6D6D] font-bold text-xs  pb-1 ">
                        Exp. Date:
                      </Label>
                      <Input
                        className="rounded-2xl bg-[#F4F4F4] mt-1"
                        name="cardno"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="cardno"
                        className="text-[#6D6D6D] font-bold text-xs  pb-1 ">
                        CVV Number:{" "}
                      </Label>
                      <Input
                        className="rounded-2xl bg-[#F4F4F4] mt-1"
                        name="cardno"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="cardno"
                        className="text-[#6D6D6D] whitespace-nowrap font-bold text-xs pb-1 ">
                        Billing Zip Code:{" "}
                      </Label>
                      <Input
                        className="rounded-2xl bg-[#F4F4F4] mt-1"
                        name="cardno"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => setTab(1)}
                      variant="outline"
                      className="font-bold bg-[#40F440] mt-8 rounded-xl">
                      Complete your Order
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
