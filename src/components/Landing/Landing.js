import React from "react";
import LandingHeader from "../LandingHeader/LandingHeader";
import LandingMain from "../LandingMain/LandingMain";
import Grid from '@mui/material/Grid';

export default function Landing() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <LandingHeader></LandingHeader>
      </Grid>
      <Grid item xs={12}>
        <LandingMain></LandingMain>
      </Grid>
    </Grid>
  );
}
