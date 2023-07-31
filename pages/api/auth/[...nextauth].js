import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { connectDB } from "@/config/db";
import User from "@/models/user";
import bcrypt from 'bcryptjs'


connectDB()

export default NextAuth({
    providers:[
        CredentialsProvider({
            async authorize(credentials, req){
                const { email, password } = credentials //เข้ารหัสปกติ
                const user = await User.findOne({email})

                if(!user){
                    throw new Error("Invalid User!")
                }

                const isPassword = await bcrypt.compare(password,user.password)
                if(!isPassword){
                    throw new Error("Password is not Correct!")
                }
                return user
            }
        })
    ],
    callbacks:{
        async jwt({token, user}){
            if(user){
                token.role = user.role
            }
            return token
            
        },
        async session({session,token}){
            if(token && session.user){
                session.user.role = token.role
            }
            return session
        }
    },
    pages:{
        signIn:'/'
    },
    secret:process.env.NEXTAUTH_SECRET
})