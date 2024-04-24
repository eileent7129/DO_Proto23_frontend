import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Styles/LoginForm.css";
import { BACKEND_URL } from "../constants.js";

const LOGIN_ENDPOINT = `${BACKEND_URL}users/login`;

// function objectToArray(Data) {
//   const keys = Object.keys(Data);
//   const users = keys.map((key) => Data[key]);
//   return users;
// }

function LoginForm({logIn}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async () => {
    // make get request to users
    try {
      const response = await axios.post(LOGIN_ENDPOINT, formData);
      if (response) {
        console.log("Login successful!");
		    logIn(formData.username);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("error logging in: ", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("login data submitted");
    handleLogin();
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit} className="login-form">
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="username"
            name="username"
            onChange={handleChange}
            value={formData.username}
            required
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
