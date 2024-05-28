import { useState } from 'react'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Analytic from "./Pages/Analytic"
import './App.css'


import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';

import QuizCreator from './Components/QuizCreator/QuizCreator'
function App() {

  return (
    <>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/dashboard' element={<Dashboard/>}  />
          <Route path="/analytics" element={<Analytic/>}/>
          <Route path='/create' element={<QuizCreator/>}> </Route>
      </Routes>

    </>
  )
}

export default App
