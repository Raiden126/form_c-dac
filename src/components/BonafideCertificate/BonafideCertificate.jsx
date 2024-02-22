import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';

const BonafideCertificate = () => {
    const [uploadForm, setUploadForm] = useState(null);
    const fileInputRef = useRef(null)

    const handleChange = (e) => {
        const { files } = e.target;
        setUploadForm(files[0])
    }

    const handleButton = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    }

    return (
        <div>
            <h1 className='text-base font-medium m-1 md:ml-3 mt-4'>Bonafide Certificate</h1>
            <hr className='border border-black m-1 md:ml-3 w-11/12' />
            <form action='' method=''>
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
                        {uploadForm && (
                            <h1 className='m-1 md:ml-3 text-sm'>
                                File Uploaded: {uploadForm.name}
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