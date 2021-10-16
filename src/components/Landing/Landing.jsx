import React from "react";
import LandingHeader from "../LandingHeader/LandingHeader";
import LandingMain from "../LandingMain/LandingMain";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import firebase from "../../firebase";
import { useHistory } from "react-router";

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
