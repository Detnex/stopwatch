import React,{ Component } from 'react';
import './stopwatch.css';

class Stopwatch extends Component {
    constructor(props) {
    	super(props) 
    	this.state = {
    		hour: 0,
    		minute: 0,
    		second: 0,
    		i: 0,
            j: true
    	}
    }

    componentDidMount() {
    if(true) {
         this.interval1 = setInterval(() => {
         this.setState({ second: Number(this.state.i) % 60 })
       },1000)
    }

    if(true) {
         this.interval1 = setInterval(() => {
         this.setState({ minute: Math.floor(Number(this.state.i) / 60) })
       },1000)
    }

    if(true) {
         this.interval1 = setInterval(() => {
         this.setState({ hour: Math.floor(Number(this.state.i) / 3600) })
       },1000)
    }	
   }

    handlechange = props => {
        if(this.state.j) {
              this.interval = setInterval(() => {
              this.setState({ i: this.state.i + 1})
          },1000) 
      }
      this.setState({ j: false })
        }
      

    handlechange1 = props => {
    	clearInterval(this.interval);
        this.setState({ j: true })

    }

    handlechange2 = props => {
    	this.setState({hour : 0,minute: 0,second: 0, i:0, j: true })
    	clearInterval(this.interval);
    }

    render() {
    	const {hour,minute,second} = this.state
    	return( 
    		<div className="watch-container">
    		<h1> STOPWATCH </h1>
              <h2>{hour} : {minute} : {second}</h2>
             <div className="buttons"> 
              <button onClick={this.handlechange}>Start</button>
              <button onClick={this.handlechange1}>Stop</button>
              <button onClick={this.handlechange2}>Reset</button>
             </div> 
            </div>   
    		)
    }
}

export default Stopwatch;