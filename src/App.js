import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import ChallengeList from "./components/ChallengeList/ChallengeList";
import firebase from "./firebase";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  const LoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  useEffect(() => {
    firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });

  return firebaseInitialized !== false ? (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
        <ChallengeList />
        </Route>
      </Switch>
    </div>
  ) : (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
}

export default App;
