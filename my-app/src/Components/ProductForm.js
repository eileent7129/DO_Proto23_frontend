import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants.js";
import '../Styles/ProductForm.css';

const PRODUCT_FORM_ENDPOINT = `${BACKEND_URL}get_product_form`;
const PRODUCT_ENDPOINT = `${BACKEND_URL}product`;

const ProductForm = () => {
    const [formFields, setFormFields] = useState([]);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const fetchProductForm = async () => {
            const response = await axios.get(PRODUCT_FORM_ENDPOINT);
            setFormFields(response.data);
            initializeFormData(response.data);
        };
        fetchProductForm();
    }, []);

    const initializeFormData = (fields) => {
        const initialData = {};
        fields.forEach(field => {
            initialData[field.fld_nm] = field.default || '';  // Use 'default' from field definition
        });
        setFormData(initialData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const userId = JSON.parse(localStorage.getItem("userId"));
    formData.user_id = userId;

    const date = new Date();
    const showTime = date.getUTCMonth() + "/" + date.getDay() + "/" + date.getFullYear();
    formData.date_posted = showTime.toString();

    const handleProductForm = async () => {
        try {
            const response = await axios.post(PRODUCT_ENDPOINT, formData);
            if (response) {
                console.log("Product form data submitted: ", response.data);
            }
        } catch (error) {
            console.log("Error submitting product form data: ", error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting", formData);
        handleProductForm();
    };


    return (
        <form className="product-form" onSubmit={handleSubmit}>
            {formFields.map(field => (
                (field.fld_nm !== "user_id" && field.fld_nm !== "date_posted" && field.fld_nm !== "categories" && field.fld_nm !== "condition") ? (
                    <div key={field.fld_nm}>
                        <label>{field.question}</label>
                        <input
                            type={field.input_type || 'text'}
                            name={field.fld_nm}
                            value={formData[field.fld_nm] || ''}
                            onChange={handleChange}
                        />
                    </div>
                ) : null
            ))}
            <div>
                <label>Condition:</label>
                <select name="condition" value={formData.condition} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="old">Old</option>
                    <option value="new">New</option>
                    <option value="unused">Unused</option>
                </select>
            </div>

            <div>
                <label>Category:</label>
                <select name="categories" value={formData.categories} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="clothing">Clothing</option>
                    <option value="furniture">Furniture</option>
                    <option value="school_supplies">School Supplies</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ProductForm;







