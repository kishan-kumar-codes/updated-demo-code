"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import { Send } from "lucide-react";
import { Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
export default function WebChat() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const messages = [
    { id: 1, text: "Hello!", time: "05:25", sender: "other" },
    { id: 2, text: "Hi!", time: "05:25", sender: "me" },
    { id: 3, text: "How are you?", time: "05:25", sender: "other" },
    { id: 4, text: "I am good, thanks!", time: "05:25", sender: "me" },
    { id: 5, text: "What about you?", time: "05:26", sender: "me" },
    {
      id: 6,
      text: "I am doing well too, thanks for asking!",
      time: "05:27",
      sender: "other",
    },
    {
      id: 7,
      text: "Do you have any plans for today?",
      time: "05:28",
      sender: "me",
    },
    {
      id: 8,
      text: "Not much, just some work and maybe a movie later.",
      time: "05:29",
      sender: "other",
    },
    {
      id: 9,
      text: "That sounds nice! Any movie in particular?",
      time: "05:30",
      sender: "me",
    },
    {
      id: 10,
      text: "I'm thinking of watching the new Marvel movie.",
      time: "05:31",
      sender: "other",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-col h-screen bg-[#FFFFFF]  w-full md:max-w-[1280px]">
        <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
          <Button className="px-0 py-0 h-fit" variant="ghost">
            <Link href="/chats">
              {" "}
              <ChevronLeft size={32} />
            </Link>
          </Button>
          <div className="relative w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="absolute top-0 right-0 block w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
        </header>
        <main className="flex flex-col flex-grow p-4 overflow-auto">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "me" ? "justify-end" : "justify-start"
              } mb-2`}>
              <div className="flex flex-col">
                <div
                  className={`px-4 py-2 rounded-xl ${
                    message.sender === "me"
                      ? "bg-[#C3CBDD] rounded-tr-none"
                      : "bg-[#E0E0E0] rounded-tl-none"
                  } max-w-xs`}>
                  <p>{message.text}</p>
                </div>
                <div className="block text-xs pr-2 py-1 text-right">
                  {message.time}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </main>
        <div className="flex relative items-center p-4 bg-white">
          <Input
            type="text"
            placeholder="Start a conversation"
            className="flex-grow p-4 h-14 border outline-none border-gray-300 rounded-full focus:outline-none"
          />
          <div className="flex absolute right-6">
            <Button className="px-0 py-0 h-fit" variant="ghost">
              <Smile size={24} color="#E0E0E0" className="mr-2" />
            </Button>
            <Button className="px-0 py-0 pr-2 h-fit" variant="ghost">
              <Send color="#1976D3" size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
