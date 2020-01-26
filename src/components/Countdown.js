import React, { Component } from 'react'
import CountdownHeading from 'components/CountdownHeading'
import TMinus from 'components/TMinus'

export class Countdown extends Component {
  
  render() {
    return (
      <React.Fragment>
        <CountdownHeading eventDetails={this.props.eventDetails} />
        <TMinus eventDetails={this.props.eventDetails} calculateTMinus = {this.props.calculateTMinus} tMinus = {this.props.tMinus} />
      </React.Fragment>
      
    )
  }
}

export default Countdown
