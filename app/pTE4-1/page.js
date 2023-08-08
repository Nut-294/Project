'use client'
//localhost:3000/pTE4-1
import React from 'react'
import SideBar from "@/app/components/compoTE4/Sidebar"
import dynamic from 'next/dynamic'
import Calendar from '../components/compoTE4/Calendar'
import Search from '../components/compoTE4/Search'
const DynamicMap = dynamic(() => import('@/app/components/compoTE4/Map'), {
  loading: () => <p className='text-white'>Loading...</p>,ssr:false,
})
export default function PageOne() {
  return (
  <div className='flex'>
    <SideBar />
    <div className="text-white ml-96 absolute">
    <Calendar/>
    </div>
    <div className='mt-6 m-[545px] absolute'>
    <Search/>
    </div> 
      <div className='ml-96 mt-28 absolute'>
      <DynamicMap/>
      </div>
    </div>
  )
}
