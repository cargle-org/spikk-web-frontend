import React from 'react'
import { Route, Routes } from 'react-router'
const Homepage = React.lazy(() => import('./Homepage')) 
const About = React.lazy(() => import('../About/About')) 
const BuyAnything = React.lazy(() => import('../BuyAnything/BuyAnything')) 
const BuyAnythingStep2 = React.lazy(() => import('../BuyAnything/BuyAnythingLocation')) 
const BuyAnythingStep3 = React.lazy(() => import('../BuyAnything/BuyAnythingOrderSummary')) 
const AvailablePickers = React.lazy(() => import('../BuyAnything/AvailablePickers')) 

const LandingRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<Homepage/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/buy-anything' element = {<BuyAnything/>} />
            <Route path='/buy-anything-location' element = {<BuyAnythingStep2/>} />
            <Route path='/buy-anything-order-summary' element = {<BuyAnythingStep3/>} />
            <Route path='/buy-anything-available-pickers' element = {<AvailablePickers/>} />
        </Routes>
    </>
  )
}

export default LandingRoutes