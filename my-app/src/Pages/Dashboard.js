import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constants";
import profilePic from "../public/profile.png";
import Navbar from "../Components/Navbar";
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
        <>
          <div className="user-container">
            <div className="user-photo">
              <img src={profilePic} alt="profile" />
            </div>
            <div className="user-info">
              <h2>
                {userInfo.first_name} {userInfo.last_name}
              </h2>
              <p className="username">@{userInfo.username}</p>
              <div className="address">
                <p>
                  <b>{user_info.res_hall}</b>,
                </p>{" "}
                <p className="street-addr">{user_info.address}</p>
              </div>
              <p>125 items sold</p>
              <div className="following">
                <p>{userInfo.followers.length} followers</p>
              </div>
            </div>
            <div className="user-buttons">
              <Button 
			  sx={{
				backgroundColor: "#73A942",
				width: '200px',
				borderRadius: '20px',
			  }}
			  variant="contained" disableElevation>
                Follow
              </Button>
			  <Button 
			  sx={{
				backgroundColor: "#73A942",
				width: '200px',
				borderRadius: '20px',
			  }}
			  variant="contained" disableElevation>
                Contact
              </Button>
            </div>
          </div>
          <div className="description-market">
            <div className="description">
              <p>
                🧶 Elevate your style with my handcrafted pieces, each made with
                love and attention to detail. DM for custom orders and stay
                connected for the latest updates! 🌟👚👟📦
              </p>
            </div>
            <div className="market">
              <div className="links">
                <h2>MY MARKET</h2> <h2>REVIEWS</h2>
              </div>
            </div>
          </div>
        </>
      )}
      <p>
        <a onClick={handleLogout} href="/login">
          Logout
        </a>
      </p>
    </>
  );
}
