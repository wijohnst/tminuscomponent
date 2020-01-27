import React, { Component } from 'react'
import '../Style/TaskForm.css'

export class TaskForm extends Component {
  
  state = {
    description: undefined,
    time: undefined,
    hoursConversion: undefined
  }


  handleDescription = e =>{
    let description = {...this.state.description};
    description = e.target.value;
    this.setState({description});
  }


  handleTime = e =>{
    let time = {...this.state.time};
    time = e.target.value;
    this.setState({time});
  }

  handleUnit = e =>{
    let hoursConversion = {...this.state.unit};
    let time = {...this.state.time};
    hoursConversion = (parseFloat(e.target.value) * parseFloat(time[0]));
    this.setState({ hoursConversion });
  }

  handleSubmit = e =>{
      e.preventDefault();
      let task = {
        description: this.state.description,
        hoursLead: this.state.hoursConversion
      }
      document.getElementById("create-task-form").reset();
      this.props.createTask(task);
      
    }
    render() {
    return (
      <div>
        <form id="create-task-form" onSubmit={this.handleSubmit}>
          <div className="input-wrapper">
            <div className="input-description-wrapper">
              <input id="input-description" type="text" placeholder="Enter Task Description" onChange={this.handleDescription}/>
            </div>
            <div className="input-lead-time-wrapper">
              <input id="input-lead-time" type="text" placeholder="Enter Lead Time" onChange={this.handleTime} />
            </div>
            <div className="input-unit-select-wrapper">
              <select id="input-unit-select" onChange ={this.handleUnit}>
                <option value="0"> -- Unit --</option>
                <option value="24"> Days </option>
                <option value="1"> Hours </option>
                <option value="0.016666"> Minutes </option>
              </select>
            </div>
            <div className="input-submit-button-wrapper">
              <input id="input-submit" type="submit" value="Create Task" />
              
            </div>
          </div>
        </form>
        <button onClick={this.props.sortTasks}>Sort Tasks</button>
      </div>
    )
  }
}

export default TaskForm
