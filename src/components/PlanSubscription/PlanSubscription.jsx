import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import {
  Amount,
  Currency,
  PlanDesc,
  PlanName,
  PlanSubscriptioTitle,
  TimeSpan,
  UpgradeButton,
} from "./PlanSubscriptioStyle";

export default function PlanSubscription() {
  return (
    <>
      <PlanSubscriptioTitle>Plan Subscription</PlanSubscriptioTitle>
      <UpgradeButton>Upgrade</UpgradeButton>
      <Grid item xs={12} sm={5} md={5} lg={5}>
        <Card>
          <CardContent>
            <div>
              <Currency>Rs</Currency> <Amount>0</Amount>
              <TimeSpan>/per month</TimeSpan>
            </div>
            <PlanName>Basic</PlanName>
            <PlanDesc>To familiarize yourself with our tools</PlanDesc>
            <PlanDesc>Max. 1 Challenge per Month</PlanDesc>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
