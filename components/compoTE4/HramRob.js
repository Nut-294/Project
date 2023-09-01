import React, { useState, useEffect } from "react";
// import { BiSearchAlt } from "react-icons/bi";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";

// const columns = [
//   {
//     id: "eNodeB_Name",
//     label: "eNodeB",
//     minWidth: 50,
//     align: "right",
//   },
//   {
//     id: "Sector",
//     label: "Sector",
//     minWidth: 50,
//     align: "right",
//   },
//   {
//     id: "Cell_Name",
//     label: "Cell Name",
//     minWidth: 100,
//     align: "right",
//   },
//   {
//     id: "Frequency",
//     label: "Frequency",
//     minWidth: 100,
//     align: "right",
//   },
//   {
//     id: "LATITUDE_WGS84",
//     label: " LATITUDE",
//     minWidth: 100,
//     align: "right",
//   },
//   {
//     id: "LONGITUDE_WGS84",
//     label: "LONGITUDE",
//     minWidth: 100,
//     align: "right",
//   },
//   {
//     id: "ant_height",
//     label: "Height ",
//     minWidth: 50,
//     align: "right",
//   },
//   {
//     id: "REFERENCESIGNALPWR",
//     label: "POWER",
//     minWidth: 50,
//     align: "right",
//   },
//   {
//     id: "m_tilt",
//     label: "m tilt",
//     minWidth: 70,
//     align: "right",
//   },
//   {
//     id: "e_tilt",
//     label: "e tilt",
//     minWidth: 70,
//     align: "right",
//   },
//   {
//     id: "physical_azimuth",
//     label: "Azimuth",
//     minWidth: 100,
//     align: "right",
//   },
//   {
//     id: "horizontal_beam_width",
//     label: "HBW",
//     minWidth: 100,
//     align: "right",
//   },
//   {
//     id: "ant_gain",
//     label: "Gain",
//     minWidth: 50,
//     align: "right",
//   },
//   {
//     id: "ant_logical_beam",
//     label: "Beam",
//     minWidth: 100,
//     align: "right",
//   },
//   {
//     id: "ant_model",
//     label: "Ant Model",
//     minWidth: 100,
//     align: "right",
//   },
//   {
//     id: "delta_azimuth",
//     label: "DAzimuth",
//     minWidth: 100,
//     align: "right",
//   },
// ];
// const FormPredict = ({ setCellname }) => {
//   const [date, setDate] = useState("");
//   const [inputValue, setInputValue] = useState("");

//   const handleSelectdate = async (e) => {
//     const getdate = e.target.value;
//     setDate(getdate);
//   };

//   //ค่าวันที่
//   const data = date + "T00:00:00.000Z";

//   //เสริซ
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value.toLocaleUpperCase());
//   };

//   //submit
//   const [CellData, setCellData] = useState([]);
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const response = await fetch(
//       `http://localhost:3000/api/CellNameHistorical?targetDate=${data}&enodeb=${inputValue}`
//     );
//     const filteredData = await response.json();
//     setCellname(filteredData);
//     setCellData(filteredData);
//   };

//   //ตาราง
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   console.log("FilterData", CellData);
//   return (
//     <div>
//       {/* ---------------------------------Form--------------------------------------- */}
//       <div>
//         {/* Calendar */}
//         <form onSubmit={handleSubmit} className="flex mt-8">
//           <div className="mr-5">
//             <label className="text-white">Select Date</label>
//             <div>
//               <input
//                 type="date"
//                 className="text-gray-500 rounded-md h-12 w-36 p-2 outline-0 mt-1"
//                 name="todate"
//                 onChange={(e) => {
//                   handleSelectdate(e);
//                   setDate(e.target.value);
//                 }}
//               />
//             </div>
//           </div>

//           {/* Search */}
//           <div className="mr-5 mt-1">
//             <label className="text-white">Select eNodeB Name</label>
//             <div className="flex text-black bg-white h-12 w-48 rounded-md outline-0">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 placeholder="Enter eNodeB"
//                 className="w-36 outline-0 ml-3"
//               />
//               <i className="mt-3 text-2xl">
//                 <BiSearchAlt />
//               </i>
//             </div>
//           </div>

//           {/* //Submit */}
//           <div className="pb-5">
//             <button
//               type="submit"
//               className="mt-5 bg-green-500 h-10 w-20 rounded-md border-2 border-white"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//       {/* ---------------------------------------------------Form------------------------------------------------------------- */}

//       {/*--------------------------------------------------- Table----------------------------------------------- */}
//       <div>
//         <Paper sx={{ width: "80%" }}>
//           <TableContainer sx={{ maxHeight: 440 }}>
//             <Table stickyHeader aria-label="sticky table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell align="center" colSpan={8}>
//                     เขียนสักอย่าง
//                   </TableCell>
//                   <TableCell align="center" colSpan={8}>
//                     colSpan=จำนวนช่องที่คล่อม
//                   </TableCell>
//                 </TableRow>

//                 {/* หัวตาราง */}
//                 <TableRow>
//                   {columns.map((column) => (
//                     <TableCell
//                       key={column.id}
//                       align={column.align}
//                       style={{ top: 57, minWidth: column.minWidth }}
//                     >
//                       {column.label}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>

//               {/* เนื้อหาตาราง */}
//               <TableBody>
//                 {CellData
//                 .slice(
//                   page * rowsPerPage,
//                   page * rowsPerPage + rowsPerPage
//                 ).map((row) => {
//                   return (
//                     <TableRow
//                       hover
//                       role="checkbox"
//                       tabIndex={-1}
//                       key={row.code}
//                     >
//                       {columns.map((column) => {
//                         const value = row[column.id];
//                         return (
//                           <TableCell key={column.id} align={column.align}>
//                             {column.format && typeof value === "number"
//                               ? column.format(value)
//                               : value}
//                           </TableCell>
//                         );
//                       })}
//                     </TableRow>
//                   );
//                 })}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <TablePagination
//             rowsPerPageOptions={[10, 25, 100]}
//             component="div"
//             count={CellData.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </Paper>
//       </div>
//     </div>
//   );
// };

// export default FormPredict;
