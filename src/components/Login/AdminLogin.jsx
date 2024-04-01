import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import bcrypt from 'bcryptjs';

const Login = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const hashedPassword = bcrypt.hashSync('1234', 10);

    const handleLogin = () => {

        if (username === 'Alok Dey' && bcrypt.compareSync(password, hashedPassword)) {
            console.log('Password is correct');
            onSubmit();
        } else {
            console.log('Incorrect password');
        }
    };

    return (
        <main className='flex justify-center items-center h-full flex-col'>
            <div className='h-56 w-60 border-2 border-solid rounded-md shadow-2xl mt-40 mb-5 shadow-slate-400'>
                <h1 className='text-center mb-3 text-lg font-semibold'> Login <FontAwesomeIcon icon={faLock} /></h1>
                <label className='ml-4 font-normal'>User Name
                    <input
                        type='text'
                        placeholder='Enter Your Username'
                        className='h-7 w-3/4 block ml-4 border border-solid border-black rounded-md p-1 mt-1 mb-1'
                        value={username}
                        autoComplete="off"
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                </label>
                <label className='ml-4 font-normal'>Password
                    <input
                        type='password'
                        placeholder='Enter Your Password'
                        className='h-7 w-3/4 block ml-4 border border-solid border-black rounded-md p-1 mt-1 mb-1'
                        value={password}
                        autoComplete="off"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div className='flex justify-center'>
                    <button
                        onClick={handleLogin}
                        className='bg-[#0052CC] border border-solid border-black mr-1 mt-4 h-7 w-24 text-xs rounded-md text-white hover:bg-white hover:text-[#0052CC]'
                    >
                        Login
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Login;
