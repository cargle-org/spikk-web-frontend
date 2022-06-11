import React from 'react'
import { Route, Routes } from 'react-router'
const Hompage = React.lazy(() => import('./Hompage')) 
const About = React.lazy(() => import('../About/About')) 

const LandingRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<Hompage/>} />
            <Route path='/about' element = {<About/>} />
        </Routes>
    </>
  )
}

export default LandingRoutes