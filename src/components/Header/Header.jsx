import React, { useEffect, useState } from 'react'

const Header = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <header className='flex bg-[#1A50B9]'>
                <div className='basis-10'>
                    <img src='/cdac-logo.png' alt='cdac-logo' className='h-10 w-10' />
                </div>
                <div className='basis-10/12 sm:basis-11/12'>
                    <h1 className='text-sm text-white text-center mt-2'>{isMobile > 639 ? 'CENTRE FOR DEVELOPMENT OF ADVANCED COMPUTING(C-DAC), CINE' : 'C-DAC (CINE)'}</h1>
                </div>
                <a href='/admin' className='text-3xl text-black'>Admin</a>
            </header>
        </>
    )
}

export default Header