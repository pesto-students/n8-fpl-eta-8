import StockPicker from "components/StockPicker/StockPicker";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addStock } from "store-features/portfolio";
import { ref, onValue } from "firebase/database";

import Firebase from "../../firebase";

import { setPortfolio } from "store-features/portfolio";
export default function Stocklist({ portfolio, challengeStatus, state }) {
  const [stocks, setStocks] = useState([]);
  const dispatch = useDispatch();

  // fetching all the stock names
  useEffect(() => {
    // fetch the stock names
    if (state === "VIEW") {
      const { id, challengeId, stocks, submitTimestamp, username, uid } =
        portfolio[0];
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
        },
        (error) => {
          console.log(error);
        }
      );
    }

    if (state === "LIVE_VIEW") {
      const db = Firebase.realTimeDB;
      const r = ref(db, `FPL/Portfolios/${portfolio[0].id}/l`);

      onValue(
        r,
        (snapshot) => {
          setStocks(snapshot.val());
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
        return stocks.map((s) => {
          return <StockPicker stockName={s} state={state} />;
        });
      case "LIVE_VIEW":
      default:
        return stocks.map((s) => {
          return <StockPicker stockName={s} stockChange={s} state={state} />;
        });
    }
  };

  return <StockListInternal state={state} />;
}
