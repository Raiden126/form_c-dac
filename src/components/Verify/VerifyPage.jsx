import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const VerifyPage = ({ onVerify }) => {
  const [otp, setOtp] = useState('');

  // const handleVerify = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/email/verify', { otp });
  //     if (response.status === 200) {
  //       onVerify();
  //     }
  //   } catch (error) {
  //     console.error('Failed to verify OTP:', error);
  //   }
  // };

  return (
    <main className='flex justify-center items-center h-full flex-col'>
      <div className='h-40 w-60 border-2 border-solid rounded-md shadow-2xl mt-40 mb-5 shadow-slate-400'>
        <h1 className='text-center mb-3 text-lg font-semibold'>Verify With OTP <FontAwesomeIcon icon={faUnlock} /></h1>
        <label className='ml-4 font-normal'>Enter OTP
          <input
            type='text'
            placeholder='Enter Your OTP'
            className='h-7 w-3/4 block ml-4 border border-solid border-black rounded-md p-1 mt-1 mb-1'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </label>
        <div className='flex justify-center'>
          <button
            // onClick={handleVerify}
            onClick={onVerify}
            className='bg-[#0052CC] border border-solid border-black mr-1 mt-4 h-7 w-24 text-xs rounded-md text-white hover:bg-white hover:text-[#0052CC]'
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
};

export default VerifyPage;
