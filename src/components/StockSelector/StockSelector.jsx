import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import axios from "axios";
import { debounce } from "../common";
import { Link } from "react-router-dom";

const StockPickerTextBox = styled.input.attrs({
  type: "text",
})`
  border: none;
  font-size: 16px;
  width: 100%;
  &:focus-visible {
    outline: 0px;
  }
`;

const StockSuggestionList = styled.div`
  position: absolute;
  left: 35px;
  background-color: #e4e6f1;
  padding: 0px 15px 10px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  color: #000000;

  @media (min-width: 1024px) {
    left: auto;
  }
`;

const SearchItems = styled.div`
  line-height: 48px;
`;

const SearchResultName = styled.span`
  display: inline-block;
  max-width: 275px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ButtonContainer = styled.div`
  float: right;
  display: inline-block;
  padding-left: 20px;
`;

const ViewStock = styled(Button)`
  border-radius: 12px !important;
  color: #ef5da8 !important;
  border: none !important;
  background-color: #ffffff !important;
  text-transform: capitalize !important;
  font-size: 14px !important;
`;
const AddStock = styled(ViewStock)`
  margin-left: 10px !important;
  color: #1f41f7 !important;
`;
const StyledViewStock = styled(Link)`
  text-decoration: none !important;
  color: #ef5da8 !important;
`;

export default function StockSelector(props) {
  const [searchedStockList, setSearchedStockList] = useState([]);
  const [showStockSuggestionList, setShowStockSuggestionList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  var returnedFunction = debounce(function (param) {
    var url = `${process.env.REACT_APP_ALPHAVANTAGE_URL}/query?function=SYMBOL_SEARCH&keywords=${param}&apikey=${process.env.REACT_APP_ALPHAVANTAGE_KEY}`;
    axios
      .get(url, {
        json: true,
      })
      .then((response) => {
        if (response && response.data) {
          if (
            response.data &&
            response.data.bestMatches &&
            response.data.bestMatches.length > 0
          ) {
            setSearchedStockList(response.data.bestMatches);
          }
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, 300);

  function searchStock(searchKeyword) {
    if (searchKeyword.length > 0) {
      returnedFunction(searchKeyword);
      setShowStockSuggestionList(true);
    } else {
      setShowStockSuggestionList(false);
    }
  }

  function addStock(selectedStock) {
    props.selectStock(selectedStock);
    setSearchedStockList(false);
  }

  return (
    <div>
      <StockPickerTextBox
        type="text"
        placeholder={
          props.stockDetails ? "Search Stock" : "Add Stock to your List"
        }
        onChange={(e) => {
          setSearchQuery(e.target.value);
          searchStock(searchQuery);
        }}
        value={searchQuery}
      />
      {searchedStockList.length > 0 && showStockSuggestionList ? (
        <StockSuggestionList>
          {searchedStockList.map((item) => {
            return (
              <SearchItems key={item["1. symbol"]}>
                <SearchResultName>{item["2. name"]}</SearchResultName>
                <ButtonContainer>
                  <ViewStock
                    size="small"
                    variant="outlined"
                    onClick={() => {
                      setShowStockSuggestionList(false);
                      setSearchQuery("");
                    }}
                  >
                    <StyledViewStock to={`/home/stock/${item["1. symbol"]}`}>
                      View Stock
                    </StyledViewStock>
                  </ViewStock>
                  {props.stockDetails ? null : (
                    <AddStock
                      size="small"
                      variant="outlined"
                      onClick={() => addStock(item["2. name"])}
                    >
                      Add Stock
                    </AddStock>
                  )}
                </ButtonContainer>
              </SearchItems>
            );
          })}
        </StockSuggestionList>
      ) : null}
    </div>
  );
}
