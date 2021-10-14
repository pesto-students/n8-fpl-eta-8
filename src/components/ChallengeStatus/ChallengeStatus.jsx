import React, { useState, useEffect } from 'react'

// mui 
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { Timestamp } from 'firebase/firestore'

import { useStyles } from './styles'

export default function ChallengeStatus(props) {


  const { status, startDate, endDate } = props;
  const classes = useStyles(props);

  const [challengeStatus, setChallengeStatus] = useState({ titleText: '', percentage: 0, duration: 0 });

  useEffect(() => {

    const currentDate = new Date();

    const oneDay = (1000 * 60 * 60 * 24) //milliseconds in a day
    const sDate = new Timestamp(startDate._seconds, startDate._nanoseconds).toDate();
    const eDate = new Timestamp(endDate._seconds, endDate._nanoseconds).toDate();

    const duration = (eDate - sDate) / oneDay;

    switch (status) {
      case 'LIVE':
        const endsIn = (eDate - currentDate) / oneDay;
        setChallengeStatus({
          percentage: ((endsIn / duration) * 100),
          titleText: 'The Challenge Ends in',
          duration: `${Math.floor(endsIn)} day`
        }); break;
      case 'NOT_LIVE':
        const startsIn = (sDate - currentDate) / oneDay;
        setChallengeStatus({
          percentage: ((endsIn / duration) * 100),
          titleText: 'The Challenge Starts in',
          duration: `${Math.floor(startsIn)} day`
        }); break;
      case "CLOSED":
        setChallengeStatus({
          percentage: 0,
          titleText: '',
          duration: ``
        }); break;
      default:
        return 0;
    }
  }, [startDate, endDate, status, challengeStatus]);


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
            {challengeStatus.titleText}
          </Typography>
        </Grid>
        <Grid item>
          <CircularProgressbar
            value={challengeStatus.percentage}
            text={challengeStatus.duration}
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
