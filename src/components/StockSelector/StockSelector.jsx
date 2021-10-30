import React, { useState } from "react";
import axios from "axios";
import { debounce } from "components/common";
import {
  AddStock,
  ButtonContainer,
  SearchItems,
  SearchResultName,
  StockPickerTextBox,
  StockSuggestionList,
  StyledViewStock,
  ViewStock,
} from "./StockSelectorStyle";

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

  function addStockToPicker(selectedStock) {
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
          if (e.target.value.length % 3 === 0) {
            searchStock(e.target.value);
          }
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
                      onClick={() =>
                        addStockToPicker({
                          name: item["2. name"],
                          value: item["1. symbol"],
                        })
                      }
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
