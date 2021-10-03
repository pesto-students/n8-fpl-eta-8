import React from 'react';
import Logo from '../Logo/logo';
import Grid from '@mui/material/Grid';
import FplButton from '../FplButton/FplButton';
import star from '../../assets/star.svg';
export default function LandingHeader(props) {

    return (
        <Grid
            container 
            direction="row" 
            alignItems="center" 
            justifyContent="space-between"
        >
            <Logo></Logo>
            <FplButton label="Sign in / Sign up" hasIcon='false' icon={star} ></FplButton>
        
        </Grid>);
}