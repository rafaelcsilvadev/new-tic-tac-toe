import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InputData from './inputData';
import Game from './game';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={InputData} />
        <Route path='/game' component={Game} />
      </Switch>
    </BrowserRouter>
  );
}
