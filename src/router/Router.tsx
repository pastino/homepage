import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../screen/home/Home";

export default () => {
  return (
    <Router>
      {/* <Header auth={user} /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};
