export { default } from "next-auth/middleware"

export const config = { matcher: [
    "/pHome/:path*", 
    "/pTE1/:path*",
    "/pTE3-1/:path*",
    "/pTE3-2/:path*",
    "/pTE4-1/:path*",
    "/pTE4-2/:path*",
                        ] }

                            //เก่า
                        // "/pagehome/:path*", 
                        //             "/pageone/:path*",
                        //             "/pagetwo/:path*",
                        //             "/pagethree/:path*",
                        //             "/pagefour/:path*",
                                

                        //     //ใหม่
                        // "/pHome/:path*", 
                        //             "/pTE1/:path*",
                        //             "/pTE3-1/:path*",
                        //             "/pTE3-2/:path*",
                        //             "/pTE4-1/:path*",
                        //             "/pTE4-2/:path*",