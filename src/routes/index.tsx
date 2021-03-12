import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import InputData from "../pages/inputData";
import Game from "../pages/game";

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={InputData} />
      <Route path="/game" component={Game} />
    </Switch>
  </BrowserRouter>
);

export default Router;
