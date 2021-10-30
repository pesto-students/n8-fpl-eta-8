import React from "react";

// Material Components and hooks
import Grid from "@mui/material/Grid";

// Custom components
import FplButton from "../FplButton/FplButton";

import { useStyles, StyledLogo, StyledLink } from "./styles";

export default function LandingHeader(props) {
  const classes = useStyles();

  return (
    <Grid alignItems="center" spacing={4} className={classes.root}>
      <StyledLogo></StyledLogo>
      <StyledLink to="/login">
        <FplButton label="Sign in / Sign up" hasIcon="true" icon="star" />
      </StyledLink>
    </Grid>
  );
}
