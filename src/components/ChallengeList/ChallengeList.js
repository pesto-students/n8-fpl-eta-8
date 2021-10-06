import React from "react";

// React Components 
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// styling 
import { useStyles } from "./styles";

// custom components
import SensexChart from "./SensexChart";
import ChallengeFilter from "./ChallengeFilter";

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
                        challenge list
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
