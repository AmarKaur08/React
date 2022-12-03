import React,{Component} from 'react';
import './Card.css';
class Card extends Component
{
  render()
  {
    return(
      <div class="bgd">
        <img src="https://robohash.org/ROBO1" alt="ROBO"/>
        <h1>ROBO1</h1>
        <p>This is robot of first generation</p>        
          </div>
    )
  }
}
export default Card;