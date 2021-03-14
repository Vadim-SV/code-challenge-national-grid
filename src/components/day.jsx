import React from 'react';
import './card.styles.css';


const Day = (props) => {
    return(
       <div className = 'card-container'>
            <div className = 'card-text'>
            <div className = 'left-container'>
            <h4> {props.day} </h4>       
            <h4> {props.month} </h4>
            <h4> {props.year} </h4>
           <h4>{props.date}</h4> 
           <button onClick = {props.click}>Click me</button>
           </div>
           </div>  
       </div>
    )
    }
    
    


export default Day;
