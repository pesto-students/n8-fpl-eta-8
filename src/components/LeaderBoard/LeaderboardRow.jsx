import React from 'react'

// mui components
import { Typography, Grid } from '@mui/material'

// mui icons
import CodeIcon from '@mui/icons-material/Code';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useStyles } from './styles'

import PriceChange from '../PriceChange/PriceChange';

export default function LeaderBoardRow(props) {

    const classes = useStyles();
    const {
        name,
        portfolio_return,
        _1_day_change,
        _1_day_position_change,
        isTitle,
        position } = props;

    let icon = () => { return (<CodeIcon className={classes.noChange} />) }
    if (_1_day_position_change > 0) {
        icon = (text) => { return (<ExpandLessIcon className={classes.up} />) }
    } else if (_1_day_position_change < 0) {
        icon = (text) => { return (<ExpandMoreIcon className={classes.down} />) }
    }

    const direction = (_1_day_change) => {

        if (parseInt(_1_day_change) > 0)
            return 'up';
        else if (parseInt(_1_day_change) < 0)
            return 'down';

        return 'pause';
    }

    let positionChangeText = `no change`;
    if (_1_day_position_change > 0) positionChangeText = ` by ${_1_day_position_change} positions`;
    else if (_1_day_position_change < 0) positionChangeText = ` by ${(_1_day_position_change * -1)} positions`;

    return (
        <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            className={!isTitle && classes.tableRow}
        >
            <Grid
                item
                xs={4} lg={4}>
                <Typography
                    variant="p"
                    className={isTitle ? classes.rowTitle : null}
                >
                    {isTitle ? '' : position + '.'} {name}
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
                >{isTitle ?
                    _1_day_change :
                    <PriceChange text={_1_day_change} direction={direction(_1_day_change)} />}
                </Typography>
            </Grid>
            <Grid
                item
                xs={3} lg={3}
                className={classes.positionChange}>
                {!isTitle && icon()}
                &nbsp;<Typography
                    variant="p"
                    className={isTitle ? classes.rowTitle : null}
                >{isTitle ? _1_day_position_change : positionChangeText}
                </Typography>
            </Grid>
        </Grid>
    )
}