import { Button, Card } from "@mui/material";
import styled from "styled-components";

export const PortfolioCard = styled(Card)`
  border-radius: 12px !important;
`;

export const PortfolioTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 13px;
`;

export const SubmitPortfolio = styled(Button)`
  float: right;
  color: #ffffff !important;
  background: linear-gradient(180deg, #0c77f8 0%, #0856b5 100%);
  border-radius: 12px !important;
  text-transform: capitalize !important;
  font-size: 14px !important;
`;

export const SubmitPortfolioDisabled = styled(SubmitPortfolio)`
  background: #fcddec !important;
`;

export const GoBackButton = styled(SubmitPortfolio)`
  background: rgba(206, 61, 41, 1) !important;
`;
