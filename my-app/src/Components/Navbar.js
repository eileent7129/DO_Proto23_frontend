import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import cart from '../Images/cart.png';
import logo from '../Images/logo.png';
import profilePic from "../public/profile.png";
import '../Styles/Navbar.css';

export function Navbar({ isLoggedIn }) {
    const navigate = useNavigate();
    const username = JSON.parse(localStorage.getItem("userId"));
    // TODO: This needs to be moved to an import to navbar through arguments
    // Should come from auth in smth like app.js or whatever the container for everything is

    return (
        <div className="navbar">
            <div onClick={() => navigate('/')} id='navbar-logo'>
                <img src={logo} alt="Logo" />
                <span>
                    UniMarket
                </span>
            </div>

            <ul>
                {!isLoggedIn && <li onClick={() => navigate('/signup')}>SIGN UP</li>}
                {!isLoggedIn && <li onClick={() => navigate('/login')}>LOGIN</li>}
                {isLoggedIn && <li onClick={() => navigate('/followers')}>FOLLOWERS</li>}
                {isLoggedIn && <li onClick={() => navigate('/messages')}>MESSAGES</li>}
                <li onClick={() => {isLoggedIn ? navigate('/sell') :  navigate('/login')}}>SELL</li>
                {isLoggedIn && <li onClick={() => navigate(`/dashboard`)}><img className='profile' src={profilePic} alt="profile" /></li>}
                {/*isLoggedIn && <li onClick={() => navigate("/saved")}>Saved</li> */}
                <li onClick={() => navigate('/ShoppingCart')}><img src={cart} alt="Cart" /></li>
            </ul>
        </div>
    );
}

export default Navbar;
