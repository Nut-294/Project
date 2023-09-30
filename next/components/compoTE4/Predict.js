import React from 'react'
import { useState, useEffect } from 'react'

const Predict = ({ combinedData, onDataReady }) => {

    const [distances, setDistances] = useState([]);
    const [mergedData, setmergedData] = useState([]);

    const R = 6371.0;

    useEffect(() => {
        const newDistances = combinedData.map((data1, index1) => {
            return data1.map((data2, index2) => {
                const LATITUDE_WGS84 = data2.LATITUDE_WGS84;
                const LONGITUDE_WGS84 = data2.LONGITUDE_WGS84;
                const Latitude = data2.Latitude;
                const Longitude = data2.Longitude;

                const LATITUDE_WGS84_Rad = (LATITUDE_WGS84 * Math.PI) / 180;
                const LONGITUDE_WGS84_Rad = (LONGITUDE_WGS84 * Math.PI) / 180;
                const Latitude_Rad = (Latitude * Math.PI) / 180;
                const Longitude_Rad = (Longitude * Math.PI) / 180;

                const dlon = Longitude_Rad - LONGITUDE_WGS84_Rad;
                const dlat = Latitude_Rad - LATITUDE_WGS84_Rad;

                //distance
                const a =
                    Math.sin(dlat / 2) ** 2 +
                    Math.cos(LATITUDE_WGS84_Rad) *
                    Math.cos(Latitude_Rad) *
                    Math.sin(dlon / 2) ** 2;
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                const distance = R * c;

                // bearing calculation (all angles in radians)
                const y = Math.sin(Longitude_Rad - LONGITUDE_WGS84_Rad) * Math.cos(Latitude_Rad);
                const x =
                    Math.cos(LATITUDE_WGS84_Rad) * Math.sin(Latitude_Rad) -
                    Math.sin(LATITUDE_WGS84_Rad) * Math.cos(Latitude_Rad) * Math.cos(Longitude_Rad - LONGITUDE_WGS84_Rad);
                const θ = Math.atan2(y, x);
                const bearing = ((θ * 180) / Math.PI + 360) % 360; // in degrees

                return { distance, bearing };
            });
        });
        setDistances(newDistances);
    }, [combinedData]);

    useEffect(() => {
        if (distances.length > 0) {
            const mergedDataWithPL = combinedData.map((data1, index1) => {
                return data1.map((data2, index2) => {

                    const { distance, bearing } = distances[index1][index2];
                    const azimuth = data2.physical_azimuth
                    //bearing calculate
                    const relativeBearing = (bearing - azimuth + 360) % 360;

                    // Adjust the relative bearing to be within the range of -180 to 180 degrees
                    const adjustedRelativeBearing = (relativeBearing + 180) % 360 - 180;
                    const adjustedAbsoluteBearing = Math.abs((relativeBearing + 180) % 360 - 180);



                    const hb = data2.ant_height; // ความสูงของสถานีฐานจาก mergedData
                    const h = 1.5;   // ความสูงของอุปกรณ์ผู้ใช้จาก mergedData
                    const f = data2.Frequency;   // ความถี่จาก mergedData

                    const Gf = 44.49 * Math.log10(f) - 4.78 * Math.pow(Math.log10(f), 2);

                    const PL = 36.2 + 30.2 * Math.log10(distance) + 12 * Math.log10(hb) + 0.1 * Math.log10(hb) * Math.log10(distance) - 3.2 * Math.pow(Math.log10(11.75 * h), 2) + Gf

                    // คำนวณ Received Signal โดยสมการ Power + Antenna Gain - Path Loss
                    const Power = data2.REFERENCESIGNALPWR / 10; 
                    const AntennaGain = data2.ant_gain; 


                    const ReceivedSignal = Power + AntennaGain - PL;


                    return {
                        ...data2,
                        bearing: bearing,
                        adjustedRelativeBearing:adjustedRelativeBearing,
                        adjustedAbsoluteBearing:adjustedAbsoluteBearing,
                        relativeBearing:relativeBearing,
                        distance: distance,
                        PathLoss: PL,
                        ReceivedSignal: ReceivedSignal
                    };
                });
            });

            setmergedData(mergedDataWithPL);
            onDataReady(mergedDataWithPL);
        }
    }, [distances]);



    return (
        <div></div>
    )
}
export default Predict

