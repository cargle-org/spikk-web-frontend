import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import NotFound from '../404'
import CreateOrder from './create-order'
import OrderLayout from './_components/OrderLayout'

const OrderRoutes = () => {
  return (
    <Routes>
        <Route index element ={<Navigate to={"create"}/>}/>
        <Route element ={<OrderLayout/>}>
            <Route path='/create' element ={<CreateOrder/>} />
        </Route>
        <Route path='/select-picker' element ={<div>select picker</div>} />
        <Route path='/confirm' element ={<div>confirm order</div>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default OrderRoutes