import React from 'react'
import Hearder from '../Ui/Hearder'
import Footer from '../Ui/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
   <>
   <Hearder/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default AppLayout