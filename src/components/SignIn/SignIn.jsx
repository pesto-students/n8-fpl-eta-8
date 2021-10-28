import React, { useState } from "react";
import { useDispatch } from "react-redux";

// managing routes on authentication
import { useHistory } from "react-router";

// mui components
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

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

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  async function login() {
    try {
      await firebase.login(email, password).then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            name: user.displayName,
            profileImage: user.photoURL,
            uid : user.uid
          })
        );
        history.push("/home");
      });

      firebase.getCurrentUsername();
    } catch (error) {
      console.log(error);
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
    </div>
  );
}
