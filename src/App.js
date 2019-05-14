import React, { Component } from 'react';
import './App.css';
import EventContainer from './EventContainer';

import Header from './Header';
import { Route, Switch } from 'react-router-dom';

const My404 = () => {
  return (
    <div>
      You were re-directed to bad page!
    </div>
    )
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/events" component={EventContainer}/>
          <Route component={My404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
