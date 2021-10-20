import { CardContent } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../../firebase";
import {
  EditProfileTitle,
  EditProfilewWrapper,
  ProfileLabel,
  ProfileTitle,
  StyledTextField,
  UpdateButton,
} from "./EditProfileStyle";

export default function EditProfile() {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);

  async function updateProfile() {
    try {
      await firebase.updateUserName(name).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error.message);
    }

    try {
      await firebase.updateUserEmail(email).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <EditProfilewWrapper>
      <CardContent>
        <EditProfileTitle>Edit Profile</EditProfileTitle>
        <div>
          <ProfileTitle>Profile</ProfileTitle>
          <UpdateButton onClick={updateProfile}>Update</UpdateButton>
        </div>
        <ProfileLabel>Name</ProfileLabel>
        <StyledTextField
          id="name"
          variant="outlined"
          size="small"
          margin="normal"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <ProfileLabel>Email</ProfileLabel>
        <StyledTextField
          id="email"
          variant="outlined"
          size="small"
          margin="normal"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </CardContent>
    </EditProfilewWrapper>
  );
}
