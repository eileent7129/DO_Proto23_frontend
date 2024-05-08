import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}users`;

function EditProfileForm() {
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		res_hall: "",
		address: "",
		pronouns: "",
		market_desc: "",
	
	  });

	  const handleChange = (event) => {
		setFormData((prevData) => ({
			...prevData,
			[event.target.name]: event.target.value,
		}));
	  };

	  const handleUpdate = async () => {
		try {
			const username = JSON.parse(localStorage.getItem("userId"));
			const response = await axios.put(`${USERS_ENDPOINT}/${username}`, formData);
			console.log("User profile updated successfully:", response.data);
			navigate("/dashboard");
		  } catch (error) {
			setError("There was a problem updating the user profile.");
		  }
	  }

	  const handleSubmit = (event) => {
		event.preventDefault();
		console.log("save changes button pressed");
		handleUpdate();
	  };

	  return (
		<> 
	
		  <div className="form">
			<form onSubmit={handleSubmit} className="edit-profile-form">
			  <p>First Name:</p>
			  <TextField
				id="outlined-basic"
				variant="outlined"
				value={formData.first_name}
				onChange={handleChange}
				name="first_name"
			  />
			  <p>Last Name:</p>
			  <TextField
				id="outlined-basic"
				variant="outlined"
				value={formData.last_name}
				onChange={handleChange}
				name="last_name"
			  />
			  <p>Residence Hall:</p>
			  <TextField
				id="outlined-basic"
				variant="outlined"
				value={formData.res_hall}
				onChange={handleChange}
				name="res_hall"
			  />
			 <p>Address:</p>
			  <TextField
				id="outlined-basic"
				variant="outlined"
				value={formData.address}
				onChange={handleChange}
				name="address"
			  />
			  <p>Pronouns:</p>
			  <TextField
				id="outlined-basic"
				variant="outlined"
				value={formData.pronouns}
				onChange={handleChange}
				name="pronouns"
			  />
			  <p>Market Description:</p>
			  <TextField
				id="outlined-basic"
				variant="outlined"
				value={formData.market_desc}
				onChange={handleChange}
				name="market_desc"
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
				Save changes
			  </Button>
			</form>
		  </div>
		</>
	  );
}

export default EditProfileForm;