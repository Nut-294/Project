"use client"
import React from 'react'
import "leaflet/dist/leaflet.css"
import { Popup, Rectangle } from "react-leaflet";

export default function CellnameRSRQ({ grid, cellname }) {
    const radius = 50

    if(!cellname) return null

    const filteredCellname0 = cellname.filter(item => item.Dominant_RSRQ <= -51)
    const filteredCellname1 = cellname.filter(item => item.Dominant_RSRQ >= -50 && item.Dominant_RSRQ < -48);
    const filteredCellname2 = cellname.filter(item => item.Dominant_RSRQ >= -48 && item.Dominant_RSRQ < -46);
    const filteredCellname3 = cellname.filter(item => item.Dominant_RSRQ >= -46 && item.Dominant_RSRQ < -44);
    const filteredCellname4 = cellname.filter(item => item.Dominant_RSRQ >= -44 && item.Dominant_RSRQ < -42);
    const filteredCellname5 = cellname.filter(item => item.Dominant_RSRQ >= -42 && item.Dominant_RSRQ < -40);
    const filteredCellname6 = cellname.filter(item => item.Dominant_RSRQ >= -40 && item.Dominant_RSRQ < -38);
    const filteredCellname7 = cellname.filter(item => item.Dominant_RSRQ >= -38 && item.Dominant_RSRQ < -36);
    const filteredCellname8 = cellname.filter(item => item.Dominant_RSRQ >= -36 && item.Dominant_RSRQ < -34);
    const filteredCellname9 = cellname.filter(item => item.Dominant_RSRQ >= -34 && item.Dominant_RSRQ < -32);
    const filteredCellname10 = cellname.filter(item => item.Dominant_RSRQ >= -32 && item.Dominant_RSRQ < -30);
    const filteredCellname11 = cellname.filter(item => item.Dominant_RSRQ >= -30 && item.Dominant_RSRQ < -28);
    const filteredCellname12 = cellname.filter(item => item.Dominant_RSRQ >= -28 && item.Dominant_RSRQ < -26);
    const filteredCellname13 = cellname.filter(item => item.Dominant_RSRQ >= -26 && item.Dominant_RSRQ < -24);
    const filteredCellname14 = cellname.filter(item => item.Dominant_RSRQ >= -24 && item.Dominant_RSRQ < -22);
    const filteredCellname15 = cellname.filter(item => item.Dominant_RSRQ >= -22 && item.Dominant_RSRQ < -20);
    const filteredCellname16 = cellname.filter(item => item.Dominant_RSRQ >= -20 && item.Dominant_RSRQ < -18);
    const filteredCellname17 = cellname.filter(item => item.Dominant_RSRQ >= -18 && item.Dominant_RSRQ < -16);
    const filteredCellname18 = cellname.filter(item => item.Dominant_RSRQ >= -16 && item.Dominant_RSRQ < -14);
    const filteredCellname19 = cellname.filter(item => item.Dominant_RSRQ >= -14 && item.Dominant_RSRQ < -12);
    const filteredCellname20 = cellname.filter(item => item.Dominant_RSRQ >= -12 && item.Dominant_RSRQ < -10);
    const filteredCellname21 = cellname.filter(item => item.Dominant_RSRQ >= -10 && item.Dominant_RSRQ < -8);
    const filteredCellname22 = cellname.filter(item => item.Dominant_RSRQ >= -8 && item.Dominant_RSRQ < -6);
    const filteredCellname23 = cellname.filter(item => item.Dominant_RSRQ >= -6 && item.Dominant_RSRQ < -4);
    const filteredCellname24 = cellname.filter(item => item.Dominant_RSRQ >= -4 && item.Dominant_RSRQ < -2);
    const filteredCellname25 = cellname.filter(item => item.Dominant_RSRQ >= -2 && item.Dominant_RSRQ < -0);
    const filteredCellname26 = cellname.filter(item => item.Dominant_RSRQ >= -0);

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