import React from 'react';
import './Result.css'

const Result = (props) => {
   
   
    const result=props.addPlayer
    
    const totalSalary= result.reduce((PlayerSalary,total)=>PlayerSalary+total.price_tag,0)
    const first_name= result.reduce((playerName,name)=>name.first_name,0)
     const price_tag= result.reduce((playerPrice,price)=>price.price_tag,0)
     const role= result.reduce((playerRole,playingRole)=>playingRole.role,0)
   
    
    return (
        <div className='player-cart'>
              <div className='single-player'>
            <h3>Number Of Adding Player: {result.length}</h3>
         <h1>Player Name : {first_name}</h1>
         <h3>Player Role:{role}</h3>
           <h4>Player Price: {price_tag}$</h4>
        </div>
        <div className='all-player'>
            <h2>Total Salary: {totalSalary}$</h2>
        </div>
        </div>
       
    );
};

export default Result;