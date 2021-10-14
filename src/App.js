import React, { useEffect, useState } from "react";

// router management
import { Route, Switch } from "react-router-dom";
import { CircularProgress } from "@mui/material";

// page components
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import ChallengeList from "./components/ChallengeList/ChallengeList";
import Challenge from "./components/Challenge/Challenge";

// firebase setup
import firebase from "./firebase";
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
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={ChallengeList} />
        <Route path="/challenge/:challengeId" component={Challenge} />
      </Switch>
    </div>
  ) : (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
}

export default App;
