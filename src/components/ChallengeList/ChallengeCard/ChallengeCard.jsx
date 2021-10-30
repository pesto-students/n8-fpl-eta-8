import React from "react";
import { useRouteMatch } from "react-router-dom";

// material ui imports
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";

import { CreatePortfolio, useStyles, ViewLeaderboard } from "./styles";
import { Link } from "react-router-dom";

import { Timestamp } from "firebase/firestore";

export default function ChallengeCard(props) {
  const classes = useStyles();
  const { name, id, startDate, endDate, status } = props.challenge;
  const { url } = useRouteMatch();

  let s_date = new Timestamp(startDate._seconds, startDate._nanoseconds);
  let e_date = new Timestamp(endDate._seconds, endDate._nanoseconds);

  return (
    <Card variant="outlined" className={classes.root}>
      <div className={classes.challengeDetails}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">
          {s_date.toDate().toDateString()} - {e_date.toDate().toDateString()}
        </Typography>
      </div>
      <Link className={classes.styledLink} to={`${url}/challenge/${id}`}>
        {status === "NOT_LIVE" ? (
          <CreatePortfolio
            color="primary"
            fullWidth={true}
            style={{ justifyContent: "flex-start" }}
            variant="contained"
          >
            Create Portfolio
          </CreatePortfolio>
        ) : (
          <ViewLeaderboard
            color="secondary"
            fullWidth={true}
            style={{ justifyContent: "flex-start" }}
            variant="contained"
          >
            View Leaderboard
          </ViewLeaderboard>
        )}
      </Link>
    </Card>
  );
}
