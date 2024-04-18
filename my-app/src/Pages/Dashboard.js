import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constants";
import profilePic from "../public/profile.png";
import "../Styles/Dashboard.css";
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
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const username = JSON.parse(localStorage.getItem("userId"));
      console.log(username);

      try {
        const response = await axios.get(`${USERS_ENDPOINT}/${username}`);
        const userData = response.data;
        setUserInfo(userData);
      } catch (error) {
        console.error(
          `There was an error retrieving ${username}'s information`,
          error
        );
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <>
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
              <p>{userInfo.followers.length} followers</p>
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
