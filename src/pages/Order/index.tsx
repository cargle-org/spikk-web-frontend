import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
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
    </Routes>
  )
}

export default OrderRoutes