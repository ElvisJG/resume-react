import React, { PureComponent, Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';

import resumeData from './resumeData.json';

const Nav = lazy(() => import('./component/Navigation/Navbar'));
const Home = lazy(() => import('./component/Home/Homepage'));
const CV = lazy(() => import('./component/CV/CV'));
const Portfolio = lazy(() => import('./component/Portfolio/Portfolio'));
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
      <Suspense fallback={<h1 className='loading'>loading..</h1>}>
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
      </Suspense>
    );
  }
}
