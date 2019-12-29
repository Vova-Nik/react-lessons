import React from 'react';
//import logo from './logo.svg';
import './App.css';


import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer/footer'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
     <Footer />
    </div>

  );
}

export default App;

//gitk --all&