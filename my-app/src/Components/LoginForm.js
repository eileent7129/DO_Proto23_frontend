import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Styles/LoginForm.css";
import { BACKEND_URL } from "../constants.js";

const USERS_ENDPOINT = `${BACKEND_URL}users`;

function objectToArray(Data) {
  const keys = Object.keys(Data);
  const users = keys.map((key) => Data[key]);
  return users;
}

function LoginForm() {
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

  const submittedData = async (loginData) => {
    // make get request to users
    console.log("login data in submittedData", loginData);
    try {
      const response = await axios.get(USERS_ENDPOINT);
      if (response) {
        const data = response.data;
        console.log("response data: ", data);
        const users = objectToArray(data);

        const foundUser = users.find(
          (user) =>
            loginData.username == user.username && loginData.password == user.password
        );

        if (foundUser) {
			console.log("Login successful!")
			navigate('/');
        }
		else {
			console.log(`User with username: ${loginData.username} not found`);
		}
      }
    } catch (e) {
      console.log("error retrieving users: ", e);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("login data submitted");
    submittedData(formData);
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
