"use client"
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
const Test = ({flyto}) => {
  //ปฎิทิน
  const [date, setDate] = useState("");
  const handleSelectdate = async(e) => {
    const getdate = e.target.value+"T00:00:00.000Z"
    console.log("getdate",getdate)
    const response = await fetch(`http://localhost:3000/api/testsite?targetDate=${getdate}`)
    const filteredData = await response.json()
    console.log("filteredData ค่าข้อมูล 15000",filteredData)
  };



  return (
    <div>
      {/* Calendar */}
    <div className="mt-3">
      <form>
        <div className="row mb-4 ">
          <label className="text-white">
            Select Date
          </label>
          <div>
            <input
              type="date"
              className="text-gray-500 rounded-md h-12 w-36 p-2 outline-0 mt-1"
              name="todate"
              onChange={(e) =>{ handleSelectdate(e); setDate(e.target.value);}}
            />
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}
export default Test
// -------------------------------------------------------------------------

// const [disable, setDisable] = useState(true);
// const [todate, setTodate] = useState([]);
// // const [fromdate, setFromdate] = useState([]);

// const [todateformat, setTodateformat] = useState("");
// // const [fromdateformat, setFromdateformat] = useState("");

// const handletodate = (e) => {
//   const gettodatevalue = e.target.value;
//   const setdateformat = gettodatevalue.split("-");
//   const settoyear = setdateformat[0];
//   const settomonth = setdateformat[1];
//   const settodate = setdateformat[2];
//   const settodateformat = settoyear + "" + settomonth + "" + settodate;
//   setTodate(gettodatevalue);
//   setTodateformat(settodateformat);
//   setDisable(false);
//   //console.log(settodateformat);
// };

// const handlefromdate = (e) => {
//   const getfromdatevalue = e.target.value;
//   const setfromformat = getfromdatevalue.split("-");
//   const setfromyear = setfromformat[0];
//   const setfrommonth = setfromformat[1];
//   const setfromdate = setfromformat[2];
//   const setfromformatdate =
//     setfromyear + "" + setfrommonth + "" + setfromdate;
//   setFromdate(getfromdatevalue);
//   setFromdateformat(setfromformatdate);
//   // console.log(setfromformatdate);
// };
// const handleSubmit = (e) => {
//   e.preventDefault();

  //alert("todate "+todate+ "form date"+ fromdate);

  // if (todateformat > fromdateformat) {
  //   alert("Please select valid date");
  // } else {
  //   alert("Successfull ! Please set API URL");
  // }
// };

// return (
//       <div>
//         <div className="mt-3">
//           <form onSubmit={handleSubmit}>
//             <div className="row mb-4 ">
//               <label className="text-white">
//                 Select Date
//               </label>
//               <div>
//                 <input
//                   type="date"
//                   className="text-gray-500 rounded-md h-12 w-36 p-2 outline-0 mt-1"
//                   name="todate"
//                   onChange={(e) => handletodate(e)}
//                 />
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
// );
// }