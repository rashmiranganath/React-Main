import React , { Component } from 'react'

class click extends Component {
    constructor(props)
    super (props)

    on = () =>{
        this.setState({count: this.state.count + 1});
        console.log("---")
      }

      render() {
        return (
        <div>
          <div>count:{this.state.count}</div>
  
          <button onClick={this.on}>click</button>
          
      </div>
   
       );
      }
}
