"use client";

import axios from "axios";
import { useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";

import { useSession } from "next-auth/react";

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
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

interface AdItem {
  id: string;
  name: string;
  start_time: number;
  end_time: number;
  status: string;
  // buying_type:
}

export default function GetAllAdSetList() {
  const { data: session, status } = useSession();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const adId = searchParams?.get("adId");
  const [refresh, setRefresh] = useState(0);

  const url = `https://graph.facebook.com/v20.0/act_${adId}/adsets?fields=name,id,status+,+start_time,end_time&date_format=U&access_token=${(session as any).accessToken}`;

  const { data, loading, error } = useFetch<AdItem>(url, refresh);
  async function deleteAdSets(id: string) {
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
        title: "AdSet deleted successfully",
        description: "The AdSet has been deleted.",
      });
      setRefresh((prev) => prev + 1);
    } catch (error) {
      console.error("Failed to delete Ad Set:", error);
      toast({
        title: "Failed to delete Ad Set",
        description: "An error occurred while deleting the Ad Set.",
      });
    }
  }

  return (
    <div>
      <div className="flex justify-center py-4">
        <div
          className="border  max-w-[1280px] rounded-lg 
         w-full">
          {data?.length === 0 ? (
            <div className="text-lg w-full text-center bg-slate-400 rounded-sm p-2 mt-10">
              No Ad Set Available
            </div>
          ) : (
            <div className="relative w-full overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ad Set</TableHead>
                    <TableHead>Time & Date</TableHead>
                    <TableHead>Status</TableHead>
                    {/* <TableHead>Buying Type</TableHead> */}
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data?.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-[#6D6D6D]">
                        <div className="grid gap-1">
                          <div className="font-medium">{item?.name}</div>
                          <div className=" text-sm line-clamp-2 opacity-85">
                            ID: {item.id}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-[#6D6D6D] ">
                          {" "}
                          {new Date(item?.start_time * 1000).toLocaleString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              // timeZoneName: "short",
                            }
                          )}{" "}
                          -
                          {new Date(item?.end_time * 1000).toLocaleString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              // timeZoneName: "short",
                            }
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="text-[#6D6D6D]" variant="outline">
                          {item.status}
                        </Badge>
                      </TableCell>
                      {/* <TableCell>
                      <Badge variant="outline">{item.buying_type}</Badge>
                    </TableCell> */}
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <span className="sr-only">View Ad Set</span>
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <TrashIcon className="h-5 w-5" />
                                <span className="sr-only">Delete AdSet</span>
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="bg-white">
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Delete AdSet
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete the{" "}
                                  {item.name} Ad Set? This action cannot be
                                  undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => deleteAdSets(item.id)}>
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
