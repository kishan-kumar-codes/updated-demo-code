"use client";

import * as React from "react";
import {
  addDays,
  format,
  startOfWeek,
  startOfMonth,
  startOfYear,
  endOfMonth,
} from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  const [active, setActive] = React.useState("");

  const handleThisWeek = () => {
    const now = new Date();
    const start = startOfWeek(now);
    const end = addDays(start, 6);
    setDate({ from: start, to: end });
    setActive("week");
  };

  const handleThisMonth = () => {
    const now = new Date();
    const start = startOfMonth(now);
    const end = endOfMonth(now);
    setDate({ from: start, to: end });
    setActive("month");
  };

  const handleYearToDate = () => {
    const now = new Date();
    const start = startOfYear(now);
    const end = now;
    setDate({ from: start, to: end });
    setActive("year");
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[222px] lg:w-fit justify-start text-left font-normal bg-white rounded-full",
              !date && "text-muted-foreground"
            )}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <div className="flex text-[#6D6D6D]">
                  <div>
                    {" "}
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </div>
                  <div>
                    <ChevronDown />
                  </div>
                </div>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto z-50  bg-white p-0" align="start">
          <div className="flex">
            <div className="flex flex-col gap-2">
              <Button
                onClick={handleYearToDate}
                className={` ${
                  active === "year" ? "bg-[#631363]" : "bg-white"
                } ${
                  active === "year" ? "text-white" : "text-[#6D6D6D]"
                }  rounded-tl-none px-1 rounded-bl-none`}>
                Year To Date
              </Button>
              <Button
                className={` ${
                  active === "month" ? "bg-[#631363]" : "bg-white"
                } ${
                  active === "month" ? "text-white" : "text-[#6D6D6D]"
                }  rounded-tl-none  px-1 rounded-bl-none`}
                onClick={handleThisMonth}>
                This Month
              </Button>
              <Button
                className={` ${
                  active === "week" ? "bg-[#631363]" : "bg-white"
                } ${
                  active === "week" ? "text-white" : "text-[#6D6D6D]"
                }  rounded-tl-none  px-1 rounded-bl-none`}
                onClick={handleThisWeek}>
                This Week
              </Button>
            </div>
            <Calendar
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={1}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
