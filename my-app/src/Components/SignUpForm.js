import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Styles/SignUpForm.css";
import axios from "axios";
import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}/users`;

function SignUpForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const submittedData = async (data) => {
    console.log("register data (in SignUp.js): ", data);
    try {
      const response = await axios.post(USERS_ENDPOINT, data);
      console.log("Sign-up successful:", response.data);
    } catch (error) {
      console.log("an error occured with posting new user: ", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
	console.log("submit button pressed");
    submittedData(formData);
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit} className="register-form">
          <TextField
            id="outlined-basic"
            label="first name"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            required
          />
          <TextField
            id="outlined-basic"
            label="last name"
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            required
          />

          <TextField
            id="outlined-basic"
            label="username"
            variant="outlined"
            value={formData.username}
            onChange={handleChange}
            name="username"
            required
          />

          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
          />

          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            name="password"
            required
          />

          <Button
            sx={{
              borderRadius: "50px",
              width: "50%",
              display: "flex",
              alignSelf: "center",
              height: "50px",
            }}
			type="submit"
            variant="contained"
            disableElevation
          >
            Sign Up
          </Button>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
