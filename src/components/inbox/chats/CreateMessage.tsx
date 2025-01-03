"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MoreVertical, Paperclip, SmilePlus, Send } from "lucide-react";
import { useState } from "react";

export default function MessagingInterface() {
  const [messageType, setMessageType] = useState("SMS");
  const [message, setMessage] = useState("");

  const messageTypes = ["SMS", "Email", "Webchat", "Internal Note"];

  return (
    <div className="max-w-md lg:max-w-full mx-auto h-[560px] bg-[#F4F4F4] overflow-hidden">
      <Card className="h-[85%] lg:h-full overflow-hidden border-none flex flex-col">
        {/* Header */}
        <div className="flex items-center bg-[#E0E0E0] justify-between p-4 border-b">
          <div className="text-gray-600 text-[20px] font-bold">To:</div>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-4">
          <div className="text-gray-400 text-sm italic">
            Type message here...
          </div>
        </div>

        {/* Message Type Selection */}
        <div className="">
          <div className="flex gap-4 font-bold p-4 text-sm">
            {messageTypes.map((type) => (
              <button
                key={type}
                onClick={() => setMessageType(type)}
                className={`${
                  messageType === type
                    ? "text-[#8C8C8C] font-bold border-b-2 border-[#6D6D6D]"
                    : "text-gray-500"
                } pb-1`}>
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="">
          <div className="flex items-center gap-2 border rounded-full bg-white px-4 py-2">
            <Input
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-0 focus-visible:ring-0 p-0"
            />
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="text-gray-400">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400">
                <SmilePlus className="h-5 w-5" />
              </Button>
              <Button size="icon">
                <Send color="#40F440" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2 pl-2">
            <Button className="bg-[#631363] text-xs font-bold text-white h-8 ">
              Template
            </Button>
            <Button className="bg-[#631363] text-xs font-bold text-white h-8 ">
              Payment
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
