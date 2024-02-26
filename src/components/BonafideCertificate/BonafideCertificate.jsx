import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';

const BonafideCertificate = ({formData, handleChange}) => {
    const fileInputRef = useRef(null)

    const handleButton = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    }

    return (
        <div>
            <h1 className='text-base font-medium mt-4'>Bonafide Certificate</h1>
            <hr className='border border-gray-400 mt-1 mb-1 w-11/12 ' />
            <form action='' method='' className='mt-3'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:basis-1/2 lg:ml-16'>
                        <a href='/bonafide.pdf' download className='border border-black border-solid h-8 w-36 text-sm block m-1 md:ml-3 rounded-md bg-[#0052CC] text-center p-1 text-white hover:bg-black hover:text-white'>
                            <FontAwesomeIcon icon={faDownload} className='mr-1' /> Download Form
                        </a>
                        <p className='m-1 md:ml-3 text-xs'>(Download The Form For College/Institute)</p>
                    </div>
                    <div className='md:basis-1/2'>
                        <input
                            type='file'
                            accept='.pdf'
                            name='uploadForm'
                            className='hidden'
                            onChange={handleChange}
                            ref={fileInputRef}
                            required
                        />
                        <button className='border border-black border-solid h-8 w-36 text-sm block m-1 md:ml-3 rounded-md bg-[#0052CC] text-center p-1 text-white hover:bg-black hover:text-white'
                            onClick={handleButton}>
                            <FontAwesomeIcon icon={faUpload} className='mr-1' />
                            Upload Form
                        </button>
                        {formData.uploadForm && (
                            <h1 className='m-1 md:ml-3 text-sm'>
                                File Uploaded: {formData.uploadForm.name}
                            </h1>
                        )}
                        <p className='m-1 md:ml-3 text-xs'>(Upload The Signed Form)</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BonafideCertificate