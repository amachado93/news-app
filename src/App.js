import React, { Component } from 'react';
import './App.css';

//import axios from 'axios';

import { fetchData } from './services/weather';

import Input from './components/Input';
import WeatherCard from './components/WeatherCard';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      weatherData: {},
      location: '',
      value: ''
    }
  }

  // async componentDidMount(){
  //   //do a call.  !! important !! do not put semi-colon after get method
  //   axios.get('https://api.openweathermap.org/data/2.5/weather?zip=33154,us&units=imperial&appid=0962293081cc023b431ef06db58213c7')
  //   //update state with response
  //   .then( data =>{
  //     console.log(data)
  //     this.setState({
  //       weatherData: data.data.main,
  //       location: data.data.name
  //     })
  //   })
  // }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
    console.log(this.state.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted form')
    // takes the user's input and passes it to API call
    fetchData(this.state.value);
    
    // sets the state to the API call on above function
    this.setState({
      weatherData: fetchData(this.state.value)
    });
    
  }

  render(){
  return (
    <div className="App">
      <h1>WEATHER APP</h1>
      <Input 
        onChange={this.handleChange} 
        onSubmit={this.handleSubmit}
      />
      <WeatherCard 
        weatherData={this.state.weatherData} 
        location={this.state.location} 
      />
    </div>
  );
  }
}

export default App;
