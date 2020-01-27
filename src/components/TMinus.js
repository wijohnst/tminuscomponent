import React, { Component } from 'react'
import '../Style/tMinus.css'

export class TMinus extends Component {
  componentDidMount(){
    this.props.calculateTMinus();
    setInterval(this.props.calculateTMinus, 30000)
  }

  render() {
    return (
      <div id='tMinusWrapper'>
        <h1>T-Minus : {this.props.tMinus} </h1>
      </div>
    )
  }
}

export default TMinus
