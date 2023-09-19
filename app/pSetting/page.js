"use client";
//localhost:3000/pTE3-1
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";
import Setting from "@/components/compoTE4/bar/Setting";

export default function page() {
  return (
<div className="flex ">
       <div className="flex bg-green-100">
          <SideBar />
          <Setting />
        </div>
        <div className="ml-72 mt-32 text-white">-------------------</div>
    </div>
  );
}
