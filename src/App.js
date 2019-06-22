import React, { Component } from 'react';
import Nav from './component/Navigation/Navbar';
import Home from './component/Home/Homepage';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resumeData: []
    };
  }

  render() {
    return (
      <div className='app'>
        <Nav />
        <Route path='/' exact render={props => <Home />} />
      </div>
    );
  }
}
