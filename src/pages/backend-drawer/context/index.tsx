import * as React from "react";

export function StateContext<T>(defaultValue: T): React.Context<T> {
  return React.createContext<T>(defaultValue);
}
