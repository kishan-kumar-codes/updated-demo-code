"use client";

import * as React from "react";
import { BorderLinearProgress } from "@/components/CustomComponents/BorderLineProgress";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ButtonGroup, Rating } from "@mui/material";
import Image from "next/image";
import Flag from "@/assets/images/hubspark/flag.png";
import Screen from "@/assets/images/hubspark/BottomScreen.png";
import { CustomizedSteppers } from "@/components/CustomComponents/Stepper";
import { ArrowBigUp } from "lucide-react";
import { ArrowBigDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DecimalStar } from "@/components/CustomComponents/DecimalStar";

const performance = [
  {
    name: "Handyman Repair Service",
    totalRating: 13.8,
    averageRating: 36,
    tasksRequested: 5,
    tasksCompleted: "Roofing Contractor",
    additional: "Contractor Siding contractor Construction company",
  },
  {
    name: "Roof Repair Service",
    totalRating: 9.8,
    averageRating: 112,
    tasksRequested: 4.8,
    tasksCompleted: "Roofing Contractor",
    additional: "General Contractor Roofing contractor",
  },
  {
    name: "Roofing Service",
    totalRating: 10.3,
    averageRating: 47,
    tasksRequested: 5,
    tasksCompleted: "Roofing Contractor",
    additional: "Contractor Roofing contractor",
  },
];

export default function Performance() {
  return (
    <>
      <div className="md:px-14 bg-[#F4F4F4] px-0 md:py-4 py-0">
        <div className="flex justify-center md:rounded-2xl rounded-none md:px-10 border w-full bg-[#E0E0E0] px-2">
          <div className="pb-6 w-full rounded-2xl">
            <div className="text-xl text-left w-full md:px-16 px-4  mx-auto rounded-xl font-bold p-2 my-0 md:my-2 bg-[#631363] text-white ">
              Performance Overview
            </div>
            <div className=" w-full rounded-md py-0 md:py-4 mt-4">
              <div className="px-6 flex flex-col md:flex-row gap-2 py-2">
                <div className="text-base w-full rounded-xl  border bg-[#F4F4F4] p-2 font-semibold  text-[#6D6D6D] ">
                  <div className="flex justify-between">
                    <div className="pl-3 pt-1">All Keywords Avg. </div>
                    <div>
                      <ButtonGroup
                        variant="text"
                        aria-label="Basic button group">
                        <Button
                          variant="outline"
                          className="rounded-tr-none rounded-br-none bg-[#631363] h-8 px-5 mr-[0.20rem] text-white">
                          <div className="font-bold text-lg">11.6</div>
                        </Button>
                        <Button
                          className="bg-[#E0E0E0] rounded-tl-none rounded-bl-none h-8 px-2"
                          variant="outline">
                          <div className="font-bold text-lg">1.5</div>
                          <ArrowBigUp
                            size={18}
                            color="#40F440"
                            fill="#40F440"
                          />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
                <div className="text-base w-full rounded-xl  border-2  bg-[#F4F4F4] p-2 font-semibold  text-[#6D6D6D] ">
                  <div className="flex justify-between">
                    <div className="pl-3 pt-1"> Total Keywords</div>
                    <div>
                      <Button
                        className="bg-[#631363] px-7  text-white h-8"
                        variant="outline">
                        <div className="font-bold text-lg">5</div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="text-base w-full rounded-xl  border-2  bg-[#F4F4F4] p-2 font-semibold  text-[#6D6D6D] ">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <ArrowBigUp color="#40F440" fill="#40F440" />
                      <div className="px-1">Keywords Up</div>
                    </div>
                    <div>
                      <Button
                        className="bg-[#631363] px-7  text-white h-8"
                        variant="outline">
                        <div className="font-bold text-lg">4</div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="text-base w-full rounded-xl  border-2  bg-[#F4F4F4] p-2 font-semibold text-[#6D6D6D] ">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <ArrowBigDown color="#CF232A" fill="#CF232A" />
                      <div className="px-1"> Keywords Down</div>
                    </div>
                    <div>
                      <Button
                        className="bg-[#631363] px-7  h-8 text-white"
                        variant="outline">
                        <div className="font-bold text-lg">1</div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="py-4 text-nowrap text-[#6D6D6D] font-semibold text-lg md:text-2xl">
                  Results for{" "}
                  {/* <span
                    className="text-[#631363] text-base 
               text-nowrap md:text-xl font-bold">
                    ‘roof repair’{" "}
                  </span> */}
                </div>
                <div className="mt-3">
                  <Select>
                    <SelectTrigger className="bg-[#E0E0E0] text-[#631363] font-bold text-xl border-none">
                      <SelectValue
                        className="text-[#631363] text-base 
               text-nowrap md:text-xl font-bold"
                        placeholder=""
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-2 border-[#631363] md:w-full rounded-2xl z-50">
                      <SelectItem value="roof repair">
                        &#39;roof repair&#39;
                      </SelectItem>
                      <SelectItem value="roof repair near me">
                        &#39;roof repair near me&#39;
                      </SelectItem>
                      <SelectItem value="roofing">
                        &#39;roofing&#39;{" "}
                      </SelectItem>
                      <SelectItem value="roofing repair near me">
                        &#39;roofing repair near me&#39;
                      </SelectItem>
                      <SelectItem value="residential roofing">
                        &#39;residential roofing&#39;
                      </SelectItem>
                      <SelectItem value="commercial roofing">
                        &#39;commercial roofing&#39;
                      </SelectItem>
                      <SelectItem value="roofers">&#39;roofers&#39;</SelectItem>
                      <SelectItem value="roofers near me">
                        &#39;roofers near me&#39;
                      </SelectItem>
                      <SelectItem value="roofing services">
                        &#39;roofing services&#39;
                      </SelectItem>
                      <SelectItem value="roof replacement">
                        &#39;roof replacement&#39;
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="py-2 my-4 md:py-10">
                <CustomizedSteppers currentStep={5} />
              </div>
              <div className="px-4 flex w-full  py-2 items-center justify-center flex-col gap-2">
                <div className="bg-[#CF232A] text-center h-20 font-semibold text-3xl pt-2 text-white w-full md:w-[50%] md:my-6 my-2 rounded-md">
                  11.6{" "}
                  <div className="text-white text-center font-medium text-sm">
                    Average Map Rank{" "}
                  </div>
                </div>
                <div className=" font-bold  w-full h-20 border-2 text-3xl text-[#6D6D6D] md:w-[50%] md:my-2 text-center border-[#6D6D6D] rounded-md">
                  <div className="flex justify-center w-full items-center pt-1">
                    <div className="text-3xl text-center font-bold">2</div>
                    <div className="pt-2">
                      {" "}
                      <ArrowBigUp size={20} color="#40F440" fill="#40F440" />
                    </div>
                  </div>
                  <div className="text-[#6D6D6D] text-center pt-1 text-sm font-medium">
                    Change
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2 p-4 md:px-24 px-4 py-10">
                <div className="font-semibold text-base w-full text-[#6D6D6D]">
                  <div className="flex justify-between w-full">
                    <div>High Ranking Grid Point</div>
                    <div className="text-[#00914C]">2</div>
                  </div>
                  <BorderLinearProgress value={38} />
                </div>
                <div className="font-semibold text-base text-[#6D6D6D]">
                  <div className="flex justify-between w-full">
                    <div> Medium-rank Grid Points</div>
                    <div className="text-[#FAAC18]">7</div>
                  </div>
                  <BorderLinearProgress value={58} />
                </div>
                <div className="font-semibold text-base text-[#6D6D6D]">
                  <div className="flex justify-between w-full">
                    <div> Low-rank Grid Points</div>
                    <div className="text-[#00914C]">16</div>
                  </div>
                  <BorderLinearProgress value={80} />
                </div>
              </div>
              <div className="h-64 p-4 mb-2 mx-2 rounded-md border bg-white"></div>
              <div className="font-semibold text-[#6D6D6D] text-2xl px-6 bg-[#E0E0E0] p-2">
                Overall Top Ranking Competitors for{" "}
                <span className="text-[#631363] font-bold">‘roof repair’</span>
                <p className="text-base font-base tracking-tighter py-2">
                  Top-performing search results competitors, based on the Grid
                  Points for this keyword.
                </p>
              </div>
              <Table className="bg-[#E0E0E0]">
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-[#631363] text-white font-semibold">
                      Business Name
                    </TableHead>
                    <TableHead className="bg-[#631363] text-white font-semibold">
                      Avg. Rank
                    </TableHead>
                    <TableHead className="bg-[#631363] text-white font-semibold">
                      Reviews
                    </TableHead>
                    <TableHead className="bg-[#631363] text-white font-semibold">
                      Rating
                    </TableHead>
                    <TableHead className="bg-[#631363] text-white font-semibold">
                      Primary Categories
                    </TableHead>
                    <TableHead className="bg-[#631363] text-white font-semibold">
                      Additional Categories
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {performance.map((invoice: any) => (
                    <TableRow key={invoice.totalRating}>
                      <TableCell className="font-medium text-[#6D6D6D]">
                        {invoice.name}{" "}
                        <div className="py-4 pl-4">
                          <Image alt="Flag" src={Flag} quality={100} />
                        </div>
                      </TableCell>
                      <TableCell className="text-[#6D6D6D]">
                        {invoice.totalRating}
                      </TableCell>
                      <TableCell className="text-[#6D6D6D]">
                        {invoice.averageRating}
                      </TableCell>
                      <TableCell className="text-center text-[#6D6D6D]">
                        {/* <Rating
                          name="read-only"
                          value={invoice.averageRating}
                          readOnly
                        /> */}
                        <DecimalStar rating={invoice.averageRating} />
                        <div>{invoice.tasksRequested} </div>
                      </TableCell>
                      <TableCell className=" text-[#6D6D6D]">
                        {invoice.tasksCompleted}{" "}
                      </TableCell>
                      <TableCell className=" text-[#6D6D6D]">
                        {invoice.additional}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
