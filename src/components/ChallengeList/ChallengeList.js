import React from "react";

// React Components 
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// styling 
import { useStyles } from "./styles";
import SensexChart from "./SensexChart";

export default function ChallengeList() {

    const classes = useStyles();

    return (
        <Container>
            <Grid container direction="column" alignItems="center">
                <Grid container direction="row" justifyContent="space-between" >
                    <Grid item xs={12} md={3}>
                        Filter Challenges 
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <SensexChart/>
                    </Grid>
                </Grid>
                <Grid container direction="row" >
                    <Grid item xs={0} md={3}>
                        empty
                    </Grid>
                    <Grid item xs={12} md={9}>
                        challenge list
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
