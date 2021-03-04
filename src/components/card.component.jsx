import React from 'react';
import './card.styles.css';
import days from './days.jsx';
import fetchIntensity from './apicall.component.jsx';

const Card = (props) =>{
  return(
      <div onClick={props.click} click = {props.days.id}  className = 'card-container'>
              <div className = 'card-text'>
              <div className = 'left-container'>
            <h4> {props.days.day} </h4>
            
            
            <h4> {props.days.month} </h4>
            
            <h4> {props.days.year} </h4>
           <h4>{props.days.date}</h4> 
            

            </div>
            
              
            </div>
            
            </div>
            

              
  )}
      

export default Card ;

