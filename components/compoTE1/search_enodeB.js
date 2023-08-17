"use client";
import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";

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
      <label className="text-white">Select eNodeB</label>
      <div className="border rounded-md p-2 pr-20 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <input
          type="search"
          placeholder="Search eNodeB"
          className="w-32 outline-0 ml-2"
          onChange={(e) => handleFilter(e.target.value)}
          value={input}
        />
        <i className="mt-2 ml-4 text-2xl">
          <BiSearchAlt />
        </i>
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