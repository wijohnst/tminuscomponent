import React, { Component } from 'react'

export class CreateEventForm extends Component {
  state = {
    eventDate: {},
    eventStartTime: {}
  };

  setEventDate = e =>{ 
    let eventDate = {...this.state.eventDate};
    eventDate = e.target.value;
    this.setState({eventDate});
  };

  setEventStartTime = e =>{
    let eventStartTime = {...this.state.eventStartTime};
    eventStartTime = e.target.value;
    this.setState({eventStartTime});
  };

  handleSubmit = e =>{
    e.preventDefault();
    let eventDetails = {
      eventDate: this.state.eventDate,
      startTime: this.state.eventStartTime
    }
    this.props.setEventDetails(eventDetails);
  }
  render() {
    return (
        <div id="create-event-wrapper">
        <h2> Create A New Event </h2>
        <form onSubmit={this.handleSubmit}>
          <span>What is the date of your event?</span>
          <br />
          <input type="date" name="event-date" onChange={ this.setEventDate } />
          <br />
          <span>When will you begin serving food?</span>
          <br />
          <input type="time" id="event-time" onChange={ this.setEventStartTime } />
          <br />
          <input type="submit" value="Create Event" onClick={ this.handleSubmit }/>
        </form>
      </div>
    )
  }
}

export default CreateEventForm
