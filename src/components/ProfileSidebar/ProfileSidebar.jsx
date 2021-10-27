import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import firebase from "firebase";
import {
  Logout,
  ProfileImg,
  ProfileName,
  StyledLink,
  SubscriptionType,
  ProfileSideBar,
  ProfileAvatar,
} from "./ProfileSidebarStyle";

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
            {user.profileImage ? (
              <ProfileImg src={user.profileImage} alt={user.name} />
            ) : (
              <ProfileAvatar>{user.name.charAt(0).toUpperCase()}</ProfileAvatar>
            )}
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
