'use client'
import React, { useState } from "react";


export default function Calendar(){
  const [disable, setDisable] = useState(true);
  const [todate, setTodate] = useState([]);
  // const [fromdate, setFromdate] = useState([]);

  const [todateformat, setTodateformat] = useState("");
  // const [fromdateformat, setFromdateformat] = useState("");

  const handletodate = (e) => {
    const gettodatevalue = e.target.value;
    const setdateformat = gettodatevalue.split("-");
    const settoyear = setdateformat[0];
    const settomonth = setdateformat[1];
    const settodate = setdateformat[2];
    const settodateformat = settoyear + "" + settomonth + "" + settodate;
    setTodate(gettodatevalue);
    setTodateformat(settodateformat);
    setDisable(false);
    //console.log(settodateformat);
  };

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
  const handleSubmit = (e) => {
    e.preventDefault();

    //alert("todate "+todate+ "form date"+ fromdate);

    // if (todateformat > fromdateformat) {
    //   alert("Please select valid date");
    // } else {
    //   alert("Successfull ! Please set API URL");
    // }
  };

  return (
        <div>
          <div className="mt-3">
            <form onSubmit={handleSubmit}>
              <div className="row mb-4 ">
                <label className="col-sm-2 col-form-label">
                  Select Date
                </label>
                <div className="col-sm-5">
                  <input
                    type="date"
                    className="text-gray-500 rounded-md h-12 w-36 p-2 border-4 outline-0"
                    name="todate"
                    onChange={(e) => handletodate(e)}
                  />
                  
                </div>
              </div>
            </form>
          </div>
        </div>
  );
}
