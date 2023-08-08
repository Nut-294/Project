'use client'
import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
export default function Search() {
  return (
    <div>
    <div className="mt-3">
      <form>
        
          <div className="bg-white p-2 flex rounded-md h-12 w-40 p-2 border-yellow-200 border-4 outline-0">
            <input
              type="text"
              className="outline-0 w-24 ml-2"
              placeholder='Search'
            />
            <div className='text-2xl'><BiSearchAlt/></div>
          </div>
        
      </form>
    </div>
  </div>
  )
}
