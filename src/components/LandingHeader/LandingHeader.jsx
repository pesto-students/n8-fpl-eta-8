import React from "react";

// Routing
import { Link } from "react-router-dom";

// Material Components and hooks
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

import styled from "styled-components";

// Custom components
import Logo from "components/Logo/logo";
import FplButton from "../FplButton/FplButton";

const useStyles = makeStyles({
  root: {
    marginTop: "1.5rem",
  },
});

const StyledLink = styled(Link)`
  float: right;
  margin-right: 20px;
  text-decoration: none;
  @media (max-width: 767px) {
    float: none;
    margin: 0 auto;
    display: block;
    text-align: center;
  }
`;

const StyledLogo = styled(Logo)`
  @media (max-width: 767px) {
    margin: 0 auto !important;
    display: block;
  }
`;

export default function LandingHeader(props) {
  const classes = useStyles();

  return (
    <Grid
      alignItems="center"
      spacing={4}
      className={classes.root}
    >
      <StyledLogo></StyledLogo>
      <StyledLink to="/login">
        <FplButton label="Sign in / Sign up" hasIcon="true" icon="star" />
      </StyledLink>
    </Grid>
  );
}
