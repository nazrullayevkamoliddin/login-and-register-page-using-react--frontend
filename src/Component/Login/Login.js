import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  const [state, setState] = useState([]);

  function LoginPage() {
    const { email, parol } = state;
    if (!email || !parol) {
      toast.error("Barcha malumotlarni kiriting");
    } else {
      axios.post("http://localhost:7777/users/login", state).then(() => {
        setTimeout(() => {
          toast.success("Login succes");
          window.location.pathname = "/home";
        });
      });
    }
  }

  return (
    <>
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <div className={styles.left}>
            <form className={styles.form_container}>
              <h1>Login to Your Account</h1>
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
                onChange={e => setState({...state,parol:e.target.value})}
                value={state.parol}
              />
              <button type="submit" onClick={() => LoginPage()} className={styles.green_btn}>
                Sing In
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <h1>New Here ?</h1>
            <Link to="/register">
              <button type="button" className={styles.white_btn}>
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
