import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import styled from "styled-components";
import firebase from "../../firebase";
import { useHistory } from "react-router";

const LoginButton = styled(Button)`
  background: linear-gradient(180deg, #2f3538 0%, #0c0d0e 100%);
`;

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function login() {
    try {
      await firebase.login(email, password).then(({ user }) => { console.log(user) });
      history.push("/home");
      firebase.getCurrentUsername();
    } catch (error) {
      alert(error.message);
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
    </div>
  );
}
