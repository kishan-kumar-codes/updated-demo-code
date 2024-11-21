import React from "react";

const typography: React.CSSProperties = {
  color: "#fff",
  fontFamily: "Arial",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textAlign: "center",
  padding: "10px 5px",
};

const headerTypography: React.CSSProperties = {
  ...typography,
  color: "#FFF",
  fontWeight: 700,
};

const TeamRequestTable: React.FC = (): JSX.Element => {
  const data = [
    { city: "Atoka", state: "OK", reviews: "0 / 0" },
    { city: "Bangs", state: "TX", reviews: "0 / 0" },
    { city: "Bells", state: "TX", reviews: "0 / 0" },
    { city: "Blossom", state: "TX", reviews: "0 / 1" },
    { city: "Blue Ridge", state: "TX", reviews: "0 / 0" },
    { city: "Bonham", state: "TX", reviews: "0 / 0" },
    { city: "Cartwright", state: "OK", reviews: "0 / 0" },
    { city: "Colbert", state: "OK", reviews: "0 / 0" },
    { city: "Cartwright", state: "OK", reviews: "0 / 0" },
    { city: "Colbert", state: "OK", reviews: "0 / 0" },
  ];

  return (
    <div className="flex flex-col w-[430px] my-5 justify-center z-50 -ml-1 items-center">
      <div className="flex w-full justify-center -mt-6 z-50 items-center h-[45px] bg-[#631363] rounded-t-3xl">
        <div className="flex gap-1 w-24 border-r border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography }}>City</span>
        </div>
        <div className="flex gap-1 w-24 border-r border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography }}>State</span>
        </div>
        <div className="flex gap-1 flex-1 h-[40px] pl-4 justify-center items-center">
          <span style={{ ...typography }}>Reviews(Completed/Sent)</span>
        </div>
      </div>
      <div className="flex w-full justify-center z-10 items-center bg-[#F5F5F5] h-[40px]  ">
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          Atoka
          </span>
        </div>
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          OK
          </span>
        </div>
        <div className="flex gap-1 w-full flex-1 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          0 / 0
          </span>
        </div>{" "}
       
      </div>
      <div className="flex w-full justify-center z-10 items-center   ">
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          Bangs
          </span>
        </div>
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          TX
          </span>
        </div>
        <div className="flex gap-1 w-full flex-1 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          0 / 0
          </span>
        </div>{" "}
       
      </div>
      <div className="flex w-full justify-center z-10 items-center bg-[#F5F5F5] h-[40px]  ">
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          Atoka
          </span>
        </div>
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          OK
          </span>
        </div>
        <div className="flex gap-1 w-full flex-1 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          0 / 0
          </span>
        </div>{" "}
       
      </div>
      <div className="flex w-full justify-center z-10 items-center   ">
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          Bangs
          </span>
        </div>
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          TX
          </span>
        </div>
        <div className="flex gap-1 w-full flex-1 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          0 / 0
          </span>
        </div>{" "}
       
      </div>
      <div className="flex w-full justify-center z-10 items-center bg-[#F5F5F5] h-[40px]  ">
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          Atoka
          </span>
        </div>
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          OK
          </span>
        </div>
        <div className="flex gap-1 w-full flex-1 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          0 / 0
          </span>
        </div>{" "}
       
      </div>
      <div className="flex w-full justify-center z-10 items-center   ">
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          Bangs
          </span>
        </div>
        <div className="flex gap-1 w-24 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          TX
          </span>
        </div>
        <div className="flex gap-1 w-full flex-1 border  border-[#CCCCCC] h-[40px] justify-center items-center">
          <span style={{ ...typography, color: "#000", fontWeight: 400 }}>
          0 / 0
          </span>
        </div>{" "}
       
      </div>
     
    </div>
  );
};

export default TeamRequestTable;
