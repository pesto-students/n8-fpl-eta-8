import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

// Libraries
import { Container, Grid, Typography, Card } from "@mui/material";

import {
  TechnicalAnalysis,
  CompanyProfile,
  FundamentalData,
  SymbolOverview,
} from "react-tradingview-embed";

// Custom Components
import ChallengeContext from "./ChallengeContext";
import StockSelector from "../StockSelector/StockSelector";

import { useStyles } from "./styles";

export default function StockDetails() {
  const { stock } = useParams();
  const classes = useStyles();
  const [symbol, setSymbol] = useState();

  useEffect(() => {
    const securityCode = stock.split(".")[0];

    if (!isNaN(securityCode)) {
      fetch(
        `${process.env.REACT_APP_API_SERVER}/api/lookup/code/${securityCode}`,
        {}
      )
        .then((res) => res.json())
        .then((response) => {
          const securityId = response[0].securityId;
          setSymbol(securityId);
        })
        .catch((error) => console.log(error));
    } else {
      setSymbol(securityCode);
    }
  }, [stock]);

  return (
    <>
      <Container>
        <ChallengeContext />
        <Grid container spacing={1} direction="row" className={classes.root}>
          {/* title and stock search */}
          <Grid item xs={12} md={12} lg={12}>
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="space-between"
            >
              <Typography variant="h5">{symbol}</Typography>
              <StockSelector stockDetails={true} />
            </Grid>
          </Grid>

          {/* advance chart  */}
          <Grid item xs={12} md={12} lg={12}>
            <Card variant="outlined" className={classes.tvWidget1_5}>
              <SymbolOverview
                widgetPropsAny={{
                  colorTheme: "light",
                  symbols: [symbol],
                  width: "100%",
                }}
              />
            </Card>
          </Grid>

          {/* advance analytics */}
          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={1} direction="row">
              <Grid item xs={12} md={5} lg={5}>
                <Grid container spacing={1} direction="column">
                  <Grid item xs={12}>
                    <Card variant="outlined" className={classes.tvWidget1}>
                      <CompanyProfile
                        widgetPropsAny={{
                          colorTheme: "light",
                          symbol: symbol,
                          width: "100%",
                        }}
                      />
                    </Card>
                  </Grid>
                  <Grid item xs={12}>
                    <Card variant="outlined" className={classes.tvWidget1}>
                      <TechnicalAnalysis
                        widgetPropsAny={{
                          colorTheme: "light",
                          symbol: symbol,
                          width: "100%",
                        }}
                      />
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={7} lg={7}>
                <Card variant="outlined" className={classes.tvWidget2}>
                  <FundamentalData
                    widgetPropsAny={{
                      colorTheme: "light",
                      symbol: symbol,
                      width: "100%",
                    }}
                  />
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
