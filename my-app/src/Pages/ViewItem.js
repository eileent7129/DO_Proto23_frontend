import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BACKEND_URL } from "../constants";
const PRODUCTS_ENDPOINT = `${BACKEND_URL}/get_product`;

const item_info = {
    userID: "Jane Doe",
	name: "shirt",
    price: 5,
    condition: "new",
    brand: "zara",
    categories: "1",
    date_posted: "11/29",
    comments: "buy now!"
}


export default function ViewItem() {
	return (
		<>
        
        <h2>{item_info.name}</h2>


		<div className="item-container">
			<div className="item-photo">

			</div>
			<div className="item-info"> 
			<h3>{item_info.name}</h3>
			<p>Price: {item_info.price}</p>
			<p>Brand: {item_info.brand}</p>
			<p>Catagories: {item_info.categories}</p>
            <p>Condition: {item_info.condition}</p>
            <p>Date Posted: {item_info.date_posted}</p>
            <p>{item_info.userID} "{item_info.comments}"</p>
			</div>
			</div>
	</>

	)
	
}