import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  addDays,
  format,
  startOfWeek,
  startOfMonth,
  startOfYear,
  endOfMonth,
} from "date-fns";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { DatePickerWithRange } from "./DatePicker";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const items = [
  {
    id: "Google",
    label: "Google",
  },
  {
    id: "Yelp",
    label: "Yelp",
  },
  {
    id: "Foursquare",
    label: "Foursquare",
  },
  {
    id: "Tripadvisor",
    label: "Tripadvisor",
  },
  {
    id: "Yellowpages",
    label: "Yellowpages",
  },
] as const;

const ratings = [
  {
    id: "All",
    label: "All",
  },
  {
    id: "9-10",
    label: "9-10",
  },
  {
    id: "7-8",
    label: "7-8",
  },
  {
    id: "0-6",
    label: "0-6",
  },
  {
    id: "Unknown",
    label: "Unknown",
  },
] as const;
interface FilterComponentType {
  setFilter: (value: boolean) => void;
  filter: boolean;
}
export default function FilterComponent({
  setFilter,
  filter,
}: FilterComponentType) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 6, 1),
    to: addDays(new Date(2024, 6, 1), 20),
  });

  const [active, setActive] = useState("");
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
    <>
      {filter && (
        <div className="absolute z-50 w-[75%] right-0 px-2 top-14 ">
          <div className="bg-[#F4F4F4] h-screen rounded-2xl border border-[#863389]">
            <div className="flex gap-1 justify-between px-3 py-2">
              <Button
                onClick={() => setFilter(false)}
                className="border border-[#863389] text-[#6D6D6D] text-xs px-2 h-6"
                variant="default">
                Clear
              </Button>
              <Button
                className="border text-xs px-2 text-white bg-[#631363] h-6"
                variant="default">
                Save as
              </Button>
              <Button
                className="border text-xs text-[#6D6D6D] px-2 h-6 bg-[#E0E0E0]"
                variant="default">
                <Filter color="#631363" size={16} /> Filters
              </Button>
            </div>
            <div className="flex justify-center w-full">
              <div className="md:flex w-[90%] justify-center relative my-4 px-2 md:px-1">
                <div className="absolute  md:left-2 left-5 top-[5px]">
                  <button>
                    <Search color="#BCBCBC" size={16} />
                  </button>
                </div>
                <Input
                  className="rounded-full border-none outline-none h-6 .placeholder:text-[#BCBCBC] .placholder:text-[#ffffff] pl-10"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="h-[1.5px] w-[90%] bg-[#5F1762] px-2"></div>
            </div>
            <div className="px-2 py-2">
              <Accordion type="single" collapsible>
                <AccordionItem className="py-1" value="location">
                  <AccordionTrigger className="bg-[rgb(255,255,255)] font-semibold text-[#6D6D6D] rounded-2xl py-2 px-2">
                    Location
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem className="py-1" value="date">
                  <AccordionTrigger className="bg-[#FFFFFF] text-[#6D6D6D] font-semibold rounded-2xl py-2 px-2">
                    Date Range
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex bg-white rounded-2xl mt-2">
                      <div className="flex flex-col py-2 gap-2">
                        <Button
                          onClick={handleYearToDate}
                          className={` text-xs rounded-full h-fit ${
                            active === "year" ? "bg-[#631363]" : "bg-white"
                          } ${
                            active === "year" ? "text-white" : "text-[#6D6D6D]"
                          }  rounded-tl-none px-1 rounded-bl-none`}>
                          Year To Date
                        </Button>
                        <Button
                          className={`text-xs rounded-full  h-fit ${
                            active === "month" ? "bg-[#631363]" : "bg-white"
                          } ${
                            active === "month" ? "text-white" : "text-[#6D6D6D]"
                          }  rounded-tl-none  px-1 rounded-bl-none`}
                          onClick={handleThisMonth}>
                          This Month
                        </Button>
                        <Button
                          className={`text-xs rounded-full h-fit ${
                            active === "week" ? "bg-[#631363]" : "bg-white"
                          } ${
                            active === "week" ? "text-white" : "text-[#6D6D6D]"
                          }  rounded-tl-none  px-1 rounded-bl-none`}
                          onClick={handleThisWeek}>
                          This Week
                        </Button>
                      </div>
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={1}
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="py-1" value="ratings">
                  <AccordionTrigger className="bg-[#FFFFFF] text-[#6D6D6D] font-semibold rounded-2xl py-2 px-2">
                    Ratings
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#FFFFFF] rounded-2xl my-2 p-2">
                    {ratings.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center px-2 gap-2 space-y-2">
                        <div className="flex pt-2 space-y-2">
                          {" "}
                          <Checkbox checked={false} />
                        </div>
                        <div className="text-[#6D6D6D]">{item.label}</div>
                      </div>
                    ))}
                    <div className="flex justify-end py-1">
                      <Button
                        className="bg-[#40F440] text-[#3D3D3D] h-8 font-semibold px-5 rounded-xl text-sm"
                        variant="default">
                        Apply
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="py-1" value="sources">
                  <AccordionTrigger className="bg-[#FFFFFF] text-[#6D6D6D] font-semibold rounded-2xl py-2 px-2">
                    Sources
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#FFFFFF] my-2 p-2 rounded-2xl">
                    <div className="md:flex w-full relative my-4 px-2 md:px-1">
                      <div className="absolute md:left-2 left-5 top-[5px]">
                        <button>
                          <Search color="#BCBCBC" size={20} />
                        </button>
                      </div>
                      <Input
                        className="rounded-full border h-8 .placeholder:text-[#BCBCBC] bg-[#f4f4f4] pl-10"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center px-2 gap-2 space-y-2">
                        <div className="flex pt-2 space-y-2">
                          {" "}
                          <Checkbox checked={false} />
                        </div>
                        <div className="text-[#6D6D6D]">{item.label}</div>
                      </div>
                    ))}
                    <div className="flex justify-end py-1">
                      <Button
                        className="bg-[#40F440] text-[#3D3D3D] h-8 font-semibold px-5 rounded-xl text-sm"
                        variant="default">
                        Apply
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
