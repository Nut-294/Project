//url: http://localhost:3000/api/GridPredict
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

// Calculate distance in meters between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Filter grid points based on distance from a given latitude and longitude within a radius
function filterGridPoints(gridhistorical, latitude, longitude, radius) {
  return gridhistorical.filter((grid) => {
    const distance = calculateDistance(latitude, longitude, grid.Latitude, grid.Longitude);
    return distance <= radius;
  });
}

export const GET = async (request, response) => {
  const url = new URL(request.url);
  const targetDate = url.searchParams.get("targetDate");
  const latitude = parseFloat(url.searchParams.get("latitude"));
  const longitude = parseFloat(url.searchParams.get("longitude"));
  const radius = 1000;

  try {
    const gridhistorical = await prisma.gridhistorical.findMany({
      where: {
        Time: targetDate,
      },
      select: {
        Latitude: true,
        Longitude: true,
        id: true,
      },
    });

    const filteredGrids = filterGridPoints(gridhistorical, latitude, longitude, radius);

    return NextResponse.json(filteredGrids);
  } catch (err) {
    return NextResponse.json({ message: "GET GridPredict Error", err }, { status: 500 });
  }
};


//กรองสี่เหลี่ยม
//url: http://localhost:3000/api/GridPredict
// import prisma from "@/libs/prismadb"
// import { NextResponse } from "next/server"

// export const GET = async (request,response) => {
//     const url = new URL(request.url);
//     const targetDate = url.searchParams.get("targetDate");
//     const latitude = parseFloat(url.searchParams.get("latitude"));
//     const longitude = parseFloat(url.searchParams.get("longitude"));
    
//     // ขอบเขตสีเหลี่ยม 800 เมตร
//     const latMin = latitude - 0.008;
//     const latMax = latitude + 0.008;
//     const lonMin = longitude - 0.008;
//     const lonMax = longitude + 0.008;

    

//     try {
//         const gridhistorical = await prisma.gridhistorical.findMany({
//             where: {
//                 Time: targetDate,
//                 Latitude: {
//                     gte: latMin,  // ใช้ gte (greater than or equal) เพื่อกรอง latitude ที่มากกว่าหรือเท่ากับ latMin
//                     lte: latMax,  // ใช้ lte (less than or equal) เพื่อกรอง latitude ที่น้อยกว่าหรือเท่ากับ latMax
//                 },
//                 Longitude: {
//                     gte: lonMin,  // ใช้ gte (greater than or equal) เพื่อกรอง longitude ที่มากกว่าหรือเท่ากับ lonMin
//                     lte: lonMax,  // ใช้ lte (less than or equal) เพื่อกรอง longitude ที่น้อยกว่าหรือเท่ากับ lonMax
//                 },
//             },
//             select: {
//                 Latitude: true,
//                 Longitude: true,
//                 id: true,
//             },
//         });

//         return NextResponse.json(gridhistorical);

//     } catch (err) {
//         return NextResponse.json({ message: "GET GridPredict Error", err }, { status: 500 });
//     }
// }

