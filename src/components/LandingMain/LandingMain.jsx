import React from "react";

// Material UI components and hooks
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

//  Assets
import landingImg from "assets/landing-img.png";
// import landingMainBg from 'assets/landing-main-bg.svg';

// routing
import { Link } from "react-router-dom";

// Styling
const useStyles = makeStyles({
  root: {
    position: "relative",
  },
  bgImage: {
    zIndex: -9,
    position: "absolute",
    top: "22vh",
    left: "-30vw",
  },
  textSectionButton: {
    textTransform: "none",
    color: "#fff",
    marginTop: "2rem",
  },
  imageSection: {
    maxHeight: "35rem",
    width: "100%",
    height: "auto",
  },
});

const TextSection = styled.div`
  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  @media (max-width: 767px) {
    text-align: center !important;
  }
`;

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
                <li>Learn to Invest by building your Portfolio</li>
                <li>Analyse Stocks to make right decsion</li>
                <li>Submit your portfolio and win rewards</li>
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
