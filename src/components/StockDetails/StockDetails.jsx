import React from 'react'

// mui 
import { Container, Grid, Typography } from '@mui/material';

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
          
          {/* advance analytics  */}
          <Grid item xs={12} md={12} lg={12}>
            <SensexChart/>
          </Grid>
        
        
        
        </Grid>

      </Container>
    </>
  )
}
