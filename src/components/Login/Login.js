import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.svg";
import Card from "@mui/material/Card";
import { Button, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import GoogleLogin from "react-google-login";

export default function Login() {
  const HeaderContainer = styled.div`
    text-align: left;
    padding: 10px;

    @media (min-width: 1024px) {
      text-align: center;
      padding-top: 154px;
    }
  `;

  const Title = styled.div`
    font-weight: 700;
    font-size: 24px;
    line-height: 64px;
    color: #5d5fef;
    padding-left: 10px;
    display: inline-block;
    vertical-align: top;

    @media (min-width: 768px) {
      font-size: 36px;
      line-height: 82px;
      padding-left: 14px;
    }
  `;

  const Logo = styled.img`
    width: 38px;
    height: 38px;
    margin-top: 10px;

    @media (min-width: 768px) {
      width: 64px;
      height: 64px;
    }
  `;
  Logo.defaultProps = {
    src: logo,
  };

  const DesignedCard = styled(Card)`
    margin: 0 auto;
    margin-top: 25px;
    text-align: center;
  `;

  const LoginHeader = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 33px;
  `;

  const GoogleButton = styled(Button)`
    background: linear-gradient(180deg, #4285f4 0%, #3c62eb 100%);
    text-transform: capitalize !important;
    font-size: 16px !important;
    border-radius: 12px !important;
    display: block !important;
    margin: 0 auto !important;
  `;

  const GoogleLoginButton = styled(GoogleLogin)`
    && div {
      display: none;
    }
    background: linear-gradient(180deg, #4285f4 0%, #3c62eb 100%);
    text-transform: capitalize !important;
    font-size: 16px !important;
    border-radius: 12px !important;
    display: block !important;
    margin: 0 auto !important;
    padding: 6px 16px !important;
    color: #ffffff !important;
  `;

  const StyledStarIcon = styled(StarIcon)`
    width: 14px !important;
    height: 13px !important;
    padding-right: 5px;
    color: #ffffff;
  `;

  const EmailButton = styled(GoogleButton)`
    background: linear-gradient(180deg, #2f3538 0%, #0c0d0e 100%);
    margin-top: 12px !important;
  `;

  const handleLogin = async (googleData) => {
    // const res = await fetch("/api/v1/auth/google", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     token: googleData.tokenId,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await res.json();
    console.log(googleData);
    // store returned user in a context?
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
