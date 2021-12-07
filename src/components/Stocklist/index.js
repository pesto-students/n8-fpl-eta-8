import StockPicker from "components/StockPicker/StockPicker";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addStock } from "store-features/portfolio";
import { ref, onValue } from "firebase/database";

import Firebase from "../../firebase";

import { setPortfolio } from "store-features/portfolio";
import { Typography } from "@mui/material";
export default function Stocklist({ portfolio, challengeStatus, state }) {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  // fetching all the stock names
  useEffect(() => {

    console.log(`Portfolio - ${JSON.stringify(portfolio, 0, 2)}`)
    // fetch the stock names
    if (state === "VIEW") {
      const { id, challengeId, stocks, submitTimestamp, username, uid } =
        portfolio;
      const p = { id, challengeId, submitTimestamp, username, uid };
      dispatch(setPortfolio(p));
      const _s = async () => {
        return await Promise.all(
          stocks.map(async (s) => {
            let api = `${process.env.REACT_APP_API_SERVER}/api/lookup`;
            const st = s.split(".")[0];
            if (isNaN(st)) {
              api = api + `/id/${st}`;
            } else {
              api = api + `/code/${st}`;
            }
            return await fetch(api)
              .then((res) => res.json())
              .then((response) => {
                dispatch(
                  addStock({ name: response[0].securityName, symbol: s })
                );
                return response[0].securityName;
              })
              .catch((error) => console.log(error));
          })
        );
      };
      _s().then(
        (data) => {
          setStocks(data);
          setIsLoading(false);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    if (state === "LIVE_VIEW") {
      const db = Firebase.realTimeDB;
      const r = ref(db, `FPL/Portfolios/${portfolio.id}/l`);
      console.log(`${portfolio.id}`)
      onValue(
        r,
        (snapshot) => {
          setStocks(snapshot.val());
          setIsLoading(false);
        },
        {
          onlyOnce: false,
        }
      );
    }
  }, [portfolio, state, dispatch]);

  const StockListInternal = ({ state }) => {
    switch (state) {
      case "CREATE":
        return (
          <>
            <StockPicker state={state} />
            <StockPicker state={state} />
            <StockPicker state={state} />
            <StockPicker state={state} />
            <StockPicker state={state} />
          </>
        );
      case "VIEW":
        if (!isLoading) {
          return stocks.map((s) => {
            return <StockPicker stockName={s} state={state} />;
          });
        }
        else {
          return <Typography variant="p">Fetching stock details ....</Typography>
        }
      case "LIVE_VIEW":
      default:
        if (!isLoading) {
          return stocks.map((s) => {
            return <StockPicker stockName={s} stockChange={s} state={state} />;
          });
        }
        else {
          return <Typography variant="p">Fetching stock details ....</Typography>
        }
    }
  };

  return <StockListInternal state={state} />;
}
