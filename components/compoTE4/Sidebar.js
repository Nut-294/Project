"use client";
import React from "react";
import { BsTable } from "react-icons/bs";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import {
  MdSettingsInputAntenna,
  MdOutlineSettings,
  MdOutlineMoreHoriz,
  MdOutlineLogout,
} from "react-icons/md";
import { AiOutlineHome, AiTwotoneEnvironment } from "react-icons/ai";
import { FaMapMarked } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { useState } from "react";

import { useSession, signOut } from "next-auth/react";
function SideBar() {
  const [open, setOpen] = useState(false);

  const { data } = useSession();

  return (
    <div className="flex border-2 border-black fixed top-16">
      <div
        className={`p-5 pt-4 h-screen bg-slate-600 ${
          open ? "w-72 " : "w-24 "
        } duration-300 `}
      >
        {/* <TfiArrowCircleLeft
          className={`text-4xl text-white bg-gray-900 rounded-full absolute -right-3 top-9 border border-0 border-green-100 cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        /> */}
        <div className="flex-col justify-start items-center ">
          <div
            className="mt-1 flex pl-3 pt-2 pb-2 justify-start items-center gap-4  hover:bg-slate-500 rounded-md group cursor-pointer hover:shadow-xl m-auto "
            onClick={() => setOpen(!open)}
          >
            <TbMenu2 className="text-3xl text-teal-400 group-hover:text-white" />
            <h1
              className={`mt-2 text-base text-teal-400 group-hover:text-white font-semibold ${
                !open && "hidden"
              }`}
            >
              Project
            </h1>
          </div>
          <hr className="border-b border-black"></hr>
          <div className="w-full">
            <a
              href="/pHome"
              className="mt-1 flex pl-3 px-1 py-1 justify-start items-center gap-4 hover:bg-slate-500 rounded-md group cursor-pointer hover:shadow-xl m-auto"
            >
              <AiOutlineHome className="text-3xl text-teal-400 group-hover:text-white" />
              <h3
                className={`mt-2 text-base text-teal-400 group-hover:text-white font-semibold ${
                  !open && "hidden"
                }`}
              >
                Home
              </h3>
            </a>
            <a
              href="/pTE4-1"
              className="mt-1 flex pl-3 px-2 py-1 justify-start items-center gap-4   hover:bg-slate-500 rounded-md group cursor-pointer hover:shadow-xl m-auto"
            >
              <FaMapMarked className="text-3xl text-teal-400 group-hover:text-white" />
              <h3
                className={`mt-3 text-base text-teal-400 group-hover:text-white font-semibold ${
                  !open && "hidden"
                }`}
              >
                Data Visualization
              </h3>
            </a>
            <a
              href="/pTE4-2"
              className="mt-2 flex mb-2 pl-3 px-2 py-1 justify-start items-center gap-4 hover:bg-slate-500 rounded-md group cursor-pointer hover:shadow-xl m-auto"
            >
              <BsTable className="text-3xl text-teal-400 group-hover:text-white" />
              <h3
                className={`mt-2 text-base text-teal-400 group-hover:text-white font-semibold ${
                  !open && "hidden"
                }`}
              >
                RSRP Prediction
              </h3>
            </a>
            <a
              href="/pTE3-1"
              className="mt-2 flex mb-2 pl-3 px-2 py-1 justify-start items-center gap-4 hover:bg-slate-500 rounded-md group cursor-pointer hover:shadow-xl m-auto"
            >
              <AiTwotoneEnvironment className="text-3xl text-teal-400 group-hover:text-white" />
              <h3
                className={`pt-2 text-base text-teal-400 group-hover:text-white font-semibold ${
                  !open && "hidden"
                }`}
              >
                Antenna Catalog
              </h3>
            </a>
            <a
              href="/pTE3-2"
              className="mt-2 flex mb-2 pl-3 px-2 py-1 justify-start items-center gap-4 hover:bg-slate-500 rounded-md group cursor-pointer hover:shadow-xl m-auto"
            >
              <MdSettingsInputAntenna className="text-3xl text-teal-400 group-hover:text-white" />
              <h3
                className={` pt-2 text-base text-teal-400 group-hover:text-white font-semibold ${
                  !open && "hidden"
                }`}
              >
                Y3
              </h3>
            </a>
            <a
              href="/pTE1"
              className="mt-2 flex mb-2 pl-3 px-2 py-1 justify-start items-center gap-4 hover:bg-slate-500 rounded-md group cursor-pointer hover:shadow-xl m-auto"
            >
              <FaMapMarked className="text-3xl text-teal-400 group-hover:text-white" />
              <h3
                className={`pt-3 text-base text-teal-400 group-hover:text-white font-semibold ${
                  !open && "hidden"
                }`}
              >
                Data Visualization Year 1
              </h3>
            </a>
          </div>
        </div>

        <div className="border-b-2 border-black border-t-2">
        <a
          href="/pSetting"
          className="mt-2 flex mb-2 pl-3 px-2 py-1 justify-start items-center gap-4 hover:bg-slate-500 rounded-md group cursor-pointer hover:shadow-xl m-auto"
        >
          <MdOutlineSettings className="text-3xl text-teal-400 group-hover:text-white" />
          <h3
            className={`pt-3 text-base text-teal-400 group-hover:text-white font-semibold ${
              !open && "hidden"
            }`}
          >
            Settings
          </h3>
        </a>
        <a
          href="/pMore"
          className="mt-2 flex mb-2 pl-3 px-2 py-1 justify-start items-center gap-4 hover:bg-slate-500 rounded-md group cursor-pointer hover:shadow-xl m-auto"
        >
          <MdOutlineMoreHoriz className="text-3xl text-teal-400 group-hover:text-white" />
          <h3
            className={`pt-3 text-base text-teal-400 group-hover:text-white font-semibold ${
              !open && "hidden"
            }`}
          >
            More
          </h3>
        </a>
        </div>
      

        {/* Logout */}
        <div className=" w-full">
          {data?.user ? (
            <a onClick={() => signOut({ callbackUrl: "/" })}>
              <div className="flex mt-1 pl-4 pt-2 pb-2 justify-start items-center gap-4 hover:bg-slate-500 rounded-md group cursor-pointer hover:shadow-xl m-auto">
                <MdOutlineLogout className="text-3xl text-teal-400 group-hover:text-white" />
                <h3
                  className={`pt-2 text-base text-teal-400 group-hover:text-white font-semibold ${
                    !open && "hidden"
                  }`}
                >
                  Logout
                </h3>
              </div>
            </a>
          ) : (
            <a href="/">
              <div className="flex mt-1 pl-4 pt-2 pb-2 justify-start items-center gap-4 hover:bg-slate-500 rounded-md group cursor-pointer hover:shadow-xl m-auto">
                <MdOutlineLogout className="text-3xl text-teal-400 group-hover:text-white" />
                <h3
                  className={`pt-2 text-base text-teal-400 group-hover:text-white font-semibold ${
                    !open && "hidden"
                  }`}
                >
                  Login
                </h3>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
