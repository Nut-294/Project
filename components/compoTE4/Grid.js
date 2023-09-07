"use client"
import React from 'react'
import "leaflet/dist/leaflet.css"
import { Popup, Rectangle } from "react-leaflet";

export default function Grid({ grid, cellname, dominant }) {
  const radius = 50

  const filteredGrid0 = grid.filter(item => item.Dominant_RSRP <= -121)
  const filteredGrid1 = grid.filter(item => item.Dominant_RSRP >= -120 && item.Dominant_RSRP < -118);
  const filteredGrid2 = grid.filter(item => item.Dominant_RSRP >= -118 && item.Dominant_RSRP < -116);
  const filteredGrid3 = grid.filter(item => item.Dominant_RSRP >= -116 && item.Dominant_RSRP < -114);
  const filteredGrid4 = grid.filter(item => item.Dominant_RSRP >= -114 && item.Dominant_RSRP < -112);
  const filteredGrid5 = grid.filter(item => item.Dominant_RSRP >= -112 && item.Dominant_RSRP < -110);
  const filteredGrid6 = grid.filter(item => item.Dominant_RSRP >= -110 && item.Dominant_RSRP < -108);
  const filteredGrid7 = grid.filter(item => item.Dominant_RSRP >= -108 && item.Dominant_RSRP < -106);
  const filteredGrid8 = grid.filter(item => item.Dominant_RSRP >= -106 && item.Dominant_RSRP < -104);
  const filteredGrid9 = grid.filter(item => item.Dominant_RSRP >= -104 && item.Dominant_RSRP < -102);
  const filteredGrid10 = grid.filter(item => item.Dominant_RSRP >= -102 && item.Dominant_RSRP < -100);
  const filteredGrid11 = grid.filter(item => item.Dominant_RSRP >= -100 && item.Dominant_RSRP < -98);
  const filteredGrid12 = grid.filter(item => item.Dominant_RSRP >= -98 && item.Dominant_RSRP < -96);
  const filteredGrid13 = grid.filter(item => item.Dominant_RSRP >= -96 && item.Dominant_RSRP < -94);
  const filteredGrid14 = grid.filter(item => item.Dominant_RSRP >= -94 && item.Dominant_RSRP < -92);
  const filteredGrid15 = grid.filter(item => item.Dominant_RSRP >= -92 && item.Dominant_RSRP < -90);
  const filteredGrid16 = grid.filter(item => item.Dominant_RSRP >= -90 && item.Dominant_RSRP < -88);
  const filteredGrid17 = grid.filter(item => item.Dominant_RSRP >= -88 && item.Dominant_RSRP < -86);
  const filteredGrid18 = grid.filter(item => item.Dominant_RSRP >= -86 && item.Dominant_RSRP < -84);
  const filteredGrid19 = grid.filter(item => item.Dominant_RSRP >= -84 && item.Dominant_RSRP < -82);
  const filteredGrid20 = grid.filter(item => item.Dominant_RSRP >= -82 && item.Dominant_RSRP < -80);
  const filteredGrid21 = grid.filter(item => item.Dominant_RSRP >= -80 && item.Dominant_RSRP < -78);
  const filteredGrid22 = grid.filter(item => item.Dominant_RSRP >= -78 && item.Dominant_RSRP < -76);
  const filteredGrid23 = grid.filter(item => item.Dominant_RSRP >= -76 && item.Dominant_RSRP < -74);
  const filteredGrid24 = grid.filter(item => item.Dominant_RSRP >= -74 && item.Dominant_RSRP < -72);
  const filteredGrid25 = grid.filter(item => item.Dominant_RSRP >= -72 && item.Dominant_RSRP < -70);
  const filteredGrid26 = grid.filter(item => item.Dominant_RSRP >= -70);

  return (
    <div>
      {
          grid && !cellname || cellname === undefined 
          ? (
            <div>
              (
              {
                grid && filteredGrid0 && filteredGrid0.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#cc2527", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid1 && filteredGrid1.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#ff1902", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid2 && filteredGrid2.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#ff2e03", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid3 && filteredGrid3.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#ff4606", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid4 && filteredGrid4.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#ff5700", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid5 && filteredGrid5.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#fe7000", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid6 && filteredGrid6.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#ff8604", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid7 && filteredGrid7.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#ffa001", fillOpacity: "0.6", weight: "0.2", }}
                  >
                   <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid8 && filteredGrid8.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#ffb504", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid9 && filteredGrid9.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#fecb00", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid10 && filteredGrid10.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#ffdb01", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid11 && filteredGrid11.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#feec02", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid12 && filteredGrid12.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#fff500", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid13 && filteredGrid13.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#feff03", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid14 && filteredGrid14.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#f5ff01", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid15 && filteredGrid15.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#edfd00", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid16 && filteredGrid16.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#dafd01", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid17 && filteredGrid17.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#cdfe02", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid18 && filteredGrid18.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#b7fe00", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid19 && filteredGrid19.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#a2fb01", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid20 && filteredGrid20.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#91fe02", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid21 && filteredGrid21.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#7cff04", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid22 && filteredGrid22.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#5efd01", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid23 && filteredGrid23.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#44fe05", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid24 && filteredGrid24.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#30ff01", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                filteredGrid25 && filteredGrid25.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#17fc00", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              {
                grid && filteredGrid26 && filteredGrid26.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "#05f703", fillOpacity: "0.6", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
              )
            </div>
          )
          : (
            <div>
              {
                grid && grid.map((item, index) =>
                  <Rectangle
                    key={index}
                    bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                    pathOptions={{ fillColor: "gray", fillOpacity: "0.4", weight: "0.2", }}
                  >
                    <Popup>
                      <h2>Dominant_RSRP: {item.Dominant_RSRP} </h2>
                      <h2>id: {item.id} </h2>
                    </Popup>
                  </Rectangle>
                )
              }
            </div>
          )
      }
    </div>
  )
}
