"use client"
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
export default function Search() {
  useEffect(() => {
    fetch("http://localhost:3000/api/sitehistorical")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilterData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const handleFilter = (value) => {
    const res = filterData.filter((f) => f.eNodeB_Name.includes(value));
    setData(res);
    if (value === "") {
      setData([]);
    }
  };
  return (
    <div>
      <label className="text-white">
          Select eNodeB
      </label>
      <div className="flex bg-white h-12 w-48 mt-2 border-4 border-green-700 rounded-md outline-0">
        <input
          type="text"
          placeholder="Search eNodeB"
          className="w-32 outline-0 ml-2"
          onChange={(e) => handleFilter(e.target.value)}
        />
        <i className="mt-2 ml-4 text-2xl"><BiSearchAlt /></i>
        
      </div>
      <div className="w-24 mt-2">
        {data.map((d) => (
          <div
            key={d.id}
            className="bg-white w-36 p-2 border-yellow-200 border-4"
          >
            {d.eNodeB_Name}
          </div>
        ))}
      </div>
    </div>
  );
}
