import React from 'react';
import logo from '../../assets/logo.svg';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function LandingHeader(props) {

    return (
        <Grid
            container 
            direction="row" 
            alignItems="center" 
            justifyContent="space-between"
        >
            <img src={logo} alt="Fantasy Portfolio League" srcset="" />
            <Button>Login / Signup</Button>
        </Grid>);
}