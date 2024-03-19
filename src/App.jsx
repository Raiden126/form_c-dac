import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ApplicationWithLoginPage from './pages/ApplicationIntern/ApplicationWithLoginPage'
import AdminPage from './pages/Admin/AdminPage'
import { AuthProvider } from './context/AuthContext'

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/application' element={<ApplicationWithLoginPage />} />
            <Route path='/admin' element = {<AdminPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App