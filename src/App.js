import React from 'react';
import './Style/App.css';
import Workflow from 'components/Workflow';
import moment from 'moment';

export class App extends React.Component {
  state = {
    // eventDetails: {},
    eventDetails: {
      eventDate: "2020-01-26",
      startTime: "19:00"

    },
    tMinus: undefined,
    tasks: [],
    completedTasks: undefined,
    tPlus: false
  }

  setEventDetails = formResponse =>{
    let eventDetails = {...this.state.eventDetails};
    eventDetails = formResponse;
    this.setState({eventDetails});
  }

  calculateTMinus = () =>{
    console.log(`Calculating T-Minus...`)
    
    let now = moment(Date.now());
    let eventDetails = this.state.eventDetails;
    let {eventDate , startTime} = eventDetails;
    let eventString = `${eventDate} ${startTime}`;
    let tMinus = {...this.state.tMinus};
    
    if(now.isAfter(moment(eventString))){
      console.log('TPlus...')
    }

    tMinus = moment(eventString).fromNow('hh:mm');
    
    this.setState({ tMinus });
  }

  sortTasks = () =>{
    let tasks = [...this.state.tasks];
    
    
    tasks.sort(function(a,b){
      return b.hoursLead - a.hoursLead
    })

    this.setState({ tasks });
  }

completeTask = ( taskToRemove ) =>{
  let tasks = [...this.state.tasks];

  tasks = tasks.filter(task => task.description !== taskToRemove);
  
  this.setState({tasks});
}

createTask = (task) =>{
  let tasks = [...this.state.tasks];
  tasks.push(task);
  this.setState({tasks});
}

  render() {
    return (
        <div className="App">
        <Workflow eventDetails = {this.state.eventDetails} setEventDetails={this.setEventDetails} calculateTMinus = {this.calculateTMinus} tMinus={this.state.tMinus} tasks = {this.state.tasks} sortTasks={this.sortTasks} completeTask={this.completeTask}  createTask={this.createTask} />
      </div>
    );
  }
}

export default App;
