import { makeStyles, withStyles } from "@mui/styles";
import Button from "@mui/material/Button";

export const SpecialButton = withStyles({
  root: {
    background: "linear-gradient(180deg, #8B2FF3 0%, #4E73F8 100%)",
    borderRadius: "0.80rem",
    border: 0,
    color: "white",
    padding: "9px 14px",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "16px",
    textTransform: "none",
  },
})((props) => <Button {...props} />);

export const BlackButton = withStyles({
  root: {
    background: "linear-gradient(180deg, #2F3538 0%, #0C0D0E 100%)",
    borderRadius: "0.80rem",
    border: 0,
    color: "white",
    padding: "9px 14px",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "16px",
    textTransform: "none",
  },
})((props) => <Button {...props} />);

export const BlueButton = withStyles({
  root: {
    background: "linear-gradient(180deg, #4285F4 0%, #3C62EB 100%)",
    borderRadius: "0.80rem",
    border: 0,
    color: "white",
    padding: "9px 14px",
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "16px",
    textTransform: "none",
  },
})((props) => <Button {...props} />);

export const useStyle = makeStyles({
  icon: {
    padding: ".2rem",
  },
});