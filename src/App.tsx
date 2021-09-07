import React from 'react';
import {useState} from 'react';

import { Component } from 'react';
import searchIcon from './assets/magnifying-glass.svg';

function App() {
  const [title, setTitle] = useState('');
  return (
    <div className="search-flow-container">
    <h3 className="flow-title">Search Flow</h3>
        <form action="/form/submit" method="post">
            <div className="input-container">
                <input 
                  id="focusedSearch" 
                  className="search-input" 
                  type="search"
                  required
                  placeholder="Search"
                  onChange={(e) => setTitle(e.target.value)}
                  />
                <img className="search-icon" src={searchIcon}></img>
            </div>
        </form>
</div>
  );
}

export default App;
