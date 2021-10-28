import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Card, CardContent } from "@mui/material";
import axios from "axios";
import StockPicker from "components/StockPicker/StockPicker";
import Stocklist from "components/Stocklist";
// import firebase from "firebase";

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

export default function Portfolio({ portfolio }) {

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  let { challengeId } = useParams();
  const user = useSelector((state) => state.user);
  
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    console.log(`Challenge Portfolio - ${JSON.stringify(portfolio, 0, 2)}`)
  }, [portfolio])


  let data = {};

  function getSelectedStocks(index, selectedStock) {
    if (selectedStock !== "") {
      let obj = {
        [index]: selectedStock.value,
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

  function createSubmitData() {
    let arrStockSelected = stocksSelected.map(function (obj, i) {
      return obj[i];
    });
    data.challengeId = challengeId;
    var d2 = new Date();
    data.submittedAt = d2.toUTCString();
    data.uid = user.uid;
    data.stocks = arrStockSelected;
    data.username = user.email.split("@")[0];
  }

  function submitPortfolio() {
    if (stocksSelected.length === 5) {
      createSubmitData();
      var url = `${process.env.REACT_APP_API_SERVER}/api/portfolio`;

      axios
        .post(url, data)
        .then((response) => {
          console.log("Portfolio data saved successfully");
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    handleClose();
  }

  return (
    <PortfolioCard variant="outlined">
      <CardContent>
        <PortfolioTitle>
          My Portfolio
          {!isSubmitted ? (
            isSubmitEnabled ? (
              <SubmitPortfolio
                variant="contained"
                size="small"
                onClick={handleClickOpen}
              >
                Submit
              </SubmitPortfolio>
            ) : (
              <SubmitPortfolioDisabled
                variant="contained"
                size="small"
                disabled
              >
                Submit
              </SubmitPortfolioDisabled>
            )
          ) : null}
        </PortfolioTitle>
        <Stocklist portfolio = {portfolio}/>
        {[...Array(questionsNumber)].map((e, i) => {
          return (
            <StockPicker
              key={i}
              getSelectedStocks={getSelectedStocks}
              id={i}
              isSubmitted={isSubmitted}
            />
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
          <SubmitPortfolio
            variant="contained"
            autoFocus
            onClick={submitPortfolio}
          >
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
