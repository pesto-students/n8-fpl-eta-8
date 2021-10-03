import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import landingImg from '../../assets/landing-img.png';
export default function LandingHeader(props) {

    return (
    <Grid container 
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        >
        <Grid item xs={5}>
            <h1>New to Investing ?</h1>
            <ul>
                <li>Learn to Invest by building your Portfolio</li>
                <li>Analyse Stocks to make right decsion</li>
                <li>Submit your portfolio and win rewards</li>
            </ul>
            <Button>Get Started</Button>
        </Grid>
        <Grid item xs={7}>
            <img src={landingImg} alt="" srcset="" />
        </Grid>
    </Grid>);

}