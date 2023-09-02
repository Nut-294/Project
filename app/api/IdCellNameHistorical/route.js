//url: http://localhost:3000/api/IdCellNameHistorical
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request, response) => {
    const url = new URL(request.url)
    const targetDateParam = url.searchParams.get("targetDate");
    const targetDateInt = parseInt(targetDateParam, 10);

    try {

        const CellNameHistorical = await prisma.cellnamehistorical.findMany({
            where: {
                id: targetDateInt,
            }
        })

        return NextResponse.json(CellNameHistorical)

    } catch (err) {
        return NextResponse.json({ message: "GET ID Cellnamehistorical Error", err }, { status: 500 })
    }
}
