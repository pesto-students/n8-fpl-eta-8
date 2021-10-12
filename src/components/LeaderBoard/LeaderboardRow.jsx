import React from 'react'

import { Typography, Grid } from '@mui/material'

import { useStyles } from './styles'

export default function LeaderBoardRow(props) {

    const classes = useStyles();
    const { 
        name, 
        portfolio_return, 
        _1_day_change, 
        _1_day_position_change, 
        isTitle,
         position } = props;

    console.log(`Props ${JSON.stringify(props, 0, 2)}`)

    return (
        <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={!isTitle && classes.tableRow} 
        >
            <Grid
                item
                xs={4} lg={4}>
                <Typography
                    variant="p"
                    className={isTitle ? classes.rowTitle : null}
                >
                    {isTitle ?'':position+'.'} {name}
                </Typography>
            </Grid>
            <Grid
                item
                xs={3} lg={3}>
                <Typography
                    variant="p"
                    className={isTitle ? classes.rowTitle : null}
                >{portfolio_return}
                </Typography>
            </Grid>
            <Grid
                item
                xs={2} lg={2}>
                <Typography
                    variant="p"
                    className={isTitle ? classes.rowTitle : null}

                >{_1_day_change}
                </Typography>
            </Grid>
            <Grid
                item
                xs={3} lg={3}>
                <Typography
                    variant="p"
                    className={isTitle ? classes.rowTitle : null}
                >{_1_day_position_change}
                </Typography>
            </Grid>
        </Grid>
    )
}