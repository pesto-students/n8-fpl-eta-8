import React from "react";
import firebase from "firebase";
import { useHistory } from "react-router";
import { Button } from "@mui/material";
import styled from "styled-components";

const LoginButton = styled(Button)`
  background: linear-gradient(180deg, #2f3538 0%, #0c0d0e 100%);
`;

export default function Home() {
  const history = useHistory();

  async function logout() {
    await firebase.logout();
    history.push("/");
  }

  if (!firebase.getCurrentUsername()) {
    // not logged in
    history.push("/login");
    return null;
  }
  return (
    <div>
      Home
      <br />
      <LoginButton variant="contained" onClick={logout}>
        Log Out
      </LoginButton>
    </div>
  );
}
