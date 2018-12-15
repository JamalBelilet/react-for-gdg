import React, { Component } from 'react'
import './DebateDetail.css'
import Ideas from '../ideas/Ideas'
import {Redirect} from 'react-router-dom'

export default class DebateDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      ideas: [],
      title: '',
    }
  }

  handleClick = () => {
    if( this.state.ideas.length > this.state.counter + 3 )
      this.setState({counter: this.state.counter + 3})
    else 
      this.setState({counter: 0})
  }

  componentWillMount() {
    if(!this.props.location.query) return
    const {ideas, title, idx} = this.props.location.query
    const id = this.props.match.params.id
    this.setState({ideas: ideas, title: title, idx:idx})
  }

  render() {
    if (this.state.ideas.length == 0) {
      return <Redirect to='/' />
    }
    return (
      <div className="debate_detail">
        <h2><span>#db{this.state.idx}:</span>{this.state.title}</h2>

        <Ideas counter={this.state.counter} ideas={this.state.ideas}/>

        <button className="more"  onClick={this.handleClick}>
          {
            this.state.ideas.length > this.state.counter + 3
              ? 'more... 😋 '
              : 'reload... 🤗'
          }
          
        </button>
      </div>
    )
  }
}
