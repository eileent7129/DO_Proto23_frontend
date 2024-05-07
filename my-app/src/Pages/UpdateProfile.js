import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditProfileForm from "../Components/EditProfileForm";
import { BACKEND_URL } from "../constants";

const USERS_ENDPOINT = `${BACKEND_URL}/users`;


export default function UpdateProfile(){

	return (
		<>
		<div className="edit-profile-form">
			<EditProfileForm />
		</div>	
		</>
	)
}