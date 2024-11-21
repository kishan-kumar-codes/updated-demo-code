"use client";
import { Trash } from "lucide-react";
import { Share2 } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { X } from "lucide-react";
import { Linkedin } from "lucide-react";
import { CornerUpLeft } from "lucide-react";

import {
  FBShareSvgs,
  IGShareSvg,
  InShareSAvgs,
  ReviewDeleteSvgs,
  ShareArrowSvgs,
  ShareIconReview,
  XShareSAvgs,
} from "@/svgs/review-dashboard-mobile/svgs";
import { StarRatingComponents } from "@/utils/helper";
import { useEffect } from "react";

import React from "react";
import BoardTable from "./LeaderBoardTable";
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

const typography: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  overflowWrap: "break-word",
};

interface ReviewRequestCardProps {
  headers: string[];
  data: (string | number)[][];
  tableStyles?: React.CSSProperties;
  headerStyles?: React.CSSProperties;
  rowStyles?: React.CSSProperties;
  evenRowStyles?: React.CSSProperties;
  oddRowStyles?: React.CSSProperties;
}

const rows = [
  {
    email: "johndoe@companyname.com",
    sender: "Jenny F. via: jennyf@gmail.com",
    dateTime: "01-15-2024 5:40 PM",
    address: "123 Main St, Anytown, USA",
    review:
      "The team was professional, the work was completed on time, and the pricing was fair. Highly recommend their services!",
    followUpDate: "01-17-2024 1:55 PM",
    message:
      "It was a pleasure working with you, and we appreciate your recommendation.",
    actions: <Trash />,
  },
  // Repeat similar objects for each row...
];

const ReviewRequestCard: React.FC<ReviewRequestCardProps> = ({
  headers,
  data,
  tableStyles,
  headerStyles,
  rowStyles,
  evenRowStyles,
  oddRowStyles,
}) => {
  return (
    // <div className="w-full flex justify-center items-baseline gap-1 p-2  ">
    //   <div className="w-full flex md:flex-col items-start justify-start">
    //     <div className="flex flex-col md:flex-row w-full z-20">
    //       {headers &&
    //         headers.map((header, index) => (
    //           <div
    //             key={index}
    //             className={`flex bg-[#631363] flex-col w-full justify-center items-center h-[35px] px-2`}>
    //             <span style={{ ...typography }} className="text-left">
    //               {header}
    //             </span>
    //           </div>
    //         ))}
    //     </div>
    //     <div className="flex flex-col z-10 w-full h-full">
    //       {tableData &&
    //         tableData.map((data, index) => (
    //           <div
    //             key={index}
    //             className={`flex bg-[#E0E0E0] text-white w-full justify-center flex-col md:flex-row items-center px-2`}>
    //             <div className="text-left text-xs w-full">{data.user}</div>
    //             <div className="text-left text-xs w-full">{data.customer}</div>
    //             <div className="text-left text-xs w-full">{data.requested}</div>
    //             <div className="text-left text-xs w-full">{data.via}</div>
    //             <div className="text-left text-xs w-full">{data.location}</div>
    //             <div className="text-left text-xs w-full">{data.review}</div>
    //             <div className="text-left text-xs w-full">{data.status}</div>
    //             <div className="text-left text-xs w-full">{data.completed}</div>
    //             <div className="text-left text-xs w-full">{data.response}</div>
    //           </div>
    //         ))}
    //     </div>
    //   </div>
    // </div>

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
                  className={`px-1 md:font-semibold font-normal ${index === 0 ? "rounded-tl-3xl" : "rounded-tl-none"} ${index === headers.length - 1 ? "rounded-tr-3xl" : "rounded-tr-none"}  py-1.5 md:p-3 border text-xs md:text-sm rounded-t-3xl`}
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
                  <>
                    <td
                      key={cellIndex}
                      className="p-3 text-center border text-xs md:text-sm"
                      style={{ borderColor: "#E0E0E0" }}
                      data-title={headers[cellIndex]}>
                      {cell === "review" ? (
                        <>
                          {" "}
                          <StarRatingComponents rating={5} />
                          {cell}
                        </>
                      ) : (
                        cell
                      )}
                    </td>
                  </>
                ))}
                <td
                  className="p-3  text-xs md:text-sm"
                  style={{ borderColor: "#E0E0E0" }}
                  data-title={""}>
                  <Trash />
                  <CornerUpLeft />
                  <Share2 />
                  <Linkedin />
                  <Instagram />
                  <Facebook />
                  <X />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const headers = [
    "User",
    "Customer",
    "Requested",
    "Via",
    "Location",
    "Review",
    "Status",
    "Completed",
    "Response",
  ];
  // const data: (string | number)[][] = [
  //   ["Stanley", 3, 3, 56, 1],
  //   ["Mia", 5, 4.8, 45, 2],
  //   ["John", 4, 4.2, 50, 3],
  //   ["Ava", 2, 4.5, 40, 4],
  //   ["Stanley", 3, 3, 56, 1],
  //   ["Stanley", 3, 3, 56, 1],
  //   ["Mia", 5, 4.8, 45, 2],
  //   ["John", 4, 4.2, 50, 3],
  //   ["Ava", 2, 4.5, 40, 4],
  //   ["Stanley", 3, 3, 56, 1],
  // ];

  // const tableDataArrays = tableData.map((item) => [
  //   item.user,
  //   item.customer,
  //   item.requested,
  //   item.via,
  //   item.location,
  //   item.review,
  //   item.status,
  //   item.completed,
  //   item.response,
  // ]);

  const handleDelete = () => {
    console.log("Delete button clicked");
  };

  return (
    <div className="w-full rounded-3xl">
      {/* <BoardTable
        headers={headers}
        data={tableDataArrays}
        tableStyles={{ width: "100%" }}
        headerStyles={{
          fontFamily: "Arial",
          fontSize: "11px",
          backgroundColor: "#631363",
        }}
        evenRowStyles={{ backgroundColor: "#F4F4F4" }}
        oddRowStyles={{ backgroundColor: "#FFF" }}
      /> */}
      {/* <ReviewRequestCard
        headers={headers}
        data={tableDataArrays}
        tableStyles={{ width: "100%" }}
        headerStyles={{
          fontFamily: "Arial",
          backgroundColor: "#631363",
        }}
        evenRowStyles={{ backgroundColor: "#F4F4F4" }}
        oddRowStyles={{ backgroundColor: "#FFF" }}
      /> */}
      {/* <Table>
        <TableHeader>
          <TableRow className="bg-[#631363] text-white rounded-t-3xl border">
            {headers.map((item, index) => (
              <TableHead
                className={`${index === 0 ? "rounded-tl-3xl" : "rounded-tl-none"} ${index === headers.length - 1 ? "rounded-tr-3xl" : "rounded-tr-none"}`}
                key={index}>
                {item}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item, index) => (
            <TableRow
              className={`${index % 2 === 0 ? "rounded-tl-3xl" : "rounded-tl-none"}`}
              key={index}>
              <TableCell className="text-center">{item.user}</TableCell>
              <TableCell className="text-center">{item.customer}</TableCell>
              <TableCell className="text-center">{item.requested}</TableCell>
              <TableCell className="text-center">{item.via}</TableCell>
              <TableCell className="text-center">{item.location}</TableCell>
              <TableCell className="text-center">{item.review}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.completed}</TableCell>
              <TableCell>{item.response}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> */}
      {/* <ReviewRequestCard tableData={tableData} headers={headers} /> */}
    </div>
  );
};

export default App;

export const CompletedReviewRequestCard: React.FC = () => {
  const handleDelete = () => {
    console.log("Delete button clicked");
  };

  const headers = [
    "User",
    "Customer",
    "Requested",
    "Location",
    "Review",
    "Completed",
    "Response",
  ];

  const rowTemplate = {
    email: "johndoe@companyname.com",
    sender: "Jenny F. via: jennyf@gmail.com",
    dateTime: "01-15-2024 5:40 PM",
    address: "123 Main St, Anytown, USA",
    review:
      "The team was professional, the work was completed on time, and the pricing was fair. Highly recommend their services!",
    followUpDate: "01-17-2024 1:55 PM",
    message:
      "It was a pleasure working with you, and we appreciate your recommendation.",
    actions: true,
  };

  const rows = Array(4)
    .fill(rowTemplate)
    .map((row, index) => ({
      ...row,
      id: index + 1,
    }));

  const newRows = rows.map((item) => [
    item.email,
    item.sender,
    item.dateTime,
    item.address,
    item.review,
    item.followUpDate,
    item.message,
    item.actions,
  ]);

  return (
    <div className="w-full">
      <ReviewRequestCard
        headers={headers}
        data={newRows}
        tableStyles={{ width: "100%" }}
        headerStyles={{
          fontFamily: "Arial",
          backgroundColor: "#631363",
        }}
        evenRowStyles={{ backgroundColor: "#F4F4F4" }}
        oddRowStyles={{ backgroundColor: "#FFF" }}
      />
      {/* <ReviewRequestCard
        onDelete={handleDelete}
        User="Brian"
        Customer="John"
        Requested="May 12, 2022"
        Location="New York"
        isShare
        height="70"
        Review={
          <>
            <div className="flex flex-col gap-1">
              <StarRatingComponents rating={3} />
              <span className="text-left ">
                The technicians were punctual, friendly, and very thorough. My
                system is running smoothly now.
              </span>
            </div>
          </>
        }
        completed="May 12, 2022"
        Response="Thank you for your positive review!
We're glad to hear that you had a great
experience and that your HVAC system is
working well."
      /> */}
    </div>
  );
};
