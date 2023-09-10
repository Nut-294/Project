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
export default function MapPredict() {
  const iconUrl = "Pole.png";
  return (
    <div className="text-white">
      <MapContainer
        className="mt-8"
        style={{ height: "500px", width: "1200px", zIndex: "1" }}
        center={[13.773481, 100.561079]}
        zoom={30}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}
