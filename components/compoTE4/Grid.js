"use client"
import React from 'react'
import "leaflet/dist/leaflet.css"
import { Popup, Rectangle } from "react-leaflet";

export default function Grid({ grid }) {
  const radius = 50

  const filteredGrid0 = grid.filter(item => item.Dominant_RSRP <= -131)
  const filteredGrid1 = grid.filter(item => item.Dominant_RSRP >= -130 && item.Dominant_RSRP < -120); 
  const filteredGrid2 = grid.filter(item => item.Dominant_RSRP >= -120 && item.Dominant_RSRP < -115);  
  const filteredGrid3 = grid.filter(item => item.Dominant_RSRP >= -115 && item.Dominant_RSRP < -110); 
  const filteredGrid4 = grid.filter(item => item.Dominant_RSRP >= -110 && item.Dominant_RSRP < -103); 
  const filteredGrid5 = grid.filter(item => item.Dominant_RSRP >= -103 && item.Dominant_RSRP < -99); 
  const filteredGrid6 = grid.filter(item => item.Dominant_RSRP >= -99 && item.Dominant_RSRP < -95); 
  const filteredGrid7 = grid.filter(item => item.Dominant_RSRP >= -95 && item.Dominant_RSRP < -91); 
  const filteredGrid8 = grid.filter(item => item.Dominant_RSRP >= -91 && item.Dominant_RSRP < -85); 
  const filteredGrid9 = grid.filter(item => item.Dominant_RSRP >= -85 );

  return (
    <div>
      {
        filteredGrid0 && filteredGrid0.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#FF69B4", fillOpacity: "0.5", weight: "0.2", }}
          >
            <Popup>
              <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2><br />
              <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2><br />
              <h2>Time: {item.Time}</h2>
            </Popup>
          </Rectangle>
        )
      }
      {
        filteredGrid1 && filteredGrid1.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#A020F0", fillOpacity: "0.5", weight: "0.2", }}
          >
            <Popup>
              <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2><br />
              <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2><br />
              <h2>Time: {item.Time}</h2>
            </Popup>
          </Rectangle>
        )
      }
      {
        filteredGrid2 && filteredGrid2.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#0000FF", fillOpacity: "0.5", weight: "0.2", }}
          >
            <Popup>
              <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2><br />
              <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2><br />
              <h2>Time: {item.Time}</h2>
            </Popup>
          </Rectangle>
        )
      }
       {
        filteredGrid3 && filteredGrid3.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#00FFFF", fillOpacity: "0.5", weight: "0.2", }}
          >
            <Popup>
              <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2><br />
              <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2><br />
              <h2>Time: {item.Time}</h2>
            </Popup>
          </Rectangle>
        )
      }
       {
        filteredGrid4 && filteredGrid4.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#00FA9A", fillOpacity: "0.5", weight: "0.2", }}
          >
            <Popup>
              <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2><br />
              <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2><br />
              <h2>Time: {item.Time}</h2>
            </Popup>
          </Rectangle>
        )
      }
      {
        filteredGrid5 && filteredGrid5.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#ADFF2F", fillOpacity: "0.5", weight: "0.2", }}
          >
            <Popup>
              <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2><br />
              <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2><br />
              <h2>Time: {item.Time}</h2>
            </Popup>
          </Rectangle>
        )
      }
      {
        filteredGrid6 && filteredGrid6.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#FFFF00", fillOpacity: "0.5", weight: "0.2", }}
          >
            <Popup>
              <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2><br />
              <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2><br />
              <h2>Time: {item.Time}</h2>
            </Popup>
          </Rectangle>
        )
      }
      {
        filteredGrid7 && filteredGrid7.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#FFA500", fillOpacity: "0.5", weight: "0.2", }}
          >
            <Popup>
              <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2><br />
              <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2><br />
              <h2>Time: {item.Time}</h2>
            </Popup>
          </Rectangle>
        )
      }
      {
        filteredGrid8 && filteredGrid8.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#D2691E", fillOpacity: "0.5", weight: "0.2", }}
          >
            <Popup>
              <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2><br />
              <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2><br />
              <h2>Time: {item.Time}</h2>
            </Popup>
          </Rectangle>
        )
      }
      {
        filteredGrid9 && filteredGrid9.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#FF0000", fillOpacity: "0.5", weight: "0.2", }}
          >
            <Popup>
              <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2><br />
              <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2><br />
              <h2>Time: {item.Time}</h2>
            </Popup>
          </Rectangle>
        )
      }
    </div>
  )
}
