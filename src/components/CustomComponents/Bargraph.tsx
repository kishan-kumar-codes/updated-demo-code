"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const calculateProportions = (data: any) => {
  return data.map((entry: any) => {
    const total = entry.value1 + entry.value2;
    return {
      ...entry,
      value1Percent: (entry.value1 / total) * 100,
      value2Percent: (entry.value2 / total) * 100,
    };
  });
};

const data = [
  { name: "Today", value1: 7, value2: 5, total: 12 },
  { name: "This Week", value1: 30, value2: 101, total: 131 },
  { name: "This Month", value1: 120, value2: 37, total: 157 },
];

const normalizedData = calculateProportions(data);

const BarGraph = () => {
  return (
    <>
      <div className="w-fit gap-8  md:gap-5 flex flex-col shrink-0">
        {data.map((item, index) => (
          <div
            className="text-nowrap text-xs md:text-lg lg:text-[20px] font-semibold text-[#6D6D6D]"
            key={index}>
            {item.name}
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart
          className="font-bold"
          data={normalizedData}
          layout="vertical"
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
          <XAxis type="number" hide />
          {/* <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            // width={100}
          /> */}
          <Bar
            dataKey="value1Percent"
            stackId="a"
            radius={[10, 0, 0, 10]}
            barSize={30}
            fill="#5E165E">
            <LabelList dataKey="value1" position="center" fill="white" />
          </Bar>
          <Bar
            dataKey="value2Percent"
            stackId="a"
            fill="#33FF33"
            barSize={30}
            radius={[0, 10, 10, 0]}>
            <LabelList
              className="font-bold"
              dataKey="value2"
              position="center"
              fill="black"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className=" flex gap-9 md:gap-5 lg:gap-5 items-center flex-col">
        {data.map((item, index) => (
          <div
            className="text-nowrap text-center md:text-lg text-xs lg:text-lg font-semibold text-[#6D6D6D]"
            key={index}>
            {item.total}
          </div>
        ))}
      </div>
    </>
  );
};

export default BarGraph;
