"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PhoneCalenderSvg } from "@/svgs/Phone-Number-Mobile/svgs"
interface ShadCustomDatePickerProps {
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
 className?: string
}

export function ShadCustomDatePicker({
  date, 
  className,
  setDate,}: ShadCustomDatePickerProps) {

  return (
 <div className="w-full h-full">
     <Popover >
      <PopoverTrigger asChild >
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between text-left h-10 font-normal rounded-xl",
            !date && "text-muted-foreground",className
          )}
        >
         
          {date ? format(date, "PPP") : <span>{ format(new Date().toDateString(), "PPP")}</span>}
          <PhoneCalenderSvg />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto  p-0 bg-white">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
 </div>
  )
}
