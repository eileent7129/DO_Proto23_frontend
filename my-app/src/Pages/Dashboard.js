import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BACKEND_URL } from "../constants";
const USERS_ENDPOINT = `${BACKEND_URL}/users`;

const user_info = {
	name: "Jane Doe",
	username: "janedoe",
	res_hall: "Carlyle Court",
	address: "25 Union Square W, New York, NY",
	followers_number: 350,
	following_number: 55
}


export default function Dashbaord() {
	return (
		<>
		<div className="user-container">
			<div className="user-photo">

			</div>
			<div className="user-info"> 
			<h2>{user_info.name}</h2>
			<p>@{user_info.username}</p>
			<p>{user_info.res_hall}, {user_info.address}</p>
			<div className="following">
				<p>{user_info.followers_number} followers</p>
				<p>{user_info.following_number} following</p>
			</div>
			</div>
		</div>
	</>

	)
	
}