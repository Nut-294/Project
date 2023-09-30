import React from 'react'
import dynamic from "next/dynamic";
const Plot = dynamic(()=>{return import("react-plotly.js")},{ssr:false})
export default function Polar() {
  return (
    <Plot data={[
      {
        type: "scatterpolar",
        mode: "lines+markers",
        r: [1,2,5],
        theta: [0,90,180,360,0],
        line: {
          color: "#ff66ab"
        },
        marker: {
          color: "#8090c7",
        },
     }
  ]}
  layout={{ width: 1200, height: 600, title: 'A Polar Plot' }}
  />
  )
}
