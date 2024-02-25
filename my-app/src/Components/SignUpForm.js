import React, { useState } from "react";
import "../Styles/SignUpForm.css";
function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <>
      <div className="form">
        <form className="register-form">
          <label>First Name</label>
          <input type="text" value={firstName} required />

          <label>Last Name</label>
          <input type="text" value={lastName} required />

          <label>username</label>
          <input type="text" value={username} required />
          <label>email</label>
          <input type="text" value={email} required />
          <label>password</label>
          <input type="text" value={password} required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUpForm;
