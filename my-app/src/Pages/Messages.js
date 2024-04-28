import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from "react-router-dom";

function Messages() {
  const [messages, setMessages] = useState([]);

  const sampleMessages = [
    {
      title: "Message 1",
      body: "This is the first message.",
      from: "UserA",
      to: "UserB",
      timestamp: "2022-01-01 10:00:00"
    },
    {
      title: "Message 2",
      body: "This is the second message.",
      from: "UserB",
      to: "UserA",
      timestamp: "2022-01-02 12:00:00"
    },
    {
      title: "Message 3",
      body: "This is the third message.",
      from: "UserA",
      to: "UserB",
      timestamp: "2022-01-03 15:00:00"
    },
    {
      title: "Message 4",
      body: "This is the fourth message.",
      from: "UserB",
      to: "UserA",
      timestamp: "2022-01-04 18:00:00"
    }
  ];

  const currentUser = "UserA"; // replace this with the current username

  const conversation = sampleMessages.filter(message => message.from === currentUser || message.to === currentUser);

  return (
    <div>
      <h1>Messages</h1>
      <div className="conversation">
        {conversation.map((message, index) => (
          <div key={index} className={message.from === currentUser ? 'sent' : 'received'}>
            <h2>{message.title}</h2>
            <p>{message.body}</p>
            <p>From: {message.from === currentUser ? 'Me' : message.from}</p>
            <p>To: {message.to === currentUser ? 'Me' : message.to}</p>
            <p>Timestamp: {message.timestamp}</p>
          </div>
        ))}
      </div>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default Messages;
