import { useState,createContext } from 'react'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Analytic from "./Pages/Analytic"
import './App.css'


import { Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';

import QuizCreator from './Components/QuizCreator/QuizCreator'

let data=createContext()

function App() {

  const [quizData,setQuizData] = useState([]);


let token = localStorage.getItem('token');
const contextValue = { quizData, setQuizData };



  return (
    <>
          <data.Provider value={contextValue}>

      <Routes>

          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Register/>}/>
        {token &&  <Route path='/dashboard' element={<Dashboard/>}  />}

        {token && <Route path="/analytics" element={<Analytic/>}/>}


          {/* <Route path='/create' element={<QuizCreator/>}> </Route> */}

      </Routes>
      </data.Provider>

    </>
  )
}

export default App
export {data}
