import React, { Component } from 'react';

export default class child extends Component {
    constructor(){
        super()
    }

    state = {
        name : "rashmi"
    }

    componentDidMount(){
        this.props.getName(this.state.name)
    }

  render() {
    return (
      <div> {this.props.frndsName} </div>
    );
  }
}
