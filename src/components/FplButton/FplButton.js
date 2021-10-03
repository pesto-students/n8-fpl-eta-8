import React from 'react';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';

const SpecialButton = withStyles({
    root: {
        background: "linear-gradient(180deg, #8B2FF3 0%, #4E73F8 100%)",
        borderRadius: "0.80rem",
        border: 0,
        color: "white",
        padding: "9px 14px",
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '16px',
        textTransform: 'none',
    },
})(props => <Button {...props} />);

const BlackButton = withStyles({
    root: {
        background: 'linear-gradient(180deg, #2F3538 0%, #0C0D0E 100%)',
        borderRadius: "0.80rem",
        border: 0,
        color: "white",
        padding: "9px 14px",
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '16px',
        textTransform: 'none',
    },
})(props => <Button {...props} />);

const BlueButton = withStyles({
    root: {
        background: 'linear-gradient(180deg, #4285F4 0%, #3C62EB 100%)',
        borderRadius: "0.80rem",
        border: 0,
        color: "white",
        padding: "9px 14px",
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '16px',
        textTransform: 'none',
    },
})(props => <Button {...props} />);



export default function FplButton(props) {
    const { hasIcon, label, icon, type } = props

    switch (type) {

        case 'black': {
            if (hasIcon) {
                return (<BlackButton> <img src={icon} alt=""/> {label}</BlackButton>);
            } else {
                return (<BlackButton>{label}</BlackButton>);
            }
        }
        case 'blue': {
            if (hasIcon) {
                return (<BlueButton> <img src={icon} alt="" /> {label}</BlueButton>);
            } else {
                return (<BlueButton>{label}</BlueButton>);
            }
        }
        default:
        case 'special':
            if (hasIcon) {
                return (<SpecialButton> <img src={icon} alt="" /> {label}</SpecialButton>);
            } else {
                return (<SpecialButton>{label}</SpecialButton>);
            }
    }



};