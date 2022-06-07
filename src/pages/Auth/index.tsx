import React from 'react'
import { Route, Routes } from 'react-router'
const  Login = React.lazy(() => require( './Login'))

const AuthRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/login' element ={<Login/>} />
    </Routes>
    </>
  )
}

export default AuthRoutes