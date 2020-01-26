import React, { Component } from 'react'
import '../Style/CountdownHeading.css'

export class CountdownHeading extends Component {

  render() {
    return (
      <div id="heading-wrapper">
        <div id="banner-wrapper">
          <h1 id="banner"> T-Minus Event Planner</h1>
        </div>
        <div id="date-wrapper">
          <h2>Event Date: {this.props.eventDetails.eventDate}</h2>
        </div>
        <div id="time-wrapper">
          <h2>Zero Hour: {this.props.eventDetails.startTime}</h2>
        </div>
      </div>
    )
  }
}

export default CountdownHeading
