import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import axios from "axios";
import { debounce } from "../common";

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

export default function StockSelector(props) {
  const [searchedStockList, setSearchedStockList] = useState([]);
  const [showStockSuggestionList, setShowStockSuggestionList] = useState(false);

  var returnedFunction = debounce(function (param) {
    var url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${param}&apikey=PZ28Q8TTH0NZ7WCA`;
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

  function viewStock() {}

  function addStock(selectedStock) {
    props.selectStock(selectedStock);
    setSearchedStockList(false);
  }

  return (
    <div>
      <StockPickerTextBox
        type="text"
        placeholder="Add Stock to your List"
        onChange={(e) => searchStock(e.target.value)}
      />
      {searchedStockList.length > 0 && showStockSuggestionList ? (
        <StockSuggestionList>
          {searchedStockList.map((item) => {
            return (
              <div key={item["1. symbol"]}>
                <span>{item["2. name"]}</span>
                <ButtonContainer>
                  <ViewStock
                    size="small"
                    variant="outlined"
                    onClick={viewStock}
                  >
                    View Stock
                  </ViewStock>
                  <AddStock
                    size="small"
                    variant="outlined"
                    onClick={() => addStock(item["2. name"])}
                  >
                    Add Stock
                  </AddStock>
                </ButtonContainer>
              </div>
            );
          })}
        </StockSuggestionList>
      ) : null}
    </div>
  );
}
