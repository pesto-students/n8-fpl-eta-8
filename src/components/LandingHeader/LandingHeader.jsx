import React from "react";

// Material Components and hooks
import Logo from "../Logo/logo";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

// Custom components
import FplButton from "../FplButton/FplButton";

// Routing
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: "1.5rem",
  },
  link: {
    textDecoration: "none",
  },
});

export default function LandingHeader(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      className={classes.root}
    >
      <Logo></Logo>
      <Link to="/login" className={classes.link}>
        <FplButton
          label="Sign in / Sign up"
          hasIcon="true"
          icon="star"
        ></FplButton>
      </Link>
    </Grid>
  );
}
