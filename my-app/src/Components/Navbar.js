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
            <img onClick={() => navigate('/')} src={logo} alt="Logo" />
            <ul>
                {!isLoggedIn && <li onClick={() => navigate('/signup')}>Sign Up</li>}
                {!isLoggedIn && <li onClick={() => navigate('/login')}>Login</li>}
                {isLoggedIn && <li onClick={() => navigate('/followers')}>Followers</li>}
                {isLoggedIn && <li onClick={() => navigate("/messages")}>Messages</li>}
                {isLoggedIn && <li onClick={() => navigate(`/user/${username}`)}><img className='circle' src={profilePic} alt="profile" /></li>}
                {/*isLoggedIn && <li onClick={() => navigate("/saved")}>Saved</li> */}
                <li onClick={() => navigate('/ShoppingCart')}><img src={cart} alt="Cart" /></li>
            </ul>
        </div>
    );
}

export default Navbar;
