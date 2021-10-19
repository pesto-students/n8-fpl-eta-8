import React from 'react';

import { useStyles } from './styles';
import { withStyles } from '@mui/styles';
import { updateLbView } from './../../store-features/challenge';

import {
    Button,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch } from 'react-redux';


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
                        {/* Iterate the rules from challenge redux store */}
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Inbox" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Drafts" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>

                </Grid>
            </div>
        </>
    )
};