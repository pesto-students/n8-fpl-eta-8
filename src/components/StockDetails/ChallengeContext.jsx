import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { AddStockBtn, useStyles } from "./styles";
import { Timestamp } from "firebase/firestore";
import { addStock } from "store-features/portfolio";
import { useHistory } from "react-router";

export default function ChallengeContext() {
  const classes = useStyles();
  const challenge = useSelector((state) => state.challenge);
  const [challengeContext, setChallengeContext] = useState(null);

  const _s = useSelector(state => state.portfolio.analysingStock);
  const dispatch = useDispatch();
  const history = useHistory();



  useEffect(() => {
    // debug
    const { name, startDate, endDate } = challenge;
    const sDate = new Timestamp(
      startDate._seconds,
      startDate._nanoseconds
    ).toDate();
    const eDate = new Timestamp(
      endDate._seconds,
      endDate._nanoseconds
    ).toDate();

    setChallengeContext({ name, sDate, eDate });
  }, [challenge]);



  const handleAddToPortfolio = () => {
    dispatch(addStock(_s));
    history.goBack();
  }

  return (
    <AppBar className={classes.challengeContext}>
      {challengeContext !== null ? (
        <Toolbar className={classes.challengeToolbar}>
          <div className={classes.challengeDetailsContainer}>
            <Typography variant="h4" className={classes.challengeDetails}>
              {challengeContext.name}
            </Typography>
            <Typography variant="h6" className={classes.challengeDetails}>
              {challengeContext.sDate.toDateString()} -{" "}
              {challengeContext.eDate.toDateString()}
            </Typography>
          </div>
          <AddStockBtn onClick={handleAddToPortfolio}>Add Stock to Portfolio</AddStockBtn>
        </Toolbar>
      ) : (
        <div></div>
      )}
    </AppBar>
  );
}
