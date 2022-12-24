import React from "react";
import styles from "./loginForm.module.css";
import { useRef, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useNavigate } from "react-router-dom";
import qs from "query-string";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../actions/user_action";
import { useSelector } from "react-redux";
function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email);

  console.log(password);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  function responseHandler(res) {
    console.log(res);
    if (res.data.message !== "userCreated") {
      navigate("/signUp");
    } else {
      dispatch(LoginUser());
      navigate("/homePage");
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .post("http://localhost:8080/auth/login", config, data)
      .then((res) => responseHandler(res))
      .catch((err) => console.log("error"));
  }

  return (
    <div className={styles.formContainer}>
      <div className="innerContainer">
        <form method="POST" onSubmit={submitHandler}>
          <p className={styles.username}>Username</p>
          <input
            type="text"
            name="username"
            id="#"
            className={styles.userInput}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <p className={styles.username}>Password</p>
          <input
            type="text"
            name="password"
            id="#"
            className={styles.userInput}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button className={styles.logInBtn} onClick={submitHandler}>
            LogIn
          </button>
        </form>
        <button
          className={styles.logInBtn}
          onClick={() => {
            navigate("/homePage");
          }}
        >
          welcome
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
