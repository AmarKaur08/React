import React,{Component} from 'react';
import './Card.css';
const Card=(props)=> 
{
  
  
    return(
      <div class="bgd">
        <img src="https://robohash.org/ROBO1" alt="ROBO"/>
        <h1>{props.name}</h1>
        <p>{props.email}</p>        
          </div>
    )
  }

export default Card;