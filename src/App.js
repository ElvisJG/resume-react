import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './component/Navigation/Navbar';
import Home from './component/Home/Homepage';
import CV from './component/CV/CV';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/ContactForm';

import resumeData from './resumeData.json';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resumeData: resumeData
    };
  }

  render() {
    return (
      <div className='app'>
        <Nav />
        <Route
          path='/'
          exact
          render={props => <Home {...resumeData} resumeData={resumeData} />}
        />
        <Route
          path='/cv'
          exact
          render={props => <CV {...resumeData} resumeData={resumeData} />}
        />
        <Route
          path='/portfolio'
          exact
          render={props => (
            <Portfolio {...resumeData} resumeData={resumeData} />
          )}
        />
        <Route path='/contact' exact render={props => <Contact />} />
      </div>
    );
  }
}
