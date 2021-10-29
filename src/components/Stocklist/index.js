import StockPicker from "components/StockPicker/StockPicker";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addStock } from "store-features/portfolio";
import { ref, onValue } from "firebase/database";

import Firebase from "../../firebase";

import { setPortfolio } from "store-features/portfolio";
const stocksSelected = [];
export default function Stocklist({
  portfolio,
  challengeStatus,
  state,
  getSelectedStockList,
}) {
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
          console.log(JSON.stringify(data));
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
          console.log(`port snapshot-${JSON.stringify(snapshot.val())}`);
          setStocks(snapshot.val());
        },
        {
          onlyOnce: false,
        }
      );
    }
  }, [portfolio, state, dispatch]);

  function getSelectedStocks(index, selectedStock) {
    if (selectedStock !== "") {
      let obj = {
        [index]: selectedStock,
      };
      stocksSelected.push(obj);
    } else {
      let toBeRemoved = stocksSelected.filter((item) => item[index]);
      let s = stocksSelected.length;
      while (s--) {
        if (stocksSelected[s] === toBeRemoved[0]) {
          stocksSelected.splice(s, 1);
          break;
        }
      }
    }
    if (stocksSelected.length === 5) {
      getSelectedStockList(stocksSelected);
    }
    // if (stocksSelected.length === 5) {
    //   setIsSubmitEnabled(true);
    // } else {
    //   setIsSubmitEnabled(false);
    // }
  }

  const StockListInternal = ({ state }) => {
    switch (state) {
      case "CREATE":
        return (
          <>
            <StockPicker
              index={0}
              state={state}
              getSelectedStocks={getSelectedStocks}
            />
            <StockPicker
              index={1}
              state={state}
              getSelectedStocks={getSelectedStocks}
            />
            <StockPicker
              index={2}
              state={state}
              getSelectedStocks={getSelectedStocks}
            />
            <StockPicker
              index={3}
              state={state}
              getSelectedStocks={getSelectedStocks}
            />
            <StockPicker
              index={4}
              state={state}
              getSelectedStocks={getSelectedStocks}
            />
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
