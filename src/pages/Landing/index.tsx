import React from 'react'
import { Route, Routes } from 'react-router'
import PickerSelected from '../Dashboard/BuyAnything/PickerSelected'
import OrderHome from '../Orders/OrderHome'
const Homepage = React.lazy(() => import('./Homepage')) 
// const About = React.lazy(() => import('../About/About')) 
// const BuyAnything = React.lazy(() => import('../Dashboard/BuyAnything/BuyAnything')) 
// const BuyAnythingLocation = React.lazy(() => import('../Dashboard/BuyAnything/BuyAnythingLocation')) 
// const BuyAnythingOrderSummary = React.lazy(() => import('../Dashboard/BuyAnything/BuyAnythingOrderSummary')) 
// const AvailablePickers = React.lazy(() => import('../Dashboard/BuyAnything/AvailablePickers')) 
// const FindingPickers = React.lazy(() => import('../Dashboard/BuyAnything/FindingPickers')) 
// const Dashboard = React.lazy(() => import('../Dashboard/Dashboard')) 

const LandingRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<Homepage/>} />
            {/* <Route path='/about' element = {<About/>} />
            <Route path='/buy-anything' element = {<BuyAnything/>} />
            <Route path='/buy-anything-location' element = {<BuyAnythingLocation/>} />
            <Route path='/buy-anything-order-summary' element = {<BuyAnythingOrderSummary/>} />
            <Route path='/buy-anything-available-pickers' element = {<AvailablePickers/>} />
            <Route path='/buy-anything-picker-selected' element = {<PickerSelected/>} />
            <Route path='/buy-anything-finding-pickers' element = {<FindingPickers/>} /> */}
            FindingPickers
            {/* <Route path='/orders' element = {<OrderHome/>} /> */}

        </Routes>
    </>
  )
}

export default LandingRoutes