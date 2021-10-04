import React from "react";
import LandingHeader from "../LandingHeader/LandingHeader";
import LandingMain from "../LandingMain/LandingMain";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Landing() {
  return (
    <Container>
        <Grid container direction="column" alignItems="center">
          <LandingHeader></LandingHeader>
          <LandingMain></LandingMain>
        </Grid>
    </Container>
  );
}
