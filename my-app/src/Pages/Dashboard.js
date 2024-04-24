import React, { useEffect, useState } from "react";
import axios from "axios";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constants";
import profilePic from "../public/profile.png";
import "../Styles/Dashboard.css";
import Navbar from "../Components/Navbar";


const USERS_ENDPOINT = `${BACKEND_URL}users`;

const user_info = {
  name: "Jane Doe",
  username: "janedoe",
  res_hall: "Carlyle Court",
  address: "25 Union Square W, New York, NY",
  followers_number: 350,
  following_number: 55,
};

export default function Dashboard({ logout }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState([]);

  const fetchUserData = () => {
    const username = JSON.parse(localStorage.getItem("userId"));
    console.log("fetching ", username, "'s user data");
    const response = axios
      .get(`${USERS_ENDPOINT}/${username}`)
      .then(({ data }) => setUserInfo(data))
      .catch(() =>
          setError("There was an error retrieving ", username, "'s information.")
      );
  };

  useEffect(fetchUserData,[]);
  console.log("This is the user info: ", userInfo);
  console.log();

  const handleLogout = () => {
    console.log("logout!");
    logout();
  };

  return (
    <>
      <Navbar />
      {userInfo && (
        <div className="user-container">
          <div className="user-photo">
            <img src={profilePic} alt="profile" />
          </div>
          <div className="user-info">
            <h2>
              {userInfo.first_name} {userInfo.last_name}
            </h2>
            <p>@{userInfo.username}</p>
            <p>
              {user_info.res_hall}, {user_info.address}
            </p>
            <p>125 items sold</p>
            <div className="following">
              <p>{userInfo.followers?.length || 0} followers</p>
            </div>
          </div>
        </div>
      )}
      <p>
        <a onClick={handleLogout} href="/login">
          Logout
        </a>
      </p>
    </>
  );
}
