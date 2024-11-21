"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DatePickerWithRange } from "../CustomComponents/MiniDatePickerRange";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GeneralNextArrow } from "@/svgs/General-Settings-Mobile/svgs";

export function DatePickerWithRanges({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2024, 10, 1),
    to: addDays(new Date(2024, 10, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full pr-2 justify-start flex gap-1 ml-0.5 bg-[#F4F4F4] text-xs rounded-2xl font-normal",
              !date && "text-muted-foreground"
            )}>
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} <GeneralNextArrow />{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full bg-white p-0 shadow-md" align="start">
          <DatePickerWithRange
            onSelect={setDate}
            defaultMonth={date?.from}
            selected={date}
            hideFilter={true}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
