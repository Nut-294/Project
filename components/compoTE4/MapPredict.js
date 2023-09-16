"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  Rectangle,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { FloatButton } from "antd";
import { ZoomInOutlined } from "@ant-design/icons";
import L from "leaflet";

import GridPredict from "./GridPredict";
import GridPredictSelect from "./GridPredictSelect";


export default function MapPredict({ pageData }) {
  const [groupData, setGroupData] = useState([])
  const iconUrl = "Pole.png";
  const mapRef = useRef(null)

  console.log("รวมข้อมูลทั้งหมด", pageData)

  let firstItem = null; // กำหนดตัวแปร firstItem ด้านนอก
  if (pageData && pageData.length > 0) {
    firstItem = pageData[0]; // เลือกข้อมูลจากตัวแรกใน Array
  }

  const flyto = (LATITUDE_WGS84, LONGITUDE_WGS84) => {
    if (mapRef.current) {
      mapRef.current.flyTo([LATITUDE_WGS84, LONGITUDE_WGS84], 15);
    }
  };

  const groupedData = pageData.flat().reduce((acc, cur) => {
    const { Cell_Name } = cur;
    acc[Cell_Name] = acc[Cell_Name] || [];
    acc[Cell_Name].push(cur);
    return acc;
  }, {});

  const handleSelect = (event) => {
    const selectedCellName = event.target.value;
    const selectedData = groupedData[selectedCellName]; // เลือกข้อมูลของ cell ที่ถูกเลือก
    setGroupData(selectedData)
    // ทำสิ่งที่คุณต้องการกับข้อมูลที่ถูกเลือก

  };
  console.log("Selected Cell Data:", groupData); //ข้อมูลที่มากกว่า 1 ตัวเอามา Group
  console.log("ข้อมูลที่ถูกจัดกลุ่ม", groupedData); //ข้อมูลท 1 ตัวเอามา Group




  return (
    <div className="text-white">
      {
        pageData.length > 1 && Object.keys(groupedData).length > 0 ? (
          <div className="mr-5 mt-1">
            <label className="text-white">Select Cell Name</label>
            <div className="flex text-black bg-white h-12 w-48 rounded-md outline-0">
              <i className="mt-3 text-l mx-4">
                <select className="outline-0" onChange={handleSelect} defaultValue="default">
                  <option disabled value="default">Select Cell Name</option>
                  {Object.keys(groupedData).map((cellName) => (
                    <option key={cellName} value={cellName}>
                      {cellName}
                    </option>
                  ))}
                </select>
              </i>
            </div>
          </div>
        ) : null
      }
      <MapContainer
        className="mt-8"
        style={{ height: "500px", width: "1200px", zIndex: "1" }}
        center={[13, 100]}
        zoom={8}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          pageData && firstItem.map((item) => (
            <Marker
              eventHandlers={{ click: () => flyto(item.LATITUDE_WGS84, item.LONGITUDE_WGS84) }}
              key={item.id}
              icon={L.icon({ iconUrl, iconSize: [60, 50] })}
              position={[item.LATITUDE_WGS84, item.LONGITUDE_WGS84]}
            >
              {/* <Popup>
                {item.eNodeB_Name}
              </Popup> */}
            </Marker>
          ))
        }
        {
          pageData.length === 1
            ? (
              <div>
                <GridPredict groupedData={groupedData} />
              </div>
            )
            : null
        }
        {
          pageData.length > 1
            ? (
              <div>
                <GridPredictSelect groupData={groupData} />
              </div>
            )
            : null
        }
      </MapContainer>
    </div>
  );
}
