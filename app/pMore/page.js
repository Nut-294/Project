"use client";
//localhost:3000/pTE3-1
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";
import More from "@/components/compoTE4/bar/More";
import { useState,useEffect } from "react";
export default function page() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    // เพิ่มข้อมูลลงใน Session Storage เมื่อหน้าถูกโหลด
    sessionStorage.setItem('pageMore', 'true');
  
    // ตรวจสอบข้อมูลจาก Session Storage เมื่อหน้าถูกโหลด
    const loaded = sessionStorage.getItem('pageMore');
    if (loaded === 'true') {
      setPageLoaded(true);
    }
  }, []);
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
