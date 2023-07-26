import React from 'react'
import SideBar from '@/components/SideBar'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../components/Map'), {
  loading: () => <p>Loading...</p>,ssr:false,
})
function PageOne() {
  return (
   <div className='flex'>
    <SideBar />
      <div className='ml-48 mt-20'>
      <DynamicMap/>
      </div>
    </div>
  )
}

export default PageOne
