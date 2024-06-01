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

  const [quizData,setQuizData] = useState([
    { _id: "1", quizName: "Quiz 1", createdOn: "11/22/2022", impression: 122 },
    { _id: "2", quizName: "Quiz 2", createdOn: "11/23/2022", impression: 133 },
    { _id: "3", quizName: "Quiz 3", createdOn: "11/24/2022", impression: 144 },
    { _id: "4", quizName: "Quiz 4", createdOn: "11/25/2022", impression: 155 },
    { _id: "5", quizName: "Quiz 5", createdOn: "11/26/2022", impression: 166 },
    { _id: "6", quizName: "Quiz 6", createdOn: "11/27/2022", impression: 177 },
    { _id: "7", quizName: "Quiz 7", createdOn: "11/25/2022", impression: 155 },
    { _id: "8", quizName: "Quiz 8", createdOn: "11/26/2022", impression: 166 },
]);


let token = localStorage.getItem('token');
const contextValue = { quizData, setQuizData };



  return (
    <>
          <data.Provider value={contextValue}>

      <Routes>

          <Route path='/' element={<Login/>}/>
         {token && <Route path='/signup' element={<Register/>}/>}
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
