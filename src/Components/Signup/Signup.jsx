import React, { useState } from "react";
import signup from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let base=import.meta.env.VITE_BASE_URL

let signUp = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cnfPassword: "",
  });

  let [error, setError] = useState({
    name: "",
    email: "",
    pwd: "",
    cnf: "",
  });
  let formIsValid = true;

  let handleChange = (e) => {
    // console.log("some chages done !")

    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  let handleLogin = () => {
    navigate("/");
  };

  let handleSignup = () => {
    navigate("/signup");
  };

  let handleSubmit = async () => {
    // console.log("submit")
    // console.log(user)
    if (user.name.length >= 3) {
      let pattern =
        /^[a-zA-Z][a-zA-Z]*(?: [a-zA-Z][a-zA-Z]*)*(?:-[a-zA-Z][a-zA-Z]*)*$/;

      if (!pattern.test(user.name)) {
        setError((prev) => ({
          ...prev,
          name: "Invalid Name!",
        }));
        formIsValid = false;

        setUser((prev) => ({ ...prev, name: "" }));

      } else {
        setError((prev) => ({
          ...prev,
          name: "",
        }));
      }
    } else {
      setError((prev) => ({ ...prev, name: "Name is required!" }));
      formIsValid = false;

      setUser((prev) => ({ ...prev, name: "" }));
    }

    // email validation
    if (user.email.length > 4) {
      let pattern = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!pattern.test(user.email)) {
        setError((prev) => ({ ...prev, email: "Invalid Email" }));
        formIsValid = false;

        setUser((prev) => ({ ...prev, email: "" }));
      } else {
        setError((prev) => ({ ...prev, email: "" }));
      }
    } else {
      setError((prev) => ({ ...prev, email: "Email is required!" }));
      formIsValid = false;

      setUser((prev) => ({ ...prev, email: "" }));
    }
    // password validation
    if (user.password && user.cnfPassword) {
      if (user.password.length < 6) {
        setError((prev) => ({ ...prev, pwd: "Weak Password",cnf:"Weak Password" }));
        formIsValid = false;

        setUser((prev) => ({ ...prev, password: "", cnfPassword: "" }));
      } else if (user.password !== user.cnfPassword) {
        setError((prev) => ({
          ...prev,
          pwd: "Password Doesnot match!",
          cnf: "Password Doesnot match!",
        }));
        formIsValid = false;

        setUser((prev) => ({ ...prev, password: "", cnfPassword: "" }));
      } else {
        setError((prev) => ({
          ...prev,
          pwd: "",
          cnf: "",
        }));
      }
    } else {
      if (user.password.length == 0) {
        setError((prev) => ({
          ...prev,
          pwd: "Password Required!",
          cnf: "Password Required!",
        }));
        formIsValid = false;

        setUser((prev) => ({ ...prev, password: "", cnfPassword: "" }));
      }
    }

    console.log(error);

    // if there is no error  then fire a axios post sign up req
    if (formIsValid) {
      try {
        await axios.post(`${base}/auth/signup`, user);
        
        console.log("signup success");
        setUser((prev)=>({...prev,name:"",email:"",password:"",cnfPassword:""}))
        toast.success('SignUp Success!')
        setTimeout(()=>{
            navigate("/")

        },5000)
      } catch (err) {
        console.log("Error while making axios sigup req");
      }
    }
  };
  return (
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
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={(e) => handleChange(e)}
                  placeholder={error.name}
                />
              </div>
              <div className={signup.card}>
                <label htmlFor="Name"> Email</label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={(e) => handleChange(e)}
                  placeholder={error.email}
                />
              </div>
              <div className={signup.card}>
                <label htmlFor="Password"> Password</label>
                <input
                  type="text"
                  name="password"
                  value={user.password}
                  onChange={(e) => handleChange(e)}
                  placeholder={error.pwd}
                />
              </div>
              <div className={signup.card}>
                <label className={signup.cnfemail1} htmlFor="Confirm Password">
                  Confirm Password
                </label>
                <label className={signup.cnfemail2} htmlFor="Confirm Password">
                  CnfmPwd
                </label>

                <input
                  type="text"
                  name="cnfPassword"
                  value={user.cnfPassword}
                  onChange={(e) => handleChange(e)}
                  placeholder={error.cnf}
                />
              </div>
            </div>

            <div className={signup.btn}>
              <button className={signup.signUp} onClick={handleSubmit}>
                Sign-Up
              </button>
              <ToastContainer />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signUp;
