"use client";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Swal from "sweetalert2";
const Form = ({ setData, flyto, setGrid, setCellname, setDominant }) => {
  //ปฎิทิน
  const [date, setDate] = useState("");
  const [cell, setCell] = useState("");

  const handleSelectdate = async (e) => {
    const getdate = e.target.value;
    setDate(getdate);
  };

  //ค่าวันที่
  const data = date + "T00:00:00.000Z";

  //เสริซ
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value.toLocaleUpperCase());
  };

  //submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:3000/api/testsite?targetDate=${data}&enodeb=${inputValue}`
    );
    if (!response.ok) {
      console.error("กรุณาเลือกข้อมูล");
      await Swal.fire({
        icon: "warning",
        title: "Incomplete information",
        text: "Please Fill In Complete Information.",
      });
      return;
    }
    const filteredData = await response.json();
    if (filteredData.length === 0) {
      console.error("ไม่พบข้อมูล");
      await Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Please Select eNodeB Name",
      });
      return;
    }


    setData(filteredData);
    flyto(filteredData[0].LATITUDE_WGS84, filteredData[0].LONGITUDE_WGS84);

    const responseGrid = await fetch(
      `http://localhost:3000/api/gridhistorical?targetDate=${data}&enodeb=${inputValue}`
    );
    const grid = await responseGrid.json();
    setGrid(grid);
    const groupData = groupKey(grid);
    setCell(groupData);
  };

  function groupKey(cell) {
    const groupedData = Object.values(cell).reduce(function (acc, cur) {
      const groupKey = cur.Cell_Name; // Group by ...
      acc[groupKey] = acc[groupKey] || [];
      acc[groupKey].push(cur);
      return acc;
    }, {});
    return groupedData;
  }

  const handleSelect = (event) => {
    const listCellName = event.target.value;
    setCellname(cell[listCellName]);
  };

  const handleSelectDominant = (event) => {
    const listDominant = event.target.value;
    setDominant(listDominant);
  };

  return (
    <div>
      {/* Calendar */}
      <form onSubmit={handleSubmit} className="rounded-md px-52 p-2 flex mt-8 ml-20 shadow-inner  shadow-white border-white border-2 bg-gray-700">
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

        {/* Search */}
        <div className="mr-5 mt-1">
          <label className="text-white">Select eNodeB Name</label>
          <div className="flex text-black bg-white h-12 w-48 rounded-md outline-0 border-2 border-slate-200">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter eNodeB"
              className="w-36 outline-0 ml-3 mt-1"
            />
            <i className="mt-3 text-2xl">
              <BiSearchAlt />
            </i>
          </div>
        </div>
        {cell ? (
          <div className="mr-5 mt-1">
            <label className="text-white">Select Cell Name</label>
            <div className="flex text-black bg-white h-12 w-48 rounded-md outline-0 border-2 border-slate-200">
              <i className="mt-3 text-l mx-4">
                <select onChange={handleSelect} className="outline-0" defaultValue="default">
                  <option disabled value="default">Select Cell Name</option>
                  <option value={undefined}>All</option>
                  {cell &&
                    Object.keys(cell).map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
              </i>
            </div>
          </div>
        ) : null}
        {cell ? (
          <div className="mr-5 mt-1">
            <label className="text-white">Select Dominant</label>
            <div className="flex text-black bg-white h-12 w-48 rounded-md outline-0 border-2 border-slate-200">
              <i className="mt-3 text-l mx-4">
                <select onChange={handleSelectDominant} className="outline-0" defaultValue="default">
                  <option disabled value="default">Select Dominant</option>
                  <option value="Dominant_RSRP" defaultValue={undefined}>
                    Dominant_RSRP
                  </option>
                  <option value="Dominant_RSRQ">Dominant_RSRQ</option>
                </select>
              </i>
            </div>
          </div>
        ) : null}

        {/* //Submit */}
        <div className="pb-5 mt-8">
          <button className="btnS">
            <span className="btnSspan">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
