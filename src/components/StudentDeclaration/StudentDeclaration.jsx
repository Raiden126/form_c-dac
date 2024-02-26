import React, { useState } from 'react';

const StudentDeclaration = ({handleChange, formData}) => {

    return (
        <div>
            <h1 className='text-base font-medium mt-4'>Student Declaration</h1>
            <hr className='border border-gray-400 mt-1 mb-1 w-11/12 '/>
            <form action='' method='' className='mt-3'>
                <p className='w-11/12 text-sm m-1 md:ml-3 sm:w-10/12 md:w-11/12 md:text-base lg:w-11/12 lg:text-base'>
                    I declare that the information given above is true to the best of my
                    knowledge & belief. If at any stage, it is found that the information
                    given by me is false, the internship granted to me will be
                    withdrawn, and legal action as deemed fit, may be taken against me.
                </p>
                <div className='md:flex md:justify-end md:items-end md:flex-col'>
                    <h1 className='block text-base font-normal mt-0 ml-1 md:ml-3 mb-1 text-[#1A50B9] mr-10'>Signature Of Student</h1>
                    <label className='inline-block rounded-md border border-black border-solid m-1 md:ml-3 h-7 w-24 bg-[#1A50B9] text-white text-center mr-10 hover:bg-white hover:text-black'>
                        <input
                            type='file'
                            name='studentDeclarationSignature'
                            accept='application/pdf'
                            onChange={handleChange}
                            className='m-1 md:ml-3 hidden '
                        />
                        choose file
                    </label>
                    <p className='text-xs ml-1 md:ml-3 mb-1 md:mr-10'>(Supported Format: pdf)</p>
                    {formData.studentDeclarationSignature && (
                        <h1 className='ml-1 md:ml-3 mb-1 md:mr-10 text-sm'>
                            File uploaded: {formData.studentDeclarationSignature.name}
                        </h1>
                    )}
                </div>
            </form>
        </div>
    )
}

export default StudentDeclaration;
