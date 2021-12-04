import React, { useState } from "react";
import { CardContent } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
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


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Changepassword() {
  const user = useSelector((state) => state.users.users);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [notificationMessage, setNotificationMsg] = useState("");
  const [severity, setSeverity] = useState("info");
  const vertical = "top";
  const horizontal = "center";

  async function updatePassword() {
    if (oldPassword !== "") {
      try {
        await firebase.reLogin(user.email, oldPassword).then(() => {
          if (newPassword.length > 0 && newPassword === confirmPassword) {
            firebase.setNewPassword(newPassword).then(() => {
              setNotificationMsg("Password Updated Successfully");
              setSeverity("success");
              setOpen(true);
            });
          }
          else{
            setNotificationMsg("Please enter new password and the confirm password should match the new password");
              setSeverity("error");
              setOpen(true);
          }
        });
      } catch (error) {
        setNotificationMsg("Please enter correct old password.");
        setSeverity("error");
        setOpen(true);
      }
    } else {
      setNotificationMsg("Please enter old password");
      setSeverity("error");
      setOpen(true);
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
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {notificationMessage}
        </Alert>
      </Snackbar>
    </ChangePasswordwWrapper>
  );
}
