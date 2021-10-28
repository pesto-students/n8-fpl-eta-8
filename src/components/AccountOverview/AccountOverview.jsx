import React from "react";
import { useSelector } from "react-redux";
import { CardContent } from "@mui/material";
import {
  AccountOverviewTitle,
  AccountOverviewWrapper,
  ProfileContent,
  ProfileLabel,
  ProfileTitle,
} from "./AccountOverviewStyle";
import PlanSubscription from "components/PlanSubscription/PlanSubscription";

export default function AccountOverview() {
  const user = useSelector((state) => state.user);

  return (
    <AccountOverviewWrapper>
      <CardContent>
        <AccountOverviewTitle>Account Overview</AccountOverviewTitle>
        <ProfileTitle>Profile</ProfileTitle>
        <ProfileLabel>Name</ProfileLabel>
        <ProfileContent>{user.name}</ProfileContent>
        <ProfileLabel>Email</ProfileLabel>
        <ProfileContent>{user.email}</ProfileContent>
        <PlanSubscription />
      </CardContent>
    </AccountOverviewWrapper>
  );
}
