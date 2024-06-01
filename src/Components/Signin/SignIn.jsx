import React, { useState } from "react";
import signin from "./Signin.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let SignIn = () => {
  let navigate = useNavigate();
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let [error, setError] = useState({
    email: "",
    password: "",
  });
  let formIsValid = true;
  let handleChange = (e) => {
    // console.log(e.target.value)
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let handleSubmit = async () => {
    let pattern = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (user.email.length == 0) {
      setError((prev) => ({ ...prev, email: "Email Required!" }));
      formIsValid = false;
      setUser((prev) => ({ ...prev, email: "" }));
    } else if (!pattern.test(user.email)) {
      setError((prev) => ({ ...prev, email: "Invalid Email" }));
      formIsValid = false;

      setUser((prev) => ({ ...prev, email: "" }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }
    if (user.password.length === 0) {
      setError((prev) => ({ ...prev, password: "Password Required!" }));
      formIsValid = false;

      setUser((prev) => ({ ...prev, password: "" }));
    } else if (user.password.length < 6) {
      setError((prev) => ({ ...prev, password: "Invaid Password" }));
      formIsValid = false;

      setUser((prev) => ({ ...prev, password: "" }));
    } else {
      setError((prev) => ({ ...prev, password: "" }));
    }

    if (formIsValid) {
      try {
        let response = await axios.post(
          "http://localhost:7000/auth/login",
          user
        );
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          toast.success("Login Successful!");
          console.log("login Success");
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          console.log("Invalid Credentials !");
          toast.error("Invalid Credentials!");
        }
      } catch (err) {
        console.log("Error in Login");
      }
    }

    // console.log(user)
  };

  let handleLogin = () => {
    navigate("/");
  };

  let handleSignup = () => {
    navigate("/signup");
  };

  return (
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
                <label htmlFor="email" className={signin.email}>
                  {" "}
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={(e) => handleChange(e)}
                  placeholder={error.email}
                />
              </div>
              <div className={signin.card}>
                <label htmlFor="Password"> Password</label>
                <input
                  type="text"
                  name="password"
                  value={user.password}
                  onChange={(e) => handleChange(e)}
                  placeholder={error.password}
                />
              </div>
            </div>

            <div className={signin.btn}>
              <button onClick={handleSubmit} className={signin.signIn}>
                Login
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
