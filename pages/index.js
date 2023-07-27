"use client"
import Head from "next/head";
import SideBar from "@/components/SideBar";
import Login from "./Login"
export default function Home() {
  return (
    <div>
      <Login/>
    </div>
    // <div className="flex">
    //   <Head>
    //     <title>My Project</title>
    // </Head>
    // <SideBar/> 
    // <div className="text-white">home</div>
    // </div>
  );
}
