//url: http://localhost:3000/api/GridPredict
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request,response) => {
    const url = new URL(request.url);
    const targetDate = url.searchParams.get("targetDate");
    const latitude = parseFloat(url.searchParams.get("latitude"));
    const longitude = parseFloat(url.searchParams.get("longitude"));
    
    // ขอบเขตสีเหลี่ยม 50 เมตร
    const latMin = latitude - 0.005;
    const latMax = latitude + 0.005;
    const lonMin = longitude - 0.005;
    const lonMax = longitude + 0.005;

    try {
        const gridhistorical = await prisma.gridhistorical.findMany({
            where: {
                Time: targetDate,
                Latitude: {
                    gte: latMin,  // ใช้ gte (greater than or equal) เพื่อกรอง latitude ที่มากกว่าหรือเท่ากับ latMin
                    lte: latMax,  // ใช้ lte (less than or equal) เพื่อกรอง latitude ที่น้อยกว่าหรือเท่ากับ latMax
                },
                Longitude: {
                    gte: lonMin,  // ใช้ gte (greater than or equal) เพื่อกรอง longitude ที่มากกว่าหรือเท่ากับ lonMin
                    lte: lonMax,  // ใช้ lte (less than or equal) เพื่อกรอง longitude ที่น้อยกว่าหรือเท่ากับ lonMax
                },
            },
            select: {
                Latitude: true,
                Longitude: true,
                id: true,
            },
        });

        return NextResponse.json(gridhistorical);

    } catch (err) {
        return NextResponse.json({ message: "GET GridPredict Error", err }, { status: 500 });
    }
}
