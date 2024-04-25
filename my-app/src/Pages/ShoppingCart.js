import React, { useEffect, useState } from "react";
import axios from "axios";

import { BACKEND_URL } from "../constants";
const SHOPPINGCART_ENDPOINT = `${BACKEND_URL}/shopping_cart`;

function usersObjectToArray(Data) {
    const keys = Object.keys(Data);
    console.log("data: ", Data);
    const products = keys.map((key) => Data[key]);
    console.log("products: ", products);
    return products;
}

function ShoppingCart() {
    const [products, setProducts] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [error, setError] = useState('');

    const fetchShoppingCarts = () => {
        const username = JSON.parse(localStorage.getItem("userId"));
        console.log("fetching ", username, "'s shopping cart products");
        axios
            .get(`${SHOPPINGCART_ENDPOINT}/${username}`)
            .then(({ data }) => setProducts(usersObjectToArray(data)))
            .then(({ data }) => setUserInfo(data))
            .catch(() =>
                setError("There was a problem retrieving the shopping cart products.")
            );
    };

    useEffect(fetchShoppingCarts, []);
    console.log("These are the products: ", products);
    console.log();

    return (
        <>
            <h2>{userInfo.username || "Guest"}'s ShoppingCart</h2>
            <div className="container">
                {products.map((product, index) => (
                    <div className="product-box" key={index}>
                        <h3>{product.name}</h3>
                        <p>Price: {product.price}</p>
                        <div className="product-details">
                            <p>Brand: {product.brand}</p>
                            <p>Categories: {product.categories}</p>
                            <p>Comments: {product.comments}</p>
                            <p>Condition: {product.condition}</p>
                            <p>Date Posted: {product["date posted"]}</p>
                            <p>User ID: {product.user_id}</p>
                        </div>
                    </div>
                ))}
            </div>
        </> 
    )       
}

export default ShoppingCart;