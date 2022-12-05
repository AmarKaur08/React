import React from 'react';
import robots from './Robots';
import Card from './Card';

const CardList=({robots})=>
{
  return(
   
      robots?.map((user,i) => {
    return <Card key={i} id={user.id} name={user.name} email={robots[i].email}/>    
  })
    
  );
 
}
export default CardList;