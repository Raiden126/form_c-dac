import React, { useContext, useState } from 'react'
import Login from '../../components/Login/UserLogin'
import VerifyPage from '../../components/Verify/VerifyPage';
import ApplicationInternPage from './ApplicationInternPage';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../components/Header/Header'

const ApplicationWithLoginPage = () => {

  const { isLoggedIn, setIsLoggedIn, isRegister, setIsRegister } = useContext(AuthContext)

  const handleVerify = () => {
    setIsRegister(false);
  };

  const handleSubmit = () => {
    setIsLoggedIn(true);
    setIsRegister(true);
  };
  return (
    <>
      <Header />
      <div>
        {!isLoggedIn && !isRegister ? (
          <Login onSubmit={handleSubmit} />
        ) : isRegister ? (
          <VerifyPage onVerify={handleVerify} />
        ) : (
          <>
            <ApplicationInternPage />
          </>
        )}
      </div>
    </>
  )
}

export default ApplicationWithLoginPage