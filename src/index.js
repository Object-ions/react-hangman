import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { legacy_createStore as createStore } from "redux"; // store
import { Provider } from "react-redux";
import reducer from "./reducers/game-over-status-reducer";

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
