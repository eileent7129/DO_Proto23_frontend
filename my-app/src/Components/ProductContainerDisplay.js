import { useNavigate } from 'react-router-dom';
import prod_icon from '../Images/product_icon.png';

export function ProdContainerDisplay({ products }) {
    const navigate = useNavigate();

    return (
    <>
        <div className="container">
            {products.map((product, index) => (
                <div className="product-box" key={index}
                    onClick={() => navigate(`/viewItem/${product._id}`)} >
                    <h3>{product.product_name}</h3>
                    <p data-label= 'Price: '> ${product.price}</p>
                    <img src={prod_icon} alt="Product Icon" />
                    <div className="product-details">
                        <p data-label= 'Brand: '> {product.brand}</p>
                        <p data-label= 'Categories: '> {product.categories}</p>
                        <p data-label= 'Comments: '> {product.comments}</p>
                        <p data-label= 'Condition: '> {product.condition}</p>
                        <p data-label= 'Date Posted: '> {product["date posted"]}</p>
                        <p data-label= 'User ID: '> {product.user_id}</p>
                    </div>
                </div>
            ))}
        </div>
    </>
    );
}
export default ProdContainerDisplay;