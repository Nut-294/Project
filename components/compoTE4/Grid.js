"use client"
import React from 'react'
import "leaflet/dist/leaflet.css"
import { Popup, Rectangle } from "react-leaflet";

export default function Grid({ grid }) {
  const radius = 50

  const filteredGrid0 = grid.filter(item => item.Dominant_RSRP <= -121) //#89f68d
  const filteredGrid1 = grid.filter(item => item.Dominant_RSRP >= -120 && item.Dominant_RSRP < -118); //#84fc80
  const filteredGrid2 = grid.filter(item => item.Dominant_RSRP >= -118 && item.Dominant_RSRP < -116); //#8dfd7f
  const filteredGrid3 = grid.filter(item => item.Dominant_RSRP >= -116 && item.Dominant_RSRP < -114); //#97fd7e
  const filteredGrid4 = grid.filter(item => item.Dominant_RSRP >= -114 && item.Dominant_RSRP < -112); //#a3fe7f
  const filteredGrid5 = grid.filter(item => item.Dominant_RSRP >= -112 && item.Dominant_RSRP < -110); //#aafd7d
  const filteredGrid6 = grid.filter(item => item.Dominant_RSRP >= -110 && item.Dominant_RSRP < -108); //#b6fd7d
  const filteredGrid7 = grid.filter(item => item.Dominant_RSRP >= -108 && item.Dominant_RSRP < -106); //#c0fd7e
  const filteredGrid8 = grid.filter(item => item.Dominant_RSRP >= -106 && item.Dominant_RSRP < -104); //#cbfc7e
  const filteredGrid9 = grid.filter(item => item.Dominant_RSRP >= -104 && item.Dominant_RSRP < -102); //#d6fd80
  const filteredGrid10 = grid.filter(item => item.Dominant_RSRP >= -102 && item.Dominant_RSRP < -100); //#e0fd7f
  const filteredGrid11 = grid.filter(item => item.Dominant_RSRP >= -100 && item.Dominant_RSRP < -98); //#ecfc7f
  const filteredGrid12 = grid.filter(item => item.Dominant_RSRP >= -98 && item.Dominant_RSRP < -96); //#f2fd7d
  const filteredGrid13 = grid.filter(item => item.Dominant_RSRP >= -96 && item.Dominant_RSRP < -94); //#fbf97e
  const filteredGrid14 = grid.filter(item => item.Dominant_RSRP >= -94 && item.Dominant_RSRP < -92); //#fdf27f
  const filteredGrid15 = grid.filter(item => item.Dominant_RSRP >= -92 && item.Dominant_RSRP < -90); //#fee77d
  const filteredGrid16 = grid.filter(item => item.Dominant_RSRP >= -90 && item.Dominant_RSRP < -88); //#fddf7f
  const filteredGrid17 = grid.filter(item => item.Dominant_RSRP >= -88 && item.Dominant_RSRP < -86); //#fdd57f
  const filteredGrid18 = grid.filter(item => item.Dominant_RSRP >= -86 && item.Dominant_RSRP < -84); //#fbca7e
  const filteredGrid19 = grid.filter(item => item.Dominant_RSRP >= -84 && item.Dominant_RSRP < -82); //#fbc07e
  const filteredGrid20 = grid.filter(item => item.Dominant_RSRP >= -82 && item.Dominant_RSRP < -80); //#fcbf7e
  const filteredGrid21 = grid.filter(item => item.Dominant_RSRP >= -80 && item.Dominant_RSRP < -78); //#feb080
  const filteredGrid22 = grid.filter(item => item.Dominant_RSRP >= -78 && item.Dominant_RSRP < -76); //#fca47e
  const filteredGrid23 = grid.filter(item => item.Dominant_RSRP >= -76 && item.Dominant_RSRP < -74); //#fc9b7e
  const filteredGrid24 = grid.filter(item => item.Dominant_RSRP >= -74 && item.Dominant_RSRP < -72); //#fc917d
  const filteredGrid25 = grid.filter(item => item.Dominant_RSRP >= -72 && item.Dominant_RSRP < -70); //#fc867c
  const filteredGrid26 = grid.filter(item => item.Dominant_RSRP >= -70);//#ef847e

  return (
    <div>
      {
        filteredGrid0 && filteredGrid0.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#cc2527", fillOpacity: "0.6", weight: "0.2", }}
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
            pathOptions={{ fillColor: "#ff1902", fillOpacity: "0.6", weight: "0.2", }}
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
            pathOptions={{ fillColor: "#ff2e03", fillOpacity: "0.6", weight: "0.2", }}
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
            pathOptions={{ fillColor: "#ff4606", fillOpacity: "0.6", weight: "0.2", }}
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
            pathOptions={{ fillColor: "#ff5700", fillOpacity: "0.6", weight: "0.2", }}
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
            pathOptions={{ fillColor: "#fe7000", fillOpacity: "0.6", weight: "0.2", }}
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
            pathOptions={{ fillColor: "#ff8604", fillOpacity: "0.6", weight: "0.2", }}
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
            pathOptions={{ fillColor: "#ffa001", fillOpacity: "0.6", weight: "0.2", }}
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
            pathOptions={{ fillColor: "#ffb504", fillOpacity: "0.6", weight: "0.2", }}
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
            pathOptions={{ fillColor: "#fecb00", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid10 && filteredGrid10.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#ffdb01", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid11 && filteredGrid11.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#feec02", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid12 && filteredGrid12.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#fff500", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid13 && filteredGrid13.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#feff03", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid14 && filteredGrid14.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#f5ff01", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid15 && filteredGrid15.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#edfd00", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid16 && filteredGrid16.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#dafd01", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid17 && filteredGrid17.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#cdfe02", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid18 && filteredGrid18.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#b7fe00", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid19 && filteredGrid19.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#a2fb01", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid20 && filteredGrid20.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#91fe02", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid21 && filteredGrid21.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#7cff04", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid22 && filteredGrid22.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#5efd01", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid23 && filteredGrid23.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#44fe05", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid24 && filteredGrid24.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#30ff01", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid25 && filteredGrid25.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#17fc00", fillOpacity: "0.6", weight: "0.2", }}
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
        filteredGrid26 && filteredGrid26.map((item, index) =>
          <Rectangle
            key={index}
            bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
            pathOptions={{ fillColor: "#05f703", fillOpacity: "0.6", weight: "0.2", }}
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
