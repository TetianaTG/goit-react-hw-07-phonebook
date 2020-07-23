import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeContext from "./contexts/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <ThemeContext>
      <App />
    </ThemeContext>
  </Provider>,
  document.getElementById("root")
);
