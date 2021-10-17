import React from 'react';

// mui 
import Card from '@mui/material/Card';

// leaderboard views
import NotStarted from "../NotStarted/NotStarted"
import Awards from "../Awards/Awards"
import ClaimRewards from "../ClaimRewards/ClaimRewards"
import LeaderBoard from "../LeaderBoard/LeaderBoard"
import ChallengeRules from "../ChallengeRules/ChallengeRules"


import { useStyles } from './styles';


export default function LeaderBoardView() {

    const classes = useStyles();

    const renderSwitch = (view) => {
        switch (view) {
            case 'notStarted':
                return < NotStarted />
            case 'leaderboard':
                return < LeaderBoard />
            case 'awards':
                return < Awards />
            case 'claimRewards':
                return < ClaimRewards />
            case 'challengeRules':
                return < ChallengeRules />

            default:
                return <h1>Missing View</h1>
        }
    }

    return (
        <Card variant="outlined" className={classes.root}>
            {
                renderSwitch("leaderboard")
            }
        </Card>
    )
}