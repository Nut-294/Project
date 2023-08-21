//url: http://localhost:3000/api/gridhistorical
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {

        const gridhistorical = await prisma.gridhistorical.findMany({
            take: 10,
        })

    

        return NextResponse.json(gridhistorical)

    } catch (err) {
        return NextResponse.json({ message: "GET Error", err }, { status: 500 })
    }
}

