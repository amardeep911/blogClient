import React from "react";
import styles from "./welcome.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LogOutUser } from "../../actions/user_action";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
const Welcome = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  function logOutHandler() {
    dispatch(LogOutUser());
    console.log(user.loggedIn);
  }
  return (
    <div className={styles.container}>
     <div className={styles.main}>
      <div className={styles.blank}></div>
      <div className={styles.blog}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className={styles.blank}></div>
     </div>
    </div>
  );
}

export default Welcome;
