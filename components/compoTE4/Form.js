"use client";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Form = ({ setData, flyto, setGrid, setCellname, setDominant }) => {
  //ปฎิทิน
  const [date, setDate] = useState("");
  const [cell, setCell] = useState("")

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
    const filteredData = await response.json();
    setData(filteredData);
    flyto(filteredData[0].LATITUDE_WGS84, filteredData[0].LONGITUDE_WGS84);

    const responseGrid = await fetch(
      `http://localhost:3000/api/gridhistorical?targetDate=${data}&enodeb=${inputValue}`
    );
    const grid = await responseGrid.json();
    setGrid(grid);
    const groupData = groupKey(grid)
    setCell(groupData)
  };

  function groupKey(cell) {
    const groupedData = Object.values(cell).reduce(function (acc, cur) {
      const groupKey = cur.Cell_Name; // Group by ...
      acc[groupKey] = acc[groupKey] || [];
      acc[groupKey].push(cur);
      return acc;
    }, {});
    return groupedData
  }

  const handleSelect = (event) => {

    const listCellName = event.target.value
    setCellname(cell[listCellName])
  }

  const handleSelectDominant = (event) => {
    const listDominant = event.target.value
    setDominant(listDominant)
  }

  return (
    <div>
      {/* Calendar */}
      <form onSubmit={handleSubmit} className="flex mt-8">
        <div className="mr-5">
          <label className="text-white">Select Date</label>
          <div>
            <input
              type="date"
              className="text-gray-500 rounded-md h-12 w-36 p-2 outline-0"
              name="todate"
              onChange={(e) => {
                handleSelectdate(e);
                setDate(e.target.value);
              }}
            />
          </div>
        </div>

        {/* Search */}
        <div className="mr-5">
          <label className="text-white">Select eNodeB Name</label>
          <div className="flex text-black bg-white h-12 w-48 rounded-md outline-0">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Enter eNodeB"
              className="w-36 outline-0 ml-3"
            />
            <i className="mt-3 text-2xl">
              <BiSearchAlt />
            </i>
          </div>
        </div>
        {
          cell
            ? (
              <div className="mr-5">
                <label className="text-white">Select Cell Name</label>
                <div className="flex text-black bg-white h-12 w-48 rounded-md outline-0">

                  <i className="mt-3 text-l mx-4">
                    <select onChange={handleSelect}>
                      <option defaultChecked >Select Cell Name</option>
                      <option value="null">All</option>
                      {
                      cell && Object.keys(cell).map((item, index) =>
                        <option key={index} value={item}>{item}</option>
                      )
                      }
                    </select>
                  </i>
                </div>

              </div>


            )
            : null
        }
        {
          cell
            ? (
              <div>
                <label className="text-white">Select Dominant</label>
                <div className="flex text-black bg-white h-12 w-48 rounded-md outline-0">

                  <i className="mt-3 text-l mx-4">
                    <select onChange={handleSelectDominant}>
                      <option defaultChecked>Select Dominant</option>
                      <option value="Dominant_RSRP" defaultValue="Dominant_RSRP">Dominant_RSRP</option>
                      <option value="Dominant_RSRQ">Dominant_RSRQ</option>
                    </select>
                  </i>
                </div>
              </div>
            )
            : null
        }

        {/* //Submit */}
        <div className="pb-5 mx-4">
          <button
            type="submit"
            className="mt-5 bg-green-500 h-10 w-20 rounded-md border-2 border-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
