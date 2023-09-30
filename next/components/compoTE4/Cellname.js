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

    const getColorIndex = (rsrp) => {
        if (rsrp <= -121) return 0;
        if (rsrp >= -70) return 26;
        return Math.floor((rsrp + 121) / 2);
    };

    return (
        <div>
            {cellname ? 
                <div>
                    {colors.map((color, index) => (
                        <React.Fragment key={index}>
                            {cellname
                                .filter(item => item.Dominant_RSRP >= (-121 + index * 2) && item.Dominant_RSRP < (-119 + index * 2))
                                .map((item, innerIndex) => (
                                    <Rectangle
                                        key={innerIndex}
                                        bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
                                        pathOptions={{ fillColor: colors[getColorIndex(item.Dominant_RSRP)], fillOpacity: "0.6", weight: "0.2" }}
                                    >
                                        <Popup>
                                            <h2>Dominant_RSRP: {item.Dominant_RSRP}</h2>
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

// export default function Cellname({ grid, cellname }) {
//     const radius = 50;

//     if (!cellname) return null;

//     const colors = [
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

//     const filteredCellnames = colors.map((color, index) => {
//         //แบ่งช่วงเป็นช่วงละ 2 หน่วย
//         const lowerBound = -121 + index * 2; // ค่า RSRP ต่ำสุดของช่วง ตัวอย่าง -121 -119 => -119 -117 => -117 -115
//         const upperBound = lowerBound + 2 ; // ค่า RSRP สูงสุดของช่วง 

//         return (
//             <React.Fragment key={index}>
//                 {
//                     cellname && cellname
//                         .filter(item => item.Dominant_RSRP >= lowerBound && item.Dominant_RSRP < upperBound)
//                         .map((item, innerIndex) => (
//                             <Rectangle
//                                 key={innerIndex}
//                                 bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
//                                 pathOptions={{ fillColor: color, fillOpacity: "0.6", weight: "0.2" }}
//                             >
//                                 <Popup>
//                                     <h2>Dominant_RSRP: {item.Dominant_RSRP}</h2>
//                                 </Popup>
//                             </Rectangle>
//                         ))
//                 }
//             </React.Fragment>
//         );
//     });

//     return (
//         <div>
//             {cellname ? <div>{filteredCellnames}</div> : null}
//         </div>
//     );
// }
