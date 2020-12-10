import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import NavLink from "./components/NavLink";
import { Provider } from "react-redux";
import store from "./store/index";
import Message from "./components/message/Message";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router routes={routes}>
        <NavLink></NavLink>
        <Message/>
        {routes}
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
