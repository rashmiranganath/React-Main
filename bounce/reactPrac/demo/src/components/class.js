import React , { Component } from 'react'

class Counter extends Component {
    constructor(props) {
    super(props);
    this.state = ({count : this.props.count});
 }
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

 export default  Counter