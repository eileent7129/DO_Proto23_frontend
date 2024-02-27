import React, { useEffect, useState } from "react";
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
  return <div className="error-message">{message}</div>;
}

function SignUp() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

 

  //   const postUsers = (event) => {
  //     event.preventDefault();
  //     axios.post(USERS_ENDPOINT, {  })
  //       .then(fetchUsers)
  //       .catch(() => { setError('There was a problem adding the user.'); });
  //   };

  //   useEffect(fetchUsers, []);

  console.log();

  return (
    <>
      <SignUpForm />
      {/* <h2>Login</h2> */}
      {error && <ErrorMessage message={error} />}
    </>
  );
}

export default SignUp;
