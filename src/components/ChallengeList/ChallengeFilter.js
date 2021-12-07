import React from "react";

// material ui
import Card from "@mui/material/Card";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";

// styling
import { useStyles } from "./styles";

export default function ChallengeFilter(props) {
  const classes = useStyles();

  const handleFilterChange = (event) => {
    props.changeFilter(event.target.value);
  };

  return (
    <>
      <Card variant="outlined" className={classes.challengeFilterCard}>
        <RadioGroup
          name="radio-buttons-group"
          onChange={handleFilterChange}
        >
          <FormControlLabel value="STARTING_SOON" control={<Radio />} label="Starting Soon" />
          <FormControlLabel value="LIVE" control={<Radio />} label="Closing Soon" />
          <FormControlLabel value="CLOSED" control={<Radio />} label="Closed Challenges" />
          <FormControlLabel value="all" control={<Radio />} label="All Challenges" />
        </RadioGroup>
        <div><a href="https://youtu.be/PihX0ARCFGU" target="_blank" rel="noreferrer"><h6>How to Participate</h6></a></div>
      </Card>
    </>
  );
}
