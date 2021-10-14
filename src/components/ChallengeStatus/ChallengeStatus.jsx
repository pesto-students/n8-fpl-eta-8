import React from 'react'

// mui 
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { useStyles } from './styles'

export default function ChallengeStatus(props) {


  const { status, startDate, endDate } = props;

  const titleText = (status) => {
    switch (status) {
      case "NOT_LIVE":
        return 'The Challenge Starts in'
      case "LIVE":
        return 'The Challenge Ends in'
      case "CLOSED":
      default:
        return ''
    }
  }

  const classes = useStyles(props);

  const percentage = (startDate, endDate) => {

  }

  return (
    <Card
      variant="outlined"
      className={classes.root} >
      <Grid container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.content}>
        <Grid item>
          <Typography
            variant="p"
            className={classes.text1}>
            {titleText(status)}
          </Typography>
        </Grid>
        <Grid item>
          <CircularProgressbar
            value={percentage}
            text={`12 days`}
            strokeWidth='9'
            styles={buildStyles({
              textSize: '1rem',
              pathTransitionDuration: 0.5,
              pathColor: `white`,
              textColor: 'white',
              trailColor: '#FFFFFF66',
              backgroundColor: '#3e98c7',
            })}
            className={classes.circularProgressBar}
          />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white'
            }}>Challenge Rules</Button>
        </Grid>
      </Grid>
    </Card>
  )
}
