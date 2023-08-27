//url: http://localhost:3000/api/CellNameHistorical
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request,response) => {
    const url = new URL(request.url)
    const targetDate = url.searchParams.get("targetDate")
    const enodeb = url.searchParams.get("enodeb");
    
    try{

        const CellNameHistorical = await prisma.cellnamehistorical.findMany({
            where:{
                Time: targetDate,
                eNodeB_Name:enodeb
            }
        })
        
        return NextResponse.json(CellNameHistorical)

    } catch (err) {
        return NextResponse.json({ message: "GET Cellnamehistorical Error", err }, { status: 500 })
    }
}

