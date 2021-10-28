import React from "react";
import { withStyles } from "@mui/styles";
import logoLongDark from "assets/logo-long-dark.svg";
import logoLonglight from "assets/logo-long-light.svg";
import PropTypes from "prop-types";

const styles = {
  root: {
    maxWidth: "25rem",
  },
};

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
