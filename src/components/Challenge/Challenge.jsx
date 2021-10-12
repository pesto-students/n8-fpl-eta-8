import React from "react";

// mui
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";



// Custom Components
import ChallengeStatus from "../ChallengeStatus/ChallengeStatus";
import Portfolio from "../Portfolio/Portfolio";

import { useStyles } from "./styles";

export default function Challenge() {

  const classes = useStyles();
  return (
    <>
      <Container>
        <Typography
          variant="h4"
          className={classes.challengeTitle}>
          Challenge Name
        </Typography>
        <Grid
          container
          direction="row"
          spacing={4}>
          <Grid item xs={12} md={10} lg={9}>
            <Portfolio />
          </Grid>
          <Grid item xs={12} md={2} lg={3}>
            <ChallengeStatus />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
