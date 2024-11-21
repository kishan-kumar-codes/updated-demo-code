import React from "react";
import dynamic from "next/dynamic";
import { StarRatingComponents } from "@/utils/helper";

// const StarRatingComponents = dynamic((StarRatingComponents) => import("@/utils/helper"), {
//   ssr: false,
// });

interface LeaderBoardTableProps {
  headers: string[];
  data: (string | number)[][];
  tableStyles?: React.CSSProperties;
  headerStyles?: React.CSSProperties;
  rowStyles?: React.CSSProperties;
  evenRowStyles?: React.CSSProperties;
  oddRowStyles?: React.CSSProperties;
}

const headers = [
  "Employee",
  "Total Rating",
  "Average",
  "Requested",
  "Completed",
];
const data: (string | number)[][] = [
  ["Stanley", 3, 3, 56, 1],
  ["Mia", 5, 4.8, 45, 2],
  ["John", 4, 4.2, 50, 3],
  ["Ava", 2, 4.5, 40, 4],
  ["Stanley", 3, 3, 56, 1],
  ["Stanley", 3, 3, 56, 1],
  ["Mia", 5, 4.8, 45, 2],
  ["John", 4, 4.2, 50, 3],
  ["Ava", 2, 4.5, 40, 4],
  ["Stanley", 3, 3, 56, 1],
];

export const BoardTable: React.FC<LeaderBoardTableProps> = ({
  headers,
  data,
  tableStyles,
  headerStyles,
  rowStyles,
  evenRowStyles,
  oddRowStyles,
}) => {
  return (
    <div
      className="flex justify-center w-full items-center pb-4 table-responsive"
      style={{ width: "100%", height: "100%" }}>
      <div className="w-full">
        <table
          className="table-auto border"
          style={{ width: "100%", height: "100%", ...tableStyles }}>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-1 py-1.5 md:p-3 border font-normal text-xs md:text-lg"
                  style={{
                    backgroundColor: "#631363",
                    borderColor: "#E0E0E0",
                    color: "#FFF",
                    ...headerStyles,
                  }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border"
                style={{
                  backgroundColor: rowIndex % 2 === 0 ? "#F4F4F4" : "#FFF",
                  color: rowIndex % 2 === 0 ? "#631363" : "#6D6D6D",
                  ...rowStyles,
                  ...(rowIndex % 2 === 0 ? evenRowStyles : oddRowStyles),
                }}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="p-3 text-center border text-xs md:text-sm"
                    style={{ borderColor: "#E0E0E0" }}
                    data-title={headers[cellIndex]}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoardTable;

export const LeaderboardTable = () => {
  return (
    <div className="flex justify-center items-center w-full h-full py-2">
      <BoardTable
        headers={headers}
        data={data}
        tableStyles={{ width: "100%" }}
        headerStyles={{ fontFamily: "Arial" }}
        evenRowStyles={{ backgroundColor: "#F4F4F4" }}
        oddRowStyles={{ backgroundColor: "#FFF" }}
      />
    </div>
  );
};
