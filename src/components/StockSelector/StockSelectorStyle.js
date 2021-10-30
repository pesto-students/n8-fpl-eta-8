import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const StockPickerTextBox = styled.input.attrs({
  type: "text",
})`
  border: none;
  font-size: 16px;
  width: 100%;
  &:focus-visible {
    outline: 0px;
  }
`;

export const StockSuggestionList = styled.div`
  position: absolute;
  left: 5vw;
  background-color: #e4e6f1;
  padding: 0.25rem;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  color: #000000;
  padding: 0.45rem;

  @media (min-width: 1024px) {
    left: auto;
  }
`;

export const SearchItems = styled.div`
  line-height: 1.5rem;
  padding-top: 0.25rem;
  padding-right: 0.25rem;
`;

export const SearchResultName = styled.span`
  display: inline-block;
  max-width: 275px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ButtonContainer = styled.div`
  float: right;
  display: inline-block;
  padding-left: 20px;
`;

export const ViewStock = styled(Button)`
  border-radius: 12px !important;
  color: #ef5da8 !important;
  border: none !important;
  background-color: #ffffff !important;
  text-transform: capitalize !important;
  font-size: 14px !important;
`;
export const AddStock = styled(ViewStock)`
  margin-left: 10px !important;
  color: #1f41f7 !important;
`;
export const StyledViewStock = styled(Link)`
  text-decoration: none !important;
  color: #ef5da8 !important;
`;