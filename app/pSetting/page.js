"use client";
//localhost:3000/pTE3-1
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";
import Setting from "@/components/compoTE4/bar/Setting";
import { useState,useEffect } from "react";
export default function page() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    // เพิ่มข้อมูลลงใน Session Storage เมื่อหน้าถูกโหลด
    sessionStorage.setItem('pageSetting', 'true');
  
    // ตรวจสอบข้อมูลจาก Session Storage เมื่อหน้าถูกโหลด
    const loaded = sessionStorage.getItem('pageSetting');
    if (loaded === 'true') {
      setPageLoaded(true);
    }
  }, []);
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
