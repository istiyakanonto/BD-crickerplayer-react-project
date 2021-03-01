import React from 'react';
import './Result.css'

const Result = (props) => {
   
    
    const result=props.addPlayer
    
    
    const totalSalary= result.reduce((PlayerSalary,total)=>PlayerSalary+total.price_tag,0)
    // const first_name= result.reduce((playerName,name)=>name.first_name,0)
  
    
    
    
     const price_tag= result.reduce((playerPrice,price)=>price.price_tag,0)
     
     const role= result.reduce((playerRole,playingRole)=>playingRole.role,0)
   
   
    return (
        <div className='player-cart'>
              <div className='single-player'>
            <h4 style={{color:'#051A1C'}}>Number Of Adding Player: {result.length}</h4>
         
         <ul style={{color:'#B4053B'}}>
      {result.map((item) => (
        <li id={item.id}>{item.first_name} : {item.price_tag}$</li>
      ))}
    </ul>
         <h5 style={{color:'#2F4455'}}>Player Role:{role}</h5>
           <h5 style={{color:'#2D1F4F'}}>Player Price: {price_tag}$</h5>
        </div>
        <div className='all-player'>
            <h2 style={{color:'#3A2230'}}>Total Salary: {totalSalary}$</h2>
        </div>
        {/* <ul>
            {
                result.map(kk=>{
                    <li>{kk.first_name}</li>
                })
            }
        </ul> */}
        </div>
       
    );
};

export default Result;