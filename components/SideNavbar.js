// import { Disclosure } from '@headlessui/react'
// import React from 'react'
// import{GiHamburgerMenu} from "react-icons/gi"
// import{FaMapMarked} from "react-icons/fa"
// import {MdOutlineLogout, MdOutlineMoreHoriz, MdOutlineSettings, MdOutlineSpaceDashboard,MdSettingsInputAntenna} from "react-icons/md"
// import{BsTable} from "react-icons/bs"
// import {AiOutlineHome} from "react-icons/ai"
// import Link from "next/link"
// function SideNavbar() {
//   return (
//     <div>
//     <Disclosure as ="nav">
//       {/* //หน้าจอเล็ก */}
//       <Disclosure.Button className="ml-60 abolute top-4 right-4 inline-flex flex-end items-center peer justify-center rounded-md p-2 text-black-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group hover:bg-blue-900 ">
//           <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true"/>
//       </Disclosure.Button>


//       <div className='p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200'>
//           <div className='flex flex-col justify-start items-center'>
//             <h1 className='text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full'>Project</h1>
//               <div className='my-4 border-b border-gray-100 pb-4 w-full'>
//                 <div className='flex mb-4 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
//                   <AiOutlineHome className="text-2xl text-gray-600 group-hover:text-white"/>
//                   <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Dashboard</h3>
//                 </div>
//                 <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
//                   <FaMapMarked className="text-2xl text-gray-600 group-hover:text-white"/>
//                   <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>แผนที่</h3>
//                 </div>
//                 <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
//                   <BsTable className="text-2xl text-gray-600 group-hover:text-white"/>
//                   <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>ตาราง</h3>
//                 </div>
//                 <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
//                   <MdSettingsInputAntenna className="text-2xl text-gray-600 group-hover:text-white"/>
//                   <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>หน้าน้อง</h3>
//                 </div>
//               </div>

//               {/* setting */}
//               <div className='my-24 border-b border-gray-100 pb-4 w-full'>
//                 <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
//                   <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white"/>
//                   <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Settings</h3>
//                 </div>
//                 <div className='flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
//                   <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white"/>
//                   <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>More</h3>
//                 </div>
//               </div>
              
//               {/* logout */}
//               <div className=' w-full'>
//                 <div className='flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto'>
//                   <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white"/>
//                   <h3 className='text-base text-gray-800 group-hover:text-white font-semibold'>Logout</h3>
//                 </div>
//               </div>
//           </div>
//       </div>
//     </Disclosure>
//     </div>
//   )
// }

// export default SideNavbar
