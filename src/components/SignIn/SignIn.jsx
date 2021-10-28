import React, { useState } from "react";
import { useDispatch } from "react-redux";

// managing routes on authentication
import { useHistory } from "react-router";

// mui components
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

// to style the components
import styled from "styled-components";

// auth provider
import firebase from "firebase";

import { setUser } from "store-features/user";

const LoginButton = styled(Button)`
  background: linear-gradient(180deg, #2f3538 0%, #0c0d0e 100%);
  border-radius: 12px !important;
`;

const CancelButton = styled(LoginButton)`
  margin-left: 20px !important;
`;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");
  const [severity, setSeverity] = useState("info");
  const vertical = "top";
  const horizontal = "center";

  const dispatch = useDispatch();

  const history = useHistory();

  async function login() {
    if (email.length > 0 && password.length > 0) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(String(email).toLowerCase())) {
        try {
          await firebase.login(email, password).then(({ user }) => {
            dispatch(
              setUser({
                email: user.email,
                name: user.displayName,
                profileImage: user.photoURL,
              })
            );
            history.push("/home");
          });

          // firebase.getCurrentUsername();
        } catch (error) {
          setNotificationMsg("Please enter valid user name/password");
          setSeverity("error");
          setOpen(true);
        }
      } else {
        setNotificationMsg("Please enter valid email address");
        setSeverity("error");
        setOpen(true);
      }
    } else {
      setNotificationMsg("Please enter user name/password");
      setSeverity("error");
      setOpen(true);
    }
  }

  return (
    <div>
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
      <br />
      <LoginButton variant="contained" onClick={login}>
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
