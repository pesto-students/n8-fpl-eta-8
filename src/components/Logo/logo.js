import React from 'react';
import { withStyles } from '@mui/styles';
import logo from '../../assets/logo.svg';
import PropTypes from 'prop-types';

const styles = {
    root: {
        padding: '1rem',
        maxWidth: '25rem'
    },
};

function Logo(props) {
    const { classes } = props;
    return <img className={classes.root} src={logo} alt="Fantasy Portfolio League" />;
}

Logo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);