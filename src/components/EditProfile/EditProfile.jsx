import { CardContent, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  EditProfileTitle,
  EditProfilewWrapper,
  ProfileLabel,
  ProfileTitle,
} from "./EditProfileStyle";

export default function EditProfile() {
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  return (
    <EditProfilewWrapper>
      <CardContent>
        <EditProfileTitle>Account Overview</EditProfileTitle>
        <ProfileTitle>Profile</ProfileTitle>
        <ProfileLabel>Name</ProfileLabel>
        <TextField
          id="email"
          label="Name"
          variant="outlined"
          size="small"
          margin="normal"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <ProfileLabel>Email</ProfileLabel>
        <TextField
          id="email"
          label="Email"
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
