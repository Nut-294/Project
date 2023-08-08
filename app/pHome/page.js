"use client";
//localhost:3000/pHome
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";

export default function page() {
  return (
    <div className="flex">
      <SideBar />
      <div className="text-white">หน้า Home</div>
    </div>
  );
}
