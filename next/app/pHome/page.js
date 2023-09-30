"use client";
//localhost:3000/pHome
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";
import Home from "@/components/compoTE4/bar/Home";
import { useState,useEffect } from "react";

export default function page() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    // เพิ่มข้อมูลลงใน Session Storage เมื่อหน้าถูกโหลด
    sessionStorage.setItem('pageHome', 'true');
  
    // ตรวจสอบข้อมูลจาก Session Storage เมื่อหน้าถูกโหลด
    const loaded = sessionStorage.getItem('pageHome');
    if (loaded === 'true') {
      setPageLoaded(true);
    }
  }, []);
  return (
    <div className="flex">
      <div>
        <SideBar/>
        <Home/>
      </div>
      <div className="ml-40 text-white font-semibold mt-28 w-5/6">
        <h1 className="font-bold text-5xl">Getting Started</h1>
      <div className="border-2 border-slate-400 text-3xl mb-4 p-6 rounded-md"> Data Visualization</div>
      <div className="border-2 border-slate-400 text-3xl mb-4 p-6 rounded-md"> Received Signal Strength Prediction</div>
      <div className="border-2 border-slate-400 text-3xl mb-4 p-6 rounded-md"> Antenna Catalog</div>
      <div className="border-2 border-slate-400 text-3xl mb-4 p-6 rounded-md">Data Visualization Year 1</div>
      </div>
      {/* <img
        src="cat.jpg" // ระบุเส้นทางรูปภาพที่ต้องการแสดง
        alt=""
        className="mt-44 w-96 h-96 ml-1"
      /> */}
    </div>
  );
}
