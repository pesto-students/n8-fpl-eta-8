import { Button } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";

export const PlanSubscriptionTitle = styled.div`
  font-size: 20px;
  line-height: 26px;
  margin-top: 30px;
  display: inline-block;
  margin-bottom: 20px;
`;

export const SelectPlanTitle = styled(PlanSubscriptionTitle)`
  width: 100%;
`;

export const UpgradeButton = styled(Button)`
  background: linear-gradient(180deg, #0c77f8 0%, #0858b9 100%);
  color: #ffffff !important;
  border-radius: 12px !important;
  text-transform: capitalize !important;
  margin-left: 15% !important;
  @media (min-width: 768px) {
    margin-left: 13% !important;
  }
`;

export const SelectButton = styled(UpgradeButton)`
  margin-left: 5% !important;
`;

export const blueColorText = styled.span`
  color: #1f41f7;
`;

export const Currency = styled(blueColorText)`
  font-size: 10px;
  line-height: 26px;
  vertical-align: super;
  @media (min-width: 768px) {
    font-size: 8px;
    line-height: 24px;
  }
  @media (min-width: 1024px) {
    font-size: 10px;
    line-height: 26px;
  }
`;
export const Amount = styled(blueColorText)`
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
    line-height: 30px;
  }
`;
export const TimeSpan = styled(blueColorText)`
  font-size: 12px;
  line-height: 18px;
  @media (min-width: 768px) {
    font-size: 10px;
    line-height: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
    line-height: 18px;
  }
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

export const Badge = styled(BookmarkIcon)`
  color: #1f41f7;
  vertical-align: bottom;
`;

export const BackButton = styled(ArrowBackIcon)`
  float: right;
`;
export const Info = styled.span`
  font-size:12px;
  margin-left: 10%;
`;
