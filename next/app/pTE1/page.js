"use client";
//http://localhost:3000/pTE1
import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import SideBar from "@/components/compoTE4/Sidebar";
import Search from "@/components/compoTE1/search_enodeB";
import Data from "@/components/compoTE4/bar/Data";
import { BiSearchAlt } from "react-icons/bi";
import { useState,useEffect } from "react";

const MapContent = dynamic(() => import("@/components/compoTE1/MapContent"), {
  ssr: false,
});


export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    // เพิ่มข้อมูลลงใน Session Storage เมื่อหน้าถูกโหลด
    sessionStorage.setItem('pageTE-1', 'true');
  
    // ตรวจสอบข้อมูลจาก Session Storage เมื่อหน้าถูกโหลด
    const loaded = sessionStorage.getItem('pageTE-1');
    if (loaded === 'true') {
      setPageLoaded(true);
    }
  }, []);
  return (
    <div className="flex">
      <div className="">
      <SideBar />
      <Data/>
      </div>
      <div className="relative mt-24 ml-72 ">
        {/* <div className="flex space-x-4 items-center justify-center h-20"> */}
          {/* <input
            type="date"
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></input> */}
         
          <Search/>

          {/* <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute top-2 right-2 focus:outline-none"
            >
              <i className="fas fa-search text-gray-600"></i>
            </button> 
            </div>*/}
          {/* <select className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <select className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="optionA">Option A</option>
            <option value="optionB">Option B</option>
          </select> */}
        {/* </div> */}
        <MapContent />
      </div>
    </div>
  );
}
