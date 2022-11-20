import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Register = () => {
  const [state, setState] = useState([]);

  function RegisterPage() {
    const { email, parol, ism, familya } = state;
    if (!email || !parol || !ism || !familya) {
      toast.error(`Barcha malumotlarni kiriting!!!`);
    } else {
      axios.post("http://localhost:7777/users/register", state).then(() => {
        setTimeout(() => {
          toast.success("Register succes");
          window.location.pathname = "/login";
        });
      });
    }
  }

  return (
    <>
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <h1>Welcome Back</h1>
            <Link to="/login">
              <button type="button" className={styles.white_btn}>
                Login
              </button>
            </Link>
          </div>
          <div className={styles.right}>
            <form className={styles.form_container}>
              <h1>Create Account</h1>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                required
                className={styles.input}
                onChange={e => setState({...state, ism:e.target.value})}
                value={state.ism}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                required
                className={styles.input}
                onChange={e => setState({...state, familya:e.target.value})}
                value={state.familya}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className={styles.input}
                onChange={e => setState({...state, email:e.target.value})}
                value={state.email}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                className={styles.input}
                onChange={e => setState({...state, parol:e.target.value})}
              />
              <button type="submit" onClick={()=> RegisterPage()} className={styles.green_btn}>
                Register
              </button>
            </form>
            <ToastContainer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
