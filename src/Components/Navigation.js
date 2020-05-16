import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>Lambda PIZZA!</h1>
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
        <Link to="/Form">Make your own pizza!</Link>
        </div>
        <div>
        <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;