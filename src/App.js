import React,{Component} from 'react';
import CardList from './CardList';
import {robots } from './Robots';
import SearchBox from './SearchBox';
import './App.css';
//state-description of app//parent feeds state into the child component and asa child compoennet recieve the stte its a property

class App extends Component {
  constructor()
  {
    super()
    this.state={
      robots:robots,
      searchfield:''
    }
  }
  onSearchChange=(event)=>{//do it as this way bz this .state will otherwise take event form input and throw error//lect 232-twds end.
   //console.log(event.target.value);
   this.setState({searchfield:event.target.value})
   
   //console.log(filteredRobots);
  }
  render(){
    const filteredRobots=this.state.robots.filter(
      robot=>{
     return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      }
    )
    return(
      <div className="main"> 
      <h1>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <div className="cards">
      <CardList robots={filteredRobots}/> 
      </div> 
      </div>
      );
  }
 
}
export default App;
