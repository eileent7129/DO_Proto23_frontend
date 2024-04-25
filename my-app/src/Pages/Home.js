import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../Components/ProductForm";
import veiwItem from "./ViewItem";
import '../Styles/Home.css';

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
    const navigate = useNavigate();
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
            <div className="container">
                {products.map((product, index) => (
                    <div className="product-box" key={index}
                        onClick={() => navigate(`/viewItem`, { state: { product } })} >
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
            <ProductForm />
            {error && <p>{error}</p>}
        </>
    );
}

export default Home;