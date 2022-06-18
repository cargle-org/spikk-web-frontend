import React from 'react'
import { Route, Routes } from 'react-router'
const Hompage = React.lazy(() => import('./Homepage')) 
const About = React.lazy(() => import('../About/About')) 
const BuyAnything = React.lazy(() => import('../BuyAnything/BuyAnything2')) 

const LandingRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<Hompage/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/buy-anything' element = {<BuyAnything/>} />
        </Routes>
    </>
  )
}

export default LandingRoutes