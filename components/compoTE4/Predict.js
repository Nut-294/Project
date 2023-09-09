import React from 'react'
import { useState, useEffect } from 'react'

const Predict = ({ combinedData }) => {

    const [distances, setDistances] = useState([]);
    const [mergedData, setmergedData] = useState([]);

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

    useEffect(() => {
        if (distances.length > 0) {
            const mergedDataWithPL = combinedData.map((data1, index1) => {
                return data1.map((data2, index2) => {
                    const distance = distances[index1][index2];
                    const hb = data2.ant_height; // ความสูงของสถานีฐานจาก mergedData
                    const h = 1.5;   // ความสูงของอุปกรณ์ผู้ใช้จาก mergedData
                    const f = data2.Frequency;   // ความถี่จาก mergedData

                    const Gf = 44.49 * Math.log10(f) - 4.78 * Math.pow(Math.log10(f), 2);

                    const PL = 36.2 + 30.2 * Math.log10(distance) + 12 * Math.log10(hb) + 0.1 * Math.log10(hb) * Math.log10(distance) - 3.2 * Math.pow(Math.log10(11.75 * h), 2) + Gf

                    // คำนวณ Received Signal โดยสมการ Power + Antenna Gain - Path Loss
                    const Power = data2.REFERENCESIGNALPWR/10; // พลังงานส่งออกจากสถานีฐาน
                    const AntennaGain = data2.ant_gain; // Antenna Gain จากสถานีฐาน


                    const ReceivedSignal = Power + AntennaGain - PL;
                   

                    return {
                        ...data2,
                        distance: distance,
                        PathLoss: PL,
                        Gf: Gf,
                        ReceivedSignal: ReceivedSignal
                    };
                });
            });
            setmergedData(mergedDataWithPL);
        }
    }, [distances]);

    console.log("Merged Data:", mergedData);



    return (
        <div></div>
    )
}
export default Predict

