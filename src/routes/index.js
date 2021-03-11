import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home, State } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/estado/:estado" component={State} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export { Routes };
