import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Social from '../social/Social'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Link exact={true} style={{textDecoration: 'none'}} to="/"><h1>WTM Algiers Debates</h1></Link>
                <Social/>
            </header>
        )
    }
}

export default Header