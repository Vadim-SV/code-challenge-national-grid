import days from './days.jsx';
import Card from './card.component';

const initialState = {
    days = {days},
    intensity_actual: '',
    intensity_forecasted: '',
    date: ''

}

const getDate = () =>{
    return(
        this.setState({date: Card.date})
    )
}





//export const fetchIntencity = ()=>{
//    this.setState({...this.state,isFetching:true})
 //   fetch ('https://api.carbonintensity.org.uk/intensity/date/{days.date}')
 //   .then(response => response.json())
 //   .then(result => this.setState(
 //       {intensity_actual:data.intensity.actual,
 //       intensity_forecasted: data.intensity.forecast,
//        isFetching: false}))
//        .catch(e => console.log(e));
//}


export default resultReducer;