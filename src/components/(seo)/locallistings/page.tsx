import { directoryListings } from "@/utils/data/localListings";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Screen from "@/assets/images/hubspark/BottomScreen.png";

export default function LocalListings() {
  return (
    <>
      <div className="mb-6 w-full flex justify-center">
        <div className="w-full  bg-[#F4F4F4]">
          <div className="flex w-full px-2">
            <div className="w-full pt-2 lg:px-10 lg:py-4 flex flex-col gap-2">
              <div className="text-[#6D6D6D] lg:hidden text-2xl font-semibold py-4 pl-0 lg:pl-4">
                Local Listings
              </div>
              <div className="flex justify-between lg:justify-start text-white w-full gap-2 md:gap-8 overflow-hidden ">
                <div className="h-20 lg:h-36 lg:max-w-[200px] relative w-full rounded-xl lg:rounded-3xl border flex flex-col justify-evenly">
                  <div className="bg-gradient-to-b from-[#00914C] via-[#00A550] to-[#64C08A]  rounded-xl lg:rounded-3xl border flex flex-col justify-evenly  w-full h-full">
                    <div className="font-bold text-2xl lg:text-[48px] text-center mb-4">
                      131
                    </div>
                  </div>
                  <button className=" w-full font-bold lg:text-[24px] py-0.5 rounded-xl lg:rounded-full bg-gradient-to-b from-[#00914C] via-[#00A550] to-[#64C08A] absolute bottom-0">
                    {" "}
                    Good
                  </button>
                </div>

                <div className="h-20 lg:h-36 lg:max-w-[200px] relative w-full rounded-xl lg:rounded-3xl border flex flex-col justify-evenly">
                  <div className="bg-gradient-to-b from-[#FAAC18] via-[#FFCA05] to-[#FFE7A3] rounded-xl lg:rounded-3xl border flex flex-col justify-evenly  w-full h-full">
                    <div className="font-bold text-2xl lg:text-[48px] text-center mb-4">
                      180
                    </div>
                  </div>
                  <button className=" w-full font-bold lg:text-[24px] py-0.5 rounded-full bg-gradient-to-b from-[#FAAC18] via-[#FFCA05] to-[#FFE7A3]  absolute bottom-0">
                    {" "}
                    Incorrect
                  </button>
                </div>

                <div className="h-20 lg:h-36 lg:max-w-[200px] relative w-full  rounded-3xl border flex flex-col justify-evenly">
                  <div className="bg-gradient-to-b from-[#CF232A] via-[#EC1C24] to-[#F37E5F] rounded-xl lg:rounded-3xl border flex flex-col justify-evenly  w-full h-full">
                    <div className="font-bold text-2xl lg:text-[48px] text-center mb-4">
                      97
                    </div>
                  </div>
                  <button className=" w-full lg:text-[24px] h-fit py-0.5 rounded-xl lg:rounded-full font-bold bg-gradient-to-b from-[#CF232A] via-[#EC1C24] to-[#F37E5F]  absolute bottom-0">
                    {" "}
                    Doesn&apos;t exist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Table className="my-4 md:mx-6">
            <TableHeader>
              <TableRow>
                <TableHead className=" text-[#631363] font-bold lg:text-[26px] w-[240px]">
                  Site/Directory
                </TableHead>
                <TableHead className=" text-[#631363] font-bold lg:text-[26px] ">
                  Name
                </TableHead>
                <TableHead className=" text-[#631363] font-bold lg:text-[26px] ">
                  Address
                </TableHead>
                <TableHead className=" text-[#631363] font-bold lg:text-[26px] ">
                  Zip/PostCode
                </TableHead>
                <TableHead className=" text-[#631363] font-bold lg:text-[26px] ">
                  Phone
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {directoryListings.map((invoice, index) => (
                <TableRow className="border-y-2 border-[#6D6D6D]" key={index}>
                  <TableCell className="font-semibold p-[5px] md:p-[1rem] text-[#6D6D6D] ">
                    <div className="flex justify-start items-center md:gap-2 gap-1">
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="flex justify-center gap-2 items-center">
                          <div
                            className={`w-3 lg:w-4 lg:h-4 h-3 border flex-shrink-0 rounded-full`}
                            style={{
                              background: `linear-gradient(to bottom, ${invoice.from}, ${invoice.via}, ${invoice.to})`,
                            }}></div>
                          <div className="flex-shrink-0 pt-1">
                            <Image
                              style={{
                                objectFit: "contain",
                                aspectRatio: "3/2",
                                width: "24px",
                                height: "24px",
                              }}
                              src={invoice.img}
                              quality={100}
                              width={0}
                              className="h-full lg:hidden w-full object-cover"
                              height={0}
                              alt="Picture of the Site"
                            />
                            <div className="hidden lg:flex">{invoice.svg}</div>
                          </div>
                        </div>
                        <div className="text-xs lg:text-xl ml-2 md:ml-0 md:text-sm">
                          {invoice.Site}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-[#6D6D6D] text-xs lg:text-xl text-nowrap">
                    {invoice.Name}
                  </TableCell>
                  <TableCell className="text-[#6D6D6D] tracking-tighter text-xs lg:text-xl">
                    {invoice.Address}
                  </TableCell>
                  <TableCell className="text-[#6D6D6D]  text-xs lg:text-xl">
                    {invoice.Zip}
                  </TableCell>
                  <TableCell className="text-[#6D6D6D] text-xs lg:text-xl">
                    {invoice.Phone}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
