import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const useStyles = makeStyles({
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

export const TextSection = styled.div`
  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  @media (max-width: 767px) {
    text-align: center !important;
  }
`;
