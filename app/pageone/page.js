"use client"
//localhost:3000/page-one
import React from 'react'
import SideBar from "@/app/components/Sidebar"
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('@/app/components/Map'), {
  loading: () => <p className='text-white'>Loading...</p>,ssr:false,
})
export default function PageOne() {
  return (
  <div className='flex'>
    <SideBar />
      <div className='ml-96 mt-28 absolute'>
      <DynamicMap/>
      </div>
    </div>
  )
}
