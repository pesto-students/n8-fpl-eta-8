import React from "react";

// Routing
import { Link } from "react-router-dom";

// Material Components and hooks
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

// Custom components
import Logo from "components/Logo/logo";
import FplButton from "../FplButton/FplButton";

const useStyles = makeStyles({
  root: {
    marginTop: "1.5rem",
  },
  link: {
    textDecoration: "none",
  },
  logo:{
    maxWidth:"10rem",

  }
});

export default function LandingHeader(props) {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        spacing={4}
        className={classes.root}
      >
          <Logo></Logo>
          <Link to="/login" className={classes.link}>
            <FplButton label="Sign in / Sign up" hasIcon="true" icon="star" />
          </Link>
      </Grid>
    </Box>
  );
}
