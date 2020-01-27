import React, { Component } from 'react'
import Task from 'components/Task'
import '../Style/TaskView.css'

const uuidv1 = require('uuid/v1');

export class TaskView extends Component {
  componentDidMount(){
    console.log('Sorting...')
    this.props.sortTasks();
  } 
  
  render() {

    if(this.props.tasks){
    return (
    <div id="tasks-wrapper">
      <div id="task-area">
        {this.props.tasks.map((task, index) =>(
          <Task  key={uuidv1()} task={task} completeTask={this.props.completeTask}/>
        ))}
      </div>
    </div>
    )
  }
  else{
    return(
      <div>
        <p> Please add a task. </p>
      </div>
    )
  }
}
}

export default TaskView
