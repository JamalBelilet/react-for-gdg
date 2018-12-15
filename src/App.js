import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import DebateDetail from './components/debate_detail/DebateDetail'
import Debates from './components/debates/Debates' 
class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header></Header>
          <Route exact={true} path="/" component={Debates}/>
          <Route path="/d" component={DebateDetail}/>
          <Redirect from="/" to="/" />
          <Footer></Footer>
        </div>
      </Router>
    );
  }
};

export default App
