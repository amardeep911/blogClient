import React from 'react'
import styles from './SignUp.module.css';
import { useRef, useState } from 'react';

// const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm();
import axios from 'axios'
// import qs from 'query-string'
function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(email);
  console.log(password)
  
  const [submit, setSubmit] = useState(false)

    
 
  console.log(submit)

  function submitHandler (event) {
    event.preventDefault();
    const data = JSON.stringify({
      email: email,
      password: password
    })

  function responseHandler(res){
    console.log(res)
  }
    const config={
      headers: { 
        'Content-Type': 'application/json'
      },
      data:data
    }
    
    axios.post('http://192.168.0.154:8080/signUp',config,data).then(res => responseHandler(res)).catch((err)=> console.log("fsdf"))
  }
  
    
    return (
    <div className={styles.formContainer}>
      <div className="innerContainer">
        <h1>Sign up please</h1>
        <form method='POST' onSubmit={submitHandler}>
       <p className={styles.username}>Email</p>
       <input type="text" name="username" id="1" className={styles.userInput} onChange={(e)=> setEmail(e.target.value)}/>
       <p className={styles.username}>Password</p>
       <input type="text" name="password" id="2" className={styles.userInput} onChange={(e)=> setPassword(e.target.value
        )} />
       {/* <p className={styles.username}>Confirm Password</p>
       <input type="text" name="confirmpassword" id="3" className={styles.userInput} /> */}
       <button className={styles.logInBtn} onClick={submitHandler}>Sign up</button>
       </form>
      </div>
    </div>
  )
}

export default SignUp;