export { default } from "next-auth/middleware"

export const config = { matcher: [
                                    "/pagehome/:path*", 
                                    "/pageone/:path*",
                                    "/pagetwo/:path*",
                                    "/pagethree/:path*",
                                    "/pagefour/:path*",
                                
                        ] }