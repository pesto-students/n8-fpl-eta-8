import React from 'react';
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
        top: '22vh',
        left:'-30vw'
    },
    container: {
        display:'flex',
        alignContent:'space-evenly',
    },
    textSection: {
        marginLeft: '-28vw',
        alignSelf:'center',
        color:'#fff'
    },
    textSectionButton:{
        textTransform:'none',
        color:'#fff',
        fontWeight:400,
        padding:'1rem 0'
    },    
    imageSection: {
        marginRight: '-32vw',
        alignSelf:'center',
    }});

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
                    <Button className={classes.textSectionButton}>Get Started</Button>
                </div>
                <div className={classes.imageSection}>
                    <img src={landingImg} alt="" srcset=""/>
                </div>
            </div>
        </div>
    );

}