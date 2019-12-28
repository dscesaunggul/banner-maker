import * as React from "react";
import CanvasBackendDrawer from "./components/canvas";
import FormBackendDrawer from "./components/form";
import { State, defaultValue, StateContext } from "./context";

type Action = {
  type: string;
  payload: object;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const BackendDrawer: React.SFC<{}> = () => {
  const [state, dispatch] = React.useReducer(reducer, defaultValue);
  return (
    <StateContext.Provider value={state}>
      <div className="columns">
        <div className="column is-vcentered is-half-desktop is-full-mobile is-half-tablet">
          <FormBackendDrawer />
        </div>
        <div className="column is-half-desktop is-full-mobile is-half-tablet">
          <CanvasBackendDrawer />
        </div>
      </div>
    </StateContext.Provider>
  );
};

export default BackendDrawer;
