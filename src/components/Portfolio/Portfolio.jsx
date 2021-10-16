import { Button, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
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
const GoBackButton = styled(SubmitPortfolio)`
  background: rgba(206, 61, 41, 1) !important;
`;

const stocksSelected = [];
const questionsNumber = 5;

export default function Portfolio() {
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    handleClose();
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
              onClick={handleClickOpen}
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>{"Sure to submit?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Once comfirmed porfolio cannot be changed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <SubmitPortfolio variant="contained" autoFocus onClick={submitPortfolio}>
            Confirm Portfolio
          </SubmitPortfolio>
          <GoBackButton variant="contained" onClick={handleClose} autoFocus>
            Go Back
          </GoBackButton>
        </DialogActions>
      </Dialog>
    </PortfolioCard>
  );
}
