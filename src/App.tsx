import logo from './logo.svg';
import './App.css';
// import HelloWorld from './components/HelloWorld'
import LikeButton from './components/LikeButton'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HelloWorld message="lalalal"/> */} 
        <LikeButton/> 
      </header>
    </div>
  );
}

export default App;
