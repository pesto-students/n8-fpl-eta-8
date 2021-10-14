import React from "react";

// material ui imports
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

import { useStyles } from "./styles";
import { Link} from "react-router-dom";

export default function ChallengeCard(props) {
  const classes = useStyles();
  const { name, id, startDate, endDate} = props.challenge;

  let s_date = new Date(1970, 0, 1);
  s_date.setSeconds(startDate._seconds);

  let e_date = new Date(1970, 0, 1);
  e_date.setSeconds(endDate._seconds);

  return (
    <Card variant="outlined" className={classes.root}>
      <div className={classes.challengeDetails}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">
          {s_date.toDateString()} - {e_date.toDateString()}
        </Typography>
      </div>
      <Link className={classes.styledLink} to={`/challenge/${id}`}>
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
