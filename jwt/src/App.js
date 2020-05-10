import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './cmp/Home';
import About from './cmp/About';
import Auth from './cmp/Auth';
import List from './cmp/List'

function App() {
  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
