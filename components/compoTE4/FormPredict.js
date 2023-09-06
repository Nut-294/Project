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

    const filteredData = id.map(async (id) => {
      const response = await fetch(
        `http://localhost:3000/api/IdCellNameHistorical?targetDate=${id}`
      );
      return response.json();
    });

    const dataArray = await Promise.all(filteredData); //ข้อมูล cellname

    const cellNames = dataArray.map(item => item[0].Cell_Name);
    const targetDate = data
    const responsed = [];

    for (const cellName of cellNames) {
      const response = await fetch(
        `http://localhost:3000/api/GridPredict?targetDate=${targetDate}&cellName=${cellName}`
      );
      const data = await response.json();
      responsed.push(data); //ข้อมูลกริด
    }

    // สร้าง Map เพื่อเก็บข้อมูล Frequency จาก cellnamedata
    const frequencyMap = new Map();
    const LATITUDE_WGS84Map = new Map();
    const LONGITUDE_WGS84Map = new Map();
    const ant_heightMap = new Map();
    const REFERENCESIGNALPWRMap = new Map();
    const m_tiltMap = new Map();
    const e_tiltMap = new Map();
    const physical_azimuthMap = new Map();
    const horizontal_beam_widthMap = new Map();
    const ant_gainMap = new Map();
    const ant_logical_beamMap = new Map();
    const ant_modelMap = new Map();
    const delta_azimuthMap = new Map();

    dataArray.forEach(item => {
      const cellName = item[0].Cell_Name;
      const Frequency = item[0].Frequency;
      const LATITUDE_WGS84 = item[0].LATITUDE_WGS84;
      const LONGITUDE_WGS84 = item[0].LONGITUDE_WGS84;
      const ant_height = item[0].ant_height;
      const REFERENCESIGNALPWR = item[0].REFERENCESIGNALPWR;
      const m_tilt = item[0].m_tilt;
      const e_tilt = item[0].e_tilt;
      const physical_azimuth = item[0].physical_azimuth;
      const horizontal_beam_width = item[0].horizontal_beam_width;
      const ant_gain = item[0].ant_gain;
      const ant_logical_beam = item[0].ant_logical_beam;
      const ant_model = item[0].ant_model;
      const delta_azimuth = item[0].delta_azimuth;

      frequencyMap.set(cellName, Frequency);
      LATITUDE_WGS84Map.set(cellName, LATITUDE_WGS84);
      LONGITUDE_WGS84Map.set(cellName, LONGITUDE_WGS84);
      ant_heightMap.set(cellName, ant_height);
      REFERENCESIGNALPWRMap.set(cellName, REFERENCESIGNALPWR);
      m_tiltMap.set(cellName, m_tilt);
      e_tiltMap.set(cellName, e_tilt);
      physical_azimuthMap.set(cellName, physical_azimuth);
      horizontal_beam_widthMap.set(cellName, horizontal_beam_width);
      ant_gainMap.set(cellName, ant_gain);
      ant_logical_beamMap.set(cellName, ant_logical_beam);
      ant_modelMap.set(cellName, ant_model);
      delta_azimuthMap.set(cellName, delta_azimuth);

    });

    // รวมข้อมูลจาก griddata และ cellnamedata โดยใช้ map
    const mergedData = responsed.map(gridItem => {
      return gridItem.map(item => ({
        id: item.id,
        Dominant_RSRP: item.Dominant_RSRP,
        Dominant_RSRQ: item.Dominant_RSRQ,
        Latitude: item.Latitude,
        Longitude: item.Longitude,
        Sector: item.Sector,
        Time: item.Time,
        eNodeB_Name: item.eNodeB_Name,
        Cell_Name: item.Cell_Name,
        Frequency: frequencyMap.get(item.Cell_Name) || "",
        LATITUDE_WGS84: LATITUDE_WGS84Map.get(item.Cell_Name) || "",
        LONGITUDE_WGS84: LONGITUDE_WGS84Map.get(item.Cell_Name) || "",
        ant_height: ant_heightMap.get(item.Cell_Name) || "",
        REFERENCESIGNALPWR: REFERENCESIGNALPWRMap.get(item.Cell_Name) || "",
        m_tilt: m_tiltMap.get(item.Cell_Name) || "",
        e_tilt: e_tiltMap.get(item.Cell_Name) || "",
        physical_azimuth: physical_azimuthMap.get(item.Cell_Name) || "",
        horizontal_beam_width: horizontal_beam_widthMap.get(item.Cell_Name) || "",
        ant_gain: ant_gainMap.get(item.Cell_Name) || "",
        ant_logical_beam: ant_logical_beamMap.get(item.Cell_Name) || "",
        ant_model: ant_modelMap.get(item.Cell_Name) || "",
        delta_azimuth: delta_azimuthMap.get(item.Cell_Name) || 0,

      }));
    });

    setCombinedData(mergedData)
    console.log("ข้อมูล grid", responsed)
    console.log("ข้อมูล Cellname", dataArray)
    
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

// const combinedData = filteredAllData.map((item) => ({
    //   ...item,
    //   cellName: [...filteredData],
    // }));