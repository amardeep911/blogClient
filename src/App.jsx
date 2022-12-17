import React from 'react'
import LoginForm from './components/LoginForm/LoginForm'
import{Router, Routes, Route} from 'react-router-dom'
import Welcome from './components/welcome/Welcome'
import SignUp from './components/SignUp/SignUp'
function App() 
{
  return (
    // <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/homePage' element={<Welcome/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    // </Router>
  )
  }

export default App