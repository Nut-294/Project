import React from "react";
import { useState,useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Data() {
  const { data } = useSession();
const [isOnline, setIsOnline] = useState(true);

useEffect(() => {
  setIsOnline(data?.user.isOnline || true);
}, [data]);
  return (
    <div className="fixed z-40">
      <div className="w-screen h-20 bg-slate-600 flex  items-center border-2  border-black pl-8 py-8">
        <div className="text-4xl text-white font-medium">
          Data Visualization
        </div>
        <div className="text-white ml-auto">
        {data?.user.firstname}
        
      </div>
      <div className="bg-green-500 w-4 h-4 rounded-full ml-4 mr-8"></div>
      </div>
    </div>
  );
}
