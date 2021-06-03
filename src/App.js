import React, { Component } from 'react';
import './App.css';

import { fetchData } from './services/weather';

import Input from './components/Input';
import WeatherCard from './components/WeatherCard';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      weatherData: {},
      location: '',
      value: '',
      isActive: false
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('submitted form')
    // take user's input and pass it to API call
    const data = await fetchData(this.state.value);
    
    // set the state to the API call on above function
    this.setState({
      weatherData: data.data.main,
      location: data.data.name,
      isActive: true
    });
  }

  render(){
  return (
    <div className="App">
      <Input 
        onChange={this.handleChange} 
        onSubmit={this.handleSubmit}
      />
      {this.state.isActive  
        ? <WeatherCard 
          weatherData={this.state.weatherData} 
          location={this.state.location} />
        : null
      }
      
    </div>
  );
  }
}

export default App;
