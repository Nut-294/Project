// url : http://localhost:3000/api/auth
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try{
        const body = await request.json()
        const {username, firstname, lastname, email, password} = body

        const newUser = await prisma.user.create({
            data: {
                username,
                firstname,
                lastname,
                email,
                password
            }
        })
        console.log(newUser)
        return NextResponse.json(newUser)
        

    }catch(err){
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}

export const GET = async () => {
    try{
        
        const users = await prisma.user.findMany()

        return NextResponse.json(users)

    }catch(err){
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}