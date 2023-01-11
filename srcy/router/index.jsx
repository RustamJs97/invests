import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import { navbarUtils } from '../utilits/navbar'
import Navbar from '../components/Home/Navbar'
const Rout = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {navbarUtils.map(value => {
            return <Route key={value.id} path={value.path} element={value.element} />
          })}
        </Route>
      </Routes>
    </div>
  )
}

export default Rout