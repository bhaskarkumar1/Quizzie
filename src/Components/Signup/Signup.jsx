import React from "react";
import signup from "./Signup.module.css"
import { useNavigate } from "react-router-dom";

let signUp=()=>{
    let navigate=useNavigate()
    let handleLogin=()=>{
        navigate("/login")
    }
    
    let handleSignup=()=>{
        navigate("/signup")
    }
    return(
<>
<div className={signup.container}>

        <div className={signup.outerContainer}>

            <div className={signup.innerContainer}>
                    <h1 className={signup.heading}>QUIZZIE</h1>
                    <div className={signup.options}>
                        <div onClick={handleSignup}>Sign Up</div>
                        <div onClick={handleLogin}>Log In</div>
                    </div>
                    <div className={signup.field}>
                        <div className={signup.card}>
                            <label htmlFor="Name"> Name</label>
                            <input type="text" />
                        </div>
                        <div className={signup.card}>
                            <label htmlFor="Name"> Email</label>
                            <input type="text" />
                        </div>
                        <div className={signup.card}>
                            <label htmlFor="Password"> Password</label>
                            <input type="text" />
                        </div>
                        <div className={signup.card}>
                            <label className={signup.cnfemail1} htmlFor="Confirm Passord">Confirm Password</label>
                            <label className={signup.cnfemail2} htmlFor="Confirm Passord">CnfmPwd</label>

                            <input type="text" />
                        </div>
                   </div>

                   <div className={signup.btn}>
                    
                    <button className={signup.signUp}>Sign-Up</button>
                     </div>

            </div>

        </div>


</div>


</>
    )
}


export default signUp