import React, { useState } from 'react'

const TermsAndCondition = ({ onSubmit, formData, handleChange }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    }

    return (
        <div>
            <h1 className='text-base font-medium mt-4'>Terms & Condition</h1>
            <hr className='border border-gray-400 mt-1 mb-1 w-11/12 ' />
            <form method='' action='' className='mt-3'>
                <ol className='list-decimal pl-6 md:ml-3 pr-6 leading-5 text-sm md:text-base md:leading-7'>
                    <li>
                        The internship is for educational purpose only, and there is
                        no guarantee or expectation that the activity will result in
                        employment with the organization. The education received by
                        the intern from the internship is for the express bnefit of
                        the intern.
                    </li>
                    <li>
                        Any medical expenses incurred during the internship period
                        will be borne by the intern. C-DAC will not be responsible
                        towards any medical expenses.
                    </li>
                    <li>
                        Expenses related to any travel, local accommodation and
                        transport shall be borne by the intern.
                    </li>
                    <li>
                        C-DAC shall bot e responsible for any loss/ damage/
                        physical/ economical incurred during the internship period
                        at C-DAC, Silchar.
                    </li>
                    <li>
                        If selected, the intern shall follow C-DAC rules and conform
                        to the values and work ethics of the organization.
                    </li>
                </ol>
                <label className='text-xs m-1 md:ml-3 block md:text-base' >
                    <input
                        type='checkbox'
                        className='m-1 md:ml-3'
                        name='termsAndConditionAccepted'
                        id='termsAndConditionAccepted'
                        // checked = {formData.termsAndConditionAccepted}
                        // onChange={handleTerms}
                    />I Agree To The Above Terms and Condition
                </label>
                <label className='text-base font-normal mt-0 ml-1 md:ml-3 mb-1 block'>Date:
                    <input
                        type='date'
                        name='termsDob'
                        value={formData.termsDob}
                        onChange={handleChange}
                        className='border border-black border-solid rounded-md w-9/12 h-7 p-1 block cursor-pointer sm:w-10/12 md:h-7 md:w-1/3 md:text-xs lg:w-1/4' />
                </label>
                <label className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1'>Place:
                    <input
                        type='text'
                        placeholder='Enter your place name'
                        value={formData.termsPlace}
                        onChange={handleChange}
                        name='termsPlace'
                        className='border border-black text-xs sm:text-base border-solid rounded-md w-9/12 h-7 block p-1 sm:w-10/12 md:h-7 md:w-2/5 md:text-xs lg:w-2/5' />
                </label>
                <h1 className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1 text-[#1A50B9]'>Signature Of Student</h1>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:basis-1/2 md:ml-10 lg:ml-16'>
                        <label className='inline-block rounded-md border border-black border-solid m-1 h-7 w-24 bg-[#1A50B9] text-white text-center mr-10 hover:bg-white hover:text-black'>
                            <input
                                type='file'
                                accept='image/'
                                onChange={handleChange}
                                name='studentTermsAndCondition'
                                className='m-1 hidden'
                            />
                            choose file
                        </label>
                        <p className='text-xs ml-1 mb-1'>(Supported Format: jpg/jpeg/png)</p>
                        {formData.studentTermsAndCondition && (
                            <h1 className='ml-1 mb-1 md:mr-10 text-sm'>
                                File uploaded: {formData.studentTermsAndCondition.name}
                            </h1>
                        )}
                    </div>
                    <div className='md:basis-1/2 md:ml-10 lg:ml-14'>
                        <button
                            type='submit'
                            onClick={handleSubmit}
                            className="bg-[#0052CC] border border-solid border-black m-1 h-8 w-16 rounded-md text-white hover:bg-white hover:text-[#0052CC]"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TermsAndCondition