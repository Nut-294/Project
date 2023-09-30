"use client";
//localhost:3000/pTE3-1
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";
import Antenna from "@/components/compoTE4/bar/Anten";
import { useState, useEffect } from "react";
import Polar from "@/components/compoTE3/Polar" 
export default function page() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    // เพิ่มข้อมูลลงใน Session Storage เมื่อหน้าถูกโหลด
    sessionStorage.setItem("pageTE3-1", "true");

    // ตรวจสอบข้อมูลจาก Session Storage เมื่อหน้าถูกโหลด
    const loaded = sessionStorage.getItem("pageTE3-1");
    if (loaded === "true") {
      setPageLoaded(true);
    }
  }, []);
  return (
    <div className="flex ">
      <div className="flex bg-green-100 z-40">
        <SideBar />
        <Antenna />
      </div>
      <div className="ml-40 mt-32">
        <Polar />
      </div>
    </div>
  );
}
