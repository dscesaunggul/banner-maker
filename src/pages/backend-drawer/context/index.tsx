import * as React from "react";

type Background = {
  filename: string;
  base64: string;
};

type Canvas = {
  background: Background;
  objects: object[];
};

export type State = {
  canvas: Canvas;
  editable: false;
};

export const defaultValue: State = {
  canvas: {
    background: {
      filename: "",
      base64: ""
    },
    objects: []
  },
  editable: false
};

export const { Provider, Consumer } = React.createContext<State>(defaultValue);
