import React, { useState } from 'react'

const PersonalInformation = ({formData, handleChange}) => {

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
                <label className='text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Father's Name:
                    <div className='md:flex'>
                        <input
                            type='text'
                            placeholder='Enter First Name'
                            required
                            name='fathersfirstname'
                            value={formData.fathersfirstname}
                            onChange={handleChange}
                            className='border border-black border-solid rounded-md w-11/12 m-1 md:ml-3 p-1 sm:w-10/12 md:h-7 md:w-1/3 md:text-xs' />
                        <input
                            type='text'
                            placeholder='Enter Middle Name'
                            name='fathersmiddlename'
                            value={formData.fathersmiddlename}
                            onChange={handleChange}
                            className='border border-black border-solid rounded-md w-11/12 m-1 md:ml-3 p-1 sm:w-10/12 md:h-7 md:w-1/3 md:text-xs' />
                        <input
                            type='text'
                            placeholder='Enter Last Name'
                            required
                            name='fatherslastname'
                            value={formData.fatherslastname}
                            onChange={handleChange}
                            className='border border-black border-solid rounded-md w-11/12 m-1 md:ml-3 p-1 sm:w-10/12 md:h-7 md:w-1/3 md:text-xs' />
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