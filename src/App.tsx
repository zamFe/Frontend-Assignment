import React from 'react';
import {useState} from 'react';

import { Component } from 'react';
import searchIcon from './assets/magnifying-glass.svg';
import crossIcon from './assets/cross.svg';
import ApiResult from './APIResult';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [crossIconVisible, setCrossIconVisible] = useState('visible');

  function onSearchInputChange(input: string) {
    setInputValue(input);
    setCrossIconVisible((input.length > 0) ? 'visible' : 'hidden');
  }

  function clearInput() {
    setInputValue('');
  }

  function runSearch(input : string) {
    
  }

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
                  value={inputValue}
                  onChange={(e) => onSearchInputChange(e.target.value)}
                  />
                  <div 
                    className="cross-icon-container icon-container"
                    onClick={(e) => clearInput()}>
                    <img 
                      className="cross-icon icon"  
                      src={crossIcon}></img>
                  </div>
                    <div 
                      className="search-icon-container icon-container"
                      onClick={(e) => runSearch(inputValue)}>
                      <img className="search-icon icon" src={searchIcon}></img>
                  </div>
            </div>
        </form>
        <ApiResult />
</div>
  );
}

export default App;
