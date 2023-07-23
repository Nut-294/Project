import Head from "next/head";
import SideBar from "@/components/SideBar";
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
