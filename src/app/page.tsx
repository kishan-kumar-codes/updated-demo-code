"use client";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession();

  return (
    <div className="flex justify-between p-4">
      <div>
        {session?.user?.name ? (
          <>
            <h1>Hello, {session?.user?.name}!</h1>
            <p>You are logged in.</p>
          </>
        ) : (
          <p>Please log in to view this page.</p>
        )}
      </div>
      <div>
        {session?.user?.name ? (
          <Button
            variant="outline"
            className="bg-red-500 text-white"
            onClick={() => signOut()}>
            Logout
          </Button>
        ) : (
          <Button
            variant="outline"
            className="bg-red-500 text-white"
            onClick={() => signIn()}>
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
