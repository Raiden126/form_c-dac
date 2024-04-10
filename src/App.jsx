import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplicationWithLoginPage from "./pages/ApplicationIntern/ApplicationWithLoginPage";
import AdminPage from "./pages/Admin/AdminPage";
import { AuthProvider } from "./context/AuthContext";
import ApplicationInternPage from "./pages/ApplicationIntern/ApplicationInternPage";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <AuthProvider>
          <Routes>
            {/* <Route path='/application' element={<ApplicationWithLoginPage />} /> */}
            <Route path="/application" element={<ApplicationInternPage />} />
            <Route path="/" element={<AdminPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
