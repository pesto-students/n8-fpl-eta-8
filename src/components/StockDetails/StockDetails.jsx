import React from 'react'

// mui 
import { Container, Grid, Typography, Card } from '@mui/material';

// webapp components
import Header from '../Header/Header';

import { useParams } from "react-router";
import ChallengeContext from './ChallengeContext';
import { useStyles } from './styles';
import SensexChart from '../ChallengeList/SensexChart';


export default function StockDetails() {

  const { stock } = useParams();
  const classes = useStyles();

  return (
    <>
      <Container>
        <Header />
        <ChallengeContext />
        <Grid
          container
          spacing={1}
          direction="row"
          className={classes.root}>

          {/* title and stock search */}
          <Grid item xs={12} md={12} lg={12}>
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="space-between">
              <Typography variant="h5">{stock}</Typography>
              <Typography variant="p">searchbox</Typography>
            </Grid>
          </Grid>

          {/* advance chart  */}
          <Grid item xs={12} md={12} lg={12}>
            <SensexChart />
          </Grid>

          {/* advance analytics */}
          <Grid item xs={12} md={12} lg={12}>
            <Grid
              container
              spacing={1}
              direction="row">
              <Grid item xs={12} md={5} lg={5}>
                <Grid
                  container
                  spacing={1}
                  direction="column">
                  <Grid item xs={12}>
                    <Card variant="outlined"></Card>
                    {/* company overview */}
                  </Grid>
                  <Grid item xs={12}>
                    <Card variant="outlined"></Card>
                    {/* technical analysis */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={7} lg={7}>
                <Card variant="outlined"></Card>
                {/* financial widget */}
              </Grid>
            </Grid>
          </Grid>



        </Grid>

      </Container>
    </>
  )
}
