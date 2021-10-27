import React from "react";
import { useHistory } from "react-router";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import LandingHeader from "components/LandingHeader/LandingHeader";
import LandingMain from "components/LandingMain/LandingMain";
import firebase from "firebase";

export default function Landing() {
  const history = useHistory();

  if (firebase.getCurrentUsername()) {
    // not logged in
    history.push("/home");
    return null;
  }

  return (
    <Container>
      <Grid container direction="column" alignItems="center">
        <LandingHeader />
        <LandingMain />
      </Grid>
    </Container>
  );
}
