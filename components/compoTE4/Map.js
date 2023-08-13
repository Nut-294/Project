'use client'
import React, { useState, useEffect } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import { list } from "./functions/sitehistorical";

export default function Map() {
  const iconUrl='Pole.png'

  const [data, setData] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    list()
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }


  return (
    <MapContainer style={{ height: "500px", width: "800px", }} center={[13.727460486516733, 100.77674098706302]} zoom={30} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        data 
        ? data.map((item)=>
        <Marker icon={L.icon({iconUrl,iconSize:[60,50]})} position={[item.LATITUDE_WGS84,item.LONGITUDE_WGS84]}>
          <Popup>
            {item.eNodeB_Name} <br/>
            {item.province} <br/>
            {item.district}
          </Popup>
        </Marker>
        ) 
        : null
      }
    </MapContainer>
  )
}
