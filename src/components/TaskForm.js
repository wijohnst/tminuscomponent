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
    let unit = e.target.value;
    let conversionFactor = undefined;
    let hoursConversion = {...this.state.hoursConversion};
    let time = {...this.state.time};

    switch(unit){
      case 'day':
        conversionFactor = 24;
        break;
      case 'hour':
        conversionFactor = 1;
        break;
      case 'minute':
        conversionFactor = 0.02;
        break;
      default:
        conversionFactor = 1;
    }

    hoursConversion = (parseInt(time[0])) * conversionFactor;
    this.setState({ hoursConversion });
    // let hoursConversion = {...this.state.hoursConversion};
    // let time = {...this.state.time};
    // hoursConversion = (parseFloat(e.target.value) * parse(time[0]));
    // this.setState({ hoursConversion });
  }

  handleSubmit = e =>{
      e.preventDefault();
      if(this.state.description){
      let task = {
        description: this.state.description,
        hoursLead: this.state.hoursConversion
      }
      document.getElementById("create-task-form").reset();
      this.props.createTask(task);
  }else{
    alert("Please add a task to continue.")
  }
}
    render() {
    return (
      <div>
        <form id="create-task-form" onSubmit={this.handleSubmit}>
          <div className="input-wrapper">
            <div className="input-description-wrapper">
              <h3 id="description-label">Task Description:</h3>
              <input id="input-description" type="text" placeholder="Enter Task Description" onChange={this.handleDescription}/>
            </div>
            <div className="input-lead-time-wrapper">
            <h3 id="description-label">Lead Time:</h3>
              <input id="input-lead-time" type="text" placeholder="Enter Lead Time" onChange={this.handleTime} />
            </div>
            <div className="input-unit-select-wrapper">
            <h3 id="description-label">Unit:</h3>
              <select id="input-unit-select" onChange ={this.handleUnit}>
                <option value="0"> -- Unit --</option>
                <option value="day"> Days </option>
                <option value="hour"> Hours </option>
                <option value="minute"> Minutes </option>
                {/* <option value="0"> -- Unit --</option>
                <option value="24"> Days </option>
                <option value="1"> Hours </option>
                <option value="0.016666"> Minutes </option> */}
              </select>
            </div>
            <div className="input-submit-button-wrapper">
              <input className="input-submit" id="input-form-submit" type="submit" value="Create Task" />
              <input className="input-submit" id="input-sort-tasks" type="button" value="Sort Tasks" onClick={this.props.sortTasks}/>
            </div>
          </div>
        </form>
        
      </div>
    )
  }
}

export default TaskForm
