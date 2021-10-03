import React from 'react';
import logo from '../../assets/logo.svg';
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
            <img src={logo} alt="Fantasy Portfolio League" srcset="" />
            <FplButton label="Sign in / Sign up" hasIcon='false' icon={star} ></FplButton>
        
        </Grid>);
}