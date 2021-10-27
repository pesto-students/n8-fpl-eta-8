import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

// mui components & hooks
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";

// styling
import { useStyles } from "./styles";

// custom components
import SensexChart from "./SensexChart";
import ChallengeFilter from "./ChallengeFilter";
import ChallengeCard from "./ChallengeCard/ChallengeCard";
import Challenge from "components/Challenge/Challenge";
import Header from "components/Header/Header";
import StockDetails from "components/StockDetails/StockDetails";
import Profile from "components/Profile/Profile";

// scroll to top
function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function ChallengeList(props) {
  const classes = useStyles();
  const [challenges, setChallenges] = useState([]);
  const { path } = useRouteMatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from REST API
        const response = await fetch(
          `${process.env.REACT_APP_API_SERVER}/api/challenge/all`
        );
        if (response.status === 200) {
          // Extract json
          const rawData = await response.json();
          setChallenges(rawData);
        } else {
          console.error(`Error ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path={`${path}/`}>
          <Toolbar id="back-to-top-anchor" />
          <Container className={classes.root}>
            <Grid container direction="row" spacing={5}>
              <Grid item xs={12} lg={3} md={12} elevation={10}>
                <ChallengeFilter />
              </Grid>
              <Grid item xs={12} lg={9} md={12}>
                <Grid container direction="column">
                  <Grid item xs={12}>
                    <SensexChart symbol="BSE:SENSEX" />
                  </Grid>
                  <Grid item xs={12} elevation={10}>
                    <Typography
                      variant="h4"
                      className={classes.challengeListTitle}
                    >
                      Pick your challenge
                    </Typography>
                    <Grid
                      container
                      direction="row"
                      spacing={3}
                      className={classes.challengeList}
                    >
                      {challenges.map((item, index) => {
                        return (
                          <Grid item xs={12} md={12} lg={6} key={index}>
                            <ChallengeCard challenge={item} />
                          </Grid>
                        );
                      })}
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
        </Route>
        <Route path={`${path}/challenge/:challengeId`}>
          <Challenge />
        </Route>
        <Route path={`${path}/stock/:stock`}>
          <StockDetails />
        </Route>
        <Route path={`${path}/profile`}>
          <Profile />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
