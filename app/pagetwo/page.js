import React from 'react'
import SideBar from '../components/Sidebar'

const page = () => {
  return (
    <div className="flex">
    <SideBar />
    <div>
      <h1 className="text-white">Page two</h1>
    </div>
  </div>
  )
}

export default page