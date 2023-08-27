"use client"
import React from "react";
import { BsTable } from "react-icons/bs";
import { TfiArrowCircleLeft } from "react-icons/tfi"
import {
  MdSettingsInputAntenna,
  MdOutlineSettings,
  MdOutlineMoreHoriz,
  MdOutlineLogout,
} from "react-icons/md";
import {BiSolidMapPin} from "react-icons/bi"
import { AiOutlineHome } from "react-icons/ai";
import { FaMapMarked } from "react-icons/fa";
import { useState } from "react";

import { useSession, signOut } from "next-auth/react";
function SideBar() {
  const [open, setOpen] = useState(true);

  const { data } = useSession()
  


  return (
    <div className="flex ">
      <div
        className={`bg-lime-400 h-screen p-5 pt-4 ${
          open ? "w-64" : "w-24"
        } duration-300 relative`}
      >
        <TfiArrowCircleLeft
          className={`text-4xl text-white bg-gray-900 rounded-full absolute -right-3 top-9 border border-0 border-green-100 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex flex-col justify-start items-center border-b border-black">
          <h1 className={`bg-green-700 rounded-md text-base text-center cursor-pointer font-bold text-black border-b-2 border-black pb-4 pt-4 w-full ${!open && "scale-0"}`}>
            Project
          </h1>
          <div className="w-full">
            <a href="/pHome" className="mt-1 flex pl-3 pt-2 pb-2 justify-start items-center gap-4  hover:bg-green-800 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <AiOutlineHome className="text-3xl text-black group-hover:text-white" />
              <h3 className={`mt-2 text-base text-black group-hover:text-white font-semibold ${!open && "hidden"}`}>
                Home
              </h3>
            </a>
            <a href="/pTE4-1" className="mt-1 flex pl-3 pt-2 pb-2 justify-start items-center gap-4  hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaMapMarked className="text-3xl text-black group-hover:text-white" />
              <h3 className={`mt-3 text-base text-black group-hover:text-white font-semibold ${!open && "hidden"}`}>
                แผนที่
              </h3>
            </a>
            <a href="/pTE4-2" className="mt-1 flex mb-2 pl-3 pt-2 pb-2 justify-start items-center gap-4  hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <BsTable className="text-3xl text-black group-hover:text-white" />
              <h3 className={`mt-2 text-base text-black group-hover:text-white font-semibold ${!open && "hidden"}`}>
                ตาราง
              </h3>
            </a>
            <a href="/pTE3-1" className="mt-4 flex mb-2 pl-3 pt-2 pb-2 justify-start items-center gap-4  hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdSettingsInputAntenna className="text-3xl text-black group-hover:text-white" />
              <h3 className={`text-base text-black group-hover:text-white font-semibold ${!open && "hidden"}`}>
                หน้าน้องปี 3.1
              </h3>
            </a>
            <a href="/pTE3-2" className="mt-4 flex mb-2 pl-3 pt-2 pb-2 justify-start items-center gap-4  hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdSettingsInputAntenna className="text-3xl text-black group-hover:text-white" />
              <h3 className={`text-base text-black group-hover:text-white font-semibold ${!open && "hidden"}`}>
                หน้าน้องปี 3.2
              </h3>
            </a>
            <a href="/pTE1" className="mt-4 flex mb-8 pl-3 pt-2 pb-2 justify-start items-center gap-4  hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <BiSolidMapPin className="text-3xl text-black group-hover:text-white"/>
              <h3 className={`text-base text-black group-hover:text-white font-semibold ${!open && "hidden"}`}>
                หน้าน้องปี 1
              </h3>
            </a>
          </div>
        </div>


        <hr className=" border-black"></hr>
        {/* setting */}
        <div className="border-blue-900 w-full">
          <div className="flex mt-6 pl-3 pt-2 pb-2 justify-start items-center gap-4  hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineSettings className="text-3xl text-black group-hover:text-white" />
            <h3 className={`text-base text-black group-hover:text-white font-semibold ${!open && "hidden"}`}>
              Settings
            </h3>
          </div>
          <div className="flex mb-5 pl-3 pt-2 pb-2 justify-start items-center gap-4  hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineMoreHoriz className="text-3xl text-black group-hover:text-white" />
            <h3 className={`text-base text-black group-hover:text-white font-semibold ${!open && "hidden"}`}>
              More
            </h3>
          </div>
        </div>
        <hr className="border-b border-black"></hr>
        {/* logout */}
        <div className=" w-full">
        
          {data?.user
          ?(
          <a onClick={()=>signOut({callbackUrl:'/'})}>
          <div className="flex mt-4 pl-3 pt-2 pb-2 justify-start items-center gap-4  hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
          <MdOutlineLogout className="text-3xl text-black group-hover:text-white" />
          <h3 className={`text-base text-black group-hover:text-white font-semibold ${!open && "hidden"}`}>
            Logout
          </h3>
        </div>
        </a>
        )
          :(
          <a href="/">
          <div className="flex mt-4 pl-3 pt-2 pb-2 justify-start items-center gap-4  hover:bg-green-900 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineLogout className="text-3xl text-black group-hover:text-white" />
            <h3 className={`text-base text-black group-hover:text-white font-semibold ${!open && "hidden"}`}>
              Login
            </h3>
          </div>
        </a>
        )
        }
        </div>
      </div>
    </div>
  );
}

export default SideBar;