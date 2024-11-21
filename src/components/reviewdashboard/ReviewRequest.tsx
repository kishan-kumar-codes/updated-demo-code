import React from "react";
import { TableDate, TableItem, TableTitle } from "@/styles/styles";

/**
 * ReviewRequest component to display a table of review requests.
 *
 * @returns {JSX.Element} The rendered ReviewRequest component.
 */
const ReviewRequest = (): JSX.Element => {
  return (
    <div className="flex py-2 flex-col w-full h-full rounded-3xl bg-[#BCBCBC]">
      <div className="flex mx-5 sm:text-center my-6 overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="border-b-[3px] border-spacing-y-2 border-[#6D6D6D]">
            <tr className="my-3" style={TableTitle}>
              <th className="p-3">Customer Name</th>
              <th className="p-3">Requested Date</th>
              <th className="p-3">Requested By</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-[3px] border-spacing-y-2 border-[#6D6D6D] py-2">
              <td className="p-3" style={TableItem}>
                Name Surname
              </td>
              <td className="p-3" style={TableDate}>
                11.12.2021
              </td>
              <td className="p-3" style={TableItem}>
                Name Surname
              </td>
              <td className="p-3" style={TableDate}>
                11.13.2021
              </td>
            </tr>
            <tr className="border-b-[3px] border-spacing-y-2 border-[#6D6D6D] py-2">
              <td className="p-3" style={TableItem}>
                Name Surname
              </td>
              <td className="p-3" style={TableDate}>
                11.12.2021
              </td>
              <td className="p-3" style={TableItem}>
                Name Surname
              </td>
              <td className="p-3" style={TableDate}>
                <button className="bg-[#631363] p-2 rounded-2xl px-4">
                  Resend Invitation
                </button>
              </td>
            </tr>
            <tr className="border-b-[3px] border-spacing-y-2 border-[#6D6D6D] py-2">
              <td className="p-3" style={TableItem}>
                Name Surname
              </td>
              <td className="p-3" style={TableDate}>
                11.12.2021
              </td>
              <td className="p-3" style={TableItem}>
                Name Surname
              </td>
              <td className="p-3" style={TableDate}>
                11.13.2021
              </td>
            </tr>
            <tr className="py-2">
              <td className="p-3" style={TableItem}>
                Name Surname
              </td>
              <td className="p-3" style={TableDate}>
                11.12.2021
              </td>
              <td className="p-3" style={TableItem}>
                Name Surname
              </td>
              <td className="p-3" style={TableDate}>
                <button className="bg-[#631363] p-2 rounded-2xl px-4">
                  Resend Invitation
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewRequest;
