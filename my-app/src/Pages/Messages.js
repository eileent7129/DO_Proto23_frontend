import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../Styles/Messages.css';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sampleMessages = [
    {
      title: "Message 1",
      body: "Hello! I'd like to purchase something",
      from: "UserA",
      to: "UserB",
      timestamp: "2022-01-01 10:00:00"
    },
    {
      title: "Message 2",
      body: "Hey, what are you looking to buy?",
      from: "UserB",
      to: "UserA",
      timestamp: "2022-01-02 12:00:00"
    },
    {
      title: "Message 3",
      body: "I wanted to inquire about that table you posted.",
      from: "UserA",
      to: "UserB",
      timestamp: "2022-01-03 15:00:00"
    },
    {
      title: "Message 4",
      body: "Yes, let me know what questions you have.",
      from: "UserB",
      to: "UserA",
      timestamp: "2022-01-04 18:00:00"
    }
  ];

  const currentUser = "UserA";

  const conversation = sampleMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  return (
      <div className="messages-container">
          <h1>Messages</h1>
          <div className="conversation">
              {conversation.map((message, index) => (
                  <div key={index} className={`message-bubble ${message.from === currentUser ? 'message-userA' : 'message-userB'}`}>
                      <div className={message.from === currentUser ? 'message-content user' : 'message-content'}>
                          <p>{message.body}</p>
                          <div className="message-info">
                              <p>{message.timestamp}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
          <div className="message-input-container">
              <input
                  type="text"
                  className="message-input"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
              />
              <button className="message-send-btn" onClick={() => {
                  if (newMessage.trim()) {
                      setMessages([...messages, {
                          body: newMessage,
                          from: currentUser,
                          to: "UserB",
                          timestamp: new Date().toISOString()
                      }]);
                      setNewMessage('');
                  }
              }}>Send</button>
          </div>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
      </div>
  );
}

export default Messages;
