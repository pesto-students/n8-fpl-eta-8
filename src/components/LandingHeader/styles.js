import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import Logo from "components/Logo/logo";

export const useStyles = makeStyles({
  root: {
    marginTop: "1.5rem",
  },
});

export const StyledLink = styled(Link)`
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

export const StyledLogo = styled(Logo)`
  @media (max-width: 767px) {
    margin: 0 auto !important;
    display: block;
  }
`;
