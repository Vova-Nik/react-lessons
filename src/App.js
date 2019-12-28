import React from 'react';
//import logo from './logo.svg';
import './App.css';


import Header from './Header.jsx';
import Navbar from './Navbar';
import Profile from './Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
     <footer className="footer">It's foooooter</footer>
    </div>

  );
}

export default App;