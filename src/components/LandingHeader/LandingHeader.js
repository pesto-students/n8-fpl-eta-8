import React from 'react';
import logo from '../../assets/logo.svg';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function LandingHeader(props) {

    return (<Grid container spacing={2}>
        <Grid item xs={8}>
            <img src={logo} alt="Fantasy Portfolio League" srcset="" />
        </Grid>
        <Grid item xs={4}>
            <Button>Login / Signup</Button>
        </Grid>
    </Grid>);

}