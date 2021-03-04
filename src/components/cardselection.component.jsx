import React from 'react';
import Card from './card.component.jsx';
import './cardsection.styles.css';
import days from './days.jsx';




const CardSelection = (props,days)=> (
    <div className = 'card-section'>
    <div className = 'card-list'>
    {props.days.map(days => (
        <Card key = {days.id} 
        days ={days} 
        date = {days.date}
        click={props.buttonSubmit}
       
        />

    ))}

</div>
</div>
);


export default CardSelection;
