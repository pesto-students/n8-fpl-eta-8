import React, { useState } from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import StockSelector from "components/StockSelector/StockSelector";
import { useDispatch } from "react-redux";

import { removeStock } from "store-features/portfolio";

const AddStockButton = styled(AddIcon)`
  float: right;
  margin-top: 7px;
  font-weight: bold;
  font-size: 28px !important;
  cursor: pointer;
`;

const DeletedStockButton = styled(DeleteIcon)`
  float: right;
  margin-top: 7px;
  font-weight: bold;
  font-size: 28px !important;
  cursor: pointer;
  color: #f43c3c;
`;

const AutoCompleteStockSelector = styled(StockSelector)`
  border-radius: 12px !important;
  width: auto !important;
`;

export default function StockPicker({ stockName, state }) {


  const [showSearch, setShowSearch] = useState(false);
  const [selectedStock, setSelectedStock] = useState({ name: "Pick Stocks" });
  const [isStockSelected, setIsStockSelected] = useState(false);

  const dispatch = useDispatch();


  const PickStock = styled.div`
    border: 2px dashed #dee0e0;
    border-radius: 12px;
    padding: 0px 27px;
    color: ${(isStockSelected || state === "LIVE_VIEW") ? "#000000" : "#96999c"};
    line-height: 40px;
    margin-bottom: 5px;
    &:focus-within {
      border: 2px solid #1f40f4;
    }
  `;

  function deleteStock() {
    setIsStockSelected(false);
    console.log(`deleting stock - ${JSON.stringify(selectedStock)}`)
    dispatch(removeStock({ selectedStock }));

    setSelectedStock({ name: "Pick Stocks" });
  }


  function selectStock(stock) {
    setShowSearch(false);

    setSelectedStock(stock);

    setIsStockSelected(true);
  }


  const PickStockInternal = ({ state, stockName }) => {
    switch (state) {
      case 'CREATE':
        return (
          <>
            {!isStockSelected && showSearch ? null : selectedStock.name}
            {showSearch ? (
              <AutoCompleteStockSelector selectStock={selectStock} />
            ) : isStockSelected ? (
              <DeletedStockButton onClick={deleteStock} />
            )
              : (<AddStockButton onClick={() => setShowSearch(true)} />)
            }
          </>)
      case 'VIEW':
      case 'LIVE_VIEW':
      default:
        return (
          stockName
        );

    }
  }

  return (
    <PickStock>
      <PickStockInternal state={state} stockName={stockName} />
    </PickStock>
  );
}
