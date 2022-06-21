import React from 'react'
import { Route, Routes } from 'react-router'
const Homepage = React.lazy(() => import('./Homepage')) 
const About = React.lazy(() => import('../About/About')) 
const BuyAnything = React.lazy(() => import('../BuyAnything/BuyAnything')) 
const BuyAnythingStep2 = React.lazy(() => import('../BuyAnything/BuyAnythingStep2')) 

const LandingRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<Homepage/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/buy-anything' element = {<BuyAnything/>} />
            <Route path='/buy-anything-2' element = {<BuyAnythingStep2/>} />

        </Routes>
    </>
  )
}

export default LandingRoutes