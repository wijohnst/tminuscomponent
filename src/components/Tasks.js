import React, { Component } from 'react'
import TaskView from 'components/TaskView'
import TaskForm from 'components/TaskForm'
import TaskPrompt from 'components/TaskPrompt'

export class Tasks extends Component {
    render() {
      if(this.props.tasks.length === 0){
        return(
          <React.Fragment>
            <TaskPrompt />
            <TaskForm createTask={this.props.createTask} sortTasks={this.props.sortTasks} />
          </React.Fragment>
        )
      }else{
        return (
        <div>
          <React.Fragment>
            <TaskView tasks={this.props.tasks} sortTasks={this.props.sortTasks} completeTask={this.props.completeTask} />
            <TaskForm createTask={this.props.createTask} sortTasks={this.props.sortTasks} />
          </React.Fragment>
        </div>
      )
    }
  }
}

export default Tasks
