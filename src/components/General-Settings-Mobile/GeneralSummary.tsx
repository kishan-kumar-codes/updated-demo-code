import React from "react";
import SummaryCard from "./SummaryCard";
const summary1 = {
  title: "This Month So Far",
  date: "1st Oct 2024 - Present",
};
const summary2 = {
  title: "Last Month",
  date: "September 2024",
};
const summary3 = {
  title: "The Previous Month",
  date: "August 2024",
};

const GeneralSummary = () => {
  return (
    <div className="w-full flex flex-col gap-3 pb-4">
      <SummaryCard summary={summary1} />
      <SummaryCard summary={summary2} />
      <SummaryCard summary={summary3} />
    </div>
  );
};

export default GeneralSummary;
