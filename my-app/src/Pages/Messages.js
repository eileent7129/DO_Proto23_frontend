import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  return (
    <div>
      <h1>Messages</h1>
      {messages.map((message, index) => (
        <div key={index}>
          <h2>{message.title}</h2>
          <p>{message.body}</p>
        </div>
      ))}
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Messages;
