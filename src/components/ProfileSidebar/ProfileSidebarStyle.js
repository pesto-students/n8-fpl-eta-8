import { Link } from "react-router-dom";
import { Avatar, Button, Card } from "@mui/material";
import styled from "styled-components";

export const ProfileImg = styled.img`
  border-radius: 48px;
`;

export const ProfileAvatar = styled(Avatar)`
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #10182b;
  display: block;
  margin-bottom: 10px;
`;

export const HighlightedStyledLink = styled(StyledLink)`
  border-bottom: 2px solid #02abec;
`;

export const SubscriptionType = styled.div`
  margin-top: 3px;
  color: #96999c;
  letter-spacing: -0.52px;
  margin-bottom: 24px;
`;

export const ProfileName = styled.div`
  letter-spacing: 1.75px;
  font-weight: bold;
  font-size: 14px;
  padding-top: 7px;
  text-transform: uppercase;
`;

export const Logout = styled(Button)`
  background: linear-gradient(180deg, #8b2ff3 0%, #4e73f8 100%);
  font-size: 16px !important;
  border-radius: 12px !important;
  position: absolute !important;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

export const ProfileSideBar = styled(Card)`
  height: 75vh;
  position: relative;
  display: none !important;
  text-align: center;
  padding: 0 40px;
  @media (min-width: 768px) {
    display: block !important;
  }
`;
