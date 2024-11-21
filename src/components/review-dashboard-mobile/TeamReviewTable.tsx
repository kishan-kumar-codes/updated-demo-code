import React from "react";

const typography: React.CSSProperties = {
  color: "#fff",
  fontFamily: "Arial",
  lineHeight: "normal",
  textAlign: "center",
  padding: "10px 5px",
};

const headerTypography: React.CSSProperties = {
  ...typography,
  color: "#FFF",
  fontWeight: 700,
};

const data = [
  { city: "Stannely", state: "12", reviews: "10" },
  { city: "Jim", state: "1", reviews: "0" },
  { city: "Anna", state: "0", reviews: "0" },
  { city: "Mike", state: "0", reviews: "0" },
  { city: "Ruby", state: "3", reviews: "3" },
  { city: "Sarah", state: "10", reviews: "5" },
  { city: "Greta", state: "54", reviews: "23" },
  { city: "Patrick", state: "121", reviews: "115" },
  { city: "Dolores", state: "0", reviews: "0" },
  { city: "Jane", state: "0", reviews: "0" },
];

const TeamReviewTable: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full my-5 justify-center items-center border md:border-none border-[#E0E0E0]">
      <div className="flex w-full justify-center -mt-6 text-xs md:text-lg items-center h-[45px] bg-[#631363] rounded-t-3xl">
        <div className="flex gap-1 w-24 md:w-[25%]  border-r border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography }}>Employee</span>
        </div>
        <div className="flex gap-1 w-24  md:w-[25%]  border-r border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography }}> Review Requests Sent</span>
        </div>
        <div className="flex gap-1 flex-1 h-[40px] md:pl-4 pl-0 justify-center items-center">
          <span style={{ ...typography }}>Completed Reviews</span>
        </div>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex w-full justify-center z-10 items-center text-xs md:text-lg border-[#E0E0E0] ${index % 2 === 0 ? "bg-[#F5F5F5]" : "bg-white"} h-[40px]`}>
          <div
            className={`flex gap-1 w-24  md:w-[25%]  border-[#CCCCCC] h-[40px] justify-center items-center border-r-2`}>
            <span style={{ ...typography, color: "#6D6D6D", fontWeight: 400 }}>
              {item.city}
            </span>
          </div>
          <div
            className={`flex gap-1 w-24  md:w-[25%] border-r-2  border-[#CCCCCC] h-[40px] justify-center items-center`}>
            <span style={{ ...typography, color: "#6D6D6D", fontWeight: 400 }}>
              {item.state}
            </span>
          </div>
          <div
            className={`flex gap-1 w-full flex-1 border-none h-[40px] justify-center items-center`}>
            <span style={{ ...typography, color: "#6D6D6D" }}>
              {item.reviews}
            </span>
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default TeamReviewTable;
