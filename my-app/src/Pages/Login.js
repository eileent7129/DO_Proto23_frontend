import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BACKEND_URL } from "../constants";
import Home from "./Home";
import SignUp from "./SignUp";
const USERS_ENDPOINT = `${BACKEND_URL}/users`;
// import "./App.css";


function usersObjectToArray(Data) {
  const keys = Object.keys(Data);
  console.log("data: ", Data);
  const users = keys.map((key) => Data[key]);
  console.log("users: ", users);
  return users;
}

function ErrorMessage({ message }) {
	return (
	  <div className="error-message">
		{message}
	  </div>
	);
}

function Login() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const fetchUsers = () => {
	console.log("fetching users");
    axios
      .get(USERS_ENDPOINT)
      .then(({ data }) => setUsers(usersObjectToArray(data)))
      .catch(() =>
        setError("There was a problem retrieving the users.")
      );
  };

  useEffect(fetchUsers, []);
  console.log("These are the users: ", users);
  console.log()

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
      {error && <ErrorMessage message={error} />}

      <Router>
        <Routes>
          <Route path="/login" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default Login;
