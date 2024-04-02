import React, { useEffect, useState } from "react";
import LoginForm from "../Components/LoginForm";
import "../Styles/Login.css";

import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}/users`;

function Login() {
  return (
    <div className="login">
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="logo">
        <h2>Login to UNIMARKET</h2>
      </div>

      <div className="login-form">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
