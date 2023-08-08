// url : http://localhost:3000/api/auth
import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"
import bcrypt from 'bcryptjs'

export const POST = async (request) => {
    try{

        const body = await request.json()
        const { firstname, lastname, email, password, role } = body

        var user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(user){
            return NextResponse.json("User Already exits!")
        }

        const salt = await bcrypt.genSalt(10)

        body.password = await bcrypt.hash(password, salt)

        const newUser = await prisma.user.create({
            data: {
                firstname,
                lastname,
                email,
                password:body.password,
                role
            },
            
        })
        console.log(newUser)
        return NextResponse.json("Register Success")
        

    }catch(err){
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}

export const GET = async () => {
    try{
        
        const users = await prisma.user.findMany()

        return NextResponse.json(users)

    }catch(err){
        return NextResponse.json({message: "GET Error", err}, {status: 500})
    }
}