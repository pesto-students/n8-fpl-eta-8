import { Button, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import StockPicker from "../StockPicker/StockPicker";

const PortfolioCard = styled(Card)`
  border-radius: 12px !important;
`;

const PortfolioTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 13px;
`;

const SubmitPortfolio = styled(Button)`
  float: right;
  color: #ffffff !important;
  background: linear-gradient(180deg, #0c77f8 0%, #0856b5 100%);
  border-radius: 12px !important;
  text-transform: capitalize !important;
  font-size: 14px !important;
`;

const SubmitPortfolioDisabled = styled(SubmitPortfolio)`
  background: #fcddec !important;
`;

const stocksSelected = [];
const questionsNumber = 5;

export default function Portfolio() {
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  function getSelectedStocks(index, selectedStock) {
    if (selectedStock !== "") {
      let obj = {
        [index]: selectedStock,
      };
      stocksSelected.push(obj);
    } else {
      let toBeRemoved = stocksSelected.filter((item) => item[index]);
      let removeIndex = stocksSelected.indexOf(toBeRemoved);
      stocksSelected.splice(removeIndex, 1);
    }
    if (stocksSelected.length === 5) {
      setIsSubmitEnabled(true);
    } else {
      setIsSubmitEnabled(false);
    }
  }

  function submitPortfolio() {
    let UserConfirmation = window.confirm("Sure to submit ? Once comfirmed porfolio cannot be changed.");
  }

  return (
    <PortfolioCard variant="outlined">
      <CardContent>
        <PortfolioTitle>
          My Portfolio
          {isSubmitEnabled ? (
            <SubmitPortfolio
              variant="contained"
              size="small"
              onClick={submitPortfolio}
            >
              Submit
            </SubmitPortfolio>
          ) : (
            <SubmitPortfolioDisabled variant="contained" size="small" disabled>
              Submit
            </SubmitPortfolioDisabled>
          )}
        </PortfolioTitle>
        {[...Array(questionsNumber)].map((e, i) => {
          return (
            <StockPicker key={i} getSelectedStocks={getSelectedStocks} id={i} />
          );
        })}
      </CardContent>
    </PortfolioCard>
  );
}
