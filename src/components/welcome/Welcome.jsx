import React from "react";
import styles from "./welcome.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LogOutUser } from "../../actions/user_action";
const Welcome = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  function logOutHandler() {
    dispatch(LogOutUser());
    console.log(user.loggedIn);
  }
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <button className={styles.logOut} onClick={logOutHandler}>
          LogOut
        </button>
        <div className={styles.heading}>
          <h1 className={styles.title}>Welcome</h1>
          <h1 className={styles.name}>Amardeep Ranjan</h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
