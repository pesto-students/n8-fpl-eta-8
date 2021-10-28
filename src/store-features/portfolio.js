import { createSlice } from '@reduxjs/toolkit'

export const portfolio = createSlice({
    name: 'portfolio',
    initialState: {
        id: null,
        challengeId: null,
        stocks: [],
        submitTimestamp: null,
        uid: null,
        username: null,
        analysingStock: null,
    },
    reducers: {
        setPortfolio: (state, action) => {
            const { id, challengeId, submitTimestamp, uid, username } = action.payload;
            state.id = id;
            state.challengeId = challengeId;
            state.submitTimestamp = submitTimestamp;
            state.uid = uid;
            state.username = username;

            return state;
        },
        addStock: (state, action) => {
            state.stocks.push(action.payload);
            console.log(JSON.stringify(state));
        },
        removeStock: (state, action) => {
            const st = state.stocks;
            let s = st.length;
            while (s--) {
                if (st[s].symbol === action.payload.symbol) {
                    console.log(`found the stock`)
                    st.splice(s, 1);
                    break;
                }
            }
            state.stocks = st;
            console.log(JSON.stringify(state));
        },
        analysingStock: (state, action) => {
            state.analysingStock = action.payload;
        },
        resetPortfolio: (state) => {
            state = {
                id: null,
                challengeId: null,
                stocks: [],
                submitTimestamp: null,
                uid: null,
                username: null,
                analysingStock: null,
            }
            console.log(`${JSON.stringify(state, 0, 2)}`)
        }
    }
});


export const { setPortfolio, addStock, removeStock, analysingStock, resetPortfolio } = portfolio.actions
export default portfolio.reducers