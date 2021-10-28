import StockPicker from 'components/StockPicker/StockPicker';
import React, { useEffect, useState } from 'react';

export default function Stocklist({ portfolio, challengeStatus, state }) {

    const [stocks, setStocks] = useState([]);
    // fetching all the stock names 
    useEffect(() => {
        // fetch the stock names 
        if (state === 'VIEW') {
            const _s = async () => {
                return await Promise.all(portfolio[0].stocks.map(async s => {
                    let api = `${process.env.REACT_APP_API_SERVER}/api/lookup`;
                    const st = s.split(".")[0];
                    if (isNaN(st)) {
                        api = api + `/id/${st}`
                    } else {
                        api = api + `/code/${st}`
                    }
                    return await fetch(api)
                        .then((res) => res.json())
                        .then((response) => {
                            return response[0].securityName;
                        })
                        .catch((error) => console.log(error))
                })
                );
            }
            _s().then(data => { setStocks(data) }, error => { console.log(error) })

        }
    }, [portfolio, state]);


    const StockListInternal = ({ state }) => {
        switch (state) {
            case 'CREATE':
                return (
                    <>
                        <StockPicker state={state} />
                        <StockPicker state={state} />
                        <StockPicker state={state} />
                        <StockPicker state={state} />
                        <StockPicker state={state} />
                    </>
                );
            case 'LIVE_VIEW':
                return (
                    stocks.map(s => {
                        return (
                            <StockPicker
                                stockName={s} stockPrice state={state}
                            />
                        )
                    })
                );
            case 'VIEW':
            default:
                return (
                    stocks.map(s => {
                        return (
                            <StockPicker
                                stockName={s} state={state}
                            />
                        )
                    })
                );
        }
    }


    return (
        <StockListInternal state={state} />
    )
}