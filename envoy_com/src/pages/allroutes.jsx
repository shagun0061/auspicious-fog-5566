import React from 'react'
import {Route,Routes} from "react-router-dom"
import Signup from './Signup'
import Landing from '../components/Landing'
import { Login } from './Login'
import { Dashboard } from './Dashboard'
function allroutes() {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Landing/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='dashboard' element={<Dashboard/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
    </Routes>
    </div>
  )
}

export default allroutes