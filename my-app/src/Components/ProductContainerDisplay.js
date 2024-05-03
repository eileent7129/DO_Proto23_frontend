import { useNavigate } from 'react-router-dom';


export function ProdContainerDisplay({ products }) {
    const navigate = useNavigate();

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
    </>
    );
}
export default ProdContainerDisplay;