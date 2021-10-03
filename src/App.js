import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
