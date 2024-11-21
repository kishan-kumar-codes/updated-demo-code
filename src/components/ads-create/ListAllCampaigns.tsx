"use client";

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useFetch } from "@/hooks/useFetch";

interface AdDataItem {
  id: string;
  name: string;
  created_time: string;
  buying_type: string;
  status: string;
  adsets: {
    id: string;
    name: string;
  }[];
  ads: {
    adset_id: string;
    name: string;
  }[];
}

export default function GetAllCampignsList() {
  const { toast } = useToast();
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const adId = searchParams?.get("adId");

  const [refresh, setRefresh] = useState(0);

  const url = `https://graph.facebook.com/v20.0/act_${adId}/campaigns?fields=id,name,created_time,buying_type,status,adsets{id,name},ads{adset_id,name}&limit=100&date_format=U&access_token=${(session as any).accessToken}`;

  const { data, loading, error } = useFetch<AdDataItem>(url, refresh);

  async function deleteCampaigns(id: string) {
    try {
      const response = await axios.delete(
        `https://graph.facebook.com/v20.0/${id}`,
        {
          params: {
            access_token: (session as any).accessToken,
          },
        }
      );
      console.log("Successfully deleted", response);
      toast({
        title: "Campaign deleted successfully",
        description: "The campaign has been deleted.",
      });
      setRefresh((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to delete campaign:", error);
      toast({
        title: "Failed to delete campaign",
        description: "An error occurred while deleting the campaign.",
      });
    }
  }

  return (
    <div className="flex justify-center py-4">
      <div className="border bg-[#E0E0E0] max-w-[1280px] rounded-lg w-full">
        {data?.length === 0 ? (
          <div className="text-lg w-full text-center bg-slate-400 rounded-sm p-2 mt-10">
            No Campaigns Available
          </div>
        ) : (
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Date Created</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Buying Type</TableHead>~
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="grid gap-1">
                        <div className="font-medium">{item.name}</div>
                        <div className=" text-sm line-clamp-2 opacity-85">
                          ID: {item.id}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {" "}
                        {new Date(item.created_time).toLocaleDateString(
                          "en-GB"
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.buying_type}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <span className="sr-only">View campaign</span>
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <TrashIcon className="h-5 w-5" />
                              <span className="sr-only">Delete campaign</span>
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-white">
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Delete Campaign
                              </AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete the {item.name}{" "}
                                campaign? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => deleteCampaigns(item.id)}>
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <div className="flex justify-end mt-4 p-2">
          <Link href={`/ads-create`}>
            <div className="text-xs flex rounded-md cursor-pointer font-normal p-1 gap-1 h-8 items-center px-2 border border-[#631363] bg-[#631363] text-white">
              Go Black
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

  function TrashIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      </svg>
    );
  }
}
