"use client"
import React, { useEffect, useState } from 'react'
import "leaflet/dist/leaflet.css"
import { listgrid } from "./functions/gridhistorical"

export default function Grid({setGrid}) {
  const [data, setData] = useState(null)

    function groupKey(data) {
    const groupedData = Object.values(data).reduce(function (acc, cur) {
      const groupKey = cur.eNodeB_Name; // Group by ...
      acc[groupKey] = acc[groupKey] || [];
      acc[groupKey].push(cur);
      return acc;
    }, {});
    return groupedData
  }

  useEffect(() => {
    loadGrid()
  }, [])

  const loadGrid = () => {
    listgrid()
      .then((res) => {
        setData(res.data)
        const groupData = groupKey(res.data)
        setData(groupData)
      })
      .catch((err) => console.log(err))
  }

  const handleSelect = (event) => {
    
    const namevalue = event.target.value
    setGrid(data[namevalue])
  }

 
  console.log(data)

  return (
    <div>
      <select onChange={handleSelect}>
        {
          data && Object.keys(data).map((item,index)=>
          <option key={index} value={item}>{item}</option>
          )
        }
      </select>
    </div>
  )
}
