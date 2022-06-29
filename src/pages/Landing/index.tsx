import React from 'react'
import { Route, Routes } from 'react-router'
import PickerSelected from '../BuyAnything/PickerSelected'
import OrderHome from '../Orders/OrderHome'
const Homepage = React.lazy(() => import('./Homepage')) 
const About = React.lazy(() => import('../About/About')) 
const BuyAnything = React.lazy(() => import('../BuyAnything/BuyAnything')) 
const BuyAnythingLocation = React.lazy(() => import('../BuyAnything/BuyAnythingLocation')) 
const BuyAnythingOrderSummary = React.lazy(() => import('../BuyAnything/BuyAnythingOrderSummary')) 
const AvailablePickers = React.lazy(() => import('../BuyAnything/AvailablePickers')) 
const FindingPickers = React.lazy(() => import('../BuyAnything/FindingPickers')) 
const Dashboard = React.lazy(() => import('../Dashboard/Dashboard')) 

const LandingRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element = {<Homepage/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/buy-anything' element = {<BuyAnything/>} />
            <Route path='/buy-anything-location' element = {<BuyAnythingLocation/>} />
            <Route path='/buy-anything-order-summary' element = {<BuyAnythingOrderSummary/>} />
            <Route path='/buy-anything-available-pickers' element = {<AvailablePickers/>} />
            <Route path='/buy-anything-picker-selected' element = {<PickerSelected/>} />
            <Route path='/buy-anything-finding-pickers' element = {<FindingPickers/>} />
            <Route path='/dashboard' element = {<Dashboard/>} />

            FindingPickers
            <Route path='/orders' element = {<OrderHome/>} />

        </Routes>
    </>
  )
}

export default LandingRoutes