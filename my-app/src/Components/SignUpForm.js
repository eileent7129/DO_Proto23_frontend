import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Styles/SignUpForm.css";

import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}users`;

function SignUpForm() {
	const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    saved: [],
    shopping_cart: [],
    followers: [],
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(USERS_ENDPOINT, formData);
      console.log("User registeration successful:", response.data);
	  navigate("/login");
    } catch (error) {
      setError("There was a problem adding the user.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit button pressed");
	handleRegister();
  };

  return (
    <> 

      <div className="form">
        <form onSubmit={handleSubmit} className="register-form">
          <TextField
            id="outlined-basic"
            label="first name"
            variant="outlined"
            value={formData.first_name}
            onChange={handleChange}
            name="first_name"
            required
          />
          <TextField
            id="outlined-basic"
            label="last name"
            variant="outlined"
            value={formData.last_name}
            onChange={handleChange}
            name="last_name"
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
