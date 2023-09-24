"use client";
//localhost:3000/pTE3-2
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";
import Y3 from "@/components/compoTE4/bar/Y3";
import { useState,useEffect } from "react";
export default function page() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    // เพิ่มข้อมูลลงใน Session Storage เมื่อหน้าถูกโหลด
    sessionStorage.setItem('pageTE3-2', 'true');
  
    // ตรวจสอบข้อมูลจาก Session Storage เมื่อหน้าถูกโหลด
    const loaded = sessionStorage.getItem('pageTE3-2');
    if (loaded === 'true') {
      setPageLoaded(true);
    }
  }, []);
  return (
    <div className="flex ">
       <div className="flex bg-green-100">
          <SideBar />
          <Y3/>
        </div>
        <div className="ml-72 mt-32 text-white">หน้าน้องปี 3</div>
    </div>
  );
}
