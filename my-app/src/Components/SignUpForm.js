import React, { useState } from "react";
import "../Styles/SignUpForm.css";
import axios from "axios";
import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}/users`;

function SignUpForm({onSubmit}) {
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
	submittedData(formData)
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit} className="register-form">
          <label>First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange}
			name="firstName"
            required
          />

          <label>Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange}
			name="lastName"
            required
          />

          <label>username</label>
          <input
            type="text"
            value={formData.username}
            onChange={handleChange}
			name="username"
            required
          />
          <label>email</label>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
			name="email"
            required
          />
          <label>password</label>
          <input
            type="text"
            value={formData.password}
            onChange={handleChange}
			name="password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
