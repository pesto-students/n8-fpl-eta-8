import React from 'react'

// material ui imports
import Card from '@mui/material/Card'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'

import { useStyles } from './styles'

export default function ChallengeCard(){
    const classes = useStyles();
    return(
        <Card variant="outlined" className={classes.root}>
            <div className={classes.challengeDetails}>
            <Typography variant="h5">Max. Return IT Sector</Typography>
            <Typography variant="h6">22nd. Sep. 2021 - 29th Sep. 2021</Typography>
            </div>
            <Button color="primary" fullWidth="true" style={{justifyContent:'flex-start'}} variant="contained" >Create Portfolio</Button>
        </Card>
    );
}