import { DatePickerWithRange } from "@/components/CustomComponents/DatePickerWithRange";
import { Button } from "@/components/ui/button";
import { Save, Search } from "lucide-react";
import { Download } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { employees } from "@/utils/data/follow-up";
import { Input } from "@/components/ui/input";
import { Forward } from "lucide-react";
import Image from "next/image";
import Screen from "@/assets/images/hubspark/BottomScreen.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CheckIns() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="pb-2 w-full bg-[#F4F4F4] ">
          <div className="text-[#6D6D6D] lg:hidden lg:text-center text-start tracking-wide text-xl md:text-2xl md:p-1 p-0 pl-2 font-semibold">
            Check-Ins & Review Requests+
          </div>
          <div className="flex w-full px-2">
            <div className="w-[60%] lg:w-full lg:px-8 px-0  pt-2 flex flex-col gap-2">
              <div className="lg:flex hidden w-1/4 relative my-8 px-2 md:px-1">
                <div className="absolute md:left-5 left-6 top-[10px] ">
                  <button>
                    <Search color="#BCBCBC" size={16} />
                  </button>
                </div>
                <Input
                  className="rounded-full border-2 .placeholder:text-[#BCBCBC] bg-white text-black pl-10"
                  placeholder="Search"
                  type="search"
                />
              </div>
              <DatePickerWithRange className="w-full" />
              <div className="flex border w-1/2 md:hidden rounded-full justify-between">
                <div className="p-2 text-[#631363] bg-white text-xs font-semibold rounded-tl-full rounded-bl-full">
                  City
                </div>
                <div className="p-2 bg-[#631363] text-white text-xs font-semibold rounded-tr-full rounded-br-full">
                  Employee
                </div>
              </div>
            </div>
            <div className="flex md:flex-row-reverse pl-6 gap-2 pt-4  md:px-10 px-0 flex-col">
              <Button
                variant="outline"
                className="bg-[#631363] w-28 lg:w-fit lg:h-10 lg:text-lg h-8 text-xs  md:w-32 pb-2 text-white font-semibold">
                {" "}
                Create Check-in{" "}
              </Button>
              <Button
                variant="outline"
                className="bg-[#40F440] w-28 lg:w-fit lg:text-lg pb-2 font-semibold text-xs h-8 lg:h-10 md:w-32  text-[#3D3D3D]">
                Request Review
              </Button>
            </div>
          </div>
          <div className="pl-4 flex gap-2 md:px-12 px-0  items-center pt-4">
            <div className="text-[#6D6D6D] lg:text-[24px]">Show</div>
            <Select>
              <SelectTrigger className="w-[60px] bg-white text-black rounded-full border">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black w-[30px] z-50">
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-[#6D6D6D] lg:text-[24px]">Enteries</div>
            <div className="flex md:hidden relative px-2">
              <div className="absolute md:left-5 left-6 top-[10px] ">
                <button>
                  <Search color="#BCBCBC" size={16} />
                </button>
              </div>
              <Input
                className="rounded-full border-2 bg-white text-black .placeholder:text-[#BCBCBC] pl-10"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-col-reverse lg:px-12 px-0">
            <Table className="my-4">
              <TableHeader>
                <TableRow className="text-center">
                  <TableHead className="bg-[#631363] text-center lg:text-[24px] font-normal text-white text-xs px-2">
                    Employee
                  </TableHead>
                  <TableHead className="bg-[#631363] text-center lg:text-[24px] font-normal text-nowrap text-white text-xs px-2">
                    Check-Ins
                  </TableHead>
                  <TableHead className="bg-[#631363] text-center lg:text-[24px] font-normal text-white text-xs px-2">
                    Review Requests
                  </TableHead>
                  <TableHead className="bg-[#631363] text-center lg:text-[24px] font-normal text-white text-xs px-2">
                    Completed Reviews
                  </TableHead>
                  <TableHead className="bg-[#631363] text-center lg:text-[24px] font-normal text-white text-xs px-2">
                    Average
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((invoice, index) => (
                  <TableRow
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#F4F4F4]"}>
                    <TableCell className="font-medium py-4 text-center text-[#6D6D6D] lg:text-[22px] border">
                      {invoice.name}
                    </TableCell>
                    <TableCell className="border text-center text-[#6D6D6D] lg:text-[22px]">
                      {invoice.totalRating}
                    </TableCell>
                    <TableCell className="border text-center text-[#6D6D6D] lg:text-[22px]">
                      {invoice.averageRating}
                    </TableCell>
                    <TableCell className="border text-center text-[#6D6D6D] lg:text-[22px]">
                      {invoice.tasksRequested}
                    </TableCell>
                    <TableCell className="border text-center text-[#6D6D6D] lg:text-[22px]">
                      {invoice.tasksCompleted}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex py-4 md:py-2 justify-between md:justify-end md:gap-2 gap-0 px-2">
              <Button
                variant="outline"
                className="bg-[#631363] px-2 lg:text-[17px] lg:h-10 font-bold w-20 h-8 text-white">
                {" "}
                <Forward size={14} /> Share
              </Button>
              <Button
                variant="outline"
                className="bg-[#631363] px-2 w-20 h-8 lg:text-[17px] lg:h-10 font-bold text-white">
                {" "}
                <Save size={14} /> Save
              </Button>
              <Button
                variant="outline"
                className="bg-[#631363] w-26 px-2 h-8 lg:text-[17px] lg:h-10 font-bold text-white">
                {" "}
                <CalendarCheck size={14} /> Schedule
              </Button>
              <Button
                variant="outline"
                className="bg-[#631363] w-26 h-8 px-2 lg:text-[17px] lg:h-10 font-bold text-white">
                {" "}
                <Download size={14} /> Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
