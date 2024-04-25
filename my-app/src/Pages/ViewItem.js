import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { BACKEND_URL } from "../constants";
const PRODUCTS_ENDPOINT = `${BACKEND_URL}/product`;

export default function ViewItem() {
	const location = useLocation();
	const prodInfo = location.state.product;

	return (
		<>
			<h2>{prodInfo.name}</h2>

			<div className="item-container">
				<div className="item-photo">

				</div>
				<div className="item-info">
					<p>Price: {prodInfo.price}</p>
					<p>Brand: {prodInfo.brand}</p>
					<p>Catagories: {prodInfo.categories}</p>
					<p>Condition: {prodInfo.condition}</p>
					<p>Date Posted: {prodInfo.date_posted}</p>
					<p>{prodInfo.userID} "{prodInfo.comments}"</p>
				</div>
			</div>
		</>

	)

}