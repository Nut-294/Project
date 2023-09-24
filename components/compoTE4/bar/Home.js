import React from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  console.log(data)

  return (
    <div className="fixed z-40">
      <div className="w-screen h-20 bg-slate-600 flex  items-center border-2  border-black pl-8 py-8">
        <div className="text-4xl text-white font-medium">
          Home
        </div>
      </div>
    </div>
  );
}
