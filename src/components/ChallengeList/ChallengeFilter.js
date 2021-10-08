import React from 'react';

// material ui
import Card from '@mui/material/Card';
import { FormGroup,FormControlLabel, Checkbox } from '@mui/material';

// styling
import { useStyles } from './styles';


export default function ChallengeFilter() {

    const classes = useStyles();

    return (
        <>
            <Card variant="outlined" className={classes.challengeFilterCard}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Starting Soon" />
                    <FormControlLabel control={<Checkbox />} label="Closing Soon" />
                    <FormControlLabel control={<Checkbox />} label="Closed Challenges" />
                    <FormControlLabel control={<Checkbox />} label="My Challenges" />
                </FormGroup>
            </Card>
        </>
    );
}