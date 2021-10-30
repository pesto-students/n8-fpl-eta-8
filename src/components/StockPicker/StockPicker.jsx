import React, { useState } from "react";
import styled from "styled-components";
import PriceChange from "components/PriceChange/PriceChange";
import { Grid } from "@mui/material";
import {
  AddStockButton,
  AutoCompleteStockSelector,
  DeletedStockButton,
  PickStocks,
} from "./StockPicketStyle";

export default function StockPicker({ stockName, state, stockChange }) {
  const [showSearch, setShowSearch] = useState(false);
  const [selectedStock, setSelectedStock] = useState({ name: "Pick Stocks" });
  const [isStockSelected, setIsStockSelected] = useState(false);

  const PickStock = styled(PickStocks)`
    color: ${isStockSelected || state === "LIVE_VIEW" ? "#000000" : "#96999c"};
  `;

  function deleteStock() {
    setIsStockSelected(false);
    setSelectedStock({ name: "Pick Stocks" });
  }

  function selectStock(stock) {
    setShowSearch(false);
    setSelectedStock(stock);
    setIsStockSelected(true);
  }

  const direction = (_1_day_change) => {
    if (parseInt(_1_day_change) > 0) return "up";
    else if (parseInt(_1_day_change) < 0) return "down";
    return "pause";
  };

  const PickStockInternal = ({ state, stockName }) => {
    switch (state) {
      case "CREATE":
        return (
          <>
            {!isStockSelected && showSearch ? null : selectedStock.name}
            {showSearch ? (
              <AutoCompleteStockSelector selectStock={selectStock} />
            ) : isStockSelected ? (
              <DeletedStockButton onClick={deleteStock} />
            ) : (
              <AddStockButton onClick={() => setShowSearch(true)} />
            )}
          </>
        );
      case "LIVE_VIEW":
        return (
          <Grid container justifyContent="space-between">
            <Grid item>{stockChange.stock}</Grid>
            <Grid item>
              <PriceChange
                text={stockChange.price}
                direction={direction(stockChange.diff)}
              />
            </Grid>
          </Grid>
        );
      case "VIEW":
      default:
        return stockName;
    }
  };

  return (
    <PickStock>
      <PickStockInternal state={state} stockName={stockName} />
    </PickStock>
  );
}
