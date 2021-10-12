import React from 'react'

import { Card, Typography } from '@mui/material'

import { useStyles } from '../LeaderBoard/styles'

export default function LeaderBoard(props) {

    const classes = useStyles();
    return (
        <>
            <Card
                className={classes.root}
            >
                <Typography
                    variant="h5"
                    className={classes.title}>
                    Leader Board
                </Typography>
            </Card>
        </>
    )
}