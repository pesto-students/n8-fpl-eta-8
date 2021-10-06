import React from "react";

// React Components 
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
// styling 
import { useStyles } from "./styles";

// custom components
import SensexChart from "./SensexChart";
import ChallengeFilter from "./ChallengeFilter";
import ChallengeCard from "./ChallengeCard";

export default function ChallengeList() {

    const classes = useStyles();

    return (
        <Container>
            <Grid container direction="column">
                <Grid container direction="row" justifyContent="space-between" className={classes.root} spacing={5}>
                    <Grid item xs={12} md={3}>
                        <ChallengeFilter/>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <SensexChart/>
                    </Grid>
                </Grid>
                <Grid container direction="row" >
                    <Grid item xs={0} md={3}>
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography variant="h4" className={classes.challengeListTitle}>Pick your challenge</Typography>
                        
                        <Grid container direction="row" spacing={3} className={classes.challengeList}>
                            <Grid item xs="12" md="12" lg="6">
                                <ChallengeCard/>
                            </Grid>
                            <Grid item xs="12" md="12" lg="6">
                                <ChallengeCard/>
                            </Grid>
                            <Grid item xs="12" md="12" lg="6">
                                <ChallengeCard/>
                            </Grid>
                            <Grid item xs="12" md="12" lg="6">
                                <ChallengeCard/>
                            </Grid>
                            <Grid item xs="12" md="12" lg="6">
                                <ChallengeCard/>
                            </Grid>
                            <Grid item xs="12" md="12" lg="6">
                                <ChallengeCard/>
                            </Grid>
                            <Grid item xs="12" md="12" lg="6">
                                <ChallengeCard/>
                            </Grid>
                            <Grid item xs="12" md="12" lg="6">
                                <ChallengeCard/>
                            </Grid>
                        </Grid>                        
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
