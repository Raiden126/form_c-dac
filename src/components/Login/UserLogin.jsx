import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Login = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/email/otp', { email });
  //     if (response.status === 200) {
  //       onSubmit();
  //     }
  //   } catch (error) {
  //     console.error('Failed to send OTP:', error);
  //   }
  // };

  return (
    <main className='flex justify-center items-center h-full flex-col'>
      <div className='h-56 w-60 border-2 border-solid rounded-md shadow-2xl mt-40 mb-5 shadow-slate-400'>
        <h1 className='text-center mb-3 text-lg font-semibold'> Register <FontAwesomeIcon icon={faLock} /></h1>
        <label className='ml-4 font-normal'>Email ID
          <input
            type='text'
            placeholder='Enter Your Email'
            className='h-7 w-3/4 block ml-4 border border-solid border-black rounded-md p-1 mt-1 mb-1'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className='ml-4 font-normal'>Phone No.
          <input
            type='text'
            placeholder='Enter Your Phone No'
            className='h-7 w-3/4 block ml-4  border border-solid border-black rounded-md p-1 mt-1 mb-1'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <div className='flex justify-center'>
          <button
            // onClick={handleSubmit}
            onClick={onSubmit}
            className='bg-[#0052CC] border border-solid border-black mr-1 mt-4 h-7 w-24 text-xs rounded-md text-white hover:bg-white hover:text-[#0052CC]'
          >
            Verify
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
