import { useStyles } from "./styles";
// mui
import Card from "@mui/material/Card";

// leaderboard views
import NotStarted from "components/NotStarted/NotStarted";
import Awards from "components/Awards/Awards";
import ClaimRewards from "components/ClaimRewards/ClaimRewards";
import LeaderBoard from "components/LeaderBoard/LeaderBoard";
import ChallengeRules from "components/ChallengeRules/ChallengeRules";

export default function LeaderBoardView(props) {
  const classes = useStyles();

  const renderSwitch = (view) => {
    switch (view) {
      case "notStarted":
        return <NotStarted />;
      case "leaderboard":
        return <LeaderBoard />;
      case "awards":
        return <Awards />;
      case "claimRewards":
        return <ClaimRewards />;
      case "challengeRules":
        return <ChallengeRules />;

      default:
        return <h1>Missing View</h1>;
    }
  };

  return (
    <Card variant="outlined" className={classes.root}>
      {renderSwitch(props.view)}
    </Card>
  );
}
