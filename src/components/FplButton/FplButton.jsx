import React from "react";
import Button from "@mui/material/Button";
import { makeStyles, withStyles } from "@mui/styles";
import Icon from "@mui/material/Icon";

const SpecialButton = withStyles({
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

const BlackButton = withStyles({
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

const BlueButton = withStyles({
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

const useStyle = makeStyles({
  icon: {
    padding: ".2rem",
  },
});

export default function FplButton(props) {
  const classes = useStyle();
  const { hasIcon, label, icon, type } = props;

  switch (type) {
    case "black": {
      if (hasIcon) {
        return (
          <BlackButton>
            {" "}
            <Icon fontSize="small" className={classes.icon}>
              {icon}
            </Icon>{" "}
            {label}
          </BlackButton>
        );
      } else {
        return <BlackButton>{label}</BlackButton>;
      }
    }
    case "blue": {
      if (hasIcon) {
        return (
          <BlueButton>
            {" "}
            <Icon fontSize="small" className={classes.icon}>
              {icon}
            </Icon>{" "}
            {label}
          </BlueButton>
        );
      } else {
        return <BlueButton>{label}</BlueButton>;
      }
    }
    default:
    case "special":
      if (hasIcon) {
        return (
          <SpecialButton>
            {" "}
            <Icon fontSize="small" className={classes.icon}>
              {icon}
            </Icon>{" "}
            {label}
          </SpecialButton>
        );
      } else {
        return <SpecialButton>{label}</SpecialButton>;
      }
  }
}
