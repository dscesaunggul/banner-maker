import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bulma/css/bulma.css'

const Main: React.SFC<{}> = () => (
  <div>
    <h1>Hello world ...</h1>
  </div>
);

ReactDOM.render(<Main />, document.getElementById("main"));
