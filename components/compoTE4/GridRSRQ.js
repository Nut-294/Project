import React from 'react';
import "leaflet/dist/leaflet.css";
import { Popup, Rectangle } from "react-leaflet";

export default function GridRSRQ({ grid, cellname }) {
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

 const getColorIndex = (rsrq) => {
    if (rsrq <= -50) return 0;
    if (rsrq >= 0) return 26;
    return Math.floor((rsrq + 50) / 2);
  };

  const filteredGrid = grid.filter(item => !cellname || cellname === undefined || (item.Dominant_RSRQ >= -50 && item.Dominant_RSRQ <= 0));

  return (
    <div>
      {grid && (!cellname || cellname === undefined) ? (
        <div>
          {grid && filteredGrid.map((item, index) => (
            <Rectangle
              key={index}
              bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
              pathOptions={{
                fillColor: colors[getColorIndex(item.Dominant_RSRQ)],
                fillOpacity: "0.6",
                weight: "0.2",
              }}
            >
              <Popup>
                <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
              </Popup>
            </Rectangle>
          ))}
        </div>
      ) : (
        <div>
          {grid && grid.map((item, index) => (
            <Rectangle
              key={index}
              bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
              pathOptions={{
                fillColor: "gray",
                fillOpacity: "0.25",
                weight: "0.2",
              }}
            >
              <Popup>
                <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
              </Popup>
            </Rectangle>
          ))}
        </div>
      )}
    </div>
  );
}