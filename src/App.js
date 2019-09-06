import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import resumeData from './resumeData.json';

import Home from './components/Home/Homepage';
import CV from './components/CV/CV';
import Portfolio from './components/Portfolio/Portfolio';

export default class App extends PureComponent {
  state = {
    resumeData
  };

  render() {
    const { portfolio, main, resume } = this.state.resumeData;
    return (
      <div className='app'>
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
