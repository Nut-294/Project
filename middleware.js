export { default } from "next-auth/middleware"

//ถ้ายังไม่ log in ไม่สามารถเข้าถึงได้
export const config = { matcher: [  "/PageHome/:path*", 
                                    "/PageOne/:path*", 
                                    "/PageTwo/:path*", 
                                    "/PageThree/:path*", 
                                    "/PageFour/:path*", 
                                    "/PageFive/:path*"] } 