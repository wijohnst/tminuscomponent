import React, { Component } from 'react'
import CreateEventForm from 'components/CreateEventForm'
import Countdown from 'components/Countdown'
import Tasks from 'components/Tasks'
import '../Style/CreateEvent.css'

export class CreateEvent extends Component {
  
  render() {
    if(Object.entries(this.props.eventDetails).length === 0){
    return (
      <CreateEventForm setEventDetails={this.props.setEventDetails}/>
    );
    }
    else{
      return(
        <React.Fragment>
          <Countdown eventDetails = {this.props.eventDetails} calculateTMinus = {this.props.calculateTMinus} tMinus={this.props.tMinus} />
          <Tasks tasks={this.props.tasks} sortTasks={this.props.sortTasks} completeTask={this.props.completeTask}/>
        </React.Fragment>
        
      );
    }
  }
}

export default CreateEvent
