import React, { useState } from "react";
import { useHistory } from "react-router";
import { TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import firebase from "firebase";
import { CancelButton, LoginButton } from "./SignUpStyle";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = React.useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");
  const [severity, setSeverity] = useState("info");
  const vertical = "top";
  const horizontal = "center";

  const history = useHistory();

  async function onRegister() {
    if (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(String(email).toLowerCase())) {
        if (password === confirmPassword) {
          try {
            await firebase.register(name, email, password);
            setNotificationMsg("User created successfully");
            setSeverity("success");
            setOpen(true);
            history.push("/home");
          } catch (error) {
            console.log(error.message);
            setNotificationMsg(error.message);
            setSeverity("error");
            setOpen(true);
          }
        } else {
          setNotificationMsg("Password and confirm password should match");
          setSeverity("error");
          setOpen(true);
        }
      } else {
        setNotificationMsg("Please enter a valid email address");
        setSeverity("error");
        setOpen(true);
      }
    } else {
      setNotificationMsg("Please enter all the fields");
      setSeverity("error");
      setOpen(true);
    }
  }

  return (
    <div>
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        size="small"
        margin="normal"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        size="small"
        margin="normal"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        size="small"
        margin="normal"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <TextField
        id="confirmPassword"
        label="Confirm Password"
        type="password"
        autoComplete="current-password"
        size="small"
        margin="normal"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <br />
      <LoginButton variant="contained" onClick={onRegister}>
        Log In
      </LoginButton>
      <CancelButton variant="contained" onClick={() => history.push("/login")}>
        Cancel
      </CancelButton>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {notificationMsg}
        </Alert>
      </Snackbar>
    </div>
  );
}
