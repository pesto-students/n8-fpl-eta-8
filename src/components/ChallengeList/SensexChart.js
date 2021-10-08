import React from 'react';

// material ui
import Card from '@mui/material/Card';

// styling
import { useStyles } from './styles';

// charting from tradingview
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

export default function SensexChart() {

    const classes = useStyles();

    return (
        <>
            <Card variant="outlined" className={classes.sensexChartCard}>
                <TradingViewWidget
                    symbol="BSE:SENSEX"
                    theme={Themes.LIGHT}
                    locale="en"
                    autosize
                />
            </Card>
        </>
    );
}