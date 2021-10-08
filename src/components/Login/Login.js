import React from "react";
import { CardContent } from "@mui/material";
import {
  DesignedCard,
  GoogleLoginButton,
  EmailButton,
  StyledStarIcon,
  LoginTitle,
  StyledLink,
} from "./LoginStlye";
import LoginHeader from "../LoginHeader/LoginHeader";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router";
import EmailLogin from "../EmailLogin/EmailLogin";
import firebase from "../../firebase";

export default function Login() {
  const handleLogin = async (googleData) => {
    console.log(googleData);
    history.push("/home");
  };

  const { url, path } = useRouteMatch();
  const history = useHistory();

  return (
    <div>
      <LoginHeader />
      <DesignedCard variant="outlined" sx={{ maxWidth: 350 }}>
        <CardContent>
          <Switch>
            <Route exact path={`${path}/`}>
              <LoginTitle>Login / Sign Up</LoginTitle>
              <GoogleLoginButton
                clientId="420988764707-agbr7km3iq0v01180saa7tjoi6sfcnh1.apps.googleusercontent.com"
                onSuccess={() => handleLogin}
                onFailure={() => handleLogin}
                cookiePolicy={"single_host_origin"}
              >
                <StyledStarIcon />
                Google Sign in
              </GoogleLoginButton>
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
