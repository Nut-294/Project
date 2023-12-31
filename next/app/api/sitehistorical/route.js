//url: http://localhost:3000/api/sitehistorical
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async () => {
    try{
        
        const sitehistoricals = await prisma.sitehistorical.findMany({
            take:100
        })

        return NextResponse.json(sitehistoricals)

    }catch(err){
        return NextResponse.json({message: "GET Error", err}, {status: 500})
    }
}