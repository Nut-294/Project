//url: http://localhost:3000/api/gridhistorical
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request,response) => {
    const url = new URL(request.url)
    const targetDate = url.searchParams.get("targetDate")
    const enodeb = url.searchParams.get("enodeb");
    
    try{

        const gridhistorical = await prisma.gridhistorical.findMany({
            where:{
                Time: targetDate,
                eNodeB_Name:enodeb
            }
        })
        
        return NextResponse.json(gridhistorical)

    } catch (err) {
        return NextResponse.json({ message: "GET gridhistorical Error", err }, { status: 500 })
    }
}

