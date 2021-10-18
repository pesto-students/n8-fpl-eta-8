import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import {
  BarChartIconStyle,
  BarChartIconStyled,
  BarChartImage,
  ChallengeNumber,
  LastUpdatedDate,
  TotalChallenges,
} from "./ProfileDetailsStyle";
import { Route, Switch, useRouteMatch } from "react-router";
import AccountOverview from "../AccountOverview/AccountOverview";
import EditProfile from "../EditProfile/EditProfile";
import ChangePassword from "../ChangePassword/ChangePassword";

export default function ProfileDetails() {
  const { path } = useRouteMatch();
  
  return (
    <>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card>
            <CardContent>
              <div>
                <div>
                  <TotalChallenges>Total Challenges</TotalChallenges>
                  <BarChartImage>
                    <BarChartIconStyle color="primary" />
                    <BarChartIconStyled color="primary" />
                  </BarChartImage>
                </div>
                <ChallengeNumber>504</ChallengeNumber>
                <LastUpdatedDate>As on 30 June 2020</LastUpdatedDate>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Card>
            <CardContent>
              <div>
                <div>
                  <TotalChallenges>Total prize Won</TotalChallenges>
                  <BarChartImage>
                    <BarChartIconStyle color="primary" />
                    <BarChartIconStyled color="primary" />
                  </BarChartImage>
                </div>
                <ChallengeNumber>Rs 1,123</ChallengeNumber>
                <LastUpdatedDate>As on 30 June 2020</LastUpdatedDate>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Switch>
        <Route exact path={`${path}/`} component={AccountOverview} />
        <Route exact path={`${path}/edit`} component={EditProfile} />
        <Route exact path={`${path}/change`} component={ChangePassword} />
      </Switch>
      
    </>
  );
}
