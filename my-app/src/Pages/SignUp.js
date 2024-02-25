import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";
import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}/users`;




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

function SignUp() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const postUsers = () => {
	
  };

//   useEffect(fetchUsers, []);
  console.log("These are the users: ", users);
  console.log()

  return (
	<>
	<SignUpForm/>
	{/* <h2>Login</h2> */}
	{error && <ErrorMessage message={error} />}
	</>
  );
}

export default SignUp;