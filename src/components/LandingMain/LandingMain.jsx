import React from "react";

// Material UI components and hooks
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

//  Assets
import landingImg from "assets/landing-img.png";

// Styling
import { useStyles, TextSection, StyledLink } from "./styles";

export default function LandingMain() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4} direction="row" alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container direction="column">
            <TextSection>
              <h1>New to Investing ?</h1>
              <ul>
                <li>Learn to invest by building your Portfolio</li>
                <li>Analyse stocks to make right decisions</li>
                <li>Submit your portfolio and win rewards</li>
                <li>
                  <a href="https://youtu.be/PihX0ARCFGU" target="_blank" rel="noreferrer">
                    How to Participate
                  </a>
                </li>
              </ul>
              <StyledLink to="/login">
                <Button
                  className={classes.textSectionButton}
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRightAltIcon />}
                >
                  Get Started
                </Button>
              </StyledLink>
            </TextSection>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            src={landingImg}
            alt="Sample View"
            className={classes.imageSection}
          />
        </Grid>
      </Grid>
    </>
  );
}
