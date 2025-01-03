"use client";

import { GerneralDropDownSvgs } from "@/svgs/General-Settings-Mobile/svgs";

import { SearchSvg } from "@/svgs/seo-screens/svgs";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

import { useState, useCallback } from "react";
import { PlusIcon, SearchIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Label } from "../ui/label";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

const DUMMY_USERS: User[] = [
  {
    id: "1",
    name: "Chris Wok",
    email: "chriswok@gmail.com",
    avatar: "/avatars/01.png",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john.doe@gmail.com",
    avatar: "/avatars/02.png",
  },
  {
    id: "3",
    name: "Shane Wat",
    email: "shanewat@gmail.com",
    avatar: "/avatars/03.png",
  },
  {
    id: "4",
    name: "Justin Holland",
    email: "justin.holland@gmail.com",
    avatar: "/avatars/04.png",
  },
  {
    id: "5",
    name: "Kim Arya",
    email: "kim.arya@gmail.com",
    avatar: "/avatars/05.png",
  },
  {
    id: "6",
    name: "Neil Nicola",
    email: "n.nicola123@gmail.com",
    avatar: "/avatars/06.png",
  },
];

const invoices = [
  {
    invoice: "Team T",
    paymentStatus: "5",
  },
  {
    invoice: "Ops Team",
    paymentStatus: "39",
  },
  {
    invoice: "Sales",
    paymentStatus: "24",
  },
  {
    invoice: "Support Team1",
    paymentStatus: "4",
  },
  {
    invoice: "Team task ",
    paymentStatus: "5",
  },
  {
    invoice: "Test Tech Support",
    paymentStatus: "27",
  },
  {
    invoice: "DevOps Team",
    paymentStatus: "23",
  },
];

const CreateTeams = ({ isTeamUser, setTeamUser }) => {
  const [isTeam, setTeam] = useState<any>(invoices);
  const [isOpen, setIsOpen] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [editingTeamIndex, setEditingTeamIndex] = useState<number | null>(null);

  const filteredUsers = DUMMY_USERS.filter(
    (user) =>
      !selectedUsers.find((selected) => selected.id === user.id) &&
      (user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const addUser = (user: User) => {
    setSelectedUsers([...selectedUsers, user]);
  };

  const removeUser = (userId: string) => {
    setSelectedUsers(selectedUsers.filter((user) => user.id !== userId));
  };

  const addAllUsers = () => {
    const usersToAdd = filteredUsers.filter(
      (user) => !selectedUsers.find((selected) => selected.id === user.id)
    );
    setSelectedUsers([...selectedUsers, ...usersToAdd]);
  };

  const handleCreateOrUpdate = useCallback(() => {
    try {
      if (editingTeamIndex !== null) {
        // Update existing team
        const updatedTeams = [...isTeam];
        updatedTeams[editingTeamIndex] = {
          invoice: teamName,
          paymentStatus: selectedUsers.length.toString(),
        };
        setTeam(updatedTeams);
      } else {
        // Create new team
        setTeam([
          ...isTeam,
          {
            invoice: teamName,
            paymentStatus: selectedUsers.length.toString(),
          },
        ]);
      }
      setIsOpen(false);
      setEditingTeamIndex(null);
      setTeamName("");
      setSelectedUsers([]);
    } catch (err) {
      console.log("Error: " + err);
    } finally {
      // document.location.reload();
    }
  }, [teamName, selectedUsers, editingTeamIndex]);

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open);
    if (!open) setEditingTeamIndex(null);
  }, []);

  const handleDelete = (index: number) => {
    setTeam((prevTeam: any) => prevTeam.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setEditingTeamIndex(index);
    setTeamName(isTeam[index].invoice);
    setSelectedUsers([]); // You may want to load the existing team members here
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col w-full  justify-center items-center h-full">
        <div className="flex flex-col gap-7 justify-center items-center w-full">
          {/* <Header title={"General Settings"} displayName=" General Settings" /> */}
          <div className="flex flex-col   w-[90%] h-full ">
            <div className="flex flex-col w-full  items-center gap-2 min-h-[490px]  h-full pt-2">
              <div className="flex w-full gap-3 flex-col ">
                {/* <HeaderBarMobile title="Teams" /> */}
                <Dialog
                  open={isOpen || editingTeamIndex !== null}
                  onOpenChange={(open) => {
                    setIsOpen(open);
                    if (!open) setEditingTeamIndex(null);
                  }}>
                  <div className="flex rounded-3xl flex-col z-10 min-h-[160px] justify-start w-full pb-20 bg-[#E0E0E0]">
                    <div className="w-full rounded-xl text-white text-[16px] lg:text-[30px] font-bold pl-5 py-2.5 bg-[#631363]">
                      Teams
                    </div>
                    <div className="flex flex-col w-full gap-3 py-2 lg:py-4 px-3 lg:px-6 pt-4">
                      <div className="flex w-full gap-2  justify-between py-1 lg:py-6">
                        <div className=" w-full rounded-xl text-[#6D6D6D] flex items-center text-xs md:text-[16px] lg:text-[30px] font-bold pl-0 lg:pl-14 ">
                          12 Teams
                        </div>
                        <div className="w-full  gap-2 flex justify-between items-end text-right">
                          <div className="flex relative w-full h-[40px] items-center py-1 lg:py-6">
                            <input
                              type="text"
                              className="w-[130px] md:w-[200px] lg:w-full h-[40px] pointer-events-auto text-xs lg:text-[22px] lg:h-[50px] bg-[#FFF] text-start pl-10 text-[#6D6D6D] rounded-2xl focus:outline-none"
                              placeholder="Search"
                            />
                            <div className="absolute inset-y-0 -left-1 flex justify-center items-center py-2 px-4">
                              <SearchSvg />
                            </div>
                          </div>
                          <div className="flex gap-1 justify-end items-end w-full pr-0 lg:pr-14   flex-col">
                            {" "}
                            <DialogTrigger asChild>
                              <Button className="bg-[#631363] w-fit lg:h-12 pointer-events-auto text-[#FFFFFF] text-xs md:text-base lg:text-[22px] py-3 font-bold rounded-3xl px-2">
                                + Create Team
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[900px] bg-[#F4F4F4]">
                              <DialogHeader>
                                <DialogTitle className="text-[#6D6D6D] text-[30px]">
                                  {editingTeamIndex !== null
                                    ? "Edit team"
                                    : "Create team"}
                                </DialogTitle>
                              </DialogHeader>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6">
                                <div className="space-y-4">
                                  <div className="flex gap-1 w-full  flex-col">
                                    <Label className="text-[#6D6D6D] text-xs md:text-base lg:text-[22px] pl-1  font-bold">
                                      Team Name
                                    </Label>
                                    <Input
                                      // placeholder="Team name"
                                      value={teamName}
                                      onChange={(e) =>
                                        setTeamName(e.target.value)
                                      }
                                      className="rounded-[10px] lg:rounded-xl h-[32px] lg:h-[48px] bg-[#FFF] lg:bg-white text-[10px] lg:text-[22px]"
                                    />
                                  </div>
                                  {/* <Input className="bg-[#F4F4F4] rounded-lg" /> */}
                                  <div className="flex w-full gap-2 pt-0 lg:pt-4 justify-between">
                                    <div className="text-[#6D6D6D] flex items-center text-xs md:text-sm whitespace-nowrap lg:text-lg pl-1  font-bold">
                                      Add Users
                                    </div>
                                    <div className="flex gap-4">
                                      <div className="relative">
                                        <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                          placeholder="Search users..."
                                          className="rounded-[10px] pl-8 lg:rounded-xl bg-[#FFF] lg:bg-white text-xs lg:text-base"
                                          value={searchQuery}
                                          onChange={(e) =>
                                            setSearchQuery(e.target.value)
                                          }
                                        />
                                      </div>
                                      <Button
                                        variant="outline"
                                        className="w-[30%] text-black font-bold bg-[#40F440]"
                                        onClick={addAllUsers}
                                        disabled={filteredUsers.length === 0}>
                                        Add ({filteredUsers.length})
                                      </Button>
                                    </div>
                                  </div>
                                  <ScrollArea className=" h-[120px] lg:h-[300px] pr-4">
                                    <div className="space-y-2">
                                      {filteredUsers.map((user) => (
                                        <div
                                          key={user.id}
                                          className="flex items-center justify-between bg-[#E0E0E0] rounded-lg border p-2">
                                          <div className="flex items-center gap-2">
                                            <Avatar className="h-8 w-8 font-normal text-[#6D6D6D]">
                                              <AvatarImage src={user.avatar} />
                                              <AvatarFallback>
                                                {user.name
                                                  .split(" ")
                                                  .map((n) => n[0])
                                                  .join("")}
                                              </AvatarFallback>
                                            </Avatar>
                                            <div className="text-sm">
                                              <div className="font-semibold text-[#6D6D6D]">
                                                {user.name}
                                              </div>
                                              <div className="text-muted-foreground font-normal text-[#6D6D6D]">
                                                {user.email}
                                              </div>
                                            </div>
                                          </div>
                                          <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() => addUser(user)}>
                                            <PlusIcon
                                              color="#6D6D6D"
                                              className="h-4 w-4"
                                            />
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  </ScrollArea>
                                </div>
                                <div>
                                  <div className="flex items-center justify-between mb-4">
                                    <div className="text-sm text-muted-foreground font-semibold text-[#6D6D6D]">
                                      SELECTED USERS ({selectedUsers.length})
                                    </div>
                                    {selectedUsers.length > 0 && (
                                      <Button
                                        variant="ghost"
                                        className="text-sm text-[#6D6D6D]"
                                        onClick={() => setSelectedUsers([])}>
                                        Remove all
                                      </Button>
                                    )}
                                  </div>
                                  <ScrollArea className="h-[120px] md:h-[360px] pr-4">
                                    <div className="space-y-2">
                                      {selectedUsers.map((user) => (
                                        <div
                                          key={user.id}
                                          className="flex items-center justify-between bg-[#E0E0E0] rounded-lg border p-2">
                                          <div className="flex items-center gap-2">
                                            <Avatar className="h-8 w-8 text-[#6D6D6D]">
                                              <AvatarImage src={user.avatar} />
                                              <AvatarFallback>
                                                {user.name
                                                  .split(" ")
                                                  .map((n) => n[0])
                                                  .join("")}
                                              </AvatarFallback>
                                            </Avatar>
                                            <div className="text-sm">
                                              <div className="font-semibold text-[#6D6D6D]">
                                                {user.name}
                                              </div>
                                              <div className="text-muted-foreground font-normal text-[#6D6D6D]">
                                                {user.email}
                                              </div>
                                            </div>
                                          </div>
                                          <Button
                                            size="icon"
                                            variant="ghost"
                                            onClick={() => removeUser(user.id)}>
                                            <X
                                              color="#6D6D6D"
                                              className="h-4 w-4"
                                            />
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  </ScrollArea>
                                </div>
                              </div>
                              <div className="flex justify-end gap-2 mt-6 ">
                                <Button
                                  variant="outline"
                                  className="bg-[#BA0416] text-white font-semibold"
                                  onClick={handleOpenChange.bind(null, false)}>
                                  Cancel
                                </Button>
                                <Button
                                  className="bg-[#40F440] text-black font-semibold"
                                  disabled={
                                    !teamName || selectedUsers.length === 0
                                  }
                                  onClick={handleCreateOrUpdate}>
                                  {editingTeamIndex !== null
                                    ? "Update"
                                    : "Create"}
                                </Button>
                              </div>
                            </DialogContent>
                          </div>
                        </div>
                      </div>
                      {/* <div className="w-full px-3 py-2 lg:py-4 flex justify-end">
                      <Button className="bg-[#631363] lg:h-12 text-[#FFFFFF] lg:text-[22px] py-3 font-bold rounded-3xl px-2">
                        + Add Employee
                      </Button>
                    </div> */}
                    </div>
                    <div className=" px-2 lg:px-10">
                      <div className="w-full flex justify-center flex-col px-0 lg:px-12 items-center">
                        <div className="w-full flex justify-center items-center bg-[#631363] h-10 lg:h-16 rounded-t-3xl">
                          <span className="text-[#FFF] flex flex-1 border-r-2 border-[#FFF] h-full items-center justify-center p-1 w-full min-w-[40%] text-xs md:text-base lg:text-[22px] text-center">
                            Team Name
                          </span>
                          <span className="text-[#FFF] flex flex-1 border-r-2 border-[#FFF] h-full items-center justify-center p-1 w-full min-w-[40%] text-xs md:text-base lg:text-[22px] text-center">
                            Users
                          </span>
                          <span className="text-[#FFF] flex flex-1 h-full items-center justify-center p-0.5 w-full text-xs text-center"></span>
                        </div>
                        {isTeam.map((invoice: any, index) => (
                          <div
                            key={invoice.invoice}
                            className="w-full flex justify-center items-center bg-[#E0E0E0] odd:bg-[#FFF] h-10 lg:h-14">
                            <span
                              onClick={() => setTeamUser(true)}
                              className="text-[#6D6D6D] cursor-pointer min-w-[40%] pointer-events-auto flex flex-1 border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-[10px] md:text-base lg:text-[20px] text-center">
                              {invoice.invoice}
                            </span>
                            <span className="text-[#6D6D6D] flex flex-1 min-w-[40%] border-r-2 border-[#CCC] h-full items-center justify-center p-1 w-full text-[10px] md:text-base lg:text-[20px] text-center">
                              {invoice.paymentStatus}
                            </span>
                            <span className="text-[#6D6D6D] cursor-pointer flex flex-1 h-full items-center justify-center p-0.5 w-full text-xs text-center">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    className="h-8 w-8 p-0 pointer-events-auto"
                                    onClick={() => setIsOpen(false)}>
                                    <span className="sr-only">Open menu</span>
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                  className="bg-white cursor-pointer"
                                  align="end">
                                  <DialogTrigger asChild>
                                    <DropdownMenuItem
                                      onSelect={() => handleEdit(index)}>
                                      Edit
                                    </DropdownMenuItem>
                                  </DialogTrigger>
                                  <DropdownMenuItem
                                    onSelect={() => handleDelete(index)}>
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:hidden justify-center mt-10 items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default CreateTeams;
