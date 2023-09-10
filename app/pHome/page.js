"use client";
//localhost:3000/pHome
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";

export default function page() {
  return (
    <div className="flex">
      <SideBar />
      <img
        src="cat.jpg" // ระบุเส้นทางรูปภาพที่ต้องการแสดง
        alt=""
        className="ml-96 mt-40 w-96 h-96"
      />
    </div>
  );
}
