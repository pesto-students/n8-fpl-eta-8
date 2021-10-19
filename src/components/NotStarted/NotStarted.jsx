import { Grid, Typography } from '@mui/material';
import React from 'react';

import notStartedScene from '../../assets/not-started.svg';
import { useStyles } from './styles';

export default function NotStarted() {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Leaderboard
            </Typography>
            <div className={classes.lbContainer}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center">
                    <Grid
                        item
                        xs={12} lg={12} md={12}
                        align="center">
                        <img src={notStartedScene} alt="Not Started" srcset="" />
                    </Grid>
                    <Grid
                        item
                        xs={12} lg={12} md={12}
                        align="center">
                        <Typography variant="p" className={classes.title}>
                            Not Started
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    )
};