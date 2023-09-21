"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  Popup,
  Rectangle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import GridPredict from "./GridPredict";
import GridPredictSelect from "./GridPredictSelect";
import GridPredictMulti from "./GridPredictMulti";

import { Select } from "antd";
import LayerMap from "./LayerMap";
const { Option } = Select;

export default function MapPredict({ pageData }) {
  const [groupData, setGroupData] = useState([]);
  const [selectedGroupData, setSelectedGroupData] = useState({});

  const iconUrl = "Pole.png";
  const mapRef = useRef(null);

  console.log("รวมข้อมูลทั้งหมด", pageData);

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
    setGroupData(selectedData);
  };

  //กรองข้อมูลที่ถูกจัดกลุ่มโดยเลือกเฉพาะข้อมูลที่มี cellName ตรงกับที่เลือกไว้
  const handleMultiSelect = (selectedCellNames) => {
    const newSelectedGroupData = Object.fromEntries(
      Object.entries(groupedData).filter(([cellName]) =>
        selectedCellNames.includes(cellName)
      )
    );
    setSelectedGroupData(newSelectedGroupData);
  };

  console.log("ข้อมูลที่กดเลือก Select 1 ตัว:", groupData); //ข้อมูลที่มากกว่า 1 ตัวเอามา Group
  console.log("ข้อมูลที่ถูกจัดกลุ่ม:", groupedData); //ข้อมูล 1 ตัวเอามา Group
  console.log("ข้อมูลที่กดเลือกหลายตัว:", selectedGroupData);

  return (
    <div>
      {pageData.length > 1 && Object.keys(groupedData).length > 0 ? (
        <div className="mt-1 justify-center p-2 flex ml-20 mt-4 text-white shadow-inner shadow-white border-white border-2 rounded-md bg-gray-700">
          
          <div>
            <label className="text-white">Select Cell Name</label>
            <div className="flex mr-5 text-black bg-white h-12 w-48 rounded-md outline-0 ">
              <i className="mt-3 text-l mx-4">
                <select
                  className="outline-0"
                  onChange={handleSelect}
                  defaultValue="default"
                >
                  <option disabled value="default">
                    Select Cell Name
                  </option>
                  {Object.keys(groupedData).map((cellName) => (
                    <option key={cellName} value={cellName}>
                      {cellName}
                    </option>
                  ))}
                  <option value="">Clear Cell Name</option>
                </select>
              </i>
            </div>
          </div>

          <div className="text-white mt-0">
            <label className="text-white">Select Cell Name</label>
            <div>
              <i>
                <Select
                  mode="multiple"
                  placeholder="Cell Names"
                  onChange={handleMultiSelect}
                  style={{ width: "100%", fontSize: "17px" }}
                  className="ant-select-selection-placeholder"
                >
                  {Object.keys(groupedData).map((cellName) => (
                    <Option key={cellName} value={cellName}>
                      {cellName}
                    </Option>
                  ))}
                </Select>
              </i>
            </div>
          </div>
        </div>
      ) : null}

      <div className="ml-20 mt-4 shadow-inner shadow-white border-white border-2 rounded-md bg-gray-700">
        <MapContainer
          className="ml-16 m-8"
          style={{ height: "500px", width: "1250px", zIndex: "1" }}
          center={[13, 100]}
          zoom={8}
          scrollWheelZoom={false}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pageData &&
            firstItem.map((item) => (
              <Marker
                eventHandlers={{
                  click: () => flyto(item.LATITUDE_WGS84, item.LONGITUDE_WGS84),
                }}
                key={item.id}
                icon={L.icon({ iconUrl, iconSize: [60, 50] })}
                position={[item.LATITUDE_WGS84, item.LONGITUDE_WGS84]}
              >
                {/* <Popup>
                {item.eNodeB_Name}
              </Popup> */}
              </Marker>
            ))}
          {pageData.length === 1 ? (
            <div>
              <GridPredict groupedData={groupedData} />
            </div>
          ) : null}
          {pageData.length > 1 ? (
            <div>
              <GridPredictSelect groupData={groupData} />
            </div>
          ) : null}
          {Object.keys(selectedGroupData).length > 1 ? (
            <div>
              <GridPredictMulti selectedGroupData={selectedGroupData} />
            </div>
          ) : null}
          <LayerMap/>
        </MapContainer>
      </div>
    </div>
  );
}
