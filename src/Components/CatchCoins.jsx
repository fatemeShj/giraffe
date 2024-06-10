import React, { useState } from 'react';
import Giraffe from '../assets/giraffe.png';
import { BiSolidCoinStack } from "react-icons/bi";
import Message from './Message';

const CatchCoins = () => {
  const [coinCount, setCoinCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const increaseCoinCount = () => {
    setCoinCount(prevCount => prevCount + 1);
    setClickCount(prevCount => prevCount + 1);
    
    if ((clickCount + 1) % 3 === 0) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title"><BiSolidCoinStack />Coins: {coinCount}</h3>
      </div>
      <figure>
        <img src={Giraffe} alt="Giraffe" onClick={increaseCoinCount} className="inline-block w-50" />
      </figure>
      {showMessage && <Message />}
    </div>
  );
};

export default CatchCoins;
