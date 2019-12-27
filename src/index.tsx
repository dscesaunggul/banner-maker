import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.css";
import "./styles/common.styl";
import BackendDrawer from "./pages/backend-drawer";

const Main: React.SFC<{}> = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <BackendDrawer />
      </Route>
    </Switch>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById("main"));
