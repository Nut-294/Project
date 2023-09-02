//url: http://localhost:3000/api/GridPredict
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request,response) => {
    const url = new URL(request.url)
    const targetDate = url.searchParams.get("targetDate")
    const cellName = url.searchParams.get("cellName");
    
    try{

        const gridhistorical = await prisma.gridhistorical.findMany({
            where:{
                Time: targetDate,
                Cell_Name:cellName
            }
        })
        
        return NextResponse.json(gridhistorical)

    } catch (err) {
        return NextResponse.json({ message: "GET GridPredict Error", err }, { status: 500 })
    }
}

