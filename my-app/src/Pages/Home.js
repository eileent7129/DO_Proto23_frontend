import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/Home.css';
import ProdContainerDisplay from "../Components/ProductContainerDisplay";

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
            <ProdContainerDisplay products={products} />
            {error && <p>{error}</p>}
        </>
    );
}

export default Home;