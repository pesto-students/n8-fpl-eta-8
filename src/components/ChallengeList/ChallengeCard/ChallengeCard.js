import React from "react";

// material ui imports
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

import { useStyles } from "./styles";
import { Link, useRouteMatch } from "react-router-dom";

export default function ChallengeCard(props) {
  const { url } = useRouteMatch();
  const classes = useStyles();
  const { name, id, startDate, endDate, status } = props.challenge;

  let s_date = new Date(1970, 0, 1);
  s_date.setSeconds(startDate._seconds);

  let e_date = new Date(1970, 0, 1);
  e_date.setSeconds(endDate._seconds);

  console.log(JSON.stringify(props, 0, 2));
  return (
    <Card variant="outlined" className={classes.root}>
      <div className={classes.challengeDetails}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">
          {s_date.toDateString()} - {e_date.toDateString()}
        </Typography>
      </div>
      <Link className={classes.styledLink} to={`${url}/challenge:${id}`}>
        <Button
          color="primary"
          fullWidth="true"
          style={{ justifyContent: "flex-start" }}
          variant="contained"
        >
          Create Portfolio
        </Button>
      </Link>
    </Card>
  );
}
