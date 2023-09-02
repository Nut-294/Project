"use client";
import React, { useState } from "react";
import { DataGrid, GridToolbar, GridPagination } from "@mui/x-data-grid";
import { BiSearchAlt } from "react-icons/bi"
import { TablePagination } from '@mui/material'
const columns = [
  { field: "eNodeB_Name", headerName: "eNodeB", width: 80 },
  { field: "Sector", headerName: "Sector", width: 80 },
  { field: "Cell_Name", headerName: "Cell Name", width: 80 },
  { field: "Frequency", headerName: "Frequency", width: 80 },
  { field: "LATITUDE_WGS84", headerName: "LATITUDE", width: 120 },
  { field: "LONGITUDE_WGS84", headerName: "LONGITUDE", width: 120 },
  { field: "ant_height", headerName: "Height", width: 80 },
  { field: "REFERENCESIGNALPWR", headerName: "POWER", width: 80 },
  { field: "m_tilt", headerName: "m tilt", width: 80 },
  { field: "e_tilt", headerName: "e tilt", width: 80 },
  { field: "physical_azimuth", headerName: "Azimuth", width: 80 },
  { field: "horizontal_beam_width", headerName: "eNodeB", width: 80 },
  { field: "ant_gain", headerName: "HBW", width: 80 },
  { field: "ant_logical_beam", headerName: "Beam", width: 80 },
  { field: "ant_model", headerName: "Ant Model", width: 160 },
  { field: "delta_azimuth", headerName: "DAzimuth", width: 100 },
];

const FormPredict = ({ setCellname }) => {
  const [date, setDate] = useState("");
  const [inputValue, setInputValue] = useState("");

  const [ dataTable, setDatatable] = useState([])

  const handleSelectdate = async (e) => {
    const getdate = e.target.value;
    setDate(getdate);
  };

  //ค่าวันที่
  const data = date + "T00:00:00.000Z";

  //เสริซ
  const handleInputChange = (event) => {
    setInputValue(event.target.value.toLocaleUpperCase());
  };

  //submit
  const [CellData, setCellData] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:3000/api/CellNameHistorical?targetDate=${data}&enodeb=${inputValue}`
    );
    const filteredData = await response.json();
    setCellname(filteredData);
    setCellData(filteredData);
  };

  // console.log("CellData", CellData)

  //ตาราง
  const [sortModel, setSortModel] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSortModelChange = (model) => {
    setSortModel(model);
  };

  const handleSelectionModelChange = (id) => {
    setSelectionModel(id)
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSubmitID = async (event) => {
    event.preventDefault();
    const id = parseInt(selectionModel[0], 10);
    
    const response = await fetch(
      `http://localhost:3000/api/IdCellNameHistorical?targetDate=${id}`
    );
    const filteredData = await response.json(); //ข้อมูล cellname
    const cellName = filteredData[0].Cell_Name

    const responsed = await fetch(
      `http://localhost:3000/api/GridPredict?targetDate=${data}&cellName=${cellName}`
    );
    const filteredAllData = await responsed.json(); //ข้อมูลกริดที่กรอง cellname แล้ว

    const combinedData = filteredAllData.map((item) => ({
      ...item,
      cellName : [...filteredData],
    }));
    
    console.log("ข้อมูล cellname",filteredData)
    console.log("ข้อมูลกริดที่กรอง cellname แล้ว",filteredAllData)
    console.log("รวมข้อมูล",combinedData)

  }
 

  return (
    <div>
      {/* ---------------------------------Form--------------------------------------- */}
      {/* Calendar */}
      <form onSubmit={handleSubmit} className="flex mt-8 my-8">
        <div className="mr-5">
          <label className="text-white">Select Date</label>
          <div>
            <input
              type="date"
              className="text-gray-500 rounded-md h-12 w-36 p-2 outline-0 mt-1"
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

        {/* //Submit */}
        <div className="pb-5 my-1">
          <button
            type="submit"
            className="mt-5 bg-green-500 h-10 w-20 rounded-md border-2 border-white"
          >
            Submit
          </button>
        </div>
      </form>
      <div style={{ height: 500, width: 1000, borderRadius: "4px" }} className="bg-white">
        <DataGrid
          rows={CellData}
          columns={columns}
          sortModel={sortModel}
          onSortModelChange={handleSortModelChange}
          selectionModel={selectionModel}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(id) => handleSelectionModelChange(id)}
          components={{
            Toolbar: GridToolbar,
            Pagination: GridPagination,
          }}
          pagination
          pageSize={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
        />
      </div>
      <form onSubmit={handleSubmitID}>
      <div className="pb-5 my-1 flex justify-center items-center" >
        <button
          type="submit"
          className="mt-5 bg-green-500 h-10 w-20 rounded-md border-2 border-white"
        >
          Predict
        </button>
      </div>
      </form>
      


    </div>
  );
};

export default FormPredict;
