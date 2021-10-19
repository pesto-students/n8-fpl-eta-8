import { Card } from "@mui/material";
import styled from "styled-components";

export const AccountOverviewWrapper = styled(Card)`
  margin-top: 16px;
  height: calc(100% - 177px);
`;

export const AccountOverviewTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const ProfileTitle = styled.div`
  font-size: 20px;
  line-height: 26px;
  margin-top: 30px;
`;

export const ProfileLabel = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #10182b;
  margin-top: 15px;
  opacity: 0.6;
`;

export const ProfileContent = styled.div`
  font-size: 16px;
  line-height: 26px;
`;
