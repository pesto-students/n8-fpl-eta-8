import React from "react";
import { CardContent } from "@mui/material";
import {
  DesignedCard,
  EmailButton,
  StyledStarIcon,
  LoginTitle,
  StyledLink,
  GoogleButton,
} from "./LoginStlye";
import LoginHeader from "../LoginHeader/LoginHeader";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import EmailLogin from "../EmailLogin/EmailLogin";
import firebase from "../../firebase";


import { useDispatch } from "react-redux";
import { setUser } from "../../store-features/user";


export default function Login() {
  const { url, path } = useRouteMatch();
  const history = useHistory();

  const dispatch = useDispatch();

  async function googleLogin() {
    try {
      await firebase
        .loginGoogle()
        .then(({ user }) => {

          dispatch(setUser({ email: user.email, name: user.displayName, profileImage: user.photoURL }));

          user.getIdToken().then((token) => { })
        });
      history.push("/home");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <LoginHeader />
      <DesignedCard variant="outlined" sx={{ maxWidth: 350 }}>
        <CardContent>
          <Switch>
            <Route exact path={`${path}/`}>
              <LoginTitle>Login / Sign Up</LoginTitle>
              <GoogleButton onClick={googleLogin}>
                <StyledStarIcon />
                Google Sign in
              </GoogleButton>
              <EmailButton variant="contained">
                <StyledLink to={`${url}/email`}>
                  <StyledStarIcon />
                  Email Sign in
                </StyledLink>
              </EmailButton>
            </Route>
            <Route path={`${path}/email`}>
              <EmailLogin />
            </Route>
          </Switch>
        </CardContent>
      </DesignedCard>
    </div>
  );
}
