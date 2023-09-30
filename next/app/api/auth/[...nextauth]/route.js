import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next"
import prisma from "@/libs/prismadb"
import bcrypt from "bcryptjs"

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            async authorize(credentials, req){
                const { email, password } = credentials
                
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    }
                })
                
                if(!user){
                    throw new Error("Invalid User!!")
                }

                const isPassword = await bcrypt.compare(password,user.password)
                if(!isPassword){
                    throw new Error("Password is not Correct!!")
                }
                return user
            }
        })
    ],
    callbacks:{
        async jwt({ token, user}){
            if(user){
                token.role = user.role,
                token.firstname = user.firstname,
                token.lastname = user.lastname
            }
            return token
        },
        async session({session, token}){
            if(token && session.user){
                session.user.role = token.role,
                session.user.firstname = token.firstname,
                session.user.lastname = token.lastname
            }
            return session
        },
    },
    pages:{
    signIn:'/'
    },
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }