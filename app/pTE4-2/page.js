"use client";
//localhost:3000/pTE4-2
import React from "react";
import SideBar from "@/components/compoTE4/Sidebar";
import FormPredict from "@/components/compoTE4/FormPredict";
import Predict from "@/components/compoTE4/Predict";
import { useState } from "react";
import MapPredict from "@/components/compoTE4/MapPredict";


export default function page() {
  const [cellname, setCellname] = useState([])
  const [combinedData, setCombinedData] = useState([])

  const [pageData, setPageData] = useState([])

  const handleDataReady = (mergedData) => {
    setPageData(mergedData);
  };

  return (
    <div className="flex">
      <div className="fixed">
        <SideBar />
      </div >
      <div className="ml-72 mb-96">
        <FormPredict setCellname={setCellname} setCombinedData={setCombinedData} />
        <Predict combinedData={combinedData} onDataReady={handleDataReady} />
        {pageData.length > 0 && <MapPredict pageData={pageData} />}
      </div>
    </div>
  );
}