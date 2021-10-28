import React from "react";
import { useHistory } from "react-router";
import { useRouteMatch, Route, Switch, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CardContent } from "@mui/material";
import LoginHeader from "components/LoginHeader/LoginHeader";
import EmailLogin from "components/EmailLogin/EmailLogin";
import firebase from "firebase";
import {
  DesignedCard,
  EmailButton,
  StyledStarIcon,
  LoginTitle,
  StyledLink,
  GoogleButton,
  BackButton,
} from "./LoginStlye";
import { setUser } from "store-features/user";

export default function Login() {
  const { url, path } = useRouteMatch();
  const history = useHistory();

  const dispatch = useDispatch();

  async function googleLogin() {
    try {
      await firebase.loginGoogle().then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            name: user.displayName,
            profileImage: user.photoURL,
          })
        );

        user.getIdToken().then((token) => {});
      });
      history.push("/home");
    } catch (error) {
      alert(error.message);
    }
  }

  async function demoLogin() {
    try {
      await firebase.login("demo@presto.com", "demopresto").then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            name: user.displayName,
            profileImage: user.photoURL,
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
      <LoginHeader />
      <DesignedCard variant="outlined" sx={{ maxWidth: 350 }}>
        <CardContent>
          <Switch>
            <Route exact path={`${path}/`}>
              <LoginTitle>
                <Link to={"/"}>
                  <BackButton fontSize="large" />
                </Link>
                Login / Sign Up
              </LoginTitle>
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
              <EmailButton variant="contained" onClick={demoLogin}>
                Demo Login
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
