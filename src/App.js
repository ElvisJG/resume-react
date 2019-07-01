import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import resumeData from './resumeData.json';

import Nav from './component/Navigation/Navbar';
import Home from './component/Home/Homepage';
import CV from './component/CV/CV';
import Portfolio from './component/Portfolio/Portfolio';
// const Home = lazy(() => import('./component/Home/Homepage'));
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
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition timeout={450} classNames='fade' key={location.key}>
                <Switch location={location}>
                  <Route path='/' exact render={() => <Home main={main} />} />
                  <Route
                    path='/cv'
                    render={() => <CV resume={resume} main={main} />}
                  />
                  <Route
                    path='/portfolio'
                    render={() => <Portfolio portfolio={portfolio} />}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}
