import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../constants";
import profilePic from "../public/profile.png";
import "../Styles/Dashboard.css";

const USERS_ENDPOINT = `${BACKEND_URL}users`;

export default function ViewUser({ logout }) {
	const {userId} = useParams();
  console.log("This is the user id: ", userId);
  const [error, setError] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios 
      .get(`${USERS_ENDPOINT}/${userId}`)
      .then(({data}) => setUserData(data))
      .catch(() => setError("There was a problem retrieving user data."))
  }, [userId]);

  if (!userData) {
	return <p>Loading...</p>;
}

  console.log("This is the user info: ", userData);

  return (
    <>
      {userData && (
        <>
          <div className="user-container">
            <div className="user-photo">
              <img src={profilePic} alt="profile" />
            </div>
            <div className="user-info">
              <h2>
                {userData.first_name} {userData.last_name}
              </h2>
              <p className="username">@{userData.username}</p>
              <div className="address">
                <p>
                  <b>{userData.res_hall}</b>,
                </p>{" "}
                <p className="street-addr">{userData.address}</p>
              </div>
              <p>125 items sold</p>
              <div className="following">
                <p>{userData.followers?.length || 0} followers</p>
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
    </>
  );
}