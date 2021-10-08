import React from "react";
import logo from "./assets/logo.svg";
import { CardContent } from "@mui/material";
import {DesignedCard, GoogleLoginButton, HeaderContainer, EmailButton, StyledStarIcon, Logo, Title, LoginHeader} from "./LoginStlye"

export default function Login() {
  
  Logo.defaultProps = {
    src: logo,
  };

  const handleLogin = async (googleData) => {
    console.log(googleData);
  };

  return (
    <div>
      <HeaderContainer>
        <Logo />
        <Title>Fantasy Portfolio League</Title>
      </HeaderContainer>
      <DesignedCard variant="outlined" sx={{ maxWidth: 350 }}>
        <CardContent>
          <LoginHeader>Login / Sign Up</LoginHeader>
          <GoogleLoginButton
            clientId="420988764707-agbr7km3iq0v01180saa7tjoi6sfcnh1.apps.googleusercontent.com"
            onSuccess={handleLogin}
            onFailure={handleLogin}
            cookiePolicy={"single_host_origin"}
          >
            <StyledStarIcon />Google Sign in
          </GoogleLoginButton>
          <EmailButton variant="contained"><StyledStarIcon />Email Sign in</EmailButton>
        </CardContent>
      </DesignedCard>
    </div>
  );
}
