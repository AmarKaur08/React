import React,{Component} from 'react';
import './Card.css';
const Card=(props)=> 
{
  
  
    return(
      <div className="bgd">
        <img className="imgdecor"src={`https://robohash.org/${props.name}`} alt="ROBO"/>
        <h2>{props.name}</h2>
        <p>{props.email}</p>        
          </div>
    )
  }

export default Card;