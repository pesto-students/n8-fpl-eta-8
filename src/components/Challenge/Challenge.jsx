import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// redux store
import { useDispatch, useSelector } from "react-redux";
import { setChallengeToStore } from "store-features/challenge";

// styling
import { useStyles } from "./styles";

// mui
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";

// custom Components
import ChallengeStatus from "components/ChallengeStatus/ChallengeStatus";
import Portfolio from "components/Portfolio/Portfolio";
import LeaderBoardView from "components/LeaderBoardView/LeaderBoardView";
import { resetPortfolio } from "store-features/portfolio";

export default function Challenge() {
  let { challengeId } = useParams();

  const [challenge, setChallenge] = useState();
  const [portfolio, setPortfolio] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const view = useSelector((state) => state.challenge.lbView);
  const portfolios = useSelector((state) => state.user.portfolios);
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_SERVER}/api/challenge/${challengeId}`,
      {}
    )
      .then((res) => res.json())
      .then((response) => {
        let view = "";
        switch (response.status) {
          case "NOT_LIVE":
            view = "notStarted";
            break;
          case "LIVE":
            view = "leaderboard";
            break;
          case "CLOSED":
            view = "claimRewards";
            break;
          default:
        }
        const c = { ...response, lbView: view };
        dispatch(setChallengeToStore(c));
        setChallenge(c);
        dispatch(resetPortfolio());
        for (let p = 0; p < portfolios.length; p++) {
          if (portfolios[p].challengeId === challengeId) {
            setPortfolio(portfolios[p]);
          }
        }
        setIsLoading(false);
        

      })
      .catch((error) => console.log(error));
  }, [challengeId, dispatch, portfolios]);

  const classes = useStyles();
  return (
    <>
      <Container>
        {!isLoading && (
          <>
            <Typography variant="h4" className={classes.challengeTitle}>
              {challenge.name}
            </Typography>
            <Grid container direction="row" spacing={2}>
              <Grid item xs={12} md={10} lg={9}>
                <Portfolio
                  portfolio={portfolio}
                  challengeStatus={challenge.status}
                />
              </Grid>
              <Grid item xs={12} md={2} lg={3}>
                <ChallengeStatus
                  status={challenge.status}
                  startDate={challenge.startDate}
                  endDate={challenge.endDate}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <LeaderBoardView view={view} />
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
}
