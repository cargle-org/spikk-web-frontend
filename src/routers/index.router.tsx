import React from 'react'
import { Route, Routes } from 'react-router'
import NotFound from '../components/404'
import AuthRoutes from '../pages/Auth'
import LandingRoutes from '../pages/Landing'
import PrivateRoutes from './private.router'
import PublicRoutes from './public.router'

const IndexRouter = () => {
  return (
    <>
        <React.Suspense fallback ={<div>loading</div>}>
        <Routes>
            <Route element ={<PublicRoutes/>}>
            <Route path='/*' element ={<LandingRoutes/>}/>
            <Route path='auth/*' element = {<AuthRoutes/>}/>
            </Route>
            <Route element = {<PrivateRoutes/>}>
            </Route>
            <Route  path='/404' element= {<NotFound/>}/>
        </Routes>
    </React.Suspense>
    </>
  )
}

export default IndexRouter