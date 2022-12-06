import React from 'react';
import CardList from './CardList';
import {robots } from './Robots';
import SearchBox from './SearchBox';
import './App.css';

const App=()=>
{
  return(
  <div className="main"> 
  <h1>RoboFriends</h1>
  <SearchBox/>
  <div className="cards">
  <CardList robots={robots}/> 
  </div> 
  </div>
  );
}
export default App;