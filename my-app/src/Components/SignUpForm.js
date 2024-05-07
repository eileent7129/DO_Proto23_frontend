import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../Styles/SignUpForm.css";

import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}users`;
const RES_HALL_ENDPOINT = `${BACKEND_URL}res_hall`;

function SignUpForm() {
	const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    res_hall: "",
    address: "",
    pronouns: "",
    saved: [],
    shopping_cart: [],
    followers: [],
	following: [],
	res_hall: "",
	address: "",
	pronouns: ""

  });


  const [error, setError] = useState("");
  const [resInfo, setResInfo] = useState("");

  const fetchResInfo = (res_hall) => {
    console.log("fetching address of ", res_hall);
    axios
        .get(`${RES_HALL_ENDPOINT}/${res_hall}`)
        .then(({ data }) => {
          setResInfo(data);
          setFormData({
            ...formData,
            'address' : data.address,
            'res_hall' : data.res_hall,
          });
        })
        .catch(() =>
            setError("There was a problem retrieving the products.")
        );
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  
  const updateHallonChange = (event) => {
    const res_hall = event.target.value;
    if (res_hall !== "Commute" && res_hall !== "") {
      fetchResInfo(res_hall);
    }
  };
  

  const handleRegister = async () => {
    try {
      const response = await axios.post(USERS_ENDPOINT, formData);
      console.log("formData:", formData);
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

          <select 
            id="outlined-basic"
            label="residence" 
            name="res_hall"
            value={formData.residence} 
            onChange={updateHallonChange}
            required>

            <option defaultValue="">Residence hall</option>
            <optgroup label="--- Brooklyn Hall ---">
              <option value="Othmer Hall">Othmer Hall</option>
              <option value="Clark Street">Clark Street</option>
            </optgroup>

            <optgroup label="--- Manhattan Hall ---">
              <option value="Alumni Hall">Alumni Hall</option>
              <option value="Brittany Hall">Brittany Hall</option>
              <option value="Broome Street">Broome Street</option>
              <option value="Carlyle Court">Carlyle Court</option>
              <option value="Coral Tower">Coral Tower</option>
              <option value="Gramercy Green">Gramercy Green</option>
              <option value="Greenwich Hall">Greenwich Hall</option>
              <option value="Lafayette Hall">Lafayette Hall</option>
              <option value="Lipton Hall">Lipton Hall</option>
              <option value="Palladium Hall">Palladium Hall</option>
              <option value="Residential College at Paulson">Residential College at Paulson</option>
              <option value="Rubin Hall">Rubin Hall</option>
              <option value="Second Street">Second Street</option>
              <option value="7th Street">7th Street</option>
              <option value="6th Street">6th Street</option>
              <option value="Third North">Third North</option>
              <option value="University Hall">University Hall</option>
              <option value="Weinstein Hall">Weinstein Hall</option>
            </optgroup>
            
            <optgroup label="--- Grad Housing ---">
              <option value="Washington Square Village">Washington Square Village</option>
              <option value="Stuyvesant Town">Stuyvesant Town</option>
            </optgroup>
          
            <optgroup label="--- Other ---">
              <option value="Commute">Commute</option>
            </optgroup>
          </select>

          <TextField
            id="outlined-basic"
            label="address"
            variant="outlined"
            value={formData.address}
            onChange={handleChange}
            name="address"
            required
            disabled = {formData.res_hall !== "Commute"}
            placeholder = "Ex) Brooklyn, NY 12345"
          />

          <TextField
            id="outlined-basic"
            label="pronouns"
            variant="outlined"
            value={formData.pronouns}
            onChange={handleChange}
            name="pronouns"
            placeholder = "she/her, he/him, they/them, etc."
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
