import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Followers from "./Pages/Followers";
import ViewItem from "./Pages/ViewItem";
import Messages from "./Pages/Messages";
import ShoppingCart from "./Pages/ShoppingCart"
import ViewUser from './Pages/ViewUser';
import Dashboard from './Pages/Dashboard';
import Sell from './Pages/Sell';
import Navbar from "./Components/Navbar";
import Auth from "./API/Auth";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Styles/App.css";

function App() {
  const [loginState, setLoginState] = useState(
    JSON.parse(localStorage.getItem("loginState")) || false
  );
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userId")) || null
  );

  useEffect(() => {
    localStorage.setItem("loginState", JSON.stringify(loginState));
  }, [loginState]);

  useEffect(() => {
    if (loginState) {
      localStorage.setItem("userId", JSON.stringify(userId));
    } else {
      localStorage.removeItem("userId");
    }
  }, [loginState, userId]);

  const login = (username) => {
    setLoginState(true);
    setUserId(username);
  };
  const logout = () => {
    setLoginState(false);
    localStorage.removeItem("userId");
  };

  return (
    <>
      <Router>
        <Navbar isLoggedIn={loginState} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login logIn={login} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sell" element={<Sell isLoggedIn={loginState}/>} />
          <Route path="/viewItem/:prodId" element={<ViewItem />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route element={<Auth loginState={loginState} logout={logout} />}>
			<Route path="/dashboard" element={<Dashboard logout={logout} />} />
            <Route path="/followers" element={<Followers />} />
            <Route path="/messages" element={<Messages />} />
			<Route path="/user/:userId" element={<ViewUser />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
