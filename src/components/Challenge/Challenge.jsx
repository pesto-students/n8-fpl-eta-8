import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

//  redux store
import { useDispatch, useSelector } from "react-redux";
import { setChallengeToStore } from "../../store-features/challenge";

// styling
import { useStyles } from "./styles";

// mui
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";

// custom Components
import ChallengeStatus from "../ChallengeStatus/ChallengeStatus";
import Portfolio from "../Portfolio/Portfolio";
import LeaderBoardView from "../LeaderBoardView/LeaderBoardView";

export default function Challenge() {

  let { challengeId } = useParams();

  const [challenge, setChallenge] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const view = useSelector(state => state.challenge.lbView);


  useEffect(() => {

    fetch(`${process.env.REACT_APP_API_SERVER}/api/challenge/${challengeId}`, {})
      .then((res) => res.json())
      .then((response) => {

        // debug
        console.log(`Fetch Challenge response - ${JSON.stringify(response, 0, 2)}`)

        let view = "";
        switch (response.status) {
          case 'NOT_LIVE': view = "notStarted"; break;
          case 'LIVE': view = "leaderboard"; break;
          case 'CLOSED': view = "claimRewards"; break;
          default:
        }
        const c = { ...response, lbView: view };
        dispatch(setChallengeToStore(c));
        setChallenge(c);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [challengeId, dispatch]);

  const classes = useStyles();
  return (
    <>
      <Container>
        {!isLoading && (
          <>
            <Typography variant="h4" className={classes.challengeTitle}>
              {challenge.name}
              <div className={classes.updateDetails}>
                <span className={classes.updateDetailsText}>
                  Last Updated at
                </span>
                <Button
                  className={classes.refreshButton}
                  aria-label="refresh"
                  size="large"
                  variant="contained"
                >
                  <UpdateIcon fontSize="medium" />
                </Button>
              </div>
            </Typography>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12} md={10} lg={9}>
                <Portfolio challengeId={challenge.id} />
              </Grid>
              <Grid item xs={12} md={2} lg={3}>
                <ChallengeStatus
                  status={challenge.status}
                  startDate={challenge.startDate}
                  endDate={challenge.endDate}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <LeaderBoardView  view={view}/>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}
