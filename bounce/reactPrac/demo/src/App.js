import React,{ Component} from 'react';
import './App.css';
import Counter from './components/class'

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Counter count = { 0 } />
      </div>
    );
  }
}

export default App;


