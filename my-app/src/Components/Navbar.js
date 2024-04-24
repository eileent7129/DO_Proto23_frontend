import { useNavigate } from 'react-router-dom';

import cart from '../Images/cart.png';
import logo from '../Images/logo.png';
import profilePic from "../public/profile.png";

import '../Styles/Navbar.css';

export function Navbar() {
    const navigate = useNavigate();
    const isLoggedIn = JSON.parse(localStorage.getItem('loginState'));

    return (
        <div className="navbar">
            <img onClick={() => navigate('/')} src={logo} alt="Logo" />
            <ul>
                { !isLoggedIn && <li onClick={() => navigate('/signup')}>Sign Up</li> }
                { !isLoggedIn && <li onClick={() => navigate('/login')}>Login</li> }
                { isLoggedIn && <li onClick={() => navigate('/followers')}>Followers</li>}
                { isLoggedIn && <li onClick={() => navigate('/dashboard')}><img className='circle' src={profilePic} alt="profile" /></li>}
                <li onClick={() => navigate('/ShoppingCart')}><img src={cart} alt="Cart" /></li>
            </ul>
        </div>
    );
}

export default Navbar;