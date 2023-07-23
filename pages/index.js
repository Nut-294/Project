import Head from "next/head";
import SideNavbar from "@/components/SideNavbar";
import SideBar from "@/components/SideBar";
export default function Home() {
  return (
    <div>
    <Head>
    <title>My Project</title>
    </Head>
    <SideBar/> 
    </div>
  );
}
