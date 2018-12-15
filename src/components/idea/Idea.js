import React, { Component } from 'react'
import './Idea.css'

export default class Idea extends Component {
  render() {
    return (
        <div className="idea">
            <h3>
                <span>{this.props.username}:</span>
                {this.props.idea} 
            </h3>
            <p>{this.props.args}</p>           
        </div>
      
    )
  }
}
