import { Button } from "@/components/ui/button";
import React from "react";

type DataItem = string | number | Date | boolean | null;

interface DataProps {
  [key: string]: DataItem | DataItem[];
}

interface ReviewComponentProps {
  data: {
    image?: string;
    status: string;
    adname: string;
    adcreative?: string;
    bodydescription?: string;
    headline?: string;
    objecturl?: string;
    asset?: string;
    maxLength?: number;
  };
  asset?: string;
  maxLength?: number;
}

export default function PreviewComponent(data: ReviewComponentProps) {
  const formatDate = (date: any) => {
    return date ? date.toISOString() : "";
  };
  return (
    <div className="flex md:w-[747px] w-full bg-[#E0E0E0] flex-col items-center justify-start">
      <div className="w-full">
        {Object.entries(data).map(([key, value]) => (
          <div className="w-full" key={key}>
            <div className="group relative hover:bg-white bg-background py-2 w-full transition-all">
              <div className="flex  items-start justify-between">
                <div className="px-2">
                  <p className="text-md font-medium capitalize">{key}</p>
                  <p className=" text-sm text-muted-foreground">
                    {typeof value === "object" && value instanceof Date
                      ? formatDate(value)
                      : value}
                  </p>
                </div>
                <div className="invisible group-hover:visible">
                  <Button variant="ghost" size="icon">
                    <FilePenIcon className="h-5 w-5 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FilePenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}
