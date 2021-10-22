import React from 'react';

import { useStyles } from './styles';
import { withStyles } from '@mui/styles';
import { updateLbView } from './../../store-features/challenge';
import { useDispatch, useSelector } from 'react-redux';



import {
    Button,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useEffect } from 'react';
import { useState } from 'react';


const GoBack = withStyles({
    root: {
        background: '#CE3D29',
        color: '#fff',
        borderRadius: '12px',
        textTransform: 'none',
        fontSize: '.85rem',
        padding: '.15rem .55rem',
        letterSpacing: '.01rem'
    }
})(Button);


export default function ChallengeRules() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [rules, setRules] = useState([]);
    const _r = useSelector((state) => state.challenge.rules);
    useEffect(() => {
        setRules(_r);
    }, [_r])

    const handleClick = () => {
        dispatch(updateLbView("notStarted"));
    };


    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="space-between">
                <Grid item >
                    <Typography variant="h5" className={classes.title}>
                        Challenge Rules
                    </Typography>
                </Grid>
                <Grid item >
                    <GoBack onClick={handleClick}>Back</GoBack>
                </Grid>
            </Grid>
            <div className={classes.lbContainer}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center">
                    <Grid
                        item
                        xs={12} lg={12} md={12}
                    >
                        <List>

                            {rules.map((item, index) => {
                                return (
                                    <ListItem disablePadding>
                                        <ListItemIcon>
                                            <ArrowRightIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>

                </Grid>
            </div>
        </>
    )
};