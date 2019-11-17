import React from 'react';

import './App.css';
import LeftBar from './components/leftBar'
import RightBar from './components/rightBar'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: undefined
    }
    this.searchCity = this.searchCity.bind(this)
    this.city = 'Kutaisi';
    this.searchCity()
  }
  getLink(value) {
    return `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=6935807410a7da4dfc54835be68bb326`
  }
  async searchCity() {
    
    let cityValue = this.city
    if(document.getElementById('city')) {
        cityValue = document.getElementById('city').value ?  document.getElementById('city').value : cityValue
    }
    
    let link = this.getLink(cityValue)
    
      let data =  await (await fetch(link)).json();
    
      this.setState({
       data: data
      })
      
    
    
  }

  async componentDidMount() {
    this.searchCity()
    // let cityValue = document.getElementById('city').value 
    // cityValue = cityValue ? cityValue : this.city;
    // let link = this.getLink(cityValue)
    // let data = await fetch(link);
    
    //  this.setState({
    //    data: await data.json()
    //   })
  }
  render() {
    return(
      <div className='app'>
        <LeftBar onSearcCity = {this.searchCity}/>
        <RightBar data = {this.state.data} />
      </div>
    )
  }
}

export default App;
