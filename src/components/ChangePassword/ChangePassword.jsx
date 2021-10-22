import React, { useState } from "react";
import { CardContent } from "@mui/material";
import {
  ChangePasswordwWrapper,
  ChangeProfileTitle,
  ProfileLabel,
  ProfileTitle,
  StyledTextField,
  UpdateButton,
} from "./ChangePasswordStyle";
import firebase from "../../firebase";
import { useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Changepassword() {
  const user = useSelector((state) => state.user);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = React.useState(false);

  async function updatePassword() {
    try {
      await firebase.reLogin(user.email, oldPassword).then(() => {
        if (newPassword.length > 0 && newPassword === confirmPassword) {
          firebase.setNewPassword(newPassword).then(() => {
            console.log("Password Updated Successfully");
            setOpen(true);
          });
        }
      });
    } catch (error) {
      console.log("Please enter correct old password.", error.message);
    }
  }
  return (
    <ChangePasswordwWrapper>
      <CardContent>
        <ChangeProfileTitle>Change Password</ChangeProfileTitle>
        <div>
          <ProfileTitle>Profile</ProfileTitle>
          <UpdateButton onClick={updatePassword}>Update</UpdateButton>
        </div>
        <ProfileLabel>Old Password</ProfileLabel>
        <StyledTextField
          variant="outlined"
          size="small"
          margin="normal"
          type="password"
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
        />
        <ProfileLabel>New Password</ProfileLabel>
        <StyledTextField
          variant="outlined"
          size="small"
          margin="normal"
          type="password"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
        <ProfileLabel>Confirm Password</ProfileLabel>
        <StyledTextField
          variant="outlined"
          size="small"
          margin="normal"
          type="password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </CardContent>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </ChangePasswordwWrapper>
  );
}
