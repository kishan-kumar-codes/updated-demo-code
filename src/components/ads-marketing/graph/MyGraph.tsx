"use client";
import { useEffect, useState } from "react";
import { Database } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import { data } from "@/utils/data/chartData";
import Image, { StaticImageData } from "next/image";
import { StatFsOptions } from "fs";
import { curveCardinal } from "d3-shape";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Heading {
  names: string;
  impressions: string;
  clicks: string;
  conversions: string;
}

interface GraphUiItem {
  img: StaticImageData;
  name: string;
  posts: number;
  likes: number;
  comments: number;
}

interface ChartDataItem {
  textsSentData: {
    title: string;
    money: string;
  };
  ticks: number[];
  clientData: {
    name: string;
    money: string;
  };
}

interface MyGraphProps {
  heading: Heading;
  graphUi: GraphUiItem[];
  chartData: ChartDataItem[];
}

export default function MyGraph({ heading, graphUi, chartData }: MyGraphProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (index: any) => {
    setExpanded(index === expanded ? null : index);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const cardinal = curveCardinal.tension(0.2);

  /**
   * Custom tick component for the XAxis.
   *
   * @param {object} props - The properties for the tick component.
   * @returns {JSX.Element} The rendered custom tick component.
   */
  const CustomXAxisTick = (props: any): JSX.Element => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={10}
          textAnchor="end"
          fontSize="12"
          fontStyle="italic"
          fill="#666"
          transform="rotate(-30)">
          {payload.value}
        </text>
      </g>
    );
  };

  const yAxisTickFormatter = (value: number): string => {
    return `${value / 1000}K`;
  };

  return (
    <div className="mx-2 bg-[#F4F4F4]">
      <div className="flex gap-4 flex-col overflow-hidden">
        {graphUi.map((item: any, index: number) => (
          <div key={index} className="bg-[#E0E0E0] rounded-2xl">
            <Table className="align-middle">
              <TableHeader className="bg-[#631363] h-fit">
                <TableRow className="py-2 text-white">
                  <TableHead className="px-1 py-1 md:py-2 md:text-[18px] font-semibold pl-2 w-[100px]  md:w-[190px] rounded-tl-2xl h-fit text-[9px] align-middle">
                    {heading.names}
                  </TableHead>
                  <TableHead className="px-1 py-1 md:py-2 md:text-[18px] font-semibold h-fit text-[9px] align-middle">
                    {heading.impressions}
                  </TableHead>
                  <TableHead className="px-1 py-1 md:py-2 md:text-[18px] font-semibold h-fit text-[9px] align-middle">
                    {heading.clicks}
                  </TableHead>
                  <TableHead className="px-1 py-1 md:py-2 md:text-[18px] font-semibold h-fit text-[9px] align-middle">
                    {heading.conversions}
                  </TableHead>
                  <TableHead className="px-1 py-1 md:py-2 md:text-[18px] font-semibold h-fit rounded-tr-2xl align-middle">
                    {" "}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="py-2">
                <TableRow>
                  <TableCell className="font-semibold text-xs flex gap-1 p-2 md:py-4 pl-2 rounded-bl-2xl bg-[#E0E0E0] text-[#6D6D6D] align-middle">
                    <Image
                      src={item.img}
                      alt="logo"
                      className="object-contain shrink-0 md:w-8 w-6 aspect-auto h-auto "
                      height={0}
                      quality={100}
                      width={0}
                    />
                    <div className="flex items-center text-xs md:text-[18px] font-semibold">
                      {item.name}
                    </div>
                  </TableCell>
                  <TableCell className="bg-[#E0E0E0] text-[#6D6D6D] align-middle">
                    <div className="text-xs pt-1 md:text-[18px] font-semibold">
                      {item.posts}
                    </div>
                  </TableCell>
                  <TableCell className="bg-[#E0E0E0] text-[#6D6D6D] align-middle">
                    <div className="text-xs pt-1 md:text-[18px] font-semibold">
                      {item.likes}
                    </div>
                  </TableCell>
                  <TableCell className="bg-[rgb(224,224,224)] text-[#6D6D6D] align-middle">
                    <div className="text-xs pt-1 md:text-[18px] font-semibold">
                      {item.comments}
                    </div>
                  </TableCell>
                  <TableCell className="text-center bg-[#E0E0E0] text-[#6D6D6D] align-middle">
                    <Button
                      onClick={() => handleExpand(index)}
                      className="text-[#F4F4F4] text-xs md:text-sm h-fit bg-[#631363] mt-1 w-fit py-1 px-1.5 font-normal outline-none rounded-xl">
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="my-2 px-4">
              {expanded === index && (
                <div className="flex flex-col w-full md:flex-row gap-2">
                  {chartData.map((item: any, index: number) => (
                    <div key={index} className=" w-full">
                      <div className="bg-[#F4F4F4] h-[320px] py-2 rounded-xl">
                        <div className="flex flex-col  items-end  pr-4">
                          <div className="font-semibold text-[#6D6D6D] text-lg pl-4">
                            {item.textsSentData.title}
                          </div>
                          <div className="font-semibold text-lg text-[#631363] pl-4">
                            {item.textsSentData.money}
                          </div>
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                              top: 10,
                              right: 30,
                              left: 0,
                              bottom: 10,
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                              dataKey="name"
                              tick={<CustomXAxisTick />}
                              tickCount={data.length}
                              interval={1}
                            />
                            <YAxis tickFormatter={yAxisTickFormatter} />
                            <Tooltip />
                            <Area
                              type="monotone"
                              dataKey="uv"
                              stroke="#482C48"
                              fill="#9A8E9A"
                              fillOpacity={0.3}
                            />
                            <Area
                              type={cardinal}
                              dataKey="uv"
                              stroke="#482C48"
                              fill="#482C48"
                              fillOpacity={0.3}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="rounded-xl flex justify-between p-4 mt-16 bg-[#F4F4F4]">
                        <div className="font-semibold text-[#6D6D6D]">
                          {item.clientData.name}
                        </div>
                        <div className="font-semibold text-[#631363]">
                          {item.clientData.money}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
