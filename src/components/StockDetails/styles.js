import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { withStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    marginTop: "10rem",
    paddingBottom: "3rem",
  },
  challengeContext: {
    marginTop: "4.4rem",
    boxShadow: "none",
    background: "linear-gradient(90.2deg, #2445FC 3.26%, #1932BB 105.48%)",
  },
  challengeToolbar: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  challengeDetailsContainer: {
    display: "flex",
    alignItems: "center",
  },
  challengeDetails: {
    padding: "0 2rem",
  },

  tvWidget1: {
    height: "45vh",
    padding: ".25rem",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.5em",
    },
    "&::-webkit-scrollbar-track": {
      background: "#FFFFFF",
      boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "linear-gradient(180deg, #3D59F7 0%, #283B9E 100%)",
      borderRadius: ".5rem",
    },
  },
  tvWidget1_5: {
    height: "55vh",
    padding: ".25rem",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.5em",
    },
    "&::-webkit-scrollbar-track": {
      background: "#FFFFFF",
      boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "linear-gradient(180deg, #3D59F7 0%, #283B9E 100%)",
      borderRadius: ".5rem",
    },
  },
  tvWidget2: {
    height: "92vh",
    padding: ".25rem",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "0.5em",
    },
    "&::-webkit-scrollbar-track": {
      background: "#FFFFFF",
      boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "linear-gradient(180deg, #3D59F7 0%, #283B9E 100%)",
      borderRadius: ".5rem",
    },
  },
});

export const AddStockBtn = withStyles({
    root: {
      background: "linear-gradient(180deg, #07A287 0%, #057E69 100%)",
      color: "#fff",
      borderRadius: "12px",
      textTransform: "none",
      fontSize: "1rem",
      padding: ".25rem .85rem",
    },
  })(Button);
