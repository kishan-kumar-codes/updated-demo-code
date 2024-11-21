import { follows } from "@/utils/data/follow-up";

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

export default function FollowUpCampaigns() {
  return (
    <>
      <div className="px-2 py-4 flex gap-4 flex-col">
        {follows.map((item, index) => (
          <div key={index}>
            <Table className="align-middle">
              <TableHeader className="bg-[#631363] h-fit">
                <TableRow className="py-2 md:py-4 text-white">
                  <TableHead className="px-1 pl-2 w-[100px] rounded-tl-2xl h-fit text-[9px] md:text-[18px] py-0 md:py-2 font-semibold align-middle">
                    Name
                  </TableHead>
                  <TableHead className="px-1 h-fit text-[9px] md:text-[18px] font-semibold py-0 md:py-2 align-middle">
                    Total Enrolled
                  </TableHead>
                  <TableHead className="px-1 h-fit text-[9px] md:text-[18px] font-semibold py-0 md:py-2 align-middle">
                    Active
                  </TableHead>
                  <TableHead className="px-1 h-fit text-[9px] md:text-[18px] font-semibold py-0 md:py-2 align-middle">
                    Completed
                  </TableHead>
                  <TableHead className="px-1 h-fit text-[9px] md:text-[18px] font-semibold py-0 md:py-2 align-middle">
                    Replied
                  </TableHead>
                  <TableHead className="px-1 h-fit text-[9px] md:text-[18px] font-semibold py-0 md:py-2 align-middle">
                    Reply %
                  </TableHead>
                  <TableHead className="px-1 h-fit text-[9px] md:text-[18px] font-semibold py-0 md:py-2 rounded-tr-2xl align-middle">
                    {" "}
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="py-2">
                <TableRow>
                  <TableCell className="font-semibold text-xs py-2 md:py-6 pl-2 rounded-bl-2xl bg-[#E0E0E0] text-[#6D6D6D] align-middle w-[22%]">
                    <div className="flex items-center text-[10px] w-full md:text-[18px] font-semibold">
                      {item.name}
                    </div>
                  </TableCell>
                  <TableCell className="bg-[#E0E0E0] text-[#6D6D6D] align-middle w-[13%]">
                    <div className="md:text-[18px] font-semibold text-[9px] pt-1">
                      {item.total}
                    </div>
                  </TableCell>
                  <TableCell className="bg-[#E0E0E0] text-[#6D6D6D] align-middle w-[13%]">
                    <div className="md:text-[18px] font-semibold  text-[9px] pt-1">
                      {item.active}
                    </div>
                  </TableCell>
                  <TableCell className="bg-[#E0E0E0] text-[#6D6D6D] align-middle w-[13%]">
                    <div className="md:text-[18px] font-semibold  text-[9px] pt-1">
                      {item.completed}
                    </div>
                  </TableCell>
                  <TableCell className=" bg-[#E0E0E0] text-[#6D6D6D] align-middle w-[13%]">
                    <div className="md:text-[18px] font-semibold text-[9px] pt-1">
                      {item.replied}
                    </div>
                  </TableCell>
                  <TableCell className=" bg-[#E0E0E0] text-[#6D6D6D] align-middle text-start w-[13%]">
                    <div className="md:text-[18px] font-semibold text-[9px] pt-1 ">
                      {item.reply}
                    </div>
                  </TableCell>
                  <TableCell className=" rounded-br-2xl bg-[#E0E0E0] text-[#6D6D6D] align-middle w-[13%]">
                    <div className="text-xs md:text-[18px] font-semibold pt-1">
                      {item.status}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
      <div className="flex w-full md:hidden fixed bottom-0  mt-10 justify-center  items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
    </>
  );
}
