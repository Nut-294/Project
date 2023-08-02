import React from 'react'
import SideBar from '@/components/SideBar'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../components/Map'), {
  loading: () => <p className='text-white'>Loading...</p>,ssr:false,
})
function PageOne() {
  return (
   <div className='flex'>
    <SideBar />
      <div className='ml-96 mt-28 absolute'>
      <DynamicMap/>
      </div>
    </div>
  )
}

export default PageOne
