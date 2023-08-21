//url: http://localhost:3000/api/sitehistorical
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request,response) => {
    const url = new URL(request.url)
    const targetDate = url.searchParams.get("targetDate")
    
    try{

        const filterData = await prisma.sitehistorical.findMany({
            where:{
                Time: targetDate,
            }
        })
        
        return NextResponse.json(filterData)

    }catch(err){
        return NextResponse.json({message: "GET sitehistoricalError", err}, {status: 500})
    }
}