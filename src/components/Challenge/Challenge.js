import React from "react";
import styled from "styled-components";
import Portfolio from "../Portfolio/Portfolio";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import ChallengeStatus from "../ChallengeStatus/ChallengeStatus";

const ChallengeTitle = styled.h1`
  margin-top: 70px;
`;

export default function Challenge() {
  return (
    <div>
      <Container>
        <ChallengeTitle>Challenge Name</ChallengeTitle>
        <Grid container direction="row" spacing={4}>
          <Grid item xs={12} md={8} lg={7}>
            <Portfolio />``
          </Grid>
          <Grid item xs={12} md={4} lg={5}>
            <ChallengeStatus />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
