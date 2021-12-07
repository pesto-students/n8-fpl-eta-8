import React from "react";
import Icon from "@mui/material/Icon";
import {BlackButton, BlueButton, SpecialButton, useStyle,} from "./FplButtonStyle";

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
