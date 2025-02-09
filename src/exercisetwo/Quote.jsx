import React, { useState } from 'react';
import axios from 'axios';
import './Quote.css';

export default function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  function newQuote() {
    axios
      .get('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': 'f2u5z6qz3cBGTdIbZKLnzw==1wsSJrTXSveSqM1q',
        },
      })
      .then((response) => {
        const { quote, author, category } = response.data[0]; 
        setQuote(quote);
        setAuthor(author);
        setCategory(category);
        setError('');
      })
      .catch(() => {
        setError('Request failed');
      });
  }

  return (
    <div className="quote-container">
      <h1 className="quote-title">Sonic's Speedy Quote Generator</h1>
      <p className="quote-text">"{quote}"</p>
      <p className="quote-author">- {author} </p>
      {error && <p className="error-message">{error}</p>}
      <button className="quote-button" onClick={newQuote}>
        🔵 Get New Quote Fast! 🔵
      </button>
    </div>
  );
}
