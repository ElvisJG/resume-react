import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './component/Navigation/Navbar';
import Home from './component/Home/Homepage';
import CV from './component/CV/CV';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/ContactForm';

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
        <Route path='/cv' exact render={props => <CV />} />
        <Route path='/portfolio' exact render={props => <Portfolio />} />
        <Route path='/contact' exact render={props => <Contact />} />
      </div>
    );
  }
}
