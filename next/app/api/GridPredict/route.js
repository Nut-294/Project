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

  const latMin = latitude - 0.015;
  const latMax = latitude + 0.015;
  const lonMin = longitude - 0.015;
  const lonMax = longitude + 0.015;

  try {
    const gridhistorical = await prisma.gridhistorical.findMany({
      where: {
        Time: targetDate,
        Latitude: {
          gte: latMin,
          lte: latMax,
        },
        Longitude: {
          gte: lonMin,
          lte: lonMax,
        },
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
