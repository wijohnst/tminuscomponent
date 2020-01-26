import React, { Component } from 'react'
import '../Style/Task.css'

export class Task extends Component {
  
  handleClick = e =>{
    let taskToRemove = e.target.value;
    this.props.completeTask(taskToRemove);
  }
  render() {
    return (
      <div id="task-wrapper">
        <div className="task">
          <h3><u>Task:</u> {this.props.task.description} </h3> 
          <h3><u>Start Task:</u> T-{this.props.task.hoursLead} hours</h3>
          <button onClick={this.handleClick} value={this.props.task.description}> Complete Task </button>
        </div>
      </div>

    )
  }
}
export default Task
