import React,{Component} from 'react';
import './App.css';
import CardResult from './components/result.component';
import Card from './components/card.component';
import Day from './components/day.jsx';


import CardSelection from './components/cardselection.component.jsx';
import days from './components/days.jsx';



class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
     date:'',
    
    days : [
      {
      id:1,
      day: '19th',
      month:'February',
      year: '2021',
      date:'2021-02-19' 
      },
  {
      id: 2,
      day: '18th',
      month: 'February',
      year: '2021',
      date:'2021-02-18' 
  },
      {
      id:3,
      day: '17th',
      month: 'February',
      year: '2021', 
      date:'2021-02-17' 
      },
      {
          id:4,
      day: '16th',
      month: 'February',
      year: '2021', 
      date:'2021-02-16'
      },
      {
      id:5,
      day: '15th',
      month:'February',
      year: '2021',
      date:'2021-02-16'
      },
  
   ],
      data: {
      intensityActual:'',
      intensityForecasted: ''
    },
    showDays:false,
    
  }
    }
    // onButtonSubmit = (value) => {
    //  this.setState({
    //     date: value

   chooseDate = (index) => {
    const newDate = this.state.days[index].date
    console.log(newDate)
    this.setState({
      date : newDate
      })
      
   };
   
   hideDays = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
   };
      
  

    
componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.date !== prevState.date) {
    let urlData = 'https://api.carbonintensity.org.uk/intensity/date/' + this.state.date;
     console.log(fetch (urlData)
     .then((response )=> response.json())
     .then((data) => {
      console.log(data)
      { this.setState({
      data : {
      intensityActual: data.data[0].intensity.actual,
      intensityForecasted: data.data[0].intensity.forecast
      }
      
       })}
      console.log(this.state.data.intensityActual)
     
      
      
    }).catch(e => console.log(e)));    
    
}};




render() {


  console.log(this.state.date)
  let days = null;
  
   days = ( 
    <div>
    {this.state.days.map((day, index) => {
    return (
     <Day 
      key = {day.id}
      day = {day.day}
       month = {day.months}
       year = {day.year}
       date = {day.date}
       click = {() => this.chooseDate(index)}
    />
    )})}
    
  </div>
  );
    
  return (
   
    <div className = 'card'>
    
    <button onClick = {this.hideDays}>Hide days</button>
    {days},
    <CardResult
      actual = {this.state.data.intensityActual}
      forecast = {this.state.data.intensityForecasted}
    />
    </div>
  );
  }}
  
  export default App;



  //console.log(this.state.date)
  //return (
   // <div className = 'homepage'>
  //  <CardSelection  days={this.state.days} data= {this.state.data} buttonSubmit={this.onButtonSubmit}/>,

   // <CardResult data= {this.state.data} />
  
    //</div>
 // );
 // }}