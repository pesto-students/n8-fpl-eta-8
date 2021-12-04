import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CardContent } from "@mui/material";
import axios from "axios";
import Stocklist from "components/Stocklist";
import {
  GoBackButton,
  PortfolioCard,
  PortfolioTitle,
  SubmitPortfolio,
  SubmitPortfolioDisabled,
} from "./PortfolioStyle";

const stocksSelected = [];

export default function Portfolio({ portfolio, challengeStatus }) {
  const [open, setOpen] = useState(false);

  let { challengeId } = useParams();
  const user = useSelector((state) => state.users.users);
  const currentPortfolio = useSelector((state) => state.portfolio);

  const [portfolioState, setPortfolioState] = useState();

  const handleSubmit = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (
      (portfolio === undefined || portfolio.length === 0) &&
      challengeStatus === "NOT_LIVE"
    ) {
      setPortfolioState("CREATE");
    } else if (portfolio !== undefined && challengeStatus === "NOT_LIVE") {
      setPortfolioState("VIEW");
    } else if (portfolio !== undefined && challengeStatus === "CLOSED") {
      setPortfolioState("VIEW");
    } else if (portfolio !== undefined && challengeStatus === "LIVE") {
      setPortfolioState("LIVE_VIEW");
    } else if (
      (portfolio === undefined || portfolio.length === 0) &&
      challengeStatus === "LIVE"
    ) {
      setPortfolioState("VIEW");
    } else if (
      (portfolio === undefined || portfolio.length === 0) &&
      challengeStatus === "CLOSED"
    ) {
      setPortfolioState("VIEW");
    }
  }, [portfolio, challengeStatus]);

  // component rendering Portfolio Title area as per the Portfolio State
  const SwitchPortfolioTitle = ({ state }) => {
    switch (state) {
      case "CREATE":
        return (
          <PortfolioTitle>
            My Portfolio
            {currentPortfolio.stocks.length === 5 ? (
              <SubmitPortfolio
                variant="contained"
                size="small"
                onClick={handleSubmit}
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
            )}
          </PortfolioTitle>
        );
      case "VIEW":
        return (
          <PortfolioTitle>
            My Portfolio
            <SubmitPortfolioDisabled variant="contained" size="small" disabled>
              Submit
            </SubmitPortfolioDisabled>
          </PortfolioTitle>
        );
      default:
        return <PortfolioTitle>My Portfolio</PortfolioTitle>;
    }
  };

  const ConfirmDialog = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Confirm Dialog Submit"
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
    );
  };

  let data = {};

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
        <SwitchPortfolioTitle state={portfolioState} />
        <Stocklist
          portfolio={portfolio}
          state={portfolioState}
          challengeId={challengeId}
        />
      </CardContent>
      <ConfirmDialog />
    </PortfolioCard>
  );
}
