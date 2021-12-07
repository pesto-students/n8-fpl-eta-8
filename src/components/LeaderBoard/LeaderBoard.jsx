import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import { ref, onValue } from 'firebase/database';
import { useSelector } from "react-redux";

import Firebase from '../../firebase';
import { useStyles } from "../LeaderBoard/styles";
import LeaderBoardRow from "./LeaderboardRow";

export default function LeaderBoard(props) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const leaderboardId = useSelector(state => {
    return state.challenge.leaderboard
  });
  useEffect(() => {
    const db = Firebase.realTimeDB;
    const r = ref(db, `FPL/Leaderboard/${leaderboardId}/l`);
    onValue(r, (snapshot) => {
      setRows(snapshot.val());
    }, {
      onlyOnce: false
    });
  }, [leaderboardId]);

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Leader Board
      </Typography>
      <div className={classes.lbContainer}>
        <Grid
          container
          direction="row"
          className={classes.container}>
          <Grid item xs={12} md={12} lg={12}>
            <LeaderBoardRow
              name="Participant"
              portfolio_return="Portfolio Return"
              _1_day_change="1 Day Change"
              _1_day_position_change="1 Day Position Change"
              isTitle={true}
            />
          </Grid>
          {
            rows.map((r, i) => {
              return (
                <Grid item xs={12} md={12} lg={12}>
                  <LeaderBoardRow
                    name={r.username}
                    portfolio_return={r.avgReturn}
                    _1_day_change="0"
                    _1_day_position_change={r.changeInPosition}
                    isTitle={false}
                    position={i+1}
                  />
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </>
  );
}
