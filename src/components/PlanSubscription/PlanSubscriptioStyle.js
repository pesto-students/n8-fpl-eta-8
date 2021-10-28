import { Button } from "@mui/material";
import styled from "styled-components";

export const PlanSubscriptioTitle = styled.div`
  font-size: 20px;
  line-height: 26px;
  margin-top: 30px;
  display: inline-block;
  margin-bottom: 20px;
`;

export const UpgradeButton = styled(Button)`
  background: linear-gradient(180deg, #0c77f8 0%, #0858b9 100%);
  color: #ffffff !important;
  border-radius: 12px !important;
  text-transform: capitalize !important;
  margin-left: 100px !important;
  @media (min-width: 768px) {
    margin-left: 13% !important;
  }
`;

export const blueColorText = styled.span`
  color: #1f41f7;
`;

export const Currency = styled(blueColorText)`
  font-size: 10px;
  line-height: 26px;
  vertical-align: super;
`;
export const Amount = styled(blueColorText)`
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
`;
export const TimeSpan = styled(blueColorText)`
  font-size: 12px;
  line-height: 18px;
`;

export const PlanName = styled.div`
  font-size: 16px;
  line-height: 40px;
  font-weight: 500;
`;

export const PlanDesc = styled.div`
  font-size: 14px;
  line-height: 24px;
`;
