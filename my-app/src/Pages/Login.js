import React, { useEffect, useState } from "react";
import LoginForm from "../Components/LoginForm";
import "../Styles/Login.css";
import Navbar from "../Components/Navbar";

import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}/users`;

function Login({logIn}) {
  return (
    <div className="login">
      <Navbar />
      <h1>Login to UNIMARKET</h1>
      <div className="login-form">
        <LoginForm logIn={logIn}/>
      </div>
    </div>
  );
}

export default Login;
