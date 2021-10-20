import { Button, Card, TextField } from "@mui/material";
import styled from "styled-components";

export const ChangePasswordwWrapper = styled(Card)`
  margin-top: 16px;
  height: calc(100% - 177px);
`;

export const ChangeProfileTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const ProfileTitle = styled.div`
  font-size: 20px;
  line-height: 26px;
  margin-top: 30px;
  display: inline-block;
`;

export const ProfileLabel = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #10182b;
  margin-top: 10px;
  opacity: 0.6;
`;

export const ProfileContent = styled.div`
  font-size: 16px;
  line-height: 26px;
`;

export const UpdateButton = styled(Button)`
  background: linear-gradient(180deg, #0c77f8 0%, #0858b9 100%);
  color: #ffffff !important;
  border-radius: 12px !important;
  text-transform: capitalize !important;
  margin-left: 100px !important;
  @media (min-width: 768px) {
    margin-left: 174px !important;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 200px !important;
  @media (min-width: 768px) {
    width: 300px !important;
  }
`;
