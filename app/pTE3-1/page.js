"use client";
//localhost:3000/pTE3-1
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";
import Antenna from "@/components/compoTE4/bar/Anten";

export default function page() {
  return (
<div className="flex ">
       <div className="flex bg-green-100">
          <SideBar />
          <Antenna />
        </div>
        <div className="ml-72 mt-32 text-white">หน้าน้องปี 3</div>
    </div>
  );
}
