import React from 'react';
import "leaflet/dist/leaflet.css";
import { Popup, Rectangle } from "react-leaflet";

export default function GridPredictMulti({selectedGroupData}) {
  const radius = 50;

  const colors = [
    "#cc2527", 
    "#ff1902", 
    "#ff2e03", 
    "#ff4606", 
    "#ff5700", 
    "#fe7000", 
    "#ff8604",
    "#ffa001", 
    "#ffb504", 
    "#fecb00", 
    "#ffdb01", 
    "#feec02", 
    "#fff500", 
    "#feff03",
    "#f5ff01", 
    "#edfd00", 
    "#dafd01", 
    "#cdfe02", 
    "#b7fe00", 
    "#a2fb01", 
    "#91fe02",
    "#7cff04", 
    "#5efd01", 
    "#44fe05", 
    "#30ff01", 
    "#17fc00", 
    "#05f703"
  ];

  const getColorIndex = (rsrp) => {
    if (rsrp <= -121) return 0;
    if (rsrp >= -70) return 26;
    return Math.floor((rsrp + 121) / 2);
  };
  
  const compareReceivedSignalByCoordinates = () => {
    const comparisonResults = [];
  
    // จัดระเบียบข้อมูลตามพิกัด
    const coordinateData = {};
    Object.keys(selectedGroupData).forEach(cellName => {
      selectedGroupData[cellName].forEach(item => {
        const { Latitude, Longitude, ReceivedSignal } = item;
        const coordinateKey = `${Latitude},${Longitude}`;
  
        if (!coordinateData[coordinateKey]) {
          coordinateData[coordinateKey] = {
            Latitude,
            Longitude,
            maxReceivedSignal: parseFloat(ReceivedSignal),
          };
        } else {
          coordinateData[coordinateKey].maxReceivedSignal = Math.max(
            coordinateData[coordinateKey].maxReceivedSignal,
            parseFloat(ReceivedSignal) 
          );
        }
      });
    });
  
    // แปลง CoordinatData เป็นอาร์เรย์
    Object.values(coordinateData).forEach(({ Latitude, Longitude, maxReceivedSignal }) => {
      comparisonResults.push({
        Latitude,
        Longitude,
        ReceivedSignal: parseFloat(maxReceivedSignal.toFixed(2)) // Ensure ReceivedSignal is a float
      });
    });
  
    return comparisonResults;
  };
  
  const comparisonArray = compareReceivedSignalByCoordinates();
  
  return (
    <div>
      {comparisonArray && comparisonArray.map((item, index) => (
        <div key={index}>
          <Rectangle
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{
              fillColor: colors[getColorIndex(item.ReceivedSignal)],
              fillOpacity: "0.6",
              weight: "0.2",
            }}
          >
            <Popup>
              <h2>ReceivedSignal: {item.ReceivedSignal.toFixed(2)} </h2>
            </Popup>
          </Rectangle>
        </div>
      ))}
    </div>
  );
}