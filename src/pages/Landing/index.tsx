import React from 'react'
import { Route, Routes } from 'react-router'
const Hompage = React.lazy(() => import('./Hompage')) 

const LandingRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<Hompage/>} />
        </Routes>
    </>
  )
}

export default LandingRoutes