import React from "react";
import LandingHeader from "../LandingHeader/LandingHeader";
import Grid from '@mui/material/Grid';

export default function Landing() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <LandingHeader></LandingHeader>
      </Grid>
    </Grid>
  );
}
