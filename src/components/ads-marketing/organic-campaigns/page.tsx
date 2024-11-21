import { organic } from "@/utils/data/follow-up";
import Image from "next/image";

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
import Screen from "@/assets/images/hubspark/BottomScreen.png";

export default function OrganicLayout() {
  return (
    <>
      <div className="px-2 py-4 flex gap-4 flex-col">
        {organic.map((item, index) => (
          <Table key={index}>
            <TableHeader className="bg-[#631363] h-fit">
              <TableRow className="py-2 text-white ">
                <TableHead className="px-1 py-1 md:py-2 md:text-[18px] font-semibold pl-2 md:w-fit  rounded-tl-2xl h-fit text-[9px]">
                  Name
                </TableHead>
                <TableHead className="px-1 py-1 md:py-2 md:text-[18px] font-semibold h-fit text-[9px]">
                  Posts
                </TableHead>
                <TableHead className="px-1 py-1 md:py-2 md:text-[18px] font-semibold h-fit text-[9px]">
                  {" "}
                  Likes
                </TableHead>
                <TableHead className="px-1 py-1 md:py-2 md:text-[18px] font-semibold h-fit text-[9px]">
                  {" "}
                  Comments
                </TableHead>
                <TableHead className="px-1 py-1 md:py-2 md:text-[18px] font-semibold h-fit  text-[9px]">
                  {" "}
                  Shares
                </TableHead>
                <TableHead className="px-1 py-1 md:py-2 md:text-[18px] font-semibold h-fit rounded-tr-2xl  text-[9px]">
                  {" "}
                  Messages
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="py-2 ">
              <TableRow>
                <TableCell className="font-semibold text-xs py-2 md:py-4 pl-2 rounded-bl-2xl bg-[#E0E0E0] text-[#6D6D6D] w-[25%]">
                  <div className="flex items-center gap-2 w-full bg-[#E0E0E0]">
                    <Image
                      className="w-6 object-contain h-6 md:h-8 md:w-8"
                      priority={true}
                      src={item.img}
                      alt="logo"
                      height={24}
                      width={24}
                    />
                    <div className="text-[9px] md:text-[18px] font-semibold bg-[#E0E0E0]">
                      {item.name}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="bg-[#E0E0E0] text-[#6D6D6D] w-[15%]">
                  <div className="text-[9px] pt-1 md:text-[18px] font-semibold">
                    {item.posts}
                  </div>
                </TableCell>
                <TableCell className="bg-[#E0E0E0] text-[#6D6D6D] w-[15%]">
                  <div className="text-[9px] pt-1 md:text-[18px] font-semibold">
                    {item.likes}
                  </div>
                </TableCell>
                <TableCell className="bg-[#E0E0E0] text-[#6D6D6D] w-[15%]">
                  <div className="text-[9px] pt-1 md:text-[18px] font-semibold">
                    {item.comments}
                  </div>
                </TableCell>
                <TableCell className="bg-[#E0E0E0] text-[#6D6D6D] w-[15%]">
                  <div className="text-[9px] pt-1 md:text-[18px] font-semibold">
                    {item.shares}
                  </div>
                </TableCell>
                <TableCell className="bg-[#E0E0E0] rounded-br-2xl text-[#6D6D6D] w-[15%]">
                  <div className="text-[9px] pt-1 md:text-[18px] font-semibold">
                    {item.messages}
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ))}
      </div>
      <div className="flex w-full md:hidden fixed bottom-0  mt-10 justify-center  items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
    </>
  );
}
