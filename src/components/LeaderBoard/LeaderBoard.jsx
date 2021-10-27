import React, { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import { ref, onValue } from 'firebase/database';


import Firebase from '../../firebase';
import { useStyles } from "../LeaderBoard/styles";
import LeaderBoardRow from "./LeaderboardRow";

export default function LeaderBoard(props) {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const leaderboardId = '1c2628cd-fff8-40da-a477-867a9a9b5d53';
  useEffect(() => {
    const db = Firebase.realTimeDB;
    const r = ref(db, `Leaderboard/${leaderboardId}`);
    onValue(r, (snapshot) => {
      setRows(snapshot.val().l);
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
                    position={i}
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
