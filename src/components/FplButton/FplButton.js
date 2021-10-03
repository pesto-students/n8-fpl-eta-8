import React from 'react';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';

const CustomButton = withStyles({
    root: {
        background: "linear-gradient(180deg, #8B2FF3 0%, #4E73F8 100%)",
        borderRadius: "1.75rem",
        border: 0,
        color: "white",
        textTransform: 'none',
        padding: "9px 14px",
        fontSize:'14px',
        fontWeight:500,
        lineHeight:'16px'
    },
    label: {
        textTransform: "capitalize"
    }
})(props => <Button {...props} />);

export default function FplButton() {
    return(
        <>
        <CustomButton>Login / Signup</CustomButton>
        </>
    )
};