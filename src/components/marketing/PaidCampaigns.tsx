import React from "react";
import { TableDate, TableItem, TableTitle } from "@/styles/styles";

/**
 * PaidCampaigns component
 * 
 * Displays a table of paid campaign metrics, including name, total, active, completed, replied, reply percentage, status, and campaign ID.
 * The table is styled with custom styles imported from "@/styles/styles".
 * 
 * @returns {JSX.Element} The rendered PaidCampaigns component.
 */
const PaidCampaigns = () => {
    return (
        <div className="flex py-2 flex-col w-full h-full rounded-3xl bg-[#BCBCBC]">
            <div className="flex mx-5 sm:text-center my-6 overflow-x-auto">
                <table className="w-full table-auto">
                    <thead className="border-b-[3px] border-spacing-y-2 border-[#6D6D6D]">
                        <tr className="my-3" style={TableTitle}>
                            <th className="p-3">Name</th>
                            <th className="p-3">Total</th>
                            <th className="p-3">Active</th>
                            <th className="p-3">Completed</th>
                            <th className="p-3">Replied</th>
                            <th className="p-3">Reply %</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Campaign ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Example data rows for the table */}
                        <tr className="border-b-[3px] border-spacing-y-2 border-[#6D6D6D] py-2">
                            <td className="p-3" style={TableItem}>Facebook Ads</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0.00 %</td>
                            <td className="p-3" style={TableDate}>Published</td>
                        </tr>
                        <tr className="border-b-[3px] border-spacing-y-2 border-[#6D6D6D] py-2">
                            <td className="p-3" style={TableItem}>Google Ads</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0.00 %</td>
                            <td className="p-3" style={TableDate}>Published</td>
                        </tr>
                        <tr className="border-b-[3px] border-spacing-y-2 border-[#6D6D6D] py-2">
                            <td className="p-3" style={TableItem}>Instagram Ads</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0.00 %</td>
                            <td className="p-3" style={TableDate}>Published</td>
                        </tr>
                        <tr>
                            <td className="p-3" style={TableItem}>Database Reactivation</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0.00 %</td>
                            <td className="p-3" style={TableDate}>Published</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaidCampaigns;
