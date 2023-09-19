"use client";
//localhost:3000/pTE3-1
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";
import More from "@/components/compoTE4/bar/More";

export default function page() {
  return (
<div className="flex ">
       <div className="flex bg-green-100">
          <SideBar />
          <More />
        </div>
        <div className="ml-72 mt-32 text-white">More</div>
    </div>
  );
}
