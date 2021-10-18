import React from "react";
import { HeaderContainer, Logo, Title } from "./LoginHeaderStyle";
import logo from "./assets/logo.svg";

export default function LoginHeader() {
  Logo.defaultProps = {
    src: logo,
  };
  return (
    <HeaderContainer>
      <Logo />
      <Title>Fantasy Portfolio League</Title>
    </HeaderContainer>
  );
}
