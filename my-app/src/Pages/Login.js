import React, { useEffect, useState } from "react";
import LoginForm from "../Components/LoginForm"

import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}/users`;

function Login() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </nav>

      <h2>Login</h2>
	  <LoginForm />
    </>
  );
}

export default Login;
