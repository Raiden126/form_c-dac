import React, { useState } from 'react'
import ApplicationInternPage from './pages/ApplicationInternPage'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import VerifyPage from './Verify/VerifyPage'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleVerify = () => {
    setIsRegister(false);
  };

  const handleSubmit = () => {
    setIsLoggedIn(true);
    setIsRegister(true);
  };

  return (
    <>
      {!isLoggedIn && !isRegister ? (
        <Login onSubmit={handleSubmit} />
      ) : isRegister ? (
        <VerifyPage onVerify={handleVerify} />
      ) : (
        <>
          <Header />
          <ApplicationInternPage />
        </>
      )}
    </>
  )
}

export default App