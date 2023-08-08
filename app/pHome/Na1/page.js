"use client";
//localhost:3000/pHome/Na1
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";

export default function page() {
  return (
    <div className="flex">
      <SideBar />
      <div className="text-white">หน้า Home หน้าย่อยที่ 1</div>
    </div>
  );
}

