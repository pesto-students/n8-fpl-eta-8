import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import landingImg from '../../assets/landing-img.png';
import landingMainBg from '../../assets/landing-main-bg.svg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        position: "relative"
    },
    bgImage: {
        zIndex: -9,
        position: 'absolute',
        top: '20vh',
        left:'-32vw'
    },
    container: {
        display:'flex',
        justifyContent:'space-around'
    },
    textSection: {
        marginLeft: '-30vw',
    },
    imageSection: {
        marginRight: '-30vw',
    }
});

export default function LandingMain(props) {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={landingMainBg} alt="" srcset="" className={classes.bgImage} />
            <div className={classes.container}>
                <div className={classes.textSection}>
                    <h1>New to Investing ?</h1>
                    <ul>
                        <li>Learn to Invest by building your Portfolio</li>
                        <li>Analyse Stocks to make right decsion</li>
                        <li>Submit your portfolio and win rewards</li>
                    </ul>
                    <Button>Get Started</Button>
                </div>
                <div className={classes.imageSection}>
                    <img src={landingImg} alt="" srcset="" />
                </div>
            </div>
        </div>
    );

}