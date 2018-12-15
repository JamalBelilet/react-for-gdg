import React, { Component } from 'react'
import './Ideas.css'
import Idea from '../idea/Idea'
export default class Ideas extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ideas">
                {
                    this.props.ideas.map((idea, idx) => (
                        idx >= this.props.counter
                            &&  idx < this.props.counter + 3
                                ? <Idea {...idea}/>
                                : undefined
                    ))
                }
            </div>
        )
    }
}
