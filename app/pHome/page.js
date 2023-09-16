"use client";
//localhost:3000/pHome
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";

export default function page() {
  return (
    <div className="flex">
      <div className="fixed">
        <SideBar/>
      </div>
      <div className="ml-40 text-slate-700 font-semibold mt-24 w-5/6">
        <h1 className="font-bold text-5xl">Getting Started</h1>
      <div className="border-2 border-slate-400 text-3xl mb-4 p-6 rounded-md"> Data Visualization Y4</div>
      <div className="border-2 border-slate-400 text-3xl mb-4 p-6 rounded-md"> Quality Prediction</div>
      <div className="border-2 border-slate-400 text-3xl mb-4 p-6 rounded-md"> Antenna Catalog</div>
      <div className="border-2 border-slate-400 text-3xl mb-4 p-6 rounded-md">Data Visualization Y1</div>
      </div>
      <img
        src="cat.jpg" // ระบุเส้นทางรูปภาพที่ต้องการแสดง
        alt=""
        className="mt-44 w-96 h-96 ml-1"
      />
    </div>
  );
}
