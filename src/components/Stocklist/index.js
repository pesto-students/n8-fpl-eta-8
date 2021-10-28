import StockPicker from 'components/StockPicker/StockPicker';
import React, { useEffect, useState } from 'react';

export default function Stocklist({ portfolio, challengeStatus }) {

    const [stocks, setStocks] = useState([]);


    // fetching all the stock names 


    useEffect(() => {
        // fetch the stock names 
        if (portfolio !== undefined) {
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
    }, [portfolio]);

    return (
        <>
            {/* <p>in progress</p> */}
            {stocks !== undefined ? stocks.map(s => {
                return (
                    <StockPicker
                        stockName = {s}
                    />
                );
            })
                : ""}
        </>
    )
}