import React, { useState, useEffect } from 'react';
import './live.css';

const LiveTokenDisplay = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    
    const fetchTokens = () => {
    
      const fetchedTokens = [
        { id: 1, name: 'T1', status: 'completed' },
        { id: 2, name: 'T2', status: 'completed' },
        { id: 3, name: 'T3', status: 'live' },
        { id: 4, name: 'T4', status: 'notcompleted'},
        { id: 5, name: 'T5', status: 'notcompleted'},
        { id: 6, name: 'T6', status: 'notcompleted'},
        { id: 7, name: 'T7', status: 'notcompleted'},
        { id: 8, name: 'T8', status: 'notcompleted'},
        { id: 9, name: 'T9', status: 'notcompleted'},
        { id: 10, name: 'T10', status: 'notcompleted'},
        { id: 11, name: 'T11', status: 'notcompleted'},
        { id: 12, name: 'T12', status: 'notcompleted'},
        { id: 13, name: 'T13', status: 'notcompleted'},
        { id: 14, name: 'T14', status: 'notcompleted'},
        { id: 15, name: 'T15', status: 'notcompleted'},
        { id: 16, name: 'T16', status: 'notcompleted'}
      ]; 
      setTokens(fetchedTokens);
    };

    fetchTokens();
  }, []);

  return (
    <div className="tokenContainer">
      <h1 className="heading">Live Token Status</h1>

      <div className="tokenList">
        {tokens.map(token => (
          <div key={token.id} className={`token ${token.status}`}>
            {token.name}

          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTokenDisplay;
