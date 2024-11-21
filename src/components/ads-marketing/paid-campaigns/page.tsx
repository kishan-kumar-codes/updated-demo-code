import { graphUi1, graphUi2 } from "@/utils/data/follow-up";
import MyGraph from "@/components/ads-marketing/graph/MyGraph";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Screen from "@/assets/images/hubspark/BottomScreen.png";

export default function PaidCampigns() {
  const heading1 = {
    names: "Name",
    impressions: "Impressions",
    clicks: "Clicks",
    conversions: "Conversions",
  };
  const graphData1 = [
    { title: "Texts Sent", money: 5000 },
    { name: "Client Spends", money: "$250.00" },
    [0, 2000, 4000, 6000, 8000],
    { title: "Texts Replied", money: 536 },
    { name: "Average Cost Per Reply", money: "$0.47" },
    [0, 1000, 2000, 3000, 4000],
    { title: "Leads", money: 317 },
    { name: "Cost Per Booked Appointment", money: "$0.79" },
    [0, 500, 1000, 1500, 2000],
  ];

  const heading2 = {
    names: "Name",
    impressions: "Texts Sent",
    clicks: "Text Replied",
    conversions: "Leads",
  };

  const chartData = [
    {
      id: 1,
      data: [],
      textsSentData: { title: "Impressions", money: "125258" },
      clientData: { name: "Client Spend", money: "$2150.00" },
      ticks: [0, 2000, 4000, 6000, 8000],
    },
    {
      id: 2,
      data: [],
      textsSentData: { title: "Clicks", money: "5248" },
      clientData: { name: "Average Cost Per Click", money: "$0.41" },
      ticks: [0, 1000, 2000, 3000, 4000],
    },
    {
      id: 3,
      data: [],
      textsSentData: { title: "Conversions", money: "402" },
      clientData: { name: "Cost Per Conversion", money: "$0.40" },
      ticks: [0, 500, 1000, 1500, 2000],
    },
  ];

  const chartData2 = [
    {
      id: 1,
      data: [],
      textsSentData: { title: "Texts Sent", money: "5000" },
      clientData: { name: "Client Spends", money: "$250.00" },
      ticks: [0, 2000, 4000, 6000, 8000],
    },
    {
      id: 2,
      data: [],
      textsSentData: { title: "Texts Replied", money: "536" },
      clientData: { name: "Average Cost Per Reply", money: "$0.47" },
      ticks: [0, 1000, 2000, 3000, 4000],
    },
    {
      id: 3,
      data: [],
      textsSentData: { title: "Leads", money: "317" },
      clientData: { name: "Cost Per Booked Appointments", money: "$0.79" },
      ticks: [0, 500, 1000, 1500, 2000],
    },
  ];
  return (
    <>
      <div className="flex flex-col min-h-fit bg-[#F4F4F4] py-4">
        <MyGraph heading={heading1} chartData={chartData} graphUi={graphUi1} />
      </div>
      <div>
        <div>
          <div className="text-[#6D6D6D] p-4 font-semibold">
            DB Reactivation
          </div>
        </div>
        <div className="flex-col flex">
          <MyGraph
            chartData={chartData2}
            heading={heading2}
            graphUi={graphUi2}
          />
        </div>
      </div>
      <div className="flex w-full md:hidden fixed bottom-0 mt-10 justify-center  items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
    </>
  );
}
