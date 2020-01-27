import React , { Component } from 'react';
import './App.css';
import Child from './components/child'

class App extends Component{

  constructor() {
    super()
  }

  getNameFromChild = (childName) =>{
    console.log(childName)
      this.setState({
        name: childName
      })
  }

  state = {
    name : "app.js is parent"
  }

  render(){
  return (
    <div className="App">

    
  <h1>{this.state.name}</h1> 

    <Child frndsName = {this.state.name } getName = {this.getNameFromChild}

  />

    </div>
  );
  }
}



export default App;
