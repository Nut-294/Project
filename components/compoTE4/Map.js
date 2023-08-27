'use client'
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, Marker, TileLayer, Popup, Rectangle, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { list } from "./functions/sitehistorical";

import { FloatButton } from 'antd';
import { ZoomInOutlined } from '@ant-design/icons'
import Search from "./Search";
import Form from "./Form";
import { listgrid } from "./functions/gridhistorical"
import L from "leaflet"
import Grid from "./Grid";

export default function Map() {
  const iconUrl = 'Pole.png'

  //ข้อมูล site 1 ต้น
  const [data, setData] = useState([])
  //ข้อมูล grid ของ site 1 ต้น
  const [grid, setGrid] = useState([])

  const [showTable, setShowTable] = useState(false);
  const [slideAnimation, setSlideAnimation] = useState(false);

  const mapRef = useRef(null)

  function toggleTable() {
    setShowTable(!showTable);
    setSlideAnimation(true);
  };

  const flyto = (LATITUDE_WGS84, LONGITUDE_WGS84) => {
    mapRef.current.flyTo([LATITUDE_WGS84, LONGITUDE_WGS84], 15)
  }

  // console.log("ดึงข้อมูล 1 site จากฐานข้อมูล",data)
  console.log("ดึงข้อมูล Grid 1 site จากฐานข้อมูล",grid)

  return (
    <div className="flex">
      <div className="mr-12">
        <Form flyto={flyto} setData={setData} setGrid={setGrid} />
      </div>
      <div className="mt-12">
        <MapContainer
          ref={mapRef}
          style={{ height: "500px", width: "800px", zIndex: '1' }}
          center={[13.773481, 100.561079]}
          zoom={30}
          scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            data
              ? data.map((item) =>
                <Marker
                  eventHandlers={{ click: () => flyto(item.LATITUDE_WGS84, item.LONGITUDE_WGS84) }}
                  key={item.id}
                  icon={L.icon({ iconUrl, iconSize: [60, 50] })}
                  position={[item.LATITUDE_WGS84, item.LONGITUDE_WGS84]}>
                  <Popup>
                    {item.eNodeB_Name} <br />
                    {item.province} <br />
                    {item.district}
                  </Popup>
                </Marker>
              )
              : null
          }
          <Grid grid={grid}/>
        </MapContainer>
      </div>
      <div>
        <FloatButton onClick={toggleTable} className="float-button" />
      </div>

      <div
        className={`content-table ${showTable ? "visible" : ""} ${slideAnimation ? "slide-up" : ""}`}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="th text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="px-6 py-3" >
                ID
              </th>
              <th scope="col" className="px-6 py-3" >
                Time
              </th>
              <th scope="col" className="px-6 py-3" >
                eNodeB_Name
              </th>
              <th scope="col" className="px-6 py-3" >
                LATITUDE_WGS84
              </th>
              <th scope="col" className="px-6 py-3" >
                LONGITUDE_WGS84
              </th>
              <th scope="col" className="px-6 py-3" >
                province
              </th>
              <th scope="col" className="px-6 py-3" >
                district
              </th>
              <th scope="col" className="px-6 py-3" >
                Go to
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) =>
              <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.id}
                </th>
                <td className="px-6 py-4">
                  {item.Time}
                </td>
                <td className="px-6 py-4">
                  {item.eNodeB_Name}
                </td>
                <td className="px-6 py-4">
                  {item.LATITUDE_WGS84}
                </td>
                <td className="px-6 py-4">
                  {item.LONGITUDE_WGS84}
                </td>
                <td className="px-6 py-4">
                  {item.province}
                </td>
                <td className="px-6 py-4">
                  {item.district}
                </td>
                <td className="px-6 py-4">
                  {"   "}<ZoomInOutlined onClick={() => flyto(item.LATITUDE_WGS84, item.LONGITUDE_WGS84)} style={{ cursor: 'pointer' }} />
                </td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  )
}


///ห้ามลบบบบบ ไว้ดู grid

// 'use client'
// import React, { useState, useEffect, useRef } from "react";
// import { MapContainer, Marker, TileLayer, Popup, Rectangle, Circle } from "react-leaflet";
// import "leaflet/dist/leaflet.css"
// import { list } from "./functions/sitehistorical";

// import { FloatButton } from 'antd';
// import { ZoomInOutlined } from '@ant-design/icons'
// import Search from "./Search";
// import Calendar from "./Calendar";
// import Grid from "./Grid";
// import { listgrid } from "./functions/gridhistorical"
// import L from "leaflet"

// export default function Map() {
//   const iconUrl = 'Pole.png'

//   const [data, setData] = useState([])

//   const [grid, setGrid] = useState(null)

//   const [showTable, setShowTable] = useState(false);
//   const [slideAnimation, setSlideAnimation] = useState(false);

//   const mapRef = useRef(null)

//   function toggleTable() {
//     setShowTable(!showTable);
//     setSlideAnimation(true);
//   };

//   useEffect(() => {
//     loadData()
//   }, [])

//   const loadData = () => {
//     list()
//       .then((res) => {
//         setData(res.data)
//       })
//       .catch((err) => console.log(err))
//   }

//   const flyto = (LATITUDE_WGS84, LONGITUDE_WGS84) => {
//     console.log(LATITUDE_WGS84, LONGITUDE_WGS84)
//     mapRef.current.flyTo([LATITUDE_WGS84, LONGITUDE_WGS84], 18)
//   }

//   const radius = 50;
//   console.log("Hello", grid)
//   return (
//     <div className="flex">
//       <div className="mr-12">
//         <Calendar />
//         <Search flyto={flyto} />
//       </div>
//       <div className="mt-12">
//         <Grid setGrid={setGrid} />
//         <MapContainer
//           ref={mapRef}
//           style={{ height: "500px", width: "800px", zIndex: '1' }}
//           center={[13.773481, 100.561079]}
//           zoom={30}
//           scrollWheelZoom={true}>
//           <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />

//           {
//             data
//               ? data.map((item) =>
//                 <Marker
//                   eventHandlers={{ click: () => flyto(item.LATITUDE_WGS84, item.LONGITUDE_WGS84) }}
//                   key={item.id}
//                   icon={L.icon({ iconUrl, iconSize: [60, 50] })}
//                   position={[item.LATITUDE_WGS84, item.LONGITUDE_WGS84]}>
//                   <Popup>
//                     {item.eNodeB_Name} <br />
//                     {item.province} <br />
//                     {item.district}
//                   </Popup>
//                 </Marker>
//               )
//               : null
//           }
//           {
//             grid && grid.map((item, index) =>
//               <Rectangle
//                 key={index}
//                 bounds={L.latLng([item.Latitude, item.Longitude]).toBounds(radius)}
//                 pathOptions={{ fillColor: "red", fillOpacity: "0.5", weight: "1", }}
//               >
//               </Rectangle>
//             )
//           }
//         </MapContainer>
//       </div>
//       <div>
//         <FloatButton onClick={toggleTable} className="float-button" />
//       </div>

//       <div
//         className={`content-table ${showTable ? "visible" : ""} ${slideAnimation ? "slide-up" : ""}`}>
//         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//           <thead className="th text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
//             <tr>
//               <th scope="col" className="px-6 py-3" >
//                 ID
//               </th>
//               <th scope="col" className="px-6 py-3" >
//                 Time
//               </th>
//               <th scope="col" className="px-6 py-3" >
//                 eNodeB_Name
//               </th>
//               <th scope="col" className="px-6 py-3" >
//                 LATITUDE_WGS84
//               </th>
//               <th scope="col" className="px-6 py-3" >
//                 LONGITUDE_WGS84
//               </th>
//               <th scope="col" className="px-6 py-3" >
//                 province
//               </th>
//               <th scope="col" className="px-6 py-3" >
//                 district
//               </th>
//               <th scope="col" className="px-6 py-3" >
//                 Go to
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) =>
//               <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
//                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                   {item.id}
//                 </th>
//                 <td className="px-6 py-4">
//                   {item.Time}
//                 </td>
//                 <td className="px-6 py-4">
//                   {item.eNodeB_Name}
//                 </td>
//                 <td className="px-6 py-4">
//                   {item.LATITUDE_WGS84}
//                 </td>
//                 <td className="px-6 py-4">
//                   {item.LONGITUDE_WGS84}
//                 </td>
//                 <td className="px-6 py-4">
//                   {item.province}
//                 </td>
//                 <td className="px-6 py-4">
//                   {item.district}
//                 </td>
//                 <td className="px-6 py-4">
//                   {"   "}<ZoomInOutlined onClick={() => flyto(item.LATITUDE_WGS84, item.LONGITUDE_WGS84)} style={{ cursor: 'pointer' }} />
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>

//       </div>
//     </div>
//   )
// }

