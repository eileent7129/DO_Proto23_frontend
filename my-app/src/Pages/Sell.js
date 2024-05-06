import { useNavigate } from 'react-router-dom';
import ProductForm from "../Components/ProductForm";


export function Sell({isLoggedIn}) {
    const navigate = useNavigate();

    return (
    <>
        <ProductForm />
    </>
    );
}
export default Sell;