import { Container, Grid } from "@mui/material";
import React from "react";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ProfileSidebar from "../ProfileSidebar/ProfileSidebar";
import { ProfileWrapper } from "./ProfileStyle";

export default function Profile() {
  return (
    <Container>
      <ProfileWrapper>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={0} sm={3} md={3} lg={3}>
            <ProfileSidebar />
          </Grid>
          <Grid item xs={12} sm={9} md={9} lg={9}>
            <ProfileDetails />
          </Grid>
        </Grid>
      </ProfileWrapper>
    </Container>
  );
}
