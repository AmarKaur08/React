import React from 'react';
import './SearchBox.css';

const SearchBox=({searchfield,searchChange})=>
{
  return(
  <div className="searchbar">
  <input
  className="decorsearch"
   type="search" 
   placeholder="Search..."
   onChange={searchChange}/>
   
   </div>
  );
  
}

export default SearchBox;