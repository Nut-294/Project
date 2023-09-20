"use client";
import React, { useState } from "react";
import { DataGrid, GridToolbar, GridPagination } from "@mui/x-data-grid";
import { BiSearchAlt } from "react-icons/bi"
import { TablePagination } from '@mui/material'
const columns = [
  { field: "eNodeB_Name", headerName: "eNodeB", width: 80 },
  { field: "Sector", headerName: "Sector", width: 100 },
  { field: "Cell_Name", headerName: "Cell Name", width: 120 },
  { field: "Frequency", headerName: "Frequency", width: 80 },
  { field: "LATITUDE_WGS84", headerName: "LATITUDE", width: 120 },
  { field: "LONGITUDE_WGS84", headerName: "LONGITUDE", width: 120 },
  { field: "ant_height", headerName: "Height", width: 80 },
  { field: "REFERENCESIGNALPWR", headerName: "POWER", width: 80 },
  { field: "m_tilt", headerName: "m tilt", width: 80 },
  { field: "e_tilt", headerName: "e tilt", width: 80 },
  { field: "physical_azimuth", headerName: "Azimuth", width: 80 },
  { field: "horizontal_beam_width", headerName: "HBW", width: 80 },
  { field: "ant_gain", headerName: "Gain", width: 80 },
  { field: "ant_logical_beam", headerName: "Beam", width: 80 },
  { field: "ant_model", headerName: "Ant Model", width: 160 },
  { field: "delta_azimuth", headerName: "DAzimuth", width: 100 },
];

const FormPredict = ({ setCellname, setCombinedData }) => {
  const [date, setDate] = useState("");
  const [inputValue, setInputValue] = useState("");

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

    const id = selectionModel

    const targetDate = data

    const cellNameData = CellData.filter((item) => id.includes(item.id)); //ข้อมูล cellname จาก id

    const latitude = cellNameData[0].LATITUDE_WGS84
    const longitude = cellNameData[0].LONGITUDE_WGS84


    let gridData = null; // กำหนดค่าเริ่มต้นของ responseData เป็น null

    try {
      const response = await fetch(
        `http://localhost:3000/api/GridPredict?targetDate=${targetDate}&latitude=${latitude}&longitude=${longitude}`
      );
    
      if (response.ok) {
        gridData = await response.json(); // อัปเดตค่า responseData ใน try block
      } else {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล');
      }
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการเรียก API', error);
    }

    const groupedData = cellNameData.reduce((result, cell) => {
      const dataForCell = gridData.map((gridItem) => ({
        Latitude: gridItem.Latitude,
        Longitude: gridItem.Longitude,
        id: gridItem.id,
        eNodeB_Name:cell.eNodeB_Name,
        Sector:cell.Sector,
        Cell_Name: cell.Cell_Name,
        Frequency: cell.Frequency,
        LATITUDE_WGS84:cell.LATITUDE_WGS84,
        LONGITUDE_WGS84:cell.LONGITUDE_WGS84,
        ant_height:cell.ant_height,
        REFERENCESIGNALPWR:cell.REFERENCESIGNALPWR,
        m_tilt:cell.m_tilt,
        e_tilt:cell.e_tilt,
        physical_azimuth:cell.physical_azimuth,
        horizontal_beam_width:cell.horizontal_beam_width,
        ant_gain:cell.ant_gain,
        ant_logical_beam:cell.ant_logical_beam,
        ant_model:cell.ant_model,
        delta_azimuth:cell.delta_azimuth,
      }));
    
      result.push(dataForCell);
      return result;
    }, []);
    
    setCombinedData(groupedData)
    
    console.log("ข้อมูล gridData", gridData); // สามารถเข้าถึง responseData นอก try block
    console.log("ข้อมูล cellname", cellNameData);
  }


  return (
    <div className="">
      {/* ---------------------------------Form--------------------------------------- */}
      {/* Calendar */}
      <form onSubmit={handleSubmit} className="flex mt-8 my-8 z-20 ">
        <div className="mr-5 mt-1">
          <label className="text-white">Select Date</label>
          <div>
            <input
              type="date"
              className="text-gray-500 rounded-md h-12 w-36 p-2 outline-0"
              name="todate"
              min="2021-09-01"
              max="2021-09-06"
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
        <div className="pb-5 mt-8">
        <button className="btnS">
            <span className="btnSspan">Submit</span>
          </button>
        </div>
      </form>

      {/* Table */}
      <div style={{ height: 500, width: 1200, borderRadius: "4px" }} className="bg-white">
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

      {/* Predict */}
      <form onSubmit={handleSubmitID}>
        <div className="pb-5 mt-8 flex justify-center items-center" >
        <button className="btnP">
            <span className="btnPspan">Predict</span>
          </button>
        </div>
      </form>

  


    </div>
  );
};

export default FormPredict;

