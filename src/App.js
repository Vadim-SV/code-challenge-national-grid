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
   chooseDate = (newDate) => {
      this.setState({
        days: [
          {
            id:1,
            day: '19th',
            month:'February',
            year: '2021',
            date: newDate
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
               ]
      
      
      })
   }
   
   hideDays = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
   };
      
     

    
componentDidMount() {
     console.log(fetch ('https://api.carbonintensity.org.uk/intensity/date/2020-02-17')
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
    
};




render() {
  let dayss = null;
  if (this.state.showDays) {
    
  }

  console.log(this.state.date)
  return (
   
    <div className = 'card'>
    <button onClick = {this.chooseDate.bind(this,'2020-01-01')} >Pick Date</button>
    <button onClick = {this.hideDays}>Hide days</button>
    {
      this.state.showPersons === true? 
    <div  >
        <Day day = {this.state.days[0].days}
         month = {this.state.days[0].months}
         year = {this.state.days[0].year}
         date = {this.state.days[0].date}       
           />
        <Day day = {this.state.days[1].days}
         month = {this.state.days[1].months}
         year = {this.state.days[1].year}
         date = {this.state.days[1].date}       
           />
        <Day day = {this.state.days[2].days}
         month = {this.state.days[2].months}
         year = {this.state.days[2].year}
         date = {this.state.days[2].date}       
           />
        <Day day = {this.state.days[3].days}
         month = {this.state.days[3].months}
         year = {this.state.days[3].year}
         date = {this.state.days[3].date}       
           />
        <Day day = {this.state.days[4].days}
         month = {this.state.days[4].months}
         year = {this.state.days[4].year}
         date = {this.state.days[4].date}       
           />
           </div> : null
           }
           }
  
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