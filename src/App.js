import React,{ Component } from 'react';
import './App.css';
import Stopwatch from './components/stopwatch'

class App extends Component {

render() {
    return (
      <div className='container'>
       <Stopwatch />
      </div> 
      )
  }
 }

export default App;
