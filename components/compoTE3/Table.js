import React from 'react'
import { DataGrid,GridToolbar,Gridpagination } from '@mui/x-data-grid';

const columns = [
  { field: "MSI_File", headerName: "MSI File", width: 80 },
  { field: "Antenna_Model", headerName: "Antenna Model", width: 100 },
  { field: "Antenna_Model_Gain", headerName: "Antenna Model Gain", width: 120 },
  { field: "Frequency", headerName: "Frequency", width: 80 },
  { field: "e_tilt", headerName: "e-tilt", width: 80 },
  { field: "Delta_Azimuth", headerName: "Delta Azimuth", width: 120 },
  { field: "Radiation_Patter_2D", headerName: "Radiation Pattern 2D", width: 120 },
  { field: "Radiation_Pattern_3D", headerName: "Radiation Pattern 3D", width: 120 },
];






export default function g() {
  return (
    <div>
      g
    </div>
  )
}
