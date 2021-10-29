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
  HighlightedStyledLink,
} from "./ProfileSidebarStyle";

export default function ProfileSidebar(props) {
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
          {history.location.pathname === url ? (
            <HighlightedStyledLink to={`${url}`}>
              Account Overview
            </HighlightedStyledLink>
          ) : (
            <StyledLink to={`${url}`}>Account Overview</StyledLink>
          )}
          {history.location.pathname === url + "/edit" ? (
            <HighlightedStyledLink to={`${url}/edit`}>
              Edit Profile
            </HighlightedStyledLink>
          ) : (
            <StyledLink to={`${url}/edit`}>Edit Profile</StyledLink>
          )}
          {history.location.pathname === url + "/change" ? (
            <HighlightedStyledLink to={`${url}/change`}>
              Change Password
            </HighlightedStyledLink>
          ) : (
            <StyledLink to={`${url}/change`}>Change Password</StyledLink>
          )}
          <Logout variant="contained" startIcon={<StarIcon />} onClick={logout}>
            Logout
          </Logout>
        </CardContent>
      </ProfileSideBar>
    </>
  );
}
