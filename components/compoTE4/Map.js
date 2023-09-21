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
import Form from "./Form";
import L from "leaflet";
import Grid from "./Grid";
import Cellname from "./Cellname";
import GridRSRQ from "./GridRSRQ";
import CellnameRSRQ from "./CellnameRSRQ";
import LayerMap from "./LayerMap";

export default function Map() {
  const iconUrl = "Pole.png";

  //ข้อมูล site 1 ต้น
  const [data, setData] = useState([]);
  //ข้อมูล grid ของ site 1 ต้น
  const [grid, setGrid] = useState([]);
  //ข้อมูล cellName
  const [cellname, setCellname] = useState([]);
  //ข้อมูล Dominant RSRP, RSRQ
  const [dominant, setDominant] = useState([]);

  const [showTable, setShowTable] = useState(false);
  const [slideAnimation, setSlideAnimation] = useState(false);

  const mapRef = useRef(null);

  function toggleTable() {
    setShowTable(!showTable);
    setSlideAnimation(true);
  }

  const flyto = (LATITUDE_WGS84, LONGITUDE_WGS84) => {
    mapRef.current.flyTo([LATITUDE_WGS84, LONGITUDE_WGS84], 15);
  };

  console.log("ดึงข้อมูล 1 site จากฐานข้อมูล", data);
  console.log("ดึงข้อมูล Grid 1 site จากฐานข้อมูล", grid);
  console.log("ดึงข้อมูล Cellname", cellname);
  console.log("ดึงข้อมูล dominant", dominant);

  return (
    <div>
      <div>
        <Form
          flyto={flyto}
          setData={setData}
          setGrid={setGrid}
          setCellname={setCellname}
          setDominant={setDominant}
        />
      </div>
      <div className="z-20 flex mb-24 ml-20 mt-4 p-2 shadow-inner shadow-white border-white border-2 rounded-md bg-gray-700">
        <MapContainer
        className="mt-4 ml-32 mb-4"
          ref={mapRef}
          style={{ height: "500px", width: "910px", zIndex: "1" }}
          center={[13.773481, 100.561079]}
          zoom={30}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data
            ? data.map((item) => (
                <Marker
                  eventHandlers={{
                    click: () =>
                      flyto(item.LATITUDE_WGS84, item.LONGITUDE_WGS84),
                  }}
                  key={item.id}
                  icon={L.icon({ iconUrl, iconSize: [60, 50] })}
                  position={[item.LATITUDE_WGS84, item.LONGITUDE_WGS84]}
                >
                  <Popup>
                    {item.eNodeB_Name} <br />
                    {item.province} <br />
                    {item.district}
                  </Popup>
                </Marker>
              ))
            : null}
          {dominant === "Dominant_RSRP" ? (
            <div>
              <Grid grid={grid} cellname={cellname} dominant={dominant} />
              <Cellname grid={grid} cellname={cellname} />
            </div>
          ) : null}
          {dominant === "Dominant_RSRQ" ? (
            <div>
              <GridRSRQ grid={grid} cellname={cellname} />
              <CellnameRSRQ grid={grid} cellname={cellname} />
            </div>
          ) : null}
          <LayerMap/>
        </MapContainer>

        {/* แถบสี */}
        <div className="mt-16 ml-16 mr-44">
          <div className="mt-2 mb-2 text-white w-24 h-10 p-2 rounded-md border-2 border-white m">
            -120 dBm
          </div>
          <div className="ml-6 mb-2 bg-gradient-to-b from-red-500 via-yellow-300 to-green-500 h-72 w-10 " />
          <div className=" text-white  w-24 h-10 p-2 rounded-md border-2 border-white ">
            -70 dBm
          </div>
        </div>
      </div>
      <div>
        <FloatButton onClick={toggleTable} className="float-button" />
      </div>

      <div
        className={`content-table z-20 ${showTable ? "visible" : ""} ${
          slideAnimation ? "slide-up" : ""
        }`}
      >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="th text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
              <th scope="col" className="px-6 py-3">
                eNodeB_Name
              </th>
              <th scope="col" className="px-6 py-3">
                LATITUDE_WGS84
              </th>
              <th scope="col" className="px-6 py-3">
                LONGITUDE_WGS84
              </th>
              <th scope="col" className="px-6 py-3">
                province
              </th>
              <th scope="col" className="px-6 py-3">
                district
              </th>
              <th scope="col" className="px-6 py-3">
                Go to
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.Time}</td>
                <td className="px-6 py-4">{item.eNodeB_Name}</td>
                <td className="px-6 py-4">{item.LATITUDE_WGS84}</td>
                <td className="px-6 py-4">{item.LONGITUDE_WGS84}</td>
                <td className="px-6 py-4">{item.province}</td>
                <td className="px-6 py-4">{item.district}</td>
                <td className="px-6 py-4">
                  {"   "}
                  <ZoomInOutlined
                    onClick={() =>
                      flyto(item.LATITUDE_WGS84, item.LONGITUDE_WGS84)
                    }
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
