import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";

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
// import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <div className={cn("p-1 w-full", className)}>
      <DayPicker
        showOutsideDays={showOutsideDays}
        classNames={{
          months:
            "flex text-[10px]  flex-col sm:flex-row space-y-1 sm:space-x-1 sm:space-y-0",
          month: "space-y-2 ",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label:
            "text-[10px] font-bold text-[10px] md:text-[14px] text-[#631363]",
          nav: "space-x-1 flex items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-6 w-6 md:h-7 md:w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-2",
          table: "w-full text-[8px] border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground rounded-md w-6 md:w-7 text-[#6D6D6D] text-[0.7rem] font-bold md:text-[0.9rem]",
          row: "flex w-full mt-1 ",
          cell: "h-6 w-6 md:w-7 text-center text-[8px] text-[#6D6D6D] md:text-[16px] lg:text-[20px] p-0 relative font-bold rounded-none focus-within:relative focus-within:z-20",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-6 w-6 p-0 font-normal aria-selected:opacity-100"
          ),
          day_range_start: "rounded-l-full",
          day_range_end: "day-range-end bg-[#631363] border rounded-r-full",
          day_selected:
            "bg-[#631363] text-white hover:bg-primary hover:text-white focus:bg-[#631363] focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside:
            "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-[#631363] border-0 rounded-none aria-selected:text-white aria-selected:opacity-20",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => <ChevronLeft className="h-3 w-3" />, // Reduced icon size
          IconRight: ({ ...props }) => <ChevronRight className="h-3 w-3" />, // Reduced icon size
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = "Calendar";

interface Calendar {
  className?: React.HTMLAttributes<HTMLDivElement>;
  showDate?: boolean;
  numberOfMonths?: number;
  hideFilter?: boolean;
  onSelect?: (event: any) => void;
  defaultMonth?: any;
  selected?: any;
}

export function DatePickerWithRange({
  className,
  showDate,
  numberOfMonths,
  hideFilter,
  onSelect,
  defaultMonth,
  selected,
}: Calendar) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  const [active, setActive] = React.useState("week");

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
    <div
      className={cn("grid gap-2 m-1  bg-white border rounded-xl", className)}>
      <div className="flex gap-2 py-0 md:py-2 md:gap-1">
        <div
          className={`${hideFilter ? "hidden" : "flex"} flex-col border-r-2 pr-1 pt-2 gap-1`}>
          <Button
            onClick={handleYearToDate}
            className={` ${active === "year" ? "bg-[#631363]" : "bg-white"} ${
              active === "year" ? "text-white" : "text-[#6D6D6D]"
            }  rounded-tl-none text-[8px] md:text-lg lg:text-xl font-bold h-fit px-1 rounded-tr-xl md:rounded-tr-2xl rounded-br-xl md:rounded-br-2xl  rounded-bl-none`}>
            Year To Date
          </Button>
          <Button
            className={` ${active === "month" ? "bg-[#631363]" : "bg-white"} ${
              active === "month" ? "text-white" : "text-[#6D6D6D]"
            }  rounded-tl-none text-[8px] md:text-lg lg:text-xl font-bold h-fit  px-1 rounded-tr-xl rounded-br-xl rounded-bl-none md:rounded-tr-2xl md:rounded-br-2xl`}
            onClick={handleThisMonth}>
            This Month
          </Button>
          <Button
            className={` ${active === "week" ? "bg-[#631363]" : "bg-white"} ${
              active === "week" ? "text-white" : "text-[#6D6D6D]"
            }  rounded-tl-none text-[8px] md:text-lg lg:text-xl font-bold h-fit  px-1 rounded-tr-xl rounded-br-xl rounded-bl-none md:rounded-tr-2xl md:rounded-br-2xl`}
            onClick={handleThisWeek}>
            This Week
          </Button>
        </div>
        <Calendar
          mode="range"
          defaultMonth={defaultMonth ? defaultMonth : date?.from}
          selected={selected ? selected : date}
          onSelect={onSelect ? onSelect : setDate}
          numberOfMonths={numberOfMonths ? numberOfMonths : 1}
        />
      </div>
    </div>
  );
}
