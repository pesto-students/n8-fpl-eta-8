import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

export const useStyles = makeStyles({
  root: {
    padding: "1.5rem 2rem",
  },
  challengeDetails: {
    marginBottom: "2rem",
  },
  cardButton: {
    justifyContent: "start",
  },
  styledLink: {
    textDecoration: "none",
  },
});

export const CreatePortfolio = styled(Button)`
  float: right;
  color: #ffffff !important;
  background: linear-gradient(180deg, #0c77f8 0%, #0856b5 100%);
  border-radius: 12px !important;
  text-transform: capitalize !important;
  font-size: 14px !important;
`;

export const ViewLeaderboard = styled(Button)`
  float: right;
  color: #ffffff !important;
  background: linear-gradient(180deg, #ff4b6e 0%, #b92642 100%);
  border-radius: 12px !important;
  text-transform: capitalize !important;
  font-size: 14px !important;
`;
