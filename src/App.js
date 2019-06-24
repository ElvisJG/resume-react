import React, { PureComponent, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import resumeData from './resumeData.json';

import Nav from './component/Navigation/Navbar';
// import Home from "./component/Home/Homepage";
import CV from './component/CV/CV';
import Portfolio from './component/Portfolio/Portfolio';
const Home = lazy(() => import('./component/Home/Homepage'));
// import Contact from './component/Contact/ContactForm';
// const Contact = lazy(() => import("./component/Contact/ContactForm"));

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      resumeData
    };
  }

  render() {
    const { portfolio, main, resume } = this.state.resumeData;
    return (
      <div className='app'>
        <Nav />
        <Suspense fallback={<h1 className='loading'>loading..</h1>}>
          <Route path='/' exact render={props => <Home main={main} />} />
        </Suspense>
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
