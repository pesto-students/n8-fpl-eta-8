import { Card, CardContent } from "@mui/material";
import React from "react";
import styled from "styled-components";
import StockPicker from "../StockPicker/StockPicker";

const PortfolioCard = styled(Card)`
  border-radius: 12px !important;
`;

const PortfolioTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 13px;
`;

export default function Portfolio() {
  return (
    <PortfolioCard variant="outlined">
      <CardContent>
        <PortfolioTitle>My Portfolio</PortfolioTitle>
        <StockPicker />
        <StockPicker />
        <StockPicker />
        <StockPicker />
        <StockPicker />
      </CardContent>
    </PortfolioCard>
  );
}
