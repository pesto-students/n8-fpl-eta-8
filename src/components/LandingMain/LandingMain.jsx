import React from 'react';

// Material UI components and hooks
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { makeStyles } from '@mui/styles';

//  Assets 
import landingImg from 'assets/landing-img.png';
// import landingMainBg from 'assets/landing-main-bg.svg';


// routing 
import { Link } from 'react-router-dom';

// Styling
const useStyles = makeStyles({
    root: {
        position: "relative"
    },
    bgImage: {
        zIndex: -9,
        position: 'absolute',
        top: '22vh',
        left: '-30vw'
    },
    textSection: {
    },
    textSectionButton: {
        textTransform: 'none',
        color: '#fff',
        marginTop: '2rem',
    },
    imageSection: {
        maxHeight: '30rem'
    },
    link: {
        textDecoration: 'none'
    }
});

export default function LandingMain(props) {

    const classes = useStyles();
    return (
        <>
            <Grid
                container
                spacing={4}
                direction="row"
                alignItems="center">
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Grid
                        container 
                        direction="column"
                        className={classes.textSection}
                    >
                        <h1>New to Investing ?</h1>
                        <ul>
                            <li>Learn to Invest by building your Portfolio</li>
                            <li>Analyse Stocks to make right decsion</li>
                            <li>Submit your portfolio and win rewards</li>
                        </ul>
                        <Link className={classes.link} to="/login">
                            <Button
                                className={classes.textSectionButton}
                                variant="contained" size="large"
                                endIcon={<ArrowRightAltIcon />}>Get Started</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid
                    item xs={12} sm={12} md={6} lg={6}>
                    <img src={landingImg} alt="Sample View" className={classes.imageSection} />
                </Grid>
            </Grid>
        </>
    );
}