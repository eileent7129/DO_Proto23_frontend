import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}/users`;
// import "./App.css";


function usersObjectToArray({ Data }) {
  const keys = Object.keys(Data);
  const users = keys.map((key) => Data[key]);
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
	<h2>Login</h2>
	{error && <ErrorMessage message={error} />}
	</>
  );
}

export default Login;
