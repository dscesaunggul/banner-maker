import * as React from "react";
import * as ReactDOM from "react-dom";

const Main: React.SFC<{}> = () => (
  <div>
    <h1>Hello world ...</h1>
  </div>
);

ReactDOM.render(<Main />, document.getElementById("main"));
