import React from "react";
import { TableDate, TableItem, TableTitle } from "@/styles/styles";

/**
 * OrganicCampaigns component
 * 
 * Displays a table of organic campaign metrics, including name, posts, likes, comments, shares, and messages.
 * The table is styled with custom styles imported from "@/styles/styles".
 * 
 * @returns {JSX.Element} The rendered OrganicCampaigns component.
 */
const OrganicCampaigns = () => {
    return (
        <div className="flex py-2 flex-col w-full h-full rounded-3xl bg-[#BCBCBC]">
            <div className="flex mx-5 sm:text-center my-6 overflow-x-auto">
                <table className="w-full table-auto">
                    <thead className="border-b-[3px] border-spacing-y-2 border-[#6D6D6D]">
                        <tr className="my-3" style={TableTitle}>
                            <th className="p-3">Name</th>
                            <th className="p-3">Posts</th>
                            <th className="p-3">Likes</th>
                            <th className="p-3">Comments</th>
                            <th className="p-3">Shares</th>
                            <th className="p-3">Messages</th>
                            {/* Uncomment the following lines if needed */}
                            {/* <th className="p-3">Status</th>
                            <th className="p-3">Campaign ID</th> */}
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
                            <td className="p-3" style={TableDate}>0</td>
                        </tr>
                        <tr className="border-b-[3px] border-spacing-y-2 border-[#6D6D6D] py-2">
                            <td className="p-3" style={TableItem}>GMB</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                        </tr>
                        <tr className="border-b-[3px] border-spacing-y-2 border-[#6D6D6D] py-2">
                            <td className="p-3" style={TableItem}>Instagram Page</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                        </tr>
                        <tr>
                            <td className="p-3" style={TableItem}>Yelp Page</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                            <td className="p-3" style={TableDate}>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrganicCampaigns;
