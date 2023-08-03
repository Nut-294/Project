"use client"
//localhost:3000
import Head from "next/head";
import SideBar from "../components/compo-TE4/SideBar";
export default function Home() {
  return (
    <div className="flex">
    <Head>
    <title>My Project</title>
    </Head>
    <SideBar/> 
    <div className="text-white">Home</div>
    </div>
  );
}
