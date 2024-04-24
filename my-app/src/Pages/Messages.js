import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";

function Messages() {
  const [messages, setMessages] = useState([]);



  
  useEffect(() => {
    axios.get('http://TO-UPDATE.com/api/messages')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const currentUser = ""; // replace this with the current username

  return (
    <div>
      <h1>Messages</h1>
      {messages.filter(message => message.from === currentUser || message.to === currentUser)
        .map((message, index) => (
          <div key={index}>
            <h2>{message.title}</h2>
            <p>{message.body}</p>
            <p>From: {message.from === currentUser ? 'Me' : message.from}</p>
            <p>To: {message.to === currentUser ? 'Me' : message.to}</p>
          </div>
        ))}
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Messages;
