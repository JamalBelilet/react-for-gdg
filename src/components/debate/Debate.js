import React, { Component } from 'react'
import './Debate.css'
export default class Debate extends Component {
  render() {
    return (
    <div className="debate">
        <h2><span>#db{this.props.idx}:</span>{this.props.debate.title}</h2>
        <p>{this.props.debate.ideas.length} ideas 🤓</p>
      </div>
    )
  }
}
