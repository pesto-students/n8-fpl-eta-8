import React from "react";

import { useStyles } from "./styles";
import claimReward from "assets/claim-rewards.svg";

import { Grid, Link, Typography } from "@mui/material";

export default function ClaimRewards() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Claim Reward
      </Typography>
      <div className={classes.lbContainer}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} lg={5} md={5}>
            <img src={claimReward} alt="Claim Reward" />
          </Grid>
          <Grid item xs={12} lg={7} md={7}>
            <Typography variant="h6">
              Congratulations! you have won voucher of &#8377; 50!
            </Typography>
            <Link to="#">
              <Typography variant="p">
                Click here to claim your reward
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
