import React from "react";
import signin from "./Signin.module.css"
import { useNavigate } from "react-router-dom";
let SignIn=()=>{

    let navigate=useNavigate()
let handleLogin=()=>{
    navigate("/login")
}

let handleSignup=()=>{
    navigate("/signup")
}


    return(
<>
<div className={signin.container}>

        <div className={signin.outerContainer}>

            <div className={signin.innerContainer}>
                    <h1 className={signin.heading}>QUIZZIE</h1>
                    <div className={signin.options}>
                        <div onClick={handleSignup}>Sign Up</div>
                        <div onClick={handleLogin}>Log In</div>
                    </div>
                    <div className={signin.field}>
                     
                        <div className={signin.card}>
                            <label htmlFor="email" className={signin.email}> Email</label>
                            <input type="text" />
                        </div>
                        <div className={signin.card}>
                            <label htmlFor="Password"> Password</label>
                            <input type="text" />
                        </div>
                   
                   </div>

                   <div className={signin.btn}>
                    
                    <button className={signin.signIn}>Login</button>
                     </div>

            </div>

        </div>


</div>


</>
    )
}


export default SignIn