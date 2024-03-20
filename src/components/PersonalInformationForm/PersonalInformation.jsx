import React, { useState } from 'react'

const PersonalInformation = ({ formData, handleChange }) => {

    return (
        <div >
            <h1 className='text-base font-medium'>Personal Information</h1>
            <hr className='border border-gray-400 mt-1 mb-1 w-11/12 ' />
            <form action='' method='' className='mt-3'>
                <label className='text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Full Name:
                    <div className='md:flex'>
                        <input
                            type='text'
                            placeholder='Enter First Name'
                            required
                            name='firstname'
                            value={formData.firstname}
                            onChange={handleChange}
                            className='border border-black border-solid rounded-md w-11/12 m-1 md:ml-3 p-1 sm:w-10/12 md:h-7 md:w-1/3 md:text-xs' />
                        <input
                            type='text'
                            placeholder='Enter Middle Name'
                            name='middlename'
                            value={formData.middlename}
                            onChange={handleChange}
                            className='border border-black border-solid rounded-md w-11/12 m-1 md:ml-3 p-1 sm:w-10/12 md:h-7 md:w-1/3 md:text-xs' />
                        <input
                            type='text'
                            placeholder='Enter Last Name'
                            required
                            name='lastname'
                            value={formData.lastname}
                            onChange={handleChange}
                            className='border border-black border-solid rounded-md w-11/12 m-1 md:ml-3 p-1 sm:w-10/12 md:h-7 md:w-1/3 md:text-xs' />
                    </div>
                </label>
                <label className='text-base font-normal mt-0 ml-1 md:ml-3 mb-1 block'>Date Of Birth:
                    <input
                        type='date'
                        required
                        name='dob'
                        value={formData.dob}
                        onChange={handleChange}
                        className='border border-black border-solid rounded-md w-11/12 p-1 block cursor-pointer sm:w-10/12 md:h-7 md:w-1/3 md:text-xs lg:w-1/4' />
                </label>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Father's Name:
                    <div className='md:flex'>
                        <input
                            type='text'
                            placeholder='Enter Full Name'
                            required
                            name='fatherfullname'
                            value={formData.fatherfullname}
                            onChange={handleChange}
                            className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5' />
                    </div>
                </label>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Gender:
                    <select
                        name='gender'
                        value={formData.gender}
                        onChange={handleChange}
                        className='block border border-black border-solid rounded-md w-11/12 p-1 sm:w-10/12 md:h-7 md:w-1/3 md:text-xs lg:w-1/4'>
                        <option value="">Select-an-Option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                </label>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Email ID:
                    <input
                        type='email'
                        placeholder='ex- example@gmail.com'
                        required
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5' />
                </label>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Phone Number:
                    <input
                        type='tel'
                        placeholder='Enter Whatsapp Number'
                        required
                        name='phonenumber'
                        value={formData.phonenumber}
                        onChange={handleChange}
                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5' />
                </label>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Alternate Number:
                    <input
                        type='tel'
                        placeholder='Enter Alt. Number'
                        required
                        name='altphonenumber'
                        value={formData.altphonenumber}
                        onChange={handleChange}
                        className='border border-black border-solid rounded-md w-11/12 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5' />
                </label>
                <div className='md:flex'>
                    <div className='md:basis-1/2'>
                        <label className='ml-1 md:ml-3'>State:
                            <select
                                name='state'
                                value={formData.state}
                                onChange={handleChange}
                                className='block border border-black border-solid rounded-md w-11/12 p-1 ml-1 md:ml-3 md:text-xs md:h-7 md:w-2/3 sm:w-10/12 lg:w-2/4'>
                                <option value="">Select-an-Option</option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </label>
                    </div>
                    <div className='md:basis-1/2'>
                        <label className='ml-1'>District:
                            <input
                                type='text'
                                placeholder='Enter District Name'
                                name='pincode'
                                value={formData.pincode}
                                onChange={handleChange}
                                className='border block border-black border-solid rounded-md w-11/12 ml-1 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]' />
                        </label>
                    </div>
                </div>
                <div className='md:flex'>
                    <div className='md:basis-1/2'>
                    <label className='ml-1 md:ml-3'>City:
                            <input
                                type='text'
                                placeholder='Enter District Name'
                                name='city'
                                value={formData.city}
                                onChange={handleChange}
                                className='border block border-black border-solid rounded-md w-11/12 ml-1 md:ml-3 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]' />
                        </label>
                    </div>
                    <div className='md:basis-1/2'>
                        <label className='ml-1'>PIN Code:
                            <input
                                type='text'
                                placeholder='Enter District Name'
                                name='district'
                                value={formData.district}
                                onChange={handleChange}
                                className='border block border-black border-solid rounded-md w-11/12 ml-1 p-1 sm:w-10/12 md:text-xs md:h-7 md:w-[78%]' />
                        </label>
                    </div>
                </div>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1 text-[#1A50B9]'>Upload Your Photo:
                    <input
                        type='file'
                        accept='image/'
                        name='photo'
                        onChange={handleChange}
                        required
                        className='block w-11/12 sm:w-10/12 md:h-7 md:w-2/3 md:text-xs lg:w-2/5' />
                </label>
                <p className='text-xs ml-1 md:ml-3 mb-1'>(Supported Format: jpeg/jpg/png)</p>
            </form>
        </div>
    )
}

export default PersonalInformation