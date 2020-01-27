import React, { Component } from 'react';
import './App.css';
import Jerry from './components/Jerry';
// import Jerry from './components/Jerry'

class App extends Component {
  constructor() {
    super()
    this.state = {
      mySwitch: false
    }
  }
  onChange = () => {
    this.setState({
      mySwitch: !this.state.mySwitch
    });
  }


  render() {
    const mySwitch = this.state.mySwitch;
    const bulb = "chocolate"
    return (
      <div>
        <h1>Tom gets : {mySwitch && bulb}</h1>
        <Jerry data={!mySwitch && bulb} />
        <button onClick={this.onChange}>Click me</button>

      </div>
    )
  }

}


export default App;
