import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Nav from './component/Navigation/Navbar';
import Home from './component/Home/Homepage';
import CV from './component/CV/CV';
import Portfolio from './component/Portfolio/Portfolio';
// import Contact from './component/Contact/ContactForm';

import resumeData from './resumeData.json';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      resumeData: resumeData
    };
  }

  render() {
    const { portfolio, main, resume } = this.state.resumeData;
    return (
      <div className='app'>
        <Nav />
        <Route path='/' exact render={props => <Home main={main} />} />
        <Route
          path='/cv'
          exact
          render={props => <CV resume={resume} main={main} />}
        />
        <Route
          path='/portfolio'
          exact
          render={props => <Portfolio portfolio={portfolio} />}
        />
        {/* <Route path='/contact' exact render={props => <Contact />} /> */}
      </div>
    );
  }
}
