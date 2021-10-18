import React from "react";
import { Route, Switch } from "react-router-dom";
import { CircularProgress } from "@mui/material";

// page components
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import ChallengeList from "./components/ChallengeList/ChallengeList";

// firebase setup
import firebase from "./firebase";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <ProtectedRoute path="/home" component={ChallengeList} />
      </Switch>
    </div>
  );
}

export default App;
