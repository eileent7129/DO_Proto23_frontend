import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}users`;

function EditProfileForm() {
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		username: "",
		email: "",
		password: "",
		saved: [],
		shopping_cart: [],
		followers: [],
		following: [],
		res_hall: "",
		address: "",
		pronouns: ""
	
	  });

}

export default EditProfileForm;