import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import axios from "axios";

import { BACKEND_URL } from "../constants";
import ProdContainerDisplay from "../Components/ProductContainerDisplay";
const SHOPPINGCART_ENDPOINT = `${BACKEND_URL}/shopping_cart`;
const USERS_ENDPOINT = `${BACKEND_URL}users`;

function usersObjectToArray(Data) {
    const keys = Object.keys(Data);
    console.log("data: ", Data);
    const products = keys.map((key) => Data[key]);
    console.log("products: ", products);
    return products;
}

function ShoppingCart() {
    // const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [error, setError] = useState('');

    const fetchUserData = () => {
        const username = JSON.parse(localStorage.getItem("userId"));
        console.log("fetching ", username, "'s user data");
        axios
          .get(`${USERS_ENDPOINT}/${username}`)
          .then(({ data }) => setUserInfo(data))
          .catch(() =>
              setError("There was an error retrieving ", username, "'s information.")
          );
      };

    const fetchShoppingCarts = () => {
        const username = JSON.parse(localStorage.getItem("userId"));
        console.log("fetching ", username, "'s shopping cart products");
        axios
            .get(`${SHOPPINGCART_ENDPOINT}/${username}`)
            .then(({ data }) => setProducts(usersObjectToArray(data)))
            .catch(() =>
                setError("There was a problem retrieving the shopping cart products.")
            );
    };

    useEffect(fetchUserData, []);
    useEffect(fetchShoppingCarts, []);
    console.log("These are the products: ", products);
    console.log("This is the user info: ", userInfo);
    console.log();

    return (
        <>
            <h2>{userInfo.username|| "Guest"}'s ShoppingCart</h2>

            {/* If there are no products in the shopping cart */}
            {products.length === 0 && 
             <div>
                <h3>Your shopping cart is empty.</h3>
            </div>}

            {/* If there are products in the shopping cart */}
            {products.length > 0 &&
                <ProdContainerDisplay products={products} />}
        </> 
    )       
}

export default ShoppingCart;