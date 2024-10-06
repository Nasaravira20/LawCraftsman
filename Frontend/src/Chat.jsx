import React, { useState } from 'react';
import './Chatbot.css'

const Chat = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    // Add user message to the chat
    const userMessage = { text: query, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setLoading(true);
    setQuery(''); // Clear the input field

    try {
      const res = await fetch('http://localhost:8000/legal-advice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      const botMessage = { text: data.result.result, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching legal advice:', error);
      const errorMessage = { text: 'An error occurred while fetching the legal advice.', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message-bubble ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-form">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your legal query here..."
          rows="3"
          className="query-input"
        />
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Chat;
