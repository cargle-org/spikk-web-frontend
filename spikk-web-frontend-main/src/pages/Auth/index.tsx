import React from 'react'
import { Route, Routes } from 'react-router'
import NotFound from '../404'
const  Login = React.lazy(() => import( './Login'))

const AuthRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/login' element ={<Login/>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default AuthRoutes