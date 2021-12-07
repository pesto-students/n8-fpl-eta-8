import React from "react";
import logoLongDark from "assets/logo-long-dark.svg";
import logoLonglight from "assets/logo-long-light.svg";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import { styles } from "./styles";
function Logo(props) {
  const { classes, light } = props;
  return (
    <img
      className={classes.root}
      src={light ? logoLonglight : logoLongDark}
      alt="Fantasy Portfolio League"
    />
  );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
