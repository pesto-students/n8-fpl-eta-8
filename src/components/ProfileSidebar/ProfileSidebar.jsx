import React from "react";
import { CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import {
  Logout,
  ProfileImg,
  ProfileName,
  StyledLink,
  SubscriptionType,
  ProfileSideBar,
} from "./ProfileSidebarStyle";
import firebase from "../../firebase";
import { useHistory, useRouteMatch } from "react-router";
import StarIcon from "@mui/icons-material/Star";

export default function ProfileSidebar() {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const { url } = useRouteMatch();

  async function logout() {
    await firebase.logout();
    history.push("/");
  }

  return (
    <>
      <ProfileSideBar>
        <CardContent>
          <div>
            <ProfileImg src={user.profileImage} alt={user.name} />
          </div>
          <ProfileName>{user.name}</ProfileName>
          <SubscriptionType>Base Plan</SubscriptionType>
          <StyledLink to={`${url}`}>Account Overview</StyledLink>
          <StyledLink to={`${url}/edit`}>Edit Profile</StyledLink>
          <StyledLink to={`${url}/change`}>Change Password</StyledLink>
          <Logout variant="contained" startIcon={<StarIcon />} onClick={logout}>
            Logout
          </Logout>
        </CardContent>
      </ProfileSideBar>
    </>
  );
}
