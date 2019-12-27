import * as React from "react";
import CanvasBackendDrawer from "./components/canvas";
import FormBackendDrawer from "./components/form";

const BackendDrawer: React.SFC<{}> = () => (
  <div className="columns">
    <div className="column is-vcentered is-half-desktop is-full-mobile is-half-tablet">
      <FormBackendDrawer />
    </div>
    <div className="column is-half-desktop is-full-mobile is-half-tablet">
      <CanvasBackendDrawer />
    </div>
  </div>
);

export default BackendDrawer;
