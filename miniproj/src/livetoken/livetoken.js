





/*import React, { useState, useEffect } from 'react';
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
        {tokens.map(token => (
          <div key={token.id} className={`token ${getStatusClass(token.status)}`}>
            {token.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTokenDisplay;*/





 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase'; // Import Firebase configuration
import { collection, query, where, doc, updateDoc, getDoc, onSnapshot, getDocs } from 'firebase/firestore';
import './live.css';

const LiveTokenDisplay = () => {
  const [tokens, setTokens] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const initializeStatuses = async () => {
      const querySnapshot = await getDocs(collection(db, 'TokenUpdate'));
      querySnapshot.forEach(async (documentSnapshot) => {
        const docRef = doc(db, 'TokenUpdate', documentSnapshot.id);
        await updateDoc(docRef, { status: 'not completed' });
      });
    };

    const fetchTokens = () => {
      const tokensCollection = collection(db, 'TokenUpdate');
      onSnapshot(tokensCollection, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTokens(data);
      });
    };

    fetchTokens();
    initializeStatuses(); // Ensure initial statuses are set when component mounts
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

  const setLiveToken = async (tokenId) => {
    const q = query(collection(db, 'TokenUpdate'), where('status', '==', 'live'));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      const tokenDoc = doc(db, 'TokenUpdate', tokenId);
      await updateDoc(tokenDoc, { status: 'live' });
      console.log('Token set to live');
    } else {
      console.log('Another token is already live');
    }
  };

  const completeToken = async (tokenId) => {
    const tokenDocRef = doc(db, 'TokenUpdate', tokenId);
    const tokenDoc = await getDoc(tokenDocRef);

    if (tokenDoc.exists() && tokenDoc.data().status !== 'completed') {
      await updateDoc(tokenDocRef, { status: 'completed' });
      console.log('Token status set to completed');
    } else {
      console.log('Token is already completed or does not exist');
    }
  };

  return (
    <div className="tokenContainer">
      <button className="backButton" onClick={handleBackButtonClick}>Back</button>
      <h1 className="heading">Live Token Status</h1>
      <div className="tokenList">
        {tokens.map(token => (
          <div key={token.id} className={`token ${getStatusClass(token.status)}`}>
            {token.PatientName}
            {token.status !== 'completed' && (
              <>
                <button onClick={() => setLiveToken(token.id)}>Set Live</button>
                <button onClick={() => completeToken(token.id)}>Complete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveTokenDisplay;









