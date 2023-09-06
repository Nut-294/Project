import React from 'react'
import { useState, useEffect } from 'react'

const Predict = ({ combinedData }) => {

    console.log("รวมข้อมูล", combinedData)

    const [distances, setDistances] = useState([]);

    const R = 6371.0;

    useEffect(() => {
        const newDistances = combinedData.map((data1, index1) => {
            return data1.map((data2, index2) => {
                const LATITUDE_WGS84 = data2.LATITUDE_WGS84; //latitude เสา 
                const LONGITUDE_WGS84 = data2.LONGITUDE_WGS84;//longitude เสา 
                const Latitude = data2.Latitude; //latitude grid
                const Longitude = data2.Longitude; //longitude grid

                //แปลงให้เป็น Radian
                const LATITUDE_WGS84_Rad = (LATITUDE_WGS84 * Math.PI) / 180;
                const LONGITUDE_WGS84_Rad = (LONGITUDE_WGS84 * Math.PI) / 180;
                const Latitude_Rad = (Latitude * Math.PI) / 180;
                const Longitude_Rad = (Longitude * Math.PI) / 180;

                //เข้าสูตรคำนวณ
                const dlon = Longitude_Rad - LONGITUDE_WGS84_Rad;
                const dlat = Latitude_Rad - LATITUDE_WGS84_Rad;

                const a = Math.sin(dlat / 2) ** 2 + Math.cos(LATITUDE_WGS84_Rad) * Math.cos(Latitude_Rad) * Math.sin(dlon / 2) ** 2;
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                const distance = R * c;

                return distance;
            });
        });
        setDistances(newDistances);
    }, [combinedData]);

    if (distances.length > 0) {
        // ทำงานกับ distances ได้เลย
        const mergedData = combinedData.map((data1, index1) => {
            return data1.map((data2, index2) => {
                const distance = distances[index1][index2];
                return {
                    ...data2,
                    distance: distance
                };
            });
        });
        console.log("Merged Data:", mergedData);
        console.log("Distances:", distances);
    } else {
        // distances ยังไม่พร้อมใช้งาน ให้ใส่โค้ดที่จำเป็นตรงนี้หรือใช้ข้อความแสดงรอการโหลด
    }

    return (
        <div></div>
    )
}
export default Predict

