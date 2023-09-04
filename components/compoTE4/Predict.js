import React from 'react'
import { useState } from 'react'

const Predict = ({ combinedData }) => {
    console.log("ทดสอบ", combinedData)

    const R = 6371.0;

    combinedData.forEach((data, index) => {
        //รับค่าจาก combinedData
        const LATITUDE_WGS84 = data.LATITUDE_WGS84;
        const LONGITUDE_WGS84 = data.LONGITUDE_WGS84;
        const Latitude = data.Latitude;
        const Longitude = data.Longitude;
      
        //แปลงเป็น Radian
        const LATITUDE_WGS84_Rad = (LATITUDE_WGS84 * Math.PI) / 180; //latRad1 
        const LONGITUDE_WGS84_Rad = (LONGITUDE_WGS84 * Math.PI) / 180; //lonRad1 
        const Latitude_Rad = (Latitude * Math.PI) / 180; //latRad2 
        const Longitude_Rad = (Longitude * Math.PI) / 180; //lonRad2 
      
        // คำนวณสูตร Haversine
        const dlon = Longitude_Rad - LONGITUDE_WGS84_Rad;
        const dlat = Latitude_Rad - LATITUDE_WGS84_Rad;
        const a = Math.sin(dlat / 2) ** 2 + Math.cos(LATITUDE_WGS84_Rad) * Math.cos(Latitude_Rad) * Math.sin(dlon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
      
        console.log(`Distance [${index}]: ${distance}`);
      });
    
    return (
        <div></div>
    )
}

export default Predict