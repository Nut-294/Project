'use client'
//localhost:3000/pTE4-1
import React from 'react'
import SideBar from "@/app/components/compoTE4/Sidebar"
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('@/app/components/compoTE4/Map'), {
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
