import React from 'react';
import "leaflet/dist/leaflet.css";
import { Popup, Rectangle } from "react-leaflet";

export default function Cellname({ grid, cellname }) {
    const radius = 50;

    if (!cellname) return null;

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
        if (rsrq <= -51) return 0;
        if (rsrq >= 0) return 26;
        return Math.floor((rsrq + 51) / 2);
    };

    return (
        <div>
            {cellname ? 
                <div>
                    {colors.map((color, index) => (
                        <React.Fragment key={index}>
                            {cellname
                                .filter(item => item.Dominant_RSRQ >= (-51 + index * 2) && item.Dominant_RSRQ < (-49 + index * 2))
                                .map((item, innerIndex) => (
                                    <Rectangle
                                        key={innerIndex}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: colors[getColorIndex(item.Dominant_RSRQ)], fillOpacity: "0.6", weight: "0.2" }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRQ: {item.Dominant_RSRQ}</h2>
                                        </Popup>
                                    </Rectangle>
                                ))}
                        </React.Fragment>
                    ))}
                </div> 
                : null
            }
        </div>
    );
}



// import React from 'react';
// import "leaflet/dist/leaflet.css";
// import { Popup, Rectangle } from "react-leaflet";

// export default function CellnameRSRQ({ grid, cellname }) {
//     const radius = 50;

//     if (!cellname) return null;

//     const colorOptions = [
//         "#cc2527", 
//         "#ff1902", 
//         "#ff2e03", 
//         "#ff4606", 
//         "#ff5700", 
//         "#fe7000", 
//         "#ff8604",
//         "#ffa001", 
//         "#ffb504", 
//         "#fecb00", 
//         "#ffdb01", 
//         "#feec02", 
//         "#fff500", 
//         "#feff03",
//         "#f5ff01", 
//         "#edfd00", 
//         "#dafd01", 
//         "#cdfe02", 
//         "#b7fe00", 
//         "#a2fb01", 
//         "#91fe02",
//         "#7cff04", 
//         "#5efd01", 
//         "#44fe05", 
//         "#30ff01", 
//         "#17fc00", 
//         "#05f703"
//     ];

//     const filteredCellnames = colorOptions.map((color, index) => {
//         const minRSRQ = -100 + index * 2;
//         const maxRSRQ = minRSRQ + 2;
//         const filteredItems = cellname.filter(item => item.Dominant_RSRQ >= minRSRQ && item.Dominant_RSRQ < maxRSRQ);
//         console.log(minRSRQ,maxRSRQ)
//         console.log(filteredItems)

//         return filteredItems.map((item, index) => (
//             <Rectangle
//                 key={index}
//                 bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
//                 pathOptions={{ fillColor: color, fillOpacity: "0.6", weight: "0.2" }}
//             >
//                 <Popup>
//                     <h2>Dominant_RSRQ: {item.Dominant_RSRQ}</h2>
//                 </Popup>
//             </Rectangle>
//         ));
//     });

//     return (
//         <div>
//             {cellname ? filteredCellnames : null}
//         </div>
//     )
// }
