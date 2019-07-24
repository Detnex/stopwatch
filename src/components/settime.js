import React, { Component } from 'react'


class Settime extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      hour: '',
      minute: '',
      second: '',
      i: ''
    }

    this.state = this.initialState
  }

   handleChange = event => {
  const { hour, minute, second } = event.target
  console.log(event.target.hour);
  console.log(event.target.minute);
  console.log(event.target.second);
 
}

submitForm = () => {
  this.props.handleSubmit(this.state)
  this.setState(this.initialState)
}
   
 render() {

  const { hour,minute,second } = this.state
  return (
    <form>
      <label>Hour</label>
      <input
        type="text"
        name="hour"
        value={hour}
        onChange={this.handleChange} />
      <label>Minute</label>
      <input
        type="text"
        name="minute"
        value={minute}
        onChange={this.handleChange} />
       <label>Second</label>
      <input
        type="text"
        name="second"
        value={second}
        onChange={this.handleChange} />  
      <input type="button" value="Submit" onClick={this.submitForm} />
    </form>
  )
 }
}
export default Settime;