import React from 'react';
import './result.styles.css';



const CardResult = (props) => {
    return(
        <div className = 'card-section'>
        <div className = 'card-result-container'>
              <div className = 'card-text'>
              <div className = 'left-container'>
              <h3>Results</h3>
              <h3>Intensity</h3>
            <h4>Forecasted: {props.data.intensityForecasted}</h4>
            <h4>Actual: {props.data.intensityActual}</h4>
            

            </div>
            
              
            </div>
            </div>
            </div>
    )
}

export default CardResult;