import React from 'react';

// mui components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// custom components
import Logo from '../Logo/logo'

export default function Header() {
    return (
        <AppBar>
            <Toolbar>
                <Logo light />
            </Toolbar>
        </AppBar>
    );
};


