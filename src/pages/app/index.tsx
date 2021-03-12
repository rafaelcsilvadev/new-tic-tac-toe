import React from "react";
import { Global } from "./styles";
import Router from "../../routes";

const App: React.FC = () => (
  <div>
    <Global />
    <Router />
  </div>
);

export default App;
