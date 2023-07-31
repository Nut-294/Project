'use client'
import React from "react";
import { MapContainer,Marker,TileLayer,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import MarkerIcon from "../node_modules/leaflet/dist/images/marker-icon.png"
import MarkShadow from "../node_modules/leaflet/dist/images/marker-shadow.png"
function Map() {
  return (
    <MapContainer style={{height:"500px",width:"800px",}} center={[13.727460486516733, 100.77674098706302]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={
        new L.Icon({
          iconUrl: MarkerIcon.src,
          iconRetinaUrl: MarkerIcon.src,
          iconSize:[25,41],
          popupAnchor: [0,41],
          shadowUrl: MarkShadow.src,
          shadowSize:[41,41]
        })
      }
        position={[13.7274, 100.7767]}>
      <Popup>
        Hello Marker
      </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
