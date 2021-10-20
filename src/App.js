import React, { useEffect, useState } from "react";

// firebase setup
import firebase from "./firebase";

// styling 
import styled from "styled-components";

// router management
import { Route, Switch } from "react-router-dom";
import { CircularProgress } from "@mui/material";

// page components
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import ChallengeList from "./components/ChallengeList/ChallengeList";

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

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

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
        <ProtectedRoute path="/home" component={ChallengeList} />
      </Switch>
    </div>
  ) : (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
}

export default App;
