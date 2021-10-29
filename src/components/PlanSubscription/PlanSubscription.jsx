import React, { useState } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import {
  Amount,
  BackButton,
  Badge,
  Currency,
  Info,
  PlanDesc,
  PlanName,
  PlanSubscriptionTitle,
  SelectPlanTitle,
  TimeSpan,
  UpgradeButton,
} from "./PlanSubscriptioStyle";

export default function PlanSubscription() {
  const [isPlanViewed, setIsPlanViewed] = useState(false);
  return (
    <>
      {isPlanViewed ? (
        <>
          <SelectPlanTitle>
            Select Plan <Info>*Payment Integration is not a part of MVP 1</Info>
            <BackButton onClick={() => setIsPlanViewed(false)} />
          </SelectPlanTitle>
          <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={6} md={5} lg={5}>
              <Card>
                <CardContent>
                  <div>
                    <Currency>Rs</Currency> <Amount>499</Amount>
                    <TimeSpan>/per month</TimeSpan>
                    <UpgradeButton>Select</UpgradeButton>
                  </div>
                  <PlanName>Premium</PlanName>
                  <PlanDesc>Do detail strategy and stock analysis </PlanDesc>
                  <PlanDesc>
                    <Badge />
                    Max. 5 Challenge per Month
                  </PlanDesc>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={5} lg={5}>
              <Card>
                <CardContent>
                  <div>
                    <Currency>Rs</Currency> <Amount>999</Amount>
                    <TimeSpan>/per month</TimeSpan>
                    <UpgradeButton>Select</UpgradeButton>
                  </div>
                  <PlanName>Ultra</PlanName>
                  <PlanDesc>Do detail strategy and stock analysis </PlanDesc>
                  <PlanDesc>
                    <Badge />
                    Max. 10 Challenge per Month
                  </PlanDesc>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <PlanSubscriptionTitle>Plan Subscription</PlanSubscriptionTitle>
          <UpgradeButton onClick={() => setIsPlanViewed(true)}>
            Upgrade
          </UpgradeButton>
          <Grid item xs={12} sm={5} md={5} lg={5}>
            <Card>
              <CardContent>
                <div>
                  <Currency>Rs</Currency> <Amount>0</Amount>
                  <TimeSpan>/per month</TimeSpan>
                </div>
                <PlanName>Basic</PlanName>
                <PlanDesc>To familiarize yourself with our tools</PlanDesc>
                <PlanDesc>
                  <Badge />
                  Max. 1 Challenge per Month
                </PlanDesc>
              </CardContent>
            </Card>
          </Grid>
        </>
      )}
    </>
  );
}
