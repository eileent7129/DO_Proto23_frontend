import React, { useEffect, useState } from "react";
import LoginForm from "../Components/LoginForm";
import "../Styles/Login.css";

import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}/users`;

function Login({ logIn }) {
  return (
    <div className="login">
      <h1>Login to UNIMARKET</h1>
      <div className="login-form">
        <LoginForm logIn={logIn} />
      </div>
    </div>
  );
}

export default Login;
