import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import AppPage1 from '../AppPage1/AppPage1';
import AppPage2 from '../AppPage2/AppPage2';

const App = () => (
  <Switch>
    <Route exact path="/appPage1" component={AppPage1} />
    <Route exact path="/appPage2" component={AppPage2} />
  </Switch>
);

export default withRouter(connect(null, null)(App));

