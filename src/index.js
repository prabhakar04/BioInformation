import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./Reducers";
import SimpleForm from "./SimpleForm";

const loadState = () => {
  try {
    const data = localStorage.getItem("state");
    if (data === null) {
      return undefined;
    }
    return JSON.parse(data);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {}
};
const persistedState = loadState();

const store = createStore(Reducer, persistedState);
store.subscribe(() => {
  saveState(store.getState());
});

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Bio Form</h2>
      <SimpleForm />
    </div>
  </Provider>,
  rootEl
);
