import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';
import { BACKEND_URL } from "../constants";
import { useParams } from "react-router-dom";
const PRODUCTS_ENDPOINT = `${BACKEND_URL}product`;

export default function ViewItem() {
	const navigate = useNavigate();
	const userId = localStorage.getItem('userId');
	const {prodId} = useParams();
	const [prodInfo, setProdInfo] = useState(null);
	const [error, setError] = useState('');

	const fetchProducts = () => {
        console.log("fetching products");
        axios
            .get(`${PRODUCTS_ENDPOINT}/${prodId}`)
            .then(({ data }) => setProdInfo(data))
            .catch(() =>
                setError("There was a problem retrieving the products.")
            );
    };

	useEffect(fetchProducts, [prodId]);

	if (!prodInfo) {
		return (
			<p>Loading...</p>
		)
		
	};

	const handleAdd = () => {
		console.log("add to cart");
		axios
			.post(`${BACKEND_URL}shopping_cart/${userId}`)
			.then(() => navigate(`/shopping_cart/${userId}`))
			.catch(() => setError("There was a problem adding the item to the cart."));
	};

	return (
		<>
		
			<h2>{prodInfo.product_name}</h2>

			<div className="item-container">
				<div className="item-photo">

				</div>
				<div className="item-info">
					<p>Price: {prodInfo.price}</p>
					<p>Brand: {prodInfo.brand}</p>
					<p>Catagories: {prodInfo.categories}</p>
					<p>Condition: {prodInfo.condition}</p>
					<p>Date Posted: {prodInfo.date_posted}</p>
					<p><Button onClick={() => navigate(`/user/${prodInfo.user_id}`)}>{prodInfo.user_id}</Button> "{prodInfo.comments}"</p>
				</div>
				{/* <li>
					<Button onClick={() => (userId ? navigate(`/shopping_cart/${userId}`) : navigate(`/login`))}>Edit</Button>
				</li> */}
			</div>
		</>

	)

}