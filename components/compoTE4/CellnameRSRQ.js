"use client"
import React from 'react'
import "leaflet/dist/leaflet.css"
import { Popup, Rectangle } from "react-leaflet";

export default function CellnameRSRQ({ grid, cellname }) {
    const radius = 50

    if(!cellname) return null

    const filteredCellname0 = cellname.filter(item => item.Dominant_RSRQ <= -121)
    const filteredCellname1 = cellname.filter(item => item.Dominant_RSRQ >= -120 && item.Dominant_RSRQ < -118);
    const filteredCellname2 = cellname.filter(item => item.Dominant_RSRQ >= -118 && item.Dominant_RSRQ < -116);
    const filteredCellname3 = cellname.filter(item => item.Dominant_RSRQ >= -116 && item.Dominant_RSRQ < -114);
    const filteredCellname4 = cellname.filter(item => item.Dominant_RSRQ >= -114 && item.Dominant_RSRQ < -112);
    const filteredCellname5 = cellname.filter(item => item.Dominant_RSRQ >= -112 && item.Dominant_RSRQ < -110);
    const filteredCellname6 = cellname.filter(item => item.Dominant_RSRQ >= -110 && item.Dominant_RSRQ < -108);
    const filteredCellname7 = cellname.filter(item => item.Dominant_RSRQ >= -108 && item.Dominant_RSRQ < -106);
    const filteredCellname8 = cellname.filter(item => item.Dominant_RSRQ >= -106 && item.Dominant_RSRQ < -104);
    const filteredCellname9 = cellname.filter(item => item.Dominant_RSRQ >= -104 && item.Dominant_RSRQ < -102);
    const filteredCellname10 = cellname.filter(item => item.Dominant_RSRQ >= -102 && item.Dominant_RSRQ < -100);
    const filteredCellname11 = cellname.filter(item => item.Dominant_RSRQ >= -100 && item.Dominant_RSRQ < -98);
    const filteredCellname12 = cellname.filter(item => item.Dominant_RSRQ >= -98 && item.Dominant_RSRQ < -96);
    const filteredCellname13 = cellname.filter(item => item.Dominant_RSRQ >= -96 && item.Dominant_RSRQ < -94);
    const filteredCellname14 = cellname.filter(item => item.Dominant_RSRQ >= -94 && item.Dominant_RSRQ < -92);
    const filteredCellname15 = cellname.filter(item => item.Dominant_RSRQ >= -92 && item.Dominant_RSRQ < -90);
    const filteredCellname16 = cellname.filter(item => item.Dominant_RSRQ >= -90 && item.Dominant_RSRQ < -88);
    const filteredCellname17 = cellname.filter(item => item.Dominant_RSRQ >= -88 && item.Dominant_RSRQ < -86);
    const filteredCellname18 = cellname.filter(item => item.Dominant_RSRQ >= -86 && item.Dominant_RSRQ < -84);
    const filteredCellname19 = cellname.filter(item => item.Dominant_RSRQ >= -84 && item.Dominant_RSRQ < -82);
    const filteredCellname20 = cellname.filter(item => item.Dominant_RSRQ >= -82 && item.Dominant_RSRQ < -80);
    const filteredCellname21 = cellname.filter(item => item.Dominant_RSRQ >= -80 && item.Dominant_RSRQ < -78);
    const filteredCellname22 = cellname.filter(item => item.Dominant_RSRQ >= -78 && item.Dominant_RSRQ < -76);
    const filteredCellname23 = cellname.filter(item => item.Dominant_RSRQ >= -76 && item.Dominant_RSRQ < -74);
    const filteredCellname24 = cellname.filter(item => item.Dominant_RSRQ >= -74 && item.Dominant_RSRQ < -72);
    const filteredCellname25 = cellname.filter(item => item.Dominant_RSRQ >= -72 && item.Dominant_RSRQ < -70);
    const filteredCellname26 = cellname.filter(item => item.Dominant_RSRQ >= -70);

    return (
        <div>
            {
                cellname 
                    ? (
                        <div>
                            (
                            {
                                cellname && filteredCellname0 && filteredCellname0.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#cc2527", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname1 && filteredCellname1.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#ff1902", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname2 && filteredCellname2.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#ff2e03", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname3 && filteredCellname3.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#ff4606", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname4 && filteredCellname4.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#ff5700", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname5 && filteredCellname5.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#fe7000", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname6 && filteredCellname6.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#ff8604", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname7 && filteredCellname7.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#ffa001", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname8 && filteredCellname8.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#ffb504", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname9 && filteredCellname9.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#fecb00", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname10 && filteredCellname10.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#ffdb01", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname11 && filteredCellname11.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#feec02", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                       <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname12 && filteredCellname12.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#fff500", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname13 && filteredCellname13.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#feff03", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname14 && filteredCellname14.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#f5ff01", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname15 && filteredCellname15.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#edfd00", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname16 && filteredCellname16.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#dafd01", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname17 && filteredCellname17.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#cdfe02", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname18 && filteredCellname18.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#b7fe00", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                       <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname19 && filteredCellname19.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#a2fb01", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname20 && filteredCellname20.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#91fe02", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname21 && filteredCellname21.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#7cff04", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname22 && filteredCellname22.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#5efd01", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname23 && filteredCellname23.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#44fe05", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname24 && filteredCellname24.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#30ff01", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname25 && filteredCellname25.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#17fc00", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )
                            }
                            {
                                cellname && filteredCellname26 && filteredCellname26.map((item, index) =>
                                    <Rectangle
                                        key={index}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: "#05f703", fillOpacity: "0.6", weight: "0.2", }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ} </h2>
                                        </Popup>
                                    </Rectangle>
                                )}
                        </div>
                    )
                    : null
            }
        </div>
    )
}