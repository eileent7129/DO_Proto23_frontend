import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}users`;
const RES_HALL_ENDPOINT = `${BACKEND_URL}res_hall`;

function EditProfileForm() {
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const [resInfo, setResInfo] = useState("");
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		res_hall: "",
		address: "",
		pronouns: "",
		market_desc: "",
	
	  });

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
	  const updateHallonChange = (event) => {
		const res_hall = event.target.value;
		if (res_hall !== "Commute" && res_hall !== "") {
		  fetchResInfo(res_hall);
		}
	  };
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

				<p>Address:</p>
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