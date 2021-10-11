import React from 'react'

// mui 
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ChallengeStatus() {
  const percentage = 66;
  return (
    <Card variant="outlined">
      <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
        <Grid item>
          <Typography>
            The Challenge Starts in
          </Typography>
        </Grid>
        <Grid item>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />;
        </Grid>
        <Grid item>
          <Button variant="outlined"></Button>
        </Grid>
      </Grid>
    </Card>
  )
}
