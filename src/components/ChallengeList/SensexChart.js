import React from "react";

// material ui
import Card from "@mui/material/Card";

// styling
import { useStyles } from "./styles";

// charting from tradingview
import TradingViewWidget, { Themes } from "react-tradingview-widget";

export default function SensexChart(props) {
  const classes = useStyles();
  const symbol = props.symbol;
  return (
    <>
      <Card variant="outlined" className={classes.sensexChartCard}>
        <TradingViewWidget
          symbol={symbol}
          theme={Themes.LIGHT}
          locale="en"
          autosize
        />
      </Card>
    </>
  );
}
