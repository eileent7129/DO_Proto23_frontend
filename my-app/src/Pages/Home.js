import React, { useEffect, useState } from "react";
import axios from "axios";
import './Navbar.css';

import { BACKEND_URL } from "../constants";
const PRODUCTS_ENDPOINT = `${BACKEND_URL}/product`;

function usersObjectToArray(Data) {
    const keys = Object.keys(Data);
    console.log("data: ", Data);
    const products = keys.map((key) => Data[key]);
    console.log("products: ", products);
    return products;
}

function Home() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    const fetchProducts = () => {
        console.log("fetching products");
        axios
            .get(PRODUCTS_ENDPOINT)
            .then(({ data }) => setProducts(usersObjectToArray(data)))
            .catch(() =>
                setError("There was a problem retrieving the products.")
            );
    };

    useEffect(fetchProducts, []);
    console.log("These are the products: ", products);
    console.log();

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a href="/login">Login</a>
                    </li>
					<li>
						<a href="/signup">Sign Up</a>
					</li>
                    <li>
                        <a href="/followers">Followers</a>
                    </li>
					<li>
						<a href="viewItem">View Item</a>
					</li>
                </ul>
            </nav>
            <h2>Home</h2>
            {products.map((product, index) => (
                <div key={index}>
                    <h3>{product.name}</h3>
                    <p>Brand: {product.brand}</p>
                    <p>Categories: {product.categories}</p>
                    <p>Comments: {product.comments}</p>
                    <p>Condition: {product.condition}</p>
                    <p>Date Posted: {product["date posted"]}</p>
                    <p>Price: {product.price}</p>
                    <p>User ID: {product.user_id}</p>
                </div>
            ))}
            {error && <p>{error}</p>}
        </>
    );
}

export default Home;