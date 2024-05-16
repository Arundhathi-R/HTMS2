

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase'; // Import Firebase configuration
import { collection, onSnapshot } from 'firebase/firestore';
import './live.css';

const LiveTokenDisplay = () => {
  const [tokens, setTokens] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTokens = () => {
      const tokensCollection = collection(db, 'TokenUpdate');
      onSnapshot(tokensCollection, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTokens(data);
      });
    };

    fetchTokens();
  }, []);

  const handleBackButtonClick = () => {
    navigate('/drdetails');
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'not completed':
        return 'notcompleted';
      case 'completed':
        return 'completed';
      case 'live':
        return 'live';
      default:
        return '';
    }
  };

  return (
    <div className="tokenContainer">
      <button className="backButton" onClick={handleBackButtonClick}>Back</button>
      <h1 className="heading">Live Token Status</h1>
      <div className="tokenList">
        {tokens.map((token, index) => (
          <div key={token.id} className={`token ${getStatusClass(token.status)}`}>
            {token.name ? `T${index + 1}: ${token.name}` : `T${index + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTokenDisplay;
