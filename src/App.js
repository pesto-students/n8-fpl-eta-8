import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import backgroundImage from "./assets/Background.png";

function App() {
  const MainWrapper = styled.div`
    background: #ffffff url(${backgroundImage}) no-repeat;
    background-size: cover;
    min-height: 600px;

    @media (min-width: 768px) {
      min-height: 1000px;
    }
  `;
  return (
    <MainWrapper>
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
    </MainWrapper>
  );
}

export default App;
