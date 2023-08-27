import React, { useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";

const FormPredict = ({ setCellname }) => {

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
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:3000/api/CellNameHistorical?targetDate=${data}&enodeb=${inputValue}`)
        const filteredData = await response.json()
        setCellname(filteredData)
    };


    return (
        <div className="flex">
            {/* Calendar */}
            <div className="relative mt-24 ml-72">
                <form onSubmit={handleSubmit}>
                    <div className="row mb-4 ">
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
                    <label className="text-white mt-8">Select eNodeB Name</label>
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

                    {/* //Submit */}
                    <button
                        type="submit"
                        className="mt-6 bg-green-500 h-10 w-20 rounded-md border-2 border-white"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormPredict