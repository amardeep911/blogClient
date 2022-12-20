import React from 'react'
import LoginForm from './components/LoginForm/LoginForm'
import{Router, Routes, Route} from 'react-router-dom'
import Welcome from './components/welcome/Welcome'
import SignUp from './components/SignUp/SignUp'
import Card from './components/Card/Card'
import Navbar from './components/Navbar/Navbar'
function App() 
{
  return (
    // <Router>
      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/card' element={<Card/>}/>
        <Route path='/homePage' element={<Welcome/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    // </Router>
  )
  }

export default App