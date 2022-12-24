import React from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import SignUp from "./components/SignUp/SignUp";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoutes from "./routerutils/PrivateRoutes";
import Landing from "./components/Lanidng/Landing";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/homePage" element={<Welcome />} />
      </Route>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
