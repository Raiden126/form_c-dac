import React, { useState } from "react";

const AddSemester = ({ onRemove }) => {
    const [select, setSelect] = useState("");
    const [percentage, setPercentage] = useState("");
    const [maxPercentage, setMaxPercentage] = useState("");

    const handleSelect = (e) => {
        setSelect(e.target.value);
    };

    const handlePercent = (e) => {
        setPercentage(e.target.value);
    };

    const handleMaxPercent = (e) => {
        setMaxPercentage(e.target.value);
    };

    return (
        <div>
            <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Previous Semester:
                <select
                    // required
                    className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5'
                    value={select}
                    onChange={handleSelect}
                >
                    <option value="">Select-An-Option</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </label>
            <div className='md:flex'>
                <div className='md:basis-1/2'>
                    <label className='ml-1 md:ml-3'>Grade Type:
                        <select
                            className='border block border-black border-solid rounded-md w-11/12 ml-1 md:ml-3 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                        >
                            <option value=''>Select-An-Option</option>
                            <option value='Percentage'>Percentage</option>
                            <option value='CGPA'>CGPA</option>
                            <option value='CPI'>CPI</option>
                        </select>
                    </label>
                </div>
                <div className='md:basis-1/2'>
                    <label className='ml-1'>Grade:
                        <input
                            type='text'
                            placeholder='ex: 88% or 8.8'
                            className='border block border-black border-solid rounded-md w-11/12 ml-1 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]'
                        />
                    </label>
                </div>
            </div>
            <button
                className="bg-[#0052CC] border border-solid border-black m-1 h-7 w-24 text-xs md:ml-3 rounded-md text-white hover:bg-white hover:text-[#0052CC]"
                onClick={onRemove}
            >Remove</button>
        </div>
    );
};

export default AddSemester;
