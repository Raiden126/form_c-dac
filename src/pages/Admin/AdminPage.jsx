import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import AdminLogin from '../../components/Login/AdminLogin'
import { AuthContext } from '../../context/AuthContext'
import UserData from '../../components/Admin/UserData'

const AdminPage = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  const handleSubmit = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
        {!isLoggedIn ? (
          <AdminLogin onSubmit={handleSubmit} />
        ) : (<UserData />)
}
    </div>
  )
}

export default AdminPage