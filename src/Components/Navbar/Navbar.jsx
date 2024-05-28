import { useState } from "react"
import nav from "./Navbar.module.css"
import { useNavigate } from "react-router-dom"
import QuizModal from "../Modals/QuizModal/QuizModal"
let Navbar=()=>{

let navigate=useNavigate()
let[isCreate,setCreate]=useState(false)

let handleDashboard=()=>{
    navigate("/dashboard")
}

let handleAnalytics=()=>{
    navigate("/analytics")
}

let handleCreate=()=>{
    // navigate("/dashboard")
    setCreate(true)
}



    return(
        <>
        <div className={nav.container}>
            <div className={nav.heading}>
                <h1 className={nav.quizzie}>QUIZZIE</h1>
            </div>


            <div className={nav.options}>
                <div onClick={handleDashboard} className={nav.dashboard}>
                    <p>Dashboard</p>
                </div>
                <div onClick={handleAnalytics} className={nav.analytics}>
                    <p>Analytics</p>
                </div>
                <div onClick={handleCreate} className={nav.create}>
                    <p>Create Quiz</p>
                </div>
            </div>

            <div className={nav.logout}>
                <div>
                    <hr />
                </div>

                <div>
                    <p>LOGOUT</p>
                </div>

            </div>

        </div>
        {isCreate && <div className={nav.another}></div>}
      { isCreate && <QuizModal setCreate={setCreate}/>}

        </>

    )
}

export default Navbar