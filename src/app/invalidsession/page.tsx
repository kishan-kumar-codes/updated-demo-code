"use client";

import { signOut } from "next-auth/react";
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/sooner";
import { toast } from "sonner";

export default function Page() {
  useEffect(() => {
    signOut({
      callbackUrl: "/sign-in",
    });
    toast("Too many devices connected. Logging out!", {
      action: {
        label: "Close",
        onClick: () => toast.dismiss(),
      },
    });
  }, []);
  return (
    <div>
      <Toaster />
    </div>
  );
}
