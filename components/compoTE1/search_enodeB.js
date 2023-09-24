"use client";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
/////////////////////////////////////

////////////////////////////////////////
export default function Search({ flyto }) { 
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [input, setInput] = useState();

  useEffect(() => {
    fetch("http://119.31.121.200:8000/api/simple-site-data/")
      .then((res) => res.json())
      .then((res) => console.log(res))
      .then((data) => {
        setFilterData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilter = (value) => {
    console.log("value", value);
    //res คือ ค่าการค้นหา
    const res = filterData.filter((f) => f.eNodeB_Name.includes(value));
    setData(res);
    if (value === "") {
      setData([]);
    }
  };

  const handleSearch = (value) => {
    if (value) {
      setData([]);
    }
    setInput(input);
  };

  return (
    <div>
      
      <div className="flex space-x-4 items-center justify-center h-20">
      {/* Calendar */}

        <div className="mr-5 mt-1 ">
          <label className="text-white">Select Date</label>
          <div>
            <input
              type="date"
              min="2021-09-01" max="2021-09-06" 
              className="text-gray-500 rounded-md h-12 w-36 p-2 outline-0 border-2 border-slate-200"
              name="todate"
              onChange={(e) => {
                handleSelectdate(e);
                setDate(e.target.value);
              }}
            />
          </div>
        </div>
        
      <div className="mr-5 mt-1 ">
      <label className="text-white">Select eNodeB</label>
      <div className="flex text-black bg-white h-12 w-48 rounded-md outline-0 border-2 border-slate-200">
        <input
          type="search"
          placeholder="eNodeB Name"
          className="w-32 outline-0 ml-2"
          onChange={(e) => handleFilter(e.target.value)}
          value={input}
        />
        <i className="mt-3 ml-4 text-2xl">
          <BiSearchAlt />
        </i>
      </div>
      </div>
      </div>


      <div className="w-24 mt-2">
        {data.map((d) => (
          <div
            key={d.id}
            className="bg-white w-36 p-2 border-yellow-200 border-4"
            onClick={() => {
              flyto(d.LATITUDE_WGS84, d.LONGITUDE_WGS84);
              handleSearch(d.eNodeB_Name);
            }}
          >
            {d.eNodeB_Name}
          </div>
        ))}
      </div>
    </div>
    
  );
}