import styled from "styled-components";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import StarIcon from "@mui/icons-material/Star";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

export const DesignedCard = styled(Card)`
  margin: 0 auto;
  margin-top: 25px;
  text-align: center;
`;

export const LoginTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 33px;
`;

export const GoogleButton = styled(Button)`
  background: linear-gradient(180deg, #4285f4 0%, #3c62eb 100%);
  text-transform: capitalize !important;
  font-size: 16px !important;
  border-radius: 12px !important;
  display: block !important;
  margin: 0 auto !important;
  color:#ffffff !important;
`;

export const GoogleLoginButton = styled(GoogleLogin)`
  && div {
    display: none;
  }
  background: linear-gradient(180deg, #4285f4 0%, #3c62eb 100%);
  text-transform: capitalize !important;
  font-size: 16px !important;
  border-radius: 12px !important;
  display: block !important;
  margin: 0 auto !important;
  padding: 10px 12px !important;
  color: #ffffff !important;
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 14px !important;
  height: 13px !important;
  padding-right: 5px;
  color: #ffffff;
`;

export const EmailButton = styled(GoogleButton)`
  background: linear-gradient(180deg, #2f3538 0%, #0c0d0e 100%);
  margin-top: 12px !important;
  text-decoration: none !important;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;
