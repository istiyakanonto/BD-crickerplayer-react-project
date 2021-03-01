import React from 'react';
import './Player.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


// or less ideally

const Player = (props) => {
    const {first_name,last_name,img,age,id,email,price_tag,role}=props.player
    return (
        <div className='player'>
            <div>
<img src={img}  alt=""/>
{  <button id="add-button" className='btn btn-success'  onClick={()=>props.handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>Add Player</button>}
   
            </div>
            <div>
            <h1 style={{color:'tomato'}}>{first_name}</h1>
            <h3 style={{color:'brown'}}>{last_name}</h3>
<h4 style={{color:'#5335c0'}}>Playing Role: {role}</h4>
            <p style={{color:'#3071A9'}}> Player Age: {age}</p>
            <h5 style={{color:'#1A1125'}}> Player Price Tag {price_tag}$</h5>
           
            
            <p style={{color:'#2931B3'}}><small> Player Email: {email}</small></p>
            </div>
           
            
        </div>
    );
};

export default Player;
