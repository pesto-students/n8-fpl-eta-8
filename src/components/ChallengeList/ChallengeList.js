import React from "react";

// React Components 
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';


// styling 
import { useStyles } from "./styles";

// custom components
import SensexChart from "./SensexChart";
import ChallengeFilter from "./ChallengeFilter";
import ChallengeCard from "./ChallengeCard";

//  auto Scroll to top
function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    };

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Zoom>
    );
}


ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default function ChallengeList(props) {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Scroll to see button
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Grid container direction="column">
                    <Grid container direction="row" justifyContent="space-between" className={classes.root} spacing={5}>
                        <Grid item xs={12} md={3}>
                            <ChallengeFilter />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <SensexChart />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" >
                        <Grid item xs={0} md={3}>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Typography variant="h4" className={classes.challengeListTitle}>Pick your challenge</Typography>

                            <Grid container direction="row" spacing={3} className={classes.challengeList}>
                                <Grid item xs="12" md="12" lg="6">
                                    <ChallengeCard />
                                </Grid>
                                <Grid item xs="12" md="12" lg="6">
                                    <ChallengeCard />
                                </Grid>
                                <Grid item xs="12" md="12" lg="6">
                                    <ChallengeCard />
                                </Grid>
                                <Grid item xs="12" md="12" lg="6">
                                    <ChallengeCard />
                                </Grid>
                                <Grid item xs="12" md="12" lg="6">
                                    <ChallengeCard />
                                </Grid>
                                <Grid item xs="12" md="12" lg="6">
                                    <ChallengeCard />
                                </Grid>
                                <Grid item xs="12" md="12" lg="6">
                                    <ChallengeCard />
                                </Grid>
                                <Grid item xs="12" md="12" lg="6">
                                    <ChallengeCard />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}
