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


export default function MapPredict({ pageData }) {
  const iconUrl = "Pole.png";
  const mapRef = useRef(null)

  console.log("รวมข้อมูลทั้งหมด",pageData)

  let firstItem = null; // กำหนดตัวแปร firstItem ด้านนอก
  if (pageData && pageData.length > 0) {
    firstItem = pageData[0]; // เลือกข้อมูลจากตัวแรกใน Array
  }

  const flyto = (LATITUDE_WGS84, LONGITUDE_WGS84) => {
    if (mapRef.current) {
      mapRef.current.flyTo([LATITUDE_WGS84, LONGITUDE_WGS84], 15);
    }
  };

  return (
    <div className="text-white">
      <MapContainer
        className="mt-8"
        style={{ height: "500px", width: "1200px", zIndex: "1" }}
        center={[13, 100]}
        zoom={8}
        scrollWheelZoom={true}
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
              <Popup>
                {item.eNodeB_Name}
              </Popup>
            </Marker>
          ))
        }
        {
          pageData
          ? (
            <div>
              <GridPredict pageData={pageData} />
            </div>
          )
          : null
        }
      </MapContainer>
    </div>
  );
}
