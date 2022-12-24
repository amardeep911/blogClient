import React from "react";
import styles from "./welcome.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../api/USER";
import { LogOutUser } from "../../actions/user_action";
import { LoginUser } from "../../actions/user_action";

const Landing = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getAuth() {
      try {
        const user = await getUser();
        if (!user) {
          dispatch(LogOutUser());
          setLoading(false);
          return;
        }
        dispatch(LoginUser());
        setLoading(true);
        navigate("/homePage");
      } catch (err) {
        console.log(err);
        dispatch(LogOutUser());
        setLoading(false);
      }
    }
    getAuth();
  }, []);
  function logInHandler() {
    navigate("/login");
  }
  function signUpHandler() {
    navigate("/signUp");
  }
  return loading ? (
    "Loading"
  ) : (
    <div className={styles.container}>
      <div className={styles.inner}>
        <button className={styles.logOut} onClick={signUpHandler}>
          SIGNUP
        </button>
        <button className={styles.logOut} onClick={logInHandler}>
          LoGIN
        </button>
        <div className={styles.heading}>
          <h1 className={styles.title}>Landing</h1>
          <h1 className={styles.name}>Amardeep land Ranjan</h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
