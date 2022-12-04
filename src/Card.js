import React,{Component} from 'react';
import './Card.css';
const Card=(props)=> 
{
  
  
    return(
      <div className="bgd">
        <img src={`https://robohash.org/${props.name}`} alt="ROBO"/>
        <h1>{props.name}</h1>
        <p>{props.email}</p>        
          </div>
    )
  }

export default Card;