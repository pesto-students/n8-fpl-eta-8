import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';
import { useStyles } from './styles';


const AddStockBtn = withStyles({
    root: {
        background: 'linear-gradient(180deg, #07A287 0%, #057E69 100%)',
        color: '#fff',
        borderRadius:'12px',
        textTransform:'none',
        fontSize:'1rem',
        padding:'.25rem .85rem'
    }
})(Button);


export default function ChallengeContext() {

    const classes = useStyles();

    return (
        <AppBar className={classes.challengeContext}>
            <Toolbar className={classes.challengeToolbar}>
                <div className={classes.challengeDetailsContainer}>
                    <Typography variant="h4" className={classes.challengeDetails}>
                        Challenge Name
                    </Typography>
                    <Typography variant="h6" className={classes.challengeDetails}>
                        Start Date - End Date
                    </Typography>
                </div>
                <AddStockBtn>Add Stock to Portfolio</AddStockBtn>
            </Toolbar>
        </AppBar>
    );

}