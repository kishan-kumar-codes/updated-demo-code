"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const typography: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

type NoteItem = {
  icon: React.ReactNode;
  notes: string;
};

type CitationRowProps = {
  site: string;
  type: string;
  authority: string;
  value: string;
  fontSize?: string;
  fontWeight?: number;
  width?: string;
  notes: NoteItem[];
  bgColor?: string;
};

export const CitationRow: React.FC<CitationRowProps> = ({
  site,
  type,
  authority,
  fontWeight = 400,
  bgColor = "#F2F2F2",
  value,
  notes,
}) => {
  return (
    <div
      className={`flex w-full justify-center items-center text-xs md:text-lg h-[45px]`}
      style={{ backgroundColor: bgColor }}>
      <div className="flex p-2 w-full gap-2 justify-between items-center">
        <div className="flex gap-1 flex-1 h-[40px] justify-center items-center">
          <span
            className="text-xs md:text-lg"
            style={{
              ...typography,
              color: "#6D6D6D",
              fontWeight: fontWeight,
            }}>
            {site}
          </span>
        </div>
        <div className="flex flex-1 gap-1 h-[40px] justify-center text-center items-center">
          <span
            style={{
              ...typography,
              color: "#6D6D6D",
              fontWeight: fontWeight,
            }}>
            {type}
          </span>
        </div>
        <div className="flex flex-1 gap-1 h-[40px] justify-center items-center">
          <span
            style={{
              ...typography,
              color: "#6D6D6D",
              fontWeight: fontWeight,
            }}>
            {authority}
          </span>
        </div>
        <div className="flex flex-1 h-[40px] justify-center items-center">
          <span
            style={{
              ...typography,
              color: "#6D6D6D",
              fontWeight: fontWeight,
            }}>
            {value}
          </span>
        </div>
        <div className="flex flex-1 gap-2 h-[40px] justify-center items-center">
          {notes.map((note, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <button className="cursor-pointer">{note.icon}</button>
              </PopoverTrigger>
              <PopoverContent className="w-60 bg-yellow-300">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {note.notes}
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </div>
  );
};
