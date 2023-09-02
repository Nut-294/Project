"use client";
//localhost:3000/pTE4-2
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";
import FormPredict from "@/components/compoTE4/FormPredict";
import { useState } from "react";


export default function page() {
  const [cellname, setCellname] = useState([])

  return (
    <div className="flex">
      <div className="fixed">
        <SideBar />
      </div >
      <div className="ml-72">
      <FormPredict setCellname={setCellname}/>
      </div>
    </div>
  );
}