import React from 'react';
import Logo from '../Logo/logo';
import Grid from '@mui/material/Grid';
import FplButton from '../FplButton/FplButton';
import star from '../../assets/star.svg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root:{
        marginTop:'1.5rem'
    }
});



export default function LandingHeader(props) {

    const classes = useStyles();

    return (
        <Grid
            container 
            direction="row" 
            alignItems="center" 
            justifyContent="space-between"
            className={classes.root}
        >
            <Logo></Logo>
            <FplButton label="Sign in / Sign up" hasIcon='false' icon={star} ></FplButton>
        
        </Grid>);
}