import React, { Component } from 'react';

class Jerry extends Component {
  constructor(props) {
    super(props);
    
  }



  render() {
    return (
      <div>
        <h1>Jerry gets : {this.props.data}</h1>

      </div>
    )
  }
}

export default Jerry;
