// Home.js
import React from 'react';

const Home = ({ handleLogout }) => {
  return (
    <div>
      <h2>Welcome to Newsletter App!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
