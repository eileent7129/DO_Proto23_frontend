import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Styles/Messages.css';

function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  // Define sample messages with unique usernames for each conversation
  const conversations = [
    { username: "Alice", messages: [
      { body: "Hello! I'd like to purchase something", from: "UserA", to: "Alice", timestamp: "2022-01-01 10:00:00" },
      { body: "Hey, what are you looking to buy?", from: "Alice", to: "UserA", timestamp: "2022-01-02 12:00:00" },
      { body: "I wanted to inquire about that table you posted.", from: "UserA", to: "Alice", timestamp: "2022-01-03 15:00:00" },
      { body: "Yes, let me know what questions you have.", from: "Alice", to: "UserA", timestamp: "2022-01-04 18:00:00" }
    ]},
    { username: "Bob", messages: [
      { body: "Could you provide more details on the specs?", from: "UserA", to: "Bob", timestamp: "2022-01-01 10:00:00" },
      { body: "Sure, it has a 16-inch display.", from: "Bob", to: "UserA", timestamp: "2022-01-02 12:00:00" },
      { body: "That sounds good. What's the battery life?", from: "UserA", to: "Bob", timestamp: "2022-01-03 15:00:00" },
      { body: "Up to 10 hours of use.", from: "Bob", to: "UserA", timestamp: "2022-01-04 18:00:00" }
    ]},
    { username: "Charlie", messages: [
      { body: "Is the item still available?", from: "UserA", to: "Charlie", timestamp: "2022-01-01 10:00:00" },
      { body: "Yes, it's still on sale.", from: "Charlie", to: "UserA", timestamp: "2022-01-02 12:00:00" },
      { body: "I'll take it then.", from: "UserA", to: "Charlie", timestamp: "2022-01-03 15:00:00" },
      { body: "Great! Let's arrange the payment.", from: "Charlie", to: "UserA", timestamp: "2022-01-04 18:00:00" }
    ]}
  ];

  const sendMessage = (index) => {
    if (newMessage.trim()) {
      const newMsg = {
        body: newMessage,
        from: "UserA",
        to: conversations[index].username,
        timestamp: new Date().toISOString()
      };
      conversations[index].messages.push(newMsg);
      setNewMessage("");
    }
  };

  const toggleConversation = (index) => {
    if (selectedConversation === index) {
      setSelectedConversation(null);
    } else {
      setSelectedConversation(index);
    }
  };

  return (
    <div className="messages-container">
      <h1>Messages</h1>
      {conversations.map((conversation, index) => (
        <div key={index}>
          <div className="header" onClick={() => toggleConversation(index)}>
            <h2 className="username">{conversation.username}</h2>
            <p className="intro">{conversation.messages[0].body}</p>
          </div>
          {selectedConversation === index && (
            <div className="conversation-detail">
              {conversation.messages.map((message, idx) => (
                <div key={idx} className={`message-bubble ${message.from === "UserA" ? 'message-userA' : 'message-userB'}`}>
                  <p>{message.body}</p>
                  <div className="message-info">
                    <p>{message.timestamp}</p>
                  </div>
                </div>
              ))}
              <div className="message-input-container">
                <input
                  type="text"
                  className="message-input"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className="message-send-btn" onClick={() => sendMessage(index)}>Send</button>
              </div>
            </div>
          )}
        </div>
      ))}
      <Link to="/">Home</Link>
    </div>
  );
}

export default Messages;
